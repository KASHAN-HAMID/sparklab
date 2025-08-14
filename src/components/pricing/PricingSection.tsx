import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardSpotlight } from "./CardSpotlight";

const ServiceTier = ({
  name,
  description,
  features,
  isPopular,
}: {
  name: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}) => (
  <CardSpotlight className={`h-full ${isPopular ? "border-primary" : "border-white/10"} border-2`}>
    <div className="relative h-full p-6 flex flex-col">
      {isPopular && (
        <span className="text-xs font-medium bg-primary/10 text-primary rounded-full px-3 py-1 w-fit mb-4">
          Most Popular
        </span>
      )}
      <h3 className="text-xl font-medium mb-4">{name}</h3>
      <p className="text-gray-400 mb-6">{description}</p>
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <Check className="w-5 h-5 text-primary" />
            <span className="text-sm text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      <Button 
        className="button-gradient w-full"
        onClick={() => window.open('https://wa.me/923323221235?text=Hi SparkLab Creative! I am interested in your ' + name + '. Please provide more details.', '_blank')}
      >
        Get Started
      </Button>
    </div>
  </CardSpotlight>
);

export const PricingSection = () => {
  return (
    <section className="container px-4 py-24">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-normal mb-6"
        >
          Our Service{" "}
          <span className="text-gradient font-medium">Packages</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-lg text-gray-400"
        >
          Choose the perfect service package that fits your business needs and goals
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <ServiceTier
          name="Starter Package"
          description="Perfect for small businesses starting their digital journey"
          features={[
            "Basic website design",
            "Logo design",
            "Social media setup",
            "Basic SEO",
            "Email support"
          ]}
        />
        <ServiceTier
          name="Professional Package"
          description="Comprehensive solutions for growing businesses"
          features={[
            "Custom web development",
            "Mobile app development",
            "Complete branding package",
            "Digital marketing strategy",
            "Video content creation",
            "Priority support"
          ]}
          isPopular
        />
        <ServiceTier
          name="Enterprise Package"
          description="Full-scale digital transformation for large businesses"
          features={[
            "Custom development solutions",
            "Advanced e-commerce platforms",
            "Complete marketing campaigns",
            "24/7 technical support",
            "Dedicated project manager",
            "Analytics & reporting"
          ]}
        />
      </div>
    </section>
  );
};