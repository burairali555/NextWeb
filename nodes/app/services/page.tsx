export default function Services() {
  return (
    <main className="min-h-screen bg-gray-950 text-white p-10">
      <h1 className="text-4xl font-bold mb-8">Services</h1>

      <div className="space-y-6">
        <div className="bg-gray-900 p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold">
            Web Development
          </h2>

          <p className="text-gray-400 mt-2">
            Building responsive and modern websites using Next.js.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold">
            UI/UX Design
          </h2>

          <p className="text-gray-400 mt-2">
            Clean and attractive user interface design.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold">
            Graphic Design
          </h2>

          <p className="text-gray-400 mt-2">
            Social media posts, banners, and branding designs.
          </p>
        </div>
      </div>
    </main>
  );
}