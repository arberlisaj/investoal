import { ArrowRight, Building, Globe, TrendingUp } from "lucide-react";

import heroImage from "../assets/hero.png";

const Home = () => {
  return (
    <section id="home" className="relative min-h-screen">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Aerial view of Albania cityscape at night"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 pt-32 pb-20 min-h-screen flex flex-col justify-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Unlocking Investment <span className="text-red-500">Potential</span>{" "}
            in Albania
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl">
            At Investoal, we are dedicated to harnessing Albania's burgeoning
            economic landscape to deliver exceptional investment opportunities.
            Our strategic approach capitalizes on the nation's advantageous
            position in European and global markets, leveraging government
            incentives, a proficient workforce, and evolving infrastructure. We
            are committed to identifying and developing prospects across diverse
            industries, ensuring sustainable growth and value for our
            stakeholders.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="cursor-pointer bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md transition-colors font-medium">
              <a href="#about" className="flex items-center gap-2">
                Explore Opportunities
                <ArrowRight className="h-5 w-5" />
              </a>
            </button>
            <button className="cursor-pointer bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-6 py-3 rounded-md transition-colors">
              <a className="no-underline text-inherit" href="#contact">
                Schedule Consultation
              </a>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="flex items-center gap-3 mb-2">
                <Building className="h-6 w-6 text-red-500" />
                <h3 className="text-xl font-semibold text-white">200+</h3>
              </div>
              <p className="text-white/80">Premium Properties</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="h-6 w-6 text-red-500" />
                <h3 className="text-xl font-semibold text-white">15%</h3>
              </div>
              <p className="text-white/80">Average Annual ROI</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="flex items-center gap-3 mb-2">
                <Globe className="h-6 w-6 text-red-500" />
                <h3 className="text-xl font-semibold text-white">30+</h3>
              </div>
              <p className="text-white/80">International Partners</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
