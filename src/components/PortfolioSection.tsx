"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, X } from "lucide-react";

const projects = [
  // Web Development
 // Web Development
 {
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform built with Next.js and TailwindCSS.",
    image: "/projects/web development/1.png",
    category: "Web Development",
    technologies: ["Next.js", "TailwindCSS", "Stripe"],
    liveUrl: "https://tech-nova-trading.vercel.app/",
  },
  {
    title: "Jewelry Store Website",
    description: "Elegant online jewelry store with a sleek and responsive design.",
    image: "/projects/web development/2.png",
    category: "Web Development",
    technologies: ["Next.js", "TailwindCSS", "E-Commerce"],
    liveUrl: "https://jewlwerry.vercel.app/",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio showcasing my skills and projects.",
    image: "/projects/web development/3.png",
    category: "Web Development",
    technologies: ["React", "Framer Motion", "Vercel"],
    liveUrl: "https://kashan-hamid-portfolio.vercel.app/",
  },
  {
    title: "Consultancy Website",
    description: "Professional consultancy firm website with service details and contact form.",
    image: "/projects/web development/4.png",
    category: "Web Development",
    technologies: ["WordPress", "PHP", "Elementor"],
    liveUrl: "https://www.thevisionconsultants.com/",
  },
  {
    title: "Homestay Booking Platform",
    description: "A full-featured homestay booking platform for travelers.",
    image: "/projects/web development/5.png",
    category: "Web Development",
    technologies: ["Node.js", "Express", "PostgreSQL"],
    liveUrl: "https://homestay-wanderlust-production.up.railway.app/",
  },
  {
    title: "Creative Agency Website",
    description: "Bold and modern creative agency portfolio website.",
    image: "/projects/web development/6.png",
    category: "Web Development",
    technologies: ["React", "TailwindCSS", "Vercel"],
    liveUrl: "https://boldhue.vercel.app/",
  },
];

export default function ProjectList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
            <div className="mt-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition"
              >
                View Live
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
  // Graphic Design
  {
    title: "Brand Identity Design",
    description: "Logo, typography, and color palette for a startup.",
    image: "/projects/graphic designing/1.jpg",
    category: "Graphic Design",
    technologies: ["Illustrator", "Photoshop"],
    liveUrl: "#",
  },
  {
    title: "Social Media Campaign",
    description: "Eye-catching graphics for Instagram marketing.",
    image: "/projects/graphic designing/2.jpg",
    category: "Graphic Design",
    technologies: ["Canva", "Photoshop"],
    liveUrl: "#",
  },
  {
    title: "Product Packaging",
    description: "Creative and functional packaging for a food brand.",
    image: "/projects/graphic designing/3.jpg",
    category: "Graphic Design",
    technologies: ["Illustrator", "InDesign"],
    liveUrl: "#",
  },
  // Video Editing
  {
    title: "Travel Vlog",
    description: "Cinematic travel video with transitions and color grading.",
    image: "/projects/video editing/4.mp4",
    category: "Video Editing",
    technologies: ["Premiere Pro", "After Effects"],
    liveUrl: "#",
  },
  {
    title: "Product Ad",
    description: "30-second commercial with animations and sound design.",
    image: "/projects/video editing/2.mp4",
    category: "Video Editing",
    technologies: ["Final Cut Pro", "Logic Pro"],
    liveUrl: "#",
  },
  {
    title: "Event Recap",
    description: "Highlight video for a corporate event.",
    image: "/projects/video editing/5.mp4",
    category: "Video Editing",
    technologies: ["Premiere Pro"],
    liveUrl: "#",
  },
];

const categories = ["All", "Web Development", "Graphic Design", "Video Editing"];

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [modalProject, setModalProject] = useState<any>(null);

  // ESC key listener for closing modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalProject(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  const isVideo = (filePath: string) => filePath.endsWith(".mp4");

  const openModal = (project: any) => setModalProject(project);
  const closeModal = () => setModalProject(null);

  return (
    <section className="py-20 bg-black" id="portfolio">
      <div className="container px-4">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "no-hover" : "outline-no-hover"}
              onClick={() => setSelectedCategory(category)}
              className="text-sm hover:scale-105 transition-transform duration-200"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden glass border-white/10 hover:border-primary/50 transition-all duration-300 h-full max-w-sm mx-auto hover:scale-105">
                <div
                  className="relative overflow-hidden cursor-pointer"
                  onClick={() => openModal(project)} // mobile & desktop click
                >
                  {isVideo(project.image) ? (
                    <video
                      className="w-full h-40 object-cover"
                      muted
                      loop
                      preload="metadata"
                    >
                      <source src={project.image} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      size="sm"
                      className="bg-primary text-black font-medium hover:bg-primary/90 hover:scale-110 transition-all duration-200"
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(project);
                      }}
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      View
                    </Button>
                  </div>
                </div>
                <div className="p-4">
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                  <h3 className="text-lg font-semibold mb-2 text-white/90">
                    {project.title}
                  </h3>
                  <p className="text-white/70 text-sm mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs px-2 py-0.5"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs px-2 py-0.5">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Show More/Less */}
        {filteredProjects.length > 3 && (
          <div className="text-center mt-8">
            <Button
              variant="outline-no-hover"
              onClick={() => setShowAll(!showAll)}
              className="hover:scale-105 transition-all duration-200 hover:bg-primary/10"
            >
              {showAll ? "Show Less" : "View More"}
            </Button>
          </div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg shadow-lg max-w-3xl w-full relative p-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 p-1 rounded-full bg-gray-200 hover:bg-gray-300"
              >
                <X size={20} />
              </button>

              {isVideo(modalProject.image) ? (
                <video
                  src={modalProject.image}
                  controls
                  autoPlay
                  className="w-full rounded-lg"
                />
              ) : (
                <img
                  src={modalProject.image}
                  alt={modalProject.title}
                  className="w-full rounded-lg"
                />
              )}

              <h3 className="text-lg font-semibold mt-4">{modalProject.title}</h3>
              <p className="text-sm text-gray-600">{modalProject.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
