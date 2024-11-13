import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white dark:bg-black/30 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-green-800 dark:text-green-400">
              Alice's Lawncare
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden sm:flex space-x-8">
            <Link href="/services" className="text-gray-600 hover:text-green-800 dark:text-gray-300 dark:hover:text-green-400">
              Services
            </Link>
            <Link href="/portfolio" className="text-gray-600 hover:text-green-800 dark:text-gray-300 dark:hover:text-green-400">
              Portfolio
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-green-800 dark:text-gray-300 dark:hover:text-green-400">
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="sm:hidden">
            <button className="text-gray-600 hover:text-green-800 dark:text-gray-300 dark:hover:text-green-400">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}