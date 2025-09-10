// src/app/components/Courses.js
import styles from './Courses.module.css';

const coursesData = [
  {
    id: 1,
    code: "CS 150",
    name: "Introduction to Computer Science",
    semester: "Fall 2022",
    grade: "A",
    description: "Fundamental concepts of computer science including programming basics, problem-solving, and algorithmic thinking."
  },
  {
    id: 2,
    code: "CS 155",
    name: "Computer Science I",
    semester: "Spring 2023",
    grade: "A",
    description: "Object-oriented programming principles, data structures, and software design using Java."
  },
  {
    id: 3,
    code: "CS 235",
    name: "Computer Science II",
    semester: "Fall 2023",
    grade: "A-",
    description: "Advanced data structures, algorithms, recursion, and complexity analysis."
  },
  {
    id: 4,
    code: "CS 340",
    name: "Database Systems",
    semester: "Spring 2024",
    grade: "A",
    description: "Database design, SQL, normalization, transactions, and database management systems."
  },
  {
    id: 5,
    code: "CS 344",
    name: "Operating Systems",
    semester: "Fall 2024",
    grade: "A-",
    description: "Process management, memory management, file systems, and system programming."
  },
  {
    id: 6,
    code: "CS 310",
    name: "Data Structures & Algorithms",
    semester: "Spring 2024",
    grade: "A",
    description: "Advanced algorithms, graph theory, dynamic programming, and algorithm analysis."
  },
  {
    id: 7,
    code: "CS 361",
    name: "Software Engineering",
    semester: "Fall 2024",
    grade: "A",
    description: "Software development lifecycle, design patterns, testing, and project management."
  },
  {
    id: 8,
    code: "CS 450",
    name: "Computer Networks",
    semester: "Spring 2025",
    grade: "In Progress",
    description: "Network protocols, TCP/IP, network security, and distributed systems."
  }
];

const CourseCard = ({ course }) => (
  <div className={styles.courseCard}>
    <div className={styles.cardHeader}>
      <div className={styles.courseCode}>{course.code}</div>
      <div className={styles.gradeContainer}>
        <span className={`${styles.grade} ${course.grade === 'In Progress' ? styles.inProgress : ''}`}>
          {course.grade}
        </span>
      </div>
    </div>
    
    <h3 className={styles.courseName}>{course.name}</h3>
    <p className={styles.semester}>{course.semester}</p>
    <p className={styles.description}>{course.description}</p>
  </div>
);

export default function Courses() {
  return (
    <section className={styles.courses} id="courses">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Computer Science Courses</h2>
        <p className={styles.sectionDescription}>
          Key courses completed during my Computer Science degree at University of Nebraska
        </p>
        <div className={styles.coursesGrid}>
          {coursesData.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
