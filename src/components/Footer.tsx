import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-luxury text-3xl mb-6">
              Embrace Beauty
            </h3>
            <p className="font-elegant text-lg leading-relaxed opacity-80">
              Premium makeup artistry specializing in luxury bridal and special occasion looks. 
              Embrace your natural beauty with sophistication and elegance.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-luxury text-xl mb-6">Contact Information</h4>
            <div className="space-y-4 font-elegant">
              <div>
                <div className="opacity-60 text-sm mb-1">Phone</div>
                <a href="tel:+15145867104" className="hover:text-accent transition-colors">
                  +1 (514) 586-7104
                </a>
              </div>
              <div>
                <div className="opacity-60 text-sm mb-1">Email</div>
                <a href="mailto:beautybyem1@yahoo.com" className="hover:text-accent transition-colors">
                  beautybyem1@yahoo.com
                </a>
              </div>
              <div>
                <div className="opacity-60 text-sm mb-1">Company</div>
                <div>Embrace Beauty</div>
              </div>
            </div>
          </div>

          {/* Social & Hours */}
          <div>
            <h4 className="font-luxury text-xl mb-6">Connect With Us</h4>
            <div className="space-y-6">
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="p-3 border border-secondary-foreground/20 hover:border-accent hover:text-accent transition-all"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="#" 
                  className="p-3 border border-secondary-foreground/20 hover:border-accent hover:text-accent transition-all"
                  aria-label="TikTok"
                >
                  <div className="w-5 h-5 font-bold text-sm flex items-center justify-center">
                    T
                  </div>
                </a>
                <a 
                  href="#" 
                  className="p-3 border border-secondary-foreground/20 hover:border-accent hover:text-accent transition-all"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
              </div>
              
              <div className="font-elegant">
                <div className="opacity-60 text-sm mb-2">Hours</div>
                <div className="text-sm space-y-1 opacity-80">
                  <div>Mon - Fri: 9:00 AM - 7:00 PM</div>
                  <div>Sat - Sun: By appointment</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="font-elegant text-sm opacity-60">
              © 2025 Embrace Beauty. All rights reserved.
            </div>
            <div className="flex space-x-6 font-elegant text-sm">
              <a href="#" className="hover:text-accent transition-colors opacity-60 hover:opacity-100">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-accent transition-colors opacity-60 hover:opacity-100">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;