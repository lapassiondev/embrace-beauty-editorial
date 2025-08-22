import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "Emilia transformed me into the most beautiful version of myself. Her attention to detail and artistic vision made my wedding day absolutely perfect.",
    client: "Sarah M.",
    occasion: "Wedding Day"
  },
  {
    text: "The luxury makeup experience was beyond my expectations. Professional, elegant, and the results lasted all evening. Simply extraordinary.",
    client: "Isabella R.",
    occasion: "Gala Event"
  },
  {
    text: "Learning from Emilia has elevated my own makeup skills tremendously. Her teaching style is inspiring and her techniques are industry-leading.",
    client: "Maria L.",
    occasion: "Makeup Course Student"
  },
  {
    text: "My bridal party looked absolutely stunning. Each look was perfectly tailored and we all felt confident and radiant. Thank you for making our day magical.",
    client: "Amanda K.",
    occasion: "Bridal Party"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-24 bg-background">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <div className="mb-16 animate-fade-in-up">
          <h2 className="font-luxury text-5xl lg:text-6xl mb-6 text-foreground">
            What Clients Say
          </h2>
        </div>

        <div className="relative">
          {/* Testimonial Content */}
          <div className="animate-fade-in min-h-[300px] flex items-center justify-center">
            <div className="max-w-4xl">
              <blockquote className="font-elegant text-2xl lg:text-3xl leading-relaxed text-foreground mb-8 italic">
                "{testimonials[currentIndex].text}"
              </blockquote>
              
              <div className="space-y-2">
                <div className="font-luxury text-lg text-accent">
                  {testimonials[currentIndex].client}
                </div>
                <div className="font-elegant text-sm text-muted-foreground uppercase tracking-wider">
                  {testimonials[currentIndex].occasion}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-8 mt-12">
            <button 
              onClick={goToPrevious}
              className="p-3 hover:text-accent transition-colors"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 transition-colors ${
                    index === currentIndex ? 'bg-accent' : 'bg-border'
                  }`}
                />
              ))}
            </div>

            <button 
              onClick={goToNext}
              className="p-3 hover:text-accent transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;