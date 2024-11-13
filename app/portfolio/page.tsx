export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-black p-8 sm:p-20">
      <div className="max-w-6xl mx-auto space-y-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-green-950 dark:text-green-50">Our Portfolio</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Explore our collection of transformative landscaping projects that showcase our dedication to excellence.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Portfolio Item 1 */}
          <div className="bg-white dark:bg-black/30 rounded-xl overflow-hidden">
            <img
              src="/modern.jpg"
              alt="Modern Garden Design"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-green-800 dark:text-green-400 mb-2">Modern Garden Design</h2>
              <p className="text-gray-600 dark:text-gray-300">Contemporary landscape design featuring native plants and sustainable materials.</p>
            </div>
          </div>

          {/* Portfolio Item 2 */}
          <div className="bg-white dark:bg-black/30 rounded-xl overflow-hidden">
            <img
              src="/oasis.jpg"
              alt="Backyard Oasis"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-green-800 dark:text-green-400 mb-2">Backyard Oasis</h2>
              <p className="text-gray-600 dark:text-gray-300">Complete backyard transformation with custom water features and outdoor living spaces.</p>
            </div>
          </div>

          {/* Portfolio Item 3 */}
          <div className="bg-white dark:bg-black/30 rounded-xl overflow-hidden">
            <img
              src="/sustainable.jpg"
              alt="Sustainable Garden"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-green-800 dark:text-green-400 mb-2">Sustainable Garden</h2>
              <p className="text-gray-600 dark:text-gray-300">Eco-friendly garden design with drought-resistant plants and smart irrigation systems.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}