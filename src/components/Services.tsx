
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Atom, FlaskConical, Activity, FileText, MessageSquare, BarChart3, Microscope, TestTube, Beaker } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const handleKnowMore = (serviceId: string) => {
    // Navigate to pricing page and scroll to the relevant table or section
    navigate(`/pricing#${serviceId}`);
  };

  const services = [
    {
      id: "docking",
      icon: <Atom className="h-8 w-8 text-blue-900" />,
      title: "Molecular Docking & Virtual Screening",
      description: "High-throughput virtual screening and precise molecular docking studies to identify potential drug candidates and understand protein-ligand interactions.",
      features: ["Structure-based drug design", "High-throughput screening", "Binding affinity prediction", "Hit optimization"]
    },
    {
      id: "adme",
      icon: <FlaskConical className="h-8 w-8 text-blue-900" />,
      title: "ADME & Toxicity Prediction",
      description: "Comprehensive prediction of Absorption, Distribution, Metabolism, Excretion properties and toxicity profiles using advanced computational models.",
      features: ["Pharmacokinetic profiling", "Toxicity assessment", "Drug-drug interactions", "Bioavailability prediction"]
    },
    {
      id: "md",
      icon: <Activity className="h-8 w-8 text-blue-900" />,
      title: "Molecular Dynamics (MD) Simulation",
      description: "Advanced MD simulations to study protein dynamics, conformational changes, and molecular behavior in biological systems.",
      features: ["Protein stability analysis", "Conformational dynamics", "Free energy calculations", "Membrane simulations"]
    },
    {
      id: "invitro",
      icon: <Beaker className="h-8 w-8 text-blue-900" />,
      title: "In Vitro Studies",
      description: "Comprehensive in vitro studies including anti-microbial testing and cancer cell line studies to evaluate compound efficacy and safety.",
      features: ["Anti-microbial studies", "Cancer cell line studies", "Cytotoxicity assays", "Cell proliferation analysis"]
    },
    {
      id: "hplc",
      icon: <BarChart3 className="h-8 w-8 text-blue-900" />,
      title: "HPLC Analysis",
      description: "High-Performance Liquid Chromatography for compound separation, identification, and quantification with high precision and accuracy.",
      features: ["Compound identification", "Purity analysis", "Method development", "Quantitative analysis"]
    },
    {
      id: "gcms",
      icon: <Microscope className="h-8 w-8 text-blue-900" />,
      title: "GC-MS Analysis",
      description: "Gas Chromatography-Mass Spectrometry for volatile compound analysis, structural elucidation, and trace-level detection.",
      features: ["Volatile compound analysis", "Structural identification", "Trace detection", "Environmental analysis"]
    },
    {
      id: "lcms",
      icon: <TestTube className="h-8 w-8 text-blue-900" />,
      title: "LC-MS Analysis",
      description: "Liquid Chromatography-Mass Spectrometry for complex mixture analysis, metabolite identification, and biomarker discovery.",
      features: ["Complex mixture analysis", "Metabolite profiling", "Biomarker discovery", "Proteomics analysis"]
    },
    {
      id: "writing",
      icon: <FileText className="h-8 w-8 text-blue-900" />,
      title: "Scientific Writing & Publication Support",
      description: "Expert assistance in manuscript preparation, scientific writing, and publication support to communicate your research effectively.",
      features: ["Manuscript writing", "Data visualization", "Journal selection", "Peer review support"]
    },
    {
      id: "consultation",
      icon: <MessageSquare className="h-8 w-8 text-blue-900" />,
      title: "Results Analysis & Discussion Consultation",
      description: "In-depth analysis of computational results with expert interpretation and strategic guidance for your research direction.",
      features: ["Data interpretation", "Statistical analysis", "Research strategy", "Method optimization"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive computational biology and pharmaceutical science services 
            tailored to accelerate your research and discovery process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-md relative">
              <CardHeader className="pb-4">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-bold text-gray-900 leading-tight">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col h-full pb-16">
                <ul className="space-y-2 flex-grow">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-900 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="absolute bottom-4 right-4">
                  <Button 
                    onClick={() => handleKnowMore(service.id)}
                    size="sm"
                    className="bg-blue-900 hover:bg-blue-800 text-white"
                  >
                    Know More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
