import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Calculator } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Pricing = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const serviceId = searchParams.get('service');
  
  const [quantities, setQuantities] = useState({
    docking: 1,
    adme: 1,
    md: 1,
    hplc: 1,
    gcms: 1,
    lcms: 1,
    writing: 1,
    consultation: 1
  });

  const services = {
    docking: {
      name: "Molecular Docking & Virtual Screening",
      unit: "compounds",
      pricePerUnit: 10,
      currency: "₹"
    },
    adme: {
      name: "ADME & Toxicity Prediction",
      unit: "compounds",
      pricePerUnit: 3,
      currency: "₹"
    },
    md: {
      name: "Molecular Dynamics Simulation",
      unit: "compounds (100 nanoseconds)",
      pricePerUnit: 1500,
      priceAdditional: 500,
      currency: "₹"
    },
    hplc: {
      name: "HPLC Analysis",
      unit: "samples",
      pricePerUnit: 500,
      currency: "₹"
    },
    gcms: {
      name: "GC-MS Analysis",
      unit: "samples",
      pricePerUnit: 800,
      currency: "₹"
    },
    lcms: {
      name: "LC-MS Analysis",
      unit: "samples",
      pricePerUnit: 1200,
      currency: "₹"
    },
    writing: {
      name: "Scientific Writing & Publication Support",
      unit: "manuscripts",
      pricePerUnit: 5000,
      currency: "₹"
    },
    consultation: {
      name: "Results Analysis & Discussion Consultation",
      unit: "hours",
      pricePerUnit: 2000,
      currency: "₹"
    }
  };

  const handleQuantityChange = (service: string, value: string) => {
    const numValue = parseInt(value);
    const isValidNumber = !isNaN(numValue);

    // Allow zero or positive numbers only
    const finalValue = isValidNumber ? Math.max(0, numValue) : 0;

    setQuantities(prev => ({
      ...prev,
      [service]: finalValue
    }));
  };

  const calculatePrice = (service: string) => {
    const serviceData = services[service as keyof typeof services];
    const qty = quantities[service as keyof typeof quantities];

    if (service === 'md') {
      // Special pricing for MD
      if (qty <= 1) return serviceData.pricePerUnit;
      return serviceData.pricePerUnit + (qty - 1) * serviceData.priceAdditional!;
    }

    return serviceData.pricePerUnit * qty;
  };

  const totalPrice = Object.keys(services).reduce((sum, service) => {
    return sum + calculatePrice(service);
  }, 0);

  useEffect(() => {
    if (serviceId && services[serviceId as keyof typeof services]) {
      document.getElementById(serviceId)?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [serviceId]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-24 pb-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          

          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Calculator className="h-12 w-12 text-blue-900 mr-4" />
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
                Pricing Calculator
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Calculate the cost for your research services. Adjust quantities to get accurate pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {Object.entries(services).map(([key, service]) => (
              <Card 
                key={key} 
                id={key}
                className={`hover:shadow-lg transition-shadow duration-300 ${
                  serviceId === key ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {service.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <label className="text-sm font-medium text-gray-700 min-w-0 flex-1">
                        Number of {service.unit}:
                      </label>
                      <Input
                        type="number"
                        min="0"
                        value={quantities[key as keyof typeof quantities]}
                        onChange={(e) => handleQuantityChange(key, e.target.value)}
                        className="w-24"
                      />
                    </div>
                    
                    <div className="flex justify-between items-center pt-4 border-t">
                      <span className="text-sm text-gray-600">
                        {service.currency}{service.pricePerUnit} per {service.unit.split(' ')[0]}
                      </span>
                      <span className="text-xl font-bold text-blue-900">
                        {service.currency}{calculatePrice(key).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-12 max-w-md mx-auto bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-center text-2xl font-bold text-blue-900">
                Total Estimate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-900 mb-4">
                  ₹{totalPrice.toLocaleString()}
                </div>
                <p className="text-gray-600 mb-6">
                  This is an estimate. Final pricing may vary based on project complexity.
                </p>
                <Button 
                  onClick={() => navigate('/#contact')}
                  className="w-full bg-blue-900 hover:bg-blue-800"
                >
                  Get Quote
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;