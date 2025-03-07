const Investoal = () => {
  return (
    <div className="bg-gray-100 text-gray-800">


      <section id="about" className="py-20 bg-white px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-600">Who We Are</h2>
        <p className="mt-4 max-w-3xl mx-auto">
          Investoal is an Albania-based investment company committed to
          identifying and facilitating high-growth opportunities...
        </p>
      </section>

      <section id="foresight" className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-600">Our Vision</h2>
        <p className="mt-4 max-w-3xl mx-auto">
          We believe in sustainable growth, innovation, and long-term value
          creation...
        </p>
      </section>

      <section id="focus" className="py-20 bg-white px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-600">Our Focus Areas</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-6">
          {[
            "Real Estate & Development",
            "Business & Startup Investments",
            "Technology & Innovation",
          ].map((area, index) => (
            <div key={index} className="bg-gray-200 p-6 rounded-lg">
              <h3 className="font-semibold">{area}</h3>
              <p>Details about {area.toLowerCase()}...</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-600">Why Choose Us?</h2>
        <p className="mt-4 max-w-3xl mx-auto">
          We have an in-depth understanding of Albania’s economic trends,
          regulatory landscape, and investment climate.
        </p>
      </section>

      <section id="contact" className="py-20 bg-white px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-600">Get in Touch</h2>
        <form className="mt-6 max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded mb-4"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded mb-4"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 border rounded mb-4"
          ></textarea>
          <button className="bg-blue-600 text-white px-6 py-2 rounded">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default Investoal;
