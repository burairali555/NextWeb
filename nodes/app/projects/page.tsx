export default function Projects() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gray-900 p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-2">
            Portfolio Website
          </h2>
          <p className="text-gray-400">
            Modern portfolio website using Next.js and Tailwind CSS.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-2">
            Car Showroom Website
          </h2>
          <p className="text-gray-400">
            Responsive car dealership website with clean UI.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-2">
            Election Banner Design
          </h2>
          <p className="text-gray-400">
            Creative political banner and social media designs.
          </p>
        </div>
      </div>
    </main>
  );
}