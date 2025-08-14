import { motion } from "framer-motion";
import { Monitor, Smartphone, Palette, TrendingUp, Video, Search, Zap, Camera } from "lucide-react";

const LogoCarousel = () => {
  const services = [
    { name: "Web Development", icon: Monitor },
    { name: "App Development", icon: Smartphone },
    { name: "Graphic Design", icon: Palette },
    { name: "Digital Marketing", icon: TrendingUp },
    { name: "Video Editing", icon: Video },
    { name: "SEO Services", icon: Search },
    { name: "Animation", icon: Zap },
    { name: "Photography", icon: Camera }
  ];

  const extendedServices = [...services, ...services, ...services];

  return (
    <div className="w-full overflow-hidden bg-background/50 backdrop-blur-sm py-12 mt-20">
      <div className="container px-4 mb-4">
        <p className="text-center text-muted-foreground text-sm">Our Digital Services</p>
      </div>
      <motion.div 
        className="flex space-x-16"
        initial={{ opacity: 0, x: "0%" }}
        animate={{
          opacity: 1,
          x: "-50%"
        }}
        transition={{
          opacity: { duration: 0.5 },
          x: {
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            delay: 0.5
          }
        }}
        style={{
          width: "fit-content",
          display: "flex",
          gap: "4rem"
        }}
      >
        {extendedServices.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <motion.div
              key={`service-${index}`}
              className="whitespace-nowrap text-lg font-medium text-foreground/80 flex items-center gap-3"
              initial={{ opacity: 0.7 }}
              whileHover={{ 
                opacity: 1,
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <IconComponent className="w-5 h-5 text-primary" />
              {service.name}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default LogoCarousel;