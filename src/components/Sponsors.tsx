import sponsorsImage from "../assets/sponsors.png";

const Sponsors = () => {
  return (
    <section className="py-20 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Funders</h2>
        <div className="h-1 w-20 bg-red-600 mx-auto mb-8"></div>
        <img
          src={sponsorsImage}
          alt="Sponsors"
          className="mx-auto w-full md:max-w-[900px]"
        />
      </div>
    </section>
  );
};

export default Sponsors;
