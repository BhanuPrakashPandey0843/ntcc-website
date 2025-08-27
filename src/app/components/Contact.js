export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-indigo-600 mb-6">Contact Us</h2>
      <form className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full mb-4 px-4 py-2 border rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full mb-4 px-4 py-2 border rounded"
        />
        <textarea
          placeholder="Your Message"
          className="w-full mb-4 px-4 py-2 border rounded h-32"
        ></textarea>
        <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700">
          Send Message
        </button>
      </form>
    </section>
  );
}
