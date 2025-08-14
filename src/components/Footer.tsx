import { Github, Twitter, Instagram, Facebook, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="w-full py-12 mt-20">
      <div className="container px-4">
        <div className="glass glass-hover rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img 
                  src="/lovable-uploads/ea2c6e35-d207-467c-9617-6b4a0ec3dce6.png" 
                  alt="SparkLab Creative" 
                  className="w-20 h-20"
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Transforming businesses through innovative digital solutions and creative excellence.
              </p>
              <div className="flex space-x-4">
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => window.open('https://facebook.com/sparklabcreative', '_blank')}
                  className="hover:text-primary"
                >
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => window.open('https://instagram.com/sparklabcreative', '_blank')}
                  className="hover:text-primary"
                >
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => window.open('https://wa.me/03323221235', '_blank')}
                  className="hover:text-primary"
                >
                  <MessageCircle className="w-4 h-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => window.open('https://twitter.com/sparklabcreative', '_blank')}
                  className="hover:text-primary"
                >
                  <Twitter className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Services</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    App Development
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Graphic Design
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Digital Marketing
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Video Editing
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    SEO Services
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Contact Info</h4>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:sparklabc@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    sparklabc@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:03323221235" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    03323221235
                  </a>
                </li>
                <li>
                  <span className="text-sm text-muted-foreground">
                    Karachi, Pakistan
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-sm text-muted-foreground text-center">
              © {new Date().getFullYear()} SparkLab Creative. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;