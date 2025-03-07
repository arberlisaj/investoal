import { Briefcase, Building, Code, Globe, MapPin, Shield } from "lucide-react";
import southAlbaniaImage from "../assets/south-albania.jpeg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Invest in Albania?
          </h2>
          <div className="h-1 w-20 bg-red-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Albania is a rapidly growing economy with strategic access to
            European and global markets. With government-backed incentives, a
            skilled workforce, and a developing infrastructure, it presents
            untapped opportunities across various industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={southAlbaniaImage}
              alt="Albanian landscape with mountains and coastline"
              width={800}
              height={600}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Key Advantages of Investing in Albania
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-red-100 p-1 rounded-full">
                  <MapPin className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Strategic Location</h4>
                  <p className="text-gray-600">
                    Positioned in the heart of the Balkans, Albania offers easy
                    access to major European trade routes and direct access to
                    the Adriatic and Ionian Seas, making it a key hub for
                    regional and global trade.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-red-100 p-1 rounded-full">
                  <Briefcase className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">
                    Favorable Business Climate
                  </h4>
                  <p className="text-gray-600">
                    A pro-business government, low and competitive tax tariffs,
                    and streamlined investment procedures make Albania an
                    attractive destination for foreign investors.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-red-100 p-1 rounded-full">
                  <Building className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">
                    Growing Real Estate Sector
                  </h4>
                  <p className="text-gray-600">
                    Rapid urbanization and increasing demand for modern housing
                    and commercial spaces create profitable opportunities in
                    real estate.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-red-100 p-1 rounded-full">
                  <Globe className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">
                    Tourism & Hospitality Boom
                  </h4>
                  <p className="text-gray-600">
                    With stunning coastlines along the Adriatic and Ionian Seas
                    and UNESCO heritage sites, Albania’s tourism industry is
                    expanding rapidly.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-red-100 p-1 rounded-full">
                  <Code className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">
                    Emerging Tech & Innovation
                  </h4>
                  <p className="text-gray-600">
                    A rising startup ecosystem driven by young entrepreneurs and
                    digital transformation is positioning Albania as a growing
                    tech hub
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-red-100 p-1 rounded-full">
                  <Shield className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">
                    Security & Stability
                  </h4>
                  <p className="text-gray-600">
                    As a NATO member and a country on the path to joining the
                    European Union, Albania offers a safe and stable environment
                    for investors.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
