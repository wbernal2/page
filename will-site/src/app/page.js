// app/page.js
import { redirect } from 'next/navigation';

export default function RootPage() {
  // Automatically redirect to /home
  redirect('/home');
}
