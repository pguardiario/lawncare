export default function Testimonials() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-black p-8 sm:p-20">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-green-950 dark:text-green-50">Testimonials</h1>
        <div className="grid gap-8">
          {[
            {
              name: "Sarah Johnson",
              text: "The team transformed our backyard into a beautiful oasis. Their attention to detail and professionalism was outstanding.",
              location: "Portland, OR"
            },
            {
              name: "Michael Chen",
              text: "Excellent service from start to finish. The maintenance program keeps our garden looking perfect all year round.",
              location: "Seattle, WA"
            },
            {
              name: "Emily Davis",
              text: "The hardscaping work they did on our patio exceeded our expectations. We couldn't be happier with the results.",
              location: "Vancouver, WA"
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white dark:bg-black/30 p-6 rounded-xl">
              <p className="text-gray-600 dark:text-gray-300 italic mb-4">"{testimonial.text}"</p>
              <div className="text-green-800 dark:text-green-400 font-semibold">{testimonial.name}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.location}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}