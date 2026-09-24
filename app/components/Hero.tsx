export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
      <div className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          WELCOME TO OUR ONLINE STORE
        </h1>
        <p className="text-blue-100 md:text-lg max-w-xl mx-auto">
          Discover quality products at unbeatable prices. Browse our
          collection and find something you love.
        </p>
        <button className="mt-6 bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition">
          Shop Now
        </button>
      </div>
    </section>
  );
}