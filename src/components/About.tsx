
import { Users, Award, BookOpen } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About BioNexa
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a team of computational biology and pharmaceutical science experts 
            dedicated to advancing research through cutting-edge in silico services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Expertise You Can Trust
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our multidisciplinary team combines deep expertise in computational biology, 
              pharmaceutical sciences, and data analysis to deliver exceptional results. 
              We understand the unique challenges researchers face and provide tailored 
              solutions that accelerate discovery.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              From molecular docking studies to complex MD simulations, we leverage 
              state-of-the-art computational tools and methodologies to provide 
              accurate, reproducible, and publication-ready results.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Users className="h-8 w-8 text-blue-900 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Expert Team</h4>
                <p className="text-sm text-gray-600">PhD-level scientists with industry experience</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Award className="h-8 w-8 text-blue-900 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Proven Results</h4>
                <p className="text-sm text-gray-600">Track record of successful publications</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <BookOpen className="h-8 w-8 text-blue-900 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Full Support</h4>
                <p className="text-sm text-gray-600">From analysis to manuscript preparation</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🧬</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Computational Excellence
                </h4>
                <p className="text-gray-600">
                  Advanced algorithms and high-performance computing for precise molecular insights
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
