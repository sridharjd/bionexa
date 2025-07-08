
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
    // Reset form
    setFormData({
      name: "",
      email: "",
      organization: "",
      subject: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to accelerate your research? Contact us today to discuss your project 
            requirements and discover how we can help you achieve your scientific goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* <Card className="border-0 shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Mail className="h-6 w-6 text-blue-900 mr-3" />
                <h3 className="font-semibold text-gray-900">Email Us</h3>
              </div>
              <p className="text-gray-600">contact@lovable.dev</p>
              <p className="text-gray-600">support@lovable.dev</p>
            </CardContent>
          </Card> */}
          <Card className="border-0 shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Phone className="h-6 w-6 text-blue-900 mr-3" />
                <h3 className="font-semibold text-gray-900">Call Us</h3>
              </div>
              <p className="text-gray-600">+1 (555) 123-4567</p>
              <p className="text-sm text-gray-500">Mon-Fri, 9 AM - 6 PM EST</p>
            </CardContent>
          </Card>
          {/* <Card className="border-0 shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-blue-900 mr-3" />
                <h3 className="font-semibold text-gray-900">Location</h3>
              </div>
              <p className="text-gray-600">Boston, MA</p>
              <p className="text-gray-600">United States</p>
            </CardContent>
          </Card> */}
          <Card className="border-0 shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <MessageCircle className="h-6 w-6 text-green-600 mr-3" />
                <h3 className="font-semibold text-gray-900">WhatsApp</h3>
              </div>
              <p className="text-gray-600">+1 (555) 987-6543</p>
              <p className="text-sm text-gray-500">Chat with us on WhatsApp</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
