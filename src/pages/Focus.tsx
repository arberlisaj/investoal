import { CheckCircle, ScalingIcon as Growth, MapPin, Users } from "lucide-react";
import innovationImage from "../assets/innovation.jpg";
import realEstateDevelopmentImage from "../assets/real-estate.jpg";
import startupImage from "../assets/startup.jpg";

const Focus = () => {
  return (
    <>
      <section id="focus" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Focus Areas
            </h2>
            <div className="h-1 w-20 bg-red-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">
              We strategically target high-growth sectors in Albania's
              developing economy, focusing on areas with strong potential for
              sustainable returns.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:transform hover:scale-105">
              <div className="h-48 bg-gray-200 relative">
                <img
                  src={realEstateDevelopmentImage}
                  alt="Real Estate Development"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-xl font-bold">
                    Real Estate & Development
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  The Albanian real estate market is booming, offering
                  opportunities in residential, commercial, and luxury
                  properties.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>Urban Developments:</strong> Modern apartments,
                      office spaces, and mixed-use projects in key cities.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>Tourism Properties:</strong> Hotels, resorts, and
                      short-term rental properties in high-demand coastal and
                      mountainous regions.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>Commercial & Industrial:</strong> Warehouses,
                      logistics centers, and retail spaces supporting Albania's
                      growing economy.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:transform hover:scale-105">
              <div className="h-48 bg-gray-200 relative">
                <img
                  src={startupImage}
                  alt="Business & Startup Investments"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-xl font-bold">
                    Business & Startup Investments
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Albania's entrepreneurial landscape is evolving, and we are
                  eager to support promising business ventures.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>Funding High-Potential Startups:</strong>{" "}
                      Providing financial backing to innovative ideas.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>Mentorship & Strategic Guidance:</strong>{" "}
                      Connecting startups with industry experts.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>Scaling Businesses:</strong> Assisting small
                      enterprises in expanding to regional and global markets.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Technology & Innovation */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:transform hover:scale-105">
              <div className="h-48 bg-gray-200 relative">
                <img
                  src={innovationImage}
                  alt="Technology & Innovation"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-xl font-bold">
                    Technology & Innovation
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  As digital transformation reshapes industries, Investoal is
                  looking toward the future of technology.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>IT & Software Development:</strong> Investing in
                      tech startups specializing in AI, blockchain, and cloud
                      solutions.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>E-commerce & Digital Services:</strong> Supporting
                      online businesses and fintech innovations.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>Green Energy & Sustainability:</strong> Exploring
                      eco-friendly solutions like solar energy, waste
                      management, and smart city projects.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Us
            </h2>
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
                We focus on long-term investments that drive economic progress
                and generate sustainable returns.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Focus;
