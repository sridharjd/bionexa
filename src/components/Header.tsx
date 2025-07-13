
import { useState } from "react";
import { Menu, X, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = (sectionId: string) => {
    if (location.pathname === "/") {
      // On home, scroll directly
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMenuOpen(false);
    } else {
      // On other pages, navigate to home and pass sectionId
      navigate('/', { state: { scrollTo: sectionId } });
      setIsMenuOpen(false);
    }
  };

  const goToPricing = () => {
    if (location.pathname !== "/pricing") {
      navigate('/pricing');
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-blue-900">BioNexa</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNav('hero')}
              className="text-gray-700 hover:text-blue-900 transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => handleNav('about')}
              className="text-gray-700 hover:text-blue-900 transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => handleNav('services')}
              className="text-gray-700 hover:text-blue-900 transition-colors font-medium"
            >
              Services
            </button>
            <button 
              onClick={goToPricing}
              className="text-gray-700 hover:text-blue-900 transition-colors font-medium flex items-center"
            >
              <Calculator className="h-4 w-4 mr-1" />
              Pricing
            </button>
            <button 
              onClick={() => handleNav('contact')}
              className="text-gray-700 hover:text-blue-900 transition-colors font-medium"
            >
              Contact
            </button>
            <Button 
              onClick={() => handleNav('contact')}
              className="bg-blue-900 hover:bg-blue-800 text-white"
            >
              Get Started
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
              <button 
                onClick={() => handleNav('hero')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-900 transition-colors font-medium w-full text-left"
              >
                Home
              </button>
              <button 
                onClick={() => handleNav('about')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-900 transition-colors font-medium w-full text-left"
              >
                About
              </button>
              <button 
                onClick={() => handleNav('services')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-900 transition-colors font-medium w-full text-left"
              >
                Services
              </button>
              <button 
                onClick={goToPricing}
                className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-900 transition-colors font-medium w-full text-left"
              >
                <Calculator className="h-4 w-4 mr-2" />
                Price Calculator
              </button>
              <button 
                onClick={() => handleNav('contact')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-900 transition-colors font-medium w-full text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
