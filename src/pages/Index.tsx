import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { FeaturesSection } from "@/components/features/FeaturesSection";
import { PricingSection } from "@/components/pricing/PricingSection";
import LogoCarousel from "@/components/LogoCarousel";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import PortfolioSection from "@/components/PortfolioSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <motion.section 
        id="home"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative container px-4 pt-40 pb-20"
      >
        {/* Background */}
        <div 
          className="absolute inset-0 -z-10 bg-[#0A0A0A]"
        />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full glass text-primary"
        >
          <span className="text-sm font-medium">
            <Sparkles className="w-4 h-4 inline-block mr-2 " />
            Spark your creativity
          </span>
        </motion.div>
        
        <div className="max-w-4xl relative z-10">
          <h1 className="text-5xl md:text-7xl font-normal mb-4 tracking-tight text-left">
            <span className="text-gray-200">
              <TextGenerateEffect words="Transform your ideas into" />
            </span>
            <br />
            <span className="text-white font-medium">
              <TextGenerateEffect words="digital success" />
            </span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 mb-2 max-w-2xl text-left"
          >
            SparkLab Creative delivers cutting-edge web development, mobile apps, graphic design, and digital marketing solutions.{" "}
            <span className="text-white">Let's build something amazing together.</span>
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-primary font-medium mb-8 text-left italic"
          >
            
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 items-start"
          >
            <Button 
              size="lg" 
              className="button-gradient hover:scale-105 transition-all duration-200"
              onClick={() => window.open('https://wa.me/923323221235?text=Hi SparkLab Creative! I would like to start a project with you.', '_blank')}
            >
              Start Your Project
            </Button>
             <Button
               size="lg" 
               variant="link"
               className="text-white rounded-md hover:text-primary hover:scale-105 transition-all duration-200"
               onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
             >
               View Portfolio <ArrowRight className="ml-2 w-4 h-4" />
             </Button>
          </motion.div>
        </div>

      </motion.section>

      {/* Logo Carousel */}
      <LogoCarousel />

      {/* About Section */}
      <div className="bg-black">
        <AboutSection />
      </div>

      {/* Features Section */}
      <div id="services" className="bg-black">
        <FeaturesSection />
      </div>

      {/* Portfolio Section */}
      <div className="bg-black">
        <PortfolioSection />
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="bg-black">
        <PricingSection />
      </div>

      {/* Testimonials Section */}
      <div className="bg-black">
        <TestimonialsSection />
      </div>

      {/* Contact Section */}
      <div className="bg-black">
        <ContactSection />
      </div>

      {/* CTA Section */}
      <section className="container px-4 py-20 relative bg-black">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'url("/lovable-uploads/21f3edfb-62b5-4e35-9d03-7339d803b980.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#0A0A0A]/80 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 text-center relative z-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to start your project?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have transformed their business with our digital solutions.
          </p>
          <Button 
            size="lg" 
            className="button-gradient hover:scale-105 transition-all duration-200"
            onClick={() => window.open('https://wa.me/923323221235?text=Hi SparkLab Creative! I am ready to start my project. Please get in touch with me.', '_blank')}
          >
            Get Started Today
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </section>

      {/* Footer */}
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
