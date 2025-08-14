"use client";

import { motion } from "framer-motion";
import { Card } from "./ui/card";

const testimonials = [
  {
    company: "Vision Consultant",
    logo: "/vision.jpg",
    content:
      "Working with SparkLab Creative made our online presence truly stand out. From designing our new website to optimizing it for search, the results have been better than we expected."
  },
  {
    company: "BoldHue",
    logo: "/boldhue.png",
    content:
      "Our brand identity redesign was handled with precision and creativity. The new look has been well-received by our clients and has given BoldHue a fresh edge."
  },
  {
    company: "Dynamo Marketing",
    logo: "/dynamo.png",
    content:
      "SparkLab Creative delivered a fast, clean, and responsive site for us. The project was handled smoothly from start to finish, and communication was excellent."
  },
  {
    company: "ARS Designer",
    logo: "/ars.jpg",
    content:
      "Our portfolio website now reflects our work much better. The attention to detail in both design and functionality was exactly what we needed."
  },
  {
    company: "Jewel Vault",
    logo: "/jewelvault.jpg",
    content:
      "The e-commerce store they built for us is beautiful, easy to use, and has made managing our products much simpler. Sales have noticeably increased."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 overflow-hidden bg-black">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-normal mb-4 text-white">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Honest feedback from the businesses we’ve had the privilege to work with
          </p>
        </motion.div>

        <div className="relative flex flex-col antialiased">
          <div className="relative flex overflow-hidden py-4">
            {/* First marquee */}
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={`${index}-1`}
                  className="w-[420px] shrink-0 bg-black/50 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-8"
                >
                  <div className="flex items-center gap-5 mb-6">
                    <img
                      src={testimonial.logo}
                      alt={testimonial.company}
                      className="w-16 h-16 object-cover rounded-full border border-white/20 shadow-sm"
                    />
                    <h4 className="font-semibold text-xl text-white">
                      {testimonial.company}
                    </h4>
                  </div>
                  <p className="text-white/80 leading-relaxed text-base">
                    “{testimonial.content}”
                  </p>
                </Card>
              ))}
            </div>

            {/* Second marquee */}
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={`${index}-2`}
                  className="w-[420px] shrink-0 bg-black/50 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-8"
                >
                  <div className="flex items-center gap-5 mb-6">
                    <img
                      src={testimonial.logo}
                      alt={testimonial.company}
                      className="w-16 h-16 object-cover rounded-full border border-white/20 shadow-sm"
                    />
                    <h4 className="font-semibold text-xl text-white">
                      {testimonial.company}
                    </h4>
                  </div>
                  <p className="text-white/80 leading-relaxed text-base">
                    “{testimonial.content}”
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
