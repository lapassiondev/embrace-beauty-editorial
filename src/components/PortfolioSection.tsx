import { useState } from "react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const portfolioImages = [
  { src: portfolio1, alt: "Luxury Bridal Makeup" },
  { src: portfolio2, alt: "Evening Glamour Look" },
  { src: portfolio3, alt: "Eyeshadow Artistry" },
  { src: portfolio4, alt: "Bridal Party Collection" },
  { src: portfolio5, alt: "Transformation Artistry" },
  { src: portfolio6, alt: "Special Occasion Elegance" },
];

const PortfolioSection = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-luxury text-5xl lg:text-6xl mb-6 text-foreground">
            Portfolio
          </h2>
          <p className="font-elegant text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our signature looks that celebrate natural beauty with luxury refinement
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="masonry-grid animate-fade-in">
          {portfolioImages.map((image, index) => (
            <div 
              key={index} 
              className="masonry-item cursor-pointer group"
              onClick={() => setLightboxImage(image.src)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full animate-zoom-hover group-hover:shadow-luxury"
              />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxImage && (
          <div 
            className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <img 
                src={lightboxImage} 
                alt="Portfolio Image"
                className="max-w-full max-h-full object-contain"
              />
              <button 
                className="absolute top-4 right-4 text-white text-4xl hover:text-accent transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxImage(null);
                }}
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;