'use client'

import Link from 'next/link';

export default function Header() {
  return (
    <header className='bg-blue-600 p-4 shadow-md'>
      <h1 className='text-center text-3xl font-bold text-white'>My Next.js App</h1>
    <nav>
      <Link href="/" className='rounded px-4 py-2 text-white transition-all hover:bg-blue-700'>
        Home
      </Link>
      <Link href="/about" className='rounded px-4 py-2 text-white transition-all hover:bg-blue-700'>
        About
      </Link>
      <Link href="/contact" className='rounded px-4 py-2 text-white transition-all hover:bg-blue-700'>
        Contact
      </Link>
    </nav>
    </header>
  )
}
