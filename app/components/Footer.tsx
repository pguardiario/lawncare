import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black/30 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-green-800 dark:text-green-400 mb-4">Alice's Lawncare</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Professional landscaping services for your home and business.
              Creating beautiful outdoor spaces since 2010.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-green-800 dark:text-green-400 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-600 hover:text-green-800 dark:text-gray-300 dark:hover:text-green-400">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-600 hover:text-green-800 dark:text-gray-300 dark:hover:text-green-400">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-green-800 dark:text-gray-300 dark:hover:text-green-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-green-800 dark:text-green-400 mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>(555) 123-4567</li>
              <li>info@aliceslawncare.com</li>
              <li>123 Garden Street<br />Springfield, ST 12345</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-600 dark:text-gray-300">
          <p>&copy; {new Date().getFullYear()} Alice's Lawncare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}