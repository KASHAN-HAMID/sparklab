import { Code, Smartphone, Palette, TrendingUp, Video, Search, Cog, Camera, Wand2, Globe } from "lucide-react";
import webDevImage from "@/assets/web-development-service.jpg";
import appDevImage from "@/assets/app-development-service.jpg";
import graphicDesignImage from "@/assets/graphic-design-service.jpg";
import digitalMarketingImage from "@/assets/services-hero.jpg";
import videoEditingImage from "@/assets/video-editing-service.jpg";
import seoServicesImage from "@/assets/seo-services.jpg";

export const features = [
  {
    title: "Web Development",
    description: "Custom websites, WordPress development, Shopify stores, ecommerce platforms, and business websites that drive results.",
    icon: <Code className="w-6 h-6 text-primary" />,
    image: webDevImage,
    details: ["React & Next.js Applications", "WordPress & Custom CMS", "E-commerce Platforms", "Progressive Web Apps", "Full-Stack Development", "API Integration"]
  },
  {
    title: "App Development",
    description: "iOS and Android apps, cross-platform solutions, and all types of mobile applications for your business needs.",
    icon: <Smartphone className="w-6 h-6 text-primary" />,
    image: appDevImage,
    details: ["Native iOS Development", "Android Applications", "React Native Apps", "Cross-Platform Solutions", "Mobile UI/UX Design", "App Store Deployment"]
  },
  {
    title: "Graphic Design",
    description: "2D/3D models, logos, banners, standees, visiting cards, posters, and comprehensive brand identity solutions.",
    icon: <Palette className="w-6 h-6 text-primary" />,
    image: graphicDesignImage,
    details: ["2D & 3D Logo Design", "Brand Identity Packages", "Business Cards & Stationery", "Banners & Standees", "Posters & Flyers", "Marketing Collaterals"]
  },
  {
    title: "Digital Marketing",
    description: "Social media management, ad campaigns, lead generation, and comprehensive digital marketing strategies.",
    icon: <TrendingUp className="w-6 h-6 text-primary" />,
    image: digitalMarketingImage,
    details: ["Social Media Management", "Facebook & Google Ads", "Campaign Management", "SEO & Content Strategy", "Lead Generation", "Analytics & Reporting"]
  },
  {
    title: "Video Editing",
    description: "2D & 3D animation, motion graphics, advertising videos, and professional video production services.",
    icon: <Video className="w-6 h-6 text-primary" />,
    image: videoEditingImage,
    details: ["2D & 3D Animation", "Motion Graphics Design", "Advertising Videos", "Corporate Videos", "Product Demonstrations", "Video Post-Production"]
  },
  {
    title: "SEO Services",
    description: "Search engine optimization, keyword research, content optimization, and improving your online visibility.",
    icon: <Search className="w-6 h-6 text-primary" />,
    image: seoServicesImage,
    details: ["Keyword Research & Analysis", "On-Page Optimization", "Technical SEO Audits", "Content Strategy", "Link Building", "Performance Monitoring"]
  }
];