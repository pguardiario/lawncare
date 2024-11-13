export default function Services() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-black p-8 sm:p-20">
      <div className="max-w-6xl mx-auto space-y-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-green-950 dark:text-green-50">Our Services</h1>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Landscape Design",
              description: "Custom designs that blend beauty with functionality, tailored to your space and preferences."
            },
            {
              title: "Garden Maintenance",
              description: "Regular maintenance services to keep your garden healthy and beautiful throughout the seasons."
            },
            {
              title: "Hardscaping",
              description: "Expert installation of patios, walkways, retaining walls, and other structural elements."
            },
            {
              title: "Irrigation Systems",
              description: "Efficient watering solutions to maintain your landscape while conserving water."
            },
            {
              title: "Lighting Design",
              description: "Outdoor lighting solutions that enhance safety and create ambiance in your space."
            },
            {
              title: "Seasonal Planting",
              description: "Seasonal color and plant installation to keep your garden vibrant year-round."
            }
          ].map((service, index) => (
            <div key={index} className="bg-white dark:bg-black/30 p-6 rounded-xl">
              <h2 className="text-xl font-bold text-green-800 dark:text-green-400 mb-3">{service.title}</h2>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}