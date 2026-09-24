import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-white text-lg font-bold mb-3">
              My Shop
            </h3>
            <p className="text-sm text-gray-400">
              Your one-stop shop for quality products at great prices.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-white font-semibold mb-3">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white">
                  Best Sellers
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white">
                  Returns
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-3">
              Newsletter
            </h4>
            <p className="text-sm text-gray-400 mb-3">
              Get updates on new products.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 rounded-l-lg text-sm text-gray-900 focus:outline-none"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg text-sm">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-3">
          <p>© 2025 My Shop. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/" className="hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}