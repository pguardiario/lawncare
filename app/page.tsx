import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-black p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-12 row-start-2 items-center max-w-6xl w-full">
        <div className="text-center space-y-6">
          <h1 className="text-5xl sm:text-7xl font-bold text-green-950 dark:text-green-50">
            Beautiful Spaces, Naturally Created
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Transform your outdoor space into a stunning sanctuary with our expert landscaping services
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full">
          <div className="bg-white dark:bg-black/30 p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold text-green-800 dark:text-green-400 mb-4">Landscape Design</h3>
            <p className="text-gray-600 dark:text-gray-300">Custom designs that blend beauty with functionality for your perfect outdoor space.</p>
          </div>
          <div className="bg-white dark:bg-black/30 p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold text-green-800 dark:text-green-400 mb-4">Garden Maintenance</h3>
            <p className="text-gray-600 dark:text-gray-300">Regular care and maintenance to keep your garden looking its best all year round.</p>
          </div>
          <div className="bg-white dark:bg-black/30 p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold text-green-800 dark:text-green-400 mb-4">Hardscaping</h3>
            <p className="text-gray-600 dark:text-gray-300">Beautiful patios, walkways, and retaining walls to complete your outdoor living space.</p>
          </div>
        </div>

        <div className="flex gap-6 items-center flex-col sm:flex-row">
          <a
            className="rounded-full bg-green-700 hover:bg-green-800 text-white px-8 py-4 text-lg font-semibold transition-colors"
            href="/contact"
          >
            Get Free Quote
          </a>
          <a
            className="rounded-full border-2 border-green-700 text-green-700 dark:text-green-400 dark:border-green-400 hover:bg-green-50 dark:hover:bg-green-950 px-8 py-4 text-lg font-semibold transition-colors"
            href="/portfolio"
          >
            View Our Work
          </a>
        </div>
      </main>

    </div>
  );
}
