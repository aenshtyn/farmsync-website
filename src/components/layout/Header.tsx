// src/components/layout/Header.tsx
import Link from 'next/link';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold text-green-700">FarmSync</span>
        </Link>
        
        <Navigation />
      </div>
    </header>
  );
}