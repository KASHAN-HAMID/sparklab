import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const FloatingTaggerButton = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/923323221235?text=Hi SparkLab Creative! I would like to get in touch with you.', '_blank');
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-[9999] flex items-center gap-2 rounded-full bg-black px-4 py-3 text-primary border-2 border-primary shadow-lg transition-all duration-300 hover:shadow-primary/50 relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>
      <MessageCircle className="w-5 h-5 relative z-10 group-hover:text-black transition-colors duration-500" />
      <span className="font-medium relative z-10 group-hover:text-black transition-colors duration-500">Contact Us</span>
    </motion.button>
  );
};

export default FloatingTaggerButton;