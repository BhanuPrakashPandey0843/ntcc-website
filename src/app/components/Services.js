export default function Services() {
  return (
    <section id="services" className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold text-indigo-600 mb-10">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        <div className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Web Development</h3>
          <p className="text-gray-600">Modern, responsive, and fast websites.</p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Mobile Apps</h3>
          <p className="text-gray-600">Cross-platform mobile solutions.</p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
          <p className="text-gray-600">Beautiful and user-friendly interfaces.</p>
        </div>
      </div>
    </section>
  );
}
