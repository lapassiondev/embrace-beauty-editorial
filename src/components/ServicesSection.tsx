import { Button } from "@/components/ui/button";
import serviceLuxury from "@/assets/service-luxury.jpg";
import serviceBridal from "@/assets/service-bridal.jpg";
import serviceLearning from "@/assets/service-learning.jpg";

const services = [
  {
    image: serviceLuxury,
    title: "Luxury Makeup",
    description: "Premium makeup artistry for special occasions, photoshoots, and events. Experience the ultimate in beauty refinement with our signature techniques.",
  },
  {
    image: serviceBridal,
    title: "Bridal Makeup",
    description: "Your wedding day deserves perfection. Our bridal services include trial sessions, wedding day application, and touch-up support for your entire party.",
  },
  {
    image: serviceLearning,
    title: "Makeup Learning Courses",
    description: "Master the art of professional makeup with our comprehensive courses. From beginner basics to advanced techniques, learn from industry experts.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-luxury text-5xl lg:text-6xl mb-6 text-foreground">
            Services
          </h2>
          <p className="font-elegant text-xl text-muted-foreground max-w-2xl mx-auto">
            Curated beauty experiences designed to enhance your natural radiance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Service Image */}
              <div className="aspect-[4/3] overflow-hidden mb-8">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover animate-zoom-hover"
                />
              </div>

              {/* Service Content */}
              <div className="space-y-6">
                <h3 className="font-luxury text-2xl text-foreground">
                  {service.title}
                </h3>
                
                <p className="font-elegant text-base leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                <Button className="btn-luxury w-full">
                  Book Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;