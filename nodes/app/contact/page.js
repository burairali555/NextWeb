export default function Contact() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-8">Contact Me</h1>

      <form className="max-w-xl space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded-xl bg-gray-900 border border-gray-700"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-xl bg-gray-900 border border-gray-700"
        />

        <textarea
          placeholder="Your Message"
          rows="5"
          className="w-full p-3 rounded-xl bg-gray-900 border border-gray-700"
        ></textarea>

        <button className="bg-white text-black px-6 py-3 rounded-xl">
          Send Message
        </button>
      </form>
    </main>
  );
}