import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-yellow-500">
          Burair Ali
        </h1>

        <div className="flex gap-6 text-lg">
          <Link href="/" className="hover:text-yellow-500 transition">
            Home
          </Link>

          <Link href="/about" className="hover:text-yellow-500 transition">
            About
          </Link>

          <Link href="/projects" className="hover:text-yellow-500 transition">
            Projects
          </Link>

          <Link href="/services" className="hover:text-yellow-500 transition">
            Services
          </Link>

          <Link href="/contact" className="hover:text-yellow-500 transition">
            Contact
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="grid md:grid-cols-2 items-center px-10 py-20 gap-10">

        {/* Left Content */}
        <div>
          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            Hi, I'm <span className="text-yellow-500">Burair Ali</span>
          </h2>

          <p className="text-gray-400 mt-6 text-lg leading-8">
            Software Developer  creating modern,
            responsive and attractive websites using Next.js,
            React and Tailwind CSS.
          </p>

          <div className="flex gap-4 mt-8">
            <Link href="/projects">
              <button className="bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-xl text-white transition">
                View Projects
              </button>
            </Link>

            <Link href="/contact">
              <button className="border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white px-6 py-3 rounded-xl transition">
                Contact Me
              </button>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt="Developer"
            className="rounded-3xl shadow-2xl w-full max-w-lg"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="px-10 py-20 bg-gray-950">
        <h2 className="text-4xl font-bold text-center mb-14">
          My Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-gray-900 p-8 rounded-2xl hover:scale-105 transition">
<img
  src="https://img.icons8.com/color/96/web-design.png"
  alt="Web Development"
  className="w-16 mb-5"
/>

            <h3 className="text-2xl font-semibold mb-3">
              Web Development
            </h3>

            <p className="text-gray-400">
              Modern responsive websites using Next.js and React.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-2xl hover:scale-105 transition">


            <h3 className="text-2xl font-semibold mb-3">
              Reacts.js
            </h3>

            <p className="text-gray-400">
              i use react to use un frontend.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-2xl hover:scale-105 transition">
<img
  src="https://cdn.worldvectorlogo.com/logos/next-js.svg"
  alt="Next.js Logo"
  className="w-16 mb-5 bg-white p-2 rounded-xl"
/>

            <h3 className="text-2xl font-semibold mb-3">
              next.js
            </h3>

            <p className="text-gray-400">
              i create beautiful website using next.js .
            </p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 border-t border-gray-800 text-gray-500">
        © 2026 Burair Ali — All Rights Reserved
      </footer>

    </main>
  );
}