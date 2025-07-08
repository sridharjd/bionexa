
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Atom, Zap } from "lucide-react";

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const dynamicTexts = [
    "In Silico Precision",
    "In Vitro Studies", 
    "Computational Excellence",
    "Research Innovation"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % dynamicTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const section = document.getElementById('contact');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const section = document.getElementById('services');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50 min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Floating icons */}
          <div className="relative mb-8">
            <div className="absolute -top-4 -left-4 text-blue-200 animate-pulse">
              <Atom className="h-12 w-12" />
            </div>
            <div className="absolute -top-8 -right-8 text-indigo-200 animate-pulse delay-300">
              <Zap className="h-10 w-10" />
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              Accelerate Your Research with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 block transition-all duration-1000 ease-in-out transform">
                {dynamicTexts[currentTextIndex]}
              </span>
            </h1>
          </div>

          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            We deliver reliable molecular docking, ADME prediction, MD simulations, 
            and expert-level scientific support to researchers, biotech startups, 
            and academic institutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 text-lg font-semibold group"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              onClick={scrollToServices}
              variant="outline" 
              size="lg" 
              className="border-blue-900 text-blue-900 hover:bg-blue-50 px-8 py-3 text-lg font-semibold"
            >
              Explore Services
            </Button>
          </div>

          {/* Stats or badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 border-t border-gray-200">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">50+</div>
              <div className="text-gray-600">Publications Supported</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">24/7</div>
              <div className="text-gray-600">Expert Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
