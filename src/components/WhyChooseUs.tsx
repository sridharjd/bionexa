
import { CheckCircle, Clock, Shield, Zap } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <CheckCircle className="h-12 w-12 text-green-600" />,
      title: "Proven Expertise",
      description: "Our team of PhD-level scientists brings years of experience in computational biology and pharmaceutical research, ensuring high-quality results."
    },
    {
      icon: <Clock className="h-12 w-12 text-blue-600" />,
      title: "Fast Turnaround",
      description: "We understand research timelines. Our efficient workflows and dedicated team ensure quick delivery without compromising quality."
    },
    {
      icon: <Shield className="h-12 w-12 text-purple-600" />,
      title: "Data Security",
      description: "Your research data is protected with enterprise-grade security measures. We maintain strict confidentiality and data protection protocols."
    },
    {
      icon: <Zap className="h-12 w-12 text-orange-600" />,
      title: "Cutting-Edge Technology",
      description: "We utilize the latest computational tools, high-performance computing resources, and state-of-the-art algorithms for superior results."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose BioNexa?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine scientific excellence with practical expertise to deliver 
            exceptional results that advance your research goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-gray-50 rounded-full group-hover:bg-gray-100 transition-colors">
                  {reason.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional trust indicators */}
        <div className="mt-16 pt-16 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-900 mb-2">100%</div>
              <div className="text-gray-600">Client Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-900 mb-2">48hr</div>
              <div className="text-gray-600">Average Response Time</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-900 mb-2">ISO</div>
              <div className="text-gray-600">Security Certified</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
