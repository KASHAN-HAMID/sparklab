
import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const contactInfo = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    value: "sparklabc@gmail.com",
    link: "mailto:sparklabc@gmail.com"
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Phone",
    value: "03323221235",
    link: "tel:03323221235"
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Location",
    value: "Karachi, Pakistan",
    link: "#"
  }
];

const ContactSection = () => {
  return (
    <section className="py-20 bg-black" id="contact">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-normal mb-4">Get In Touch</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can help bring your vision to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card className="bg-black/40 backdrop-blur-xl border-white/5 p-8">
              <h3 className="text-2xl font-semibold mb-6 text-white/90">Send us a message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      First Name
                    </label>
                    <Input placeholder="Enter your first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      Last Name
                    </label>
                    <Input placeholder="Enter your last name" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">
                    Email
                  </label>
                  <Input type="email" placeholder="Enter your email" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">
                    Subject
                  </label>
                  <Input placeholder="What's this about?" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us about your project..." 
                    rows={6}
                  />
                </div>
                <Button 
                  size="lg" 
                  className="w-full button-gradient hover:scale-105 transition-all duration-200"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <Card className="bg-black/40 backdrop-blur-xl border-white/5 p-8">
              <h3 className="text-2xl font-semibold mb-6 text-white/90">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                   <motion.a
                     key={index}
                     href={info.link}
                     initial={{ opacity: 0, y: 10 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5, delay: index * 0.1 }}
                     className="flex items-center space-x-4 text-white/70 hover:bg-primary/10 p-3 rounded-lg transition-all duration-200 hover:scale-105 group"
                   >
                     <div className="text-primary group-hover:text-primary group-hover:scale-110 transition-all duration-200">
                       {info.icon}
                     </div>
                     <div>
                       <div className="font-medium text-white/90 group-hover:text-white transition-colors duration-200">{info.title}</div>
                       <div className="text-white/80 group-hover:text-white/90 transition-colors duration-200">{info.value}</div>
                     </div>
                   </motion.a>
                ))}
              </div>
            </Card>

            <Card className="bg-black/40 backdrop-blur-xl border-white/5 p-8">
              <h3 className="text-2xl font-semibold mb-4 text-white/90">Office Hours</h3>
              <div className="space-y-2 text-white/70">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
