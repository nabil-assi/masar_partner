"use client";
import { usePathname } from 'next/navigation';
import { Navbar } from './Navbar';

export const NavbarWrapper = () => {
  const pathname = usePathname();
  // إذا كنا في صفحة login، لا تظهر الناف بار
  if (pathname === '/login' || pathname === '/register' || pathname === '/forgot-password') return null;
  
  return <Navbar />;
};