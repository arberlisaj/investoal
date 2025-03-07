import officeImage from "../assets/office.png";

const WhoWeAre = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-4">Who Are We</h2>
            <div className="h-1 w-20 bg-red-600 mb-6"></div>
            <p className="text-gray-600 text-lg mb-6">
              Investoal is an Albania-based investment company committed to
              identifying and facilitating high-growth opportunities. While we
              are in the early stages, our mission is clear: to become a key
              player in the country's investment landscape, bridging local
              potential with global investors.
            </p>
            <p className="text-gray-600 text-lg">
              We believe in sustainable growth, innovation, and long-term value
              creation. Our goal is to develop a diverse portfolio that drives
              economic progress and opens doors for forward-thinking investors.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-600 rounded-lg opacity-20"></div>
              <img
                src={officeImage}
                alt="Office building"
                width={600}
                height={500}
                className="rounded-lg shadow-lg relative z-10"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-red-600 rounded-lg opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
