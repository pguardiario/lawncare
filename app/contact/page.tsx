export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-black p-8 sm:p-20">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-green-950 dark:text-green-50">Contact Us</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Get in touch for a free quote or to discuss your landscaping needs.
        </p>
        <form className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-black/30"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-black/30"
              />
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-black/30"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-black/30"
              />
            </div>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full p-3 rounded-lg bg-green-800 text-white hover:bg-green-900 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}