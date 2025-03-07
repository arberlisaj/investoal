import { MapPin, Users, ScalingIcon as Growth } from "lucide-react";

const WhyJoinUs = () => {
  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
          <div className="h-1 w-20 bg-red-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Investoal brings unique advantages to the Albanian investment
            landscape, combining local expertise with global vision.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-lg p-8 text-center transition-all hover:shadow-lg">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">
              Local Expertise & Market Insights
            </h3>
            <p className="text-gray-600">
              We have an in-depth understanding of Albania's economic trends,
              regulatory landscape, and investment climate.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 text-center transition-all hover:shadow-lg">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">
              Strong Network & Strategic Partnerships
            </h3>
            <p className="text-gray-600">
              Through collaborations with industry leaders, policymakers, and
              entrepreneurs, we create valuable investment opportunities.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 text-center transition-all hover:shadow-lg">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Growth className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">
              Future-Driven & Growth-Oriented
            </h3>
            <p className="text-gray-600">
              We focus on long-term investments that drive economic progress and
              generate sustainable returns.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUs;
