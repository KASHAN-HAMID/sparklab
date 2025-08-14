import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Users, Award, Clock, Target } from "lucide-react";

const stats = [
  {
    icon: <Users className="w-8 h-8" />,
    number: "100+",
    label: "Happy Clients"
  },
  {
    icon: <Award className="w-8 h-8" />,
    number: "250+",
    label: "Projects Completed"
  },
  {
    icon: <Clock className="w-8 h-8" />,
    number: "5+",
    label: "Years Experience"
  },
  {
    icon: <Target className="w-8 h-8" />,
    number: "98%",
    label: "Success Rate"
  }
];

const AboutSection = () => {
  return (
    <section className="py-20 bg-black" id="about">
      <div className="container px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-5xl font-normal mb-6">About SparkLab Creative</h2>
            <p className="text-lg text-white/70 mb-6">
              We are a full-service digital agency passionate about transforming businesses through innovative digital solutions. Our team of experts specializes in creating exceptional web experiences, mobile applications, and comprehensive digital marketing strategies.
            </p>
            <p className="text-lg text-white/70 mb-8">
              From concept to deployment, we handle every aspect of your digital presence. Our commitment to quality, creativity, and client satisfaction has made us a trusted partner for businesses of all sizes.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-primary mb-2 flex justify-center">{stat.icon}</div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <Card className="bg-black/40 backdrop-blur-xl border-white/5 p-8">
              <h3 className="text-2xl font-semibold mb-6 text-white/90">Our Mission</h3>
              <p className="text-white/70 mb-6">
                To empower businesses with cutting-edge digital solutions that drive growth, enhance user experiences, and create lasting impact in the digital landscape.
              </p>
              
              <h3 className="text-2xl font-semibold mb-6 text-white/90">Our Vision</h3>
              <p className="text-white/70">
                To be the leading digital agency that transforms innovative ideas into successful digital realities, helping businesses thrive in the ever-evolving digital world.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;