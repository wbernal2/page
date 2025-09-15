'use client';

import { useState } from 'react';
import { 
  SiNextdotjs, 
  SiReact, 
  SiTypescript, 
  SiDotnet,
  SiNodedotjs,
  SiDocker,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiMongodb,
  SiMysql
} from 'react-icons/si';
import { Database, Cloud, BarChart3, Calculator, Sigma, Code, Server, Coffee } from 'lucide-react';

// Data model
const skillsData = [
  {
    id: 'web',
    label: 'Web Development',
    skills: [
      { name: 'TypeScript', icon: SiTypescript, url: 'https://typescriptlang.org' },
      { name: 'Next.js', icon: SiNextdotjs, url: 'https://nextjs.org' },
      { name: 'HTML', icon: SiHtml5, url: 'https://developer.mozilla.org/docs/Web/HTML' },
      { name: 'CSS', icon: SiCss3, url: 'https://developer.mozilla.org/docs/Web/CSS' },
      { name: 'JavaScript', icon: SiJavascript, url: 'https://developer.mozilla.org/docs/Web/JavaScript' },
      { name: 'React', icon: SiReact, url: 'https://react.dev' }
    ]
  },
  {
    id: 'backend',
    label: 'Backend Development', 
    skills: [
      { name: 'C#', icon: Code, url: 'https://docs.microsoft.com/en-us/dotnet/csharp/' },
      { name: '.NET', icon: SiDotnet, url: 'https://dotnet.microsoft.com' },
      { name: 'Node.js', icon: SiNodedotjs, url: 'https://nodejs.org' },
      { name: 'SQL', icon: Database, url: 'https://www.w3schools.com/sql/' },
      { name: 'Java', icon: Coffee, url: 'https://www.oracle.com/java/' }
    ]
  },
  {
    id: 'cloud',
    label: 'Cloud & Infrastructure',
    skills: [
      { name: 'Vercel', icon: Server, url: 'https://vercel.com' },
      { name: 'Docker', icon: SiDocker, url: 'https://docker.com' },
      { name: 'MongoDB', icon: SiMongodb, url: 'https://mongodb.com' },
      { name: 'MySQL', icon: SiMysql, url: 'https://mysql.com' }
    ]
  },
  {
    id: 'math',
    label: 'Math',
    skills: [
      { name: 'Statistics', icon: BarChart3 },
      { name: 'Probability', icon: Sigma },
      { name: 'Linear Algebra', icon: Calculator }
    ]
  }
];

export default function SkillsShowcase({ className = "" }) {
  const [selectedCategory, setSelectedCategory] = useState('web');

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const handleKeyDown = (event, categoryId) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setSelectedCategory(categoryId);
    }
    
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      const currentIndex = skillsData.findIndex(cat => cat.id === selectedCategory);
      let newIndex;
      
      if (event.key === 'ArrowLeft') {
        newIndex = currentIndex > 0 ? currentIndex - 1 : skillsData.length - 1;
      } else {
        newIndex = currentIndex < skillsData.length - 1 ? currentIndex + 1 : 0;
      }
      
      setSelectedCategory(skillsData[newIndex].id);
    }
  };

  const currentCategory = skillsData.find(cat => cat.id === selectedCategory);

  return (
    <section id="skills" className={`${className}`}>
      <div className="rounded-2xl shadow-md p-6 bg-neutral-950 text-white">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          Skills
        </h2>
        
        {/* Category Switcher */}
        <div 
          role="tablist" 
          className="flex flex-wrap justify-center gap-2 mb-8"
          aria-label="Skill categories"
        >
          {skillsData.map((category) => (
            <button
              key={category.id}
              role="tab"
              aria-selected={selectedCategory === category.id}
              aria-controls={`tabpanel-${category.id}`}
              tabIndex={selectedCategory === category.id ? 0 : -1}
              className={`
                rounded-2xl px-4 py-2 text-sm font-medium transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-neutral-950
                ${selectedCategory === category.id 
                  ? 'bg-white text-black font-semibold shadow-lg' 
                  : 'text-white/70 hover:text-white hover:bg-white/10 border border-white/20'
                }
              `}
              onClick={() => handleCategoryChange(category.id)}
              onKeyDown={(e) => handleKeyDown(e, category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div
          key={selectedCategory}
          role="tabpanel"
          id={`tabpanel-${selectedCategory}`}
          aria-labelledby={`tab-${selectedCategory}`}
          className="transition-opacity duration-300 ease-in-out"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {currentCategory?.skills.map((skill, index) => {
              const IconComponent = skill.icon;
              
              const skillCard = (
                <div className="group flex items-center gap-3 rounded-xl border border-white/10 p-3 hover:border-white/25 transition-all duration-200 hover:bg-white/5">
                  <IconComponent 
                    size={24} 
                    className="text-white group-hover:text-white/90 transition-colors" 
                  />
                  <span className="font-medium text-sm text-white group-hover:text-white/90 transition-colors">
                    {skill.name}
                  </span>
                </div>
              );

              if (skill.url) {
                return (
                  <a
                    key={index}
                    href={skill.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Learn more about ${skill.name}`}
                    className="block focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-neutral-950 rounded-xl"
                  >
                    {skillCard}
                  </a>
                );
              }

              return (
                <div 
                  key={index}
                  className="focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-neutral-950 rounded-xl"
                  tabIndex={0}
                  aria-label={skill.name}
                >
                  {skillCard}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}