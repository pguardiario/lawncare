export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-black p-8 sm:p-20">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-green-950 dark:text-green-50">About Us</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          With over 20 years of experience in landscaping, we're dedicated to creating beautiful outdoor spaces that bring nature closer to home.
        </p>
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="bg-white dark:bg-black/30 p-6 rounded-xl">
            <h2 className="text-xl font-bold text-green-800 dark:text-green-400 mb-3">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300">To transform outdoor spaces into sustainable, beautiful environments that enhance our clients' quality of life.</p>
          </div>
          <div className="bg-white dark:bg-black/30 p-6 rounded-xl">
            <h2 className="text-xl font-bold text-green-800 dark:text-green-400 mb-3">Our Values</h2>
            <p className="text-gray-600 dark:text-gray-300">Sustainability, excellence in craftsmanship, and customer satisfaction guide everything we do.</p>
          </div>
        </div>
      </div>
    </main>
  );
}