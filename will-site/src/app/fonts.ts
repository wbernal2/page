// will-site/src/app/fonts.ts
import { Rubik } from 'next/font/google';

export const display = Rubik({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['700', '800', '900'],
  style: ['normal', 'italic'], // gives us Black Italic
});