import emiliaPortrait from "@/assets/emilia-portrait.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Portrait Image */}
          <div className="relative animate-fade-in">
            <div className="aspect-[3/4] overflow-hidden">
              <img 
                src={emiliaPortrait} 
                alt="Emilia - Professional Makeup Artist"
                className="w-full h-full object-cover animate-zoom-hover"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="animate-fade-in-up">
            <h2 className="font-luxury text-5xl lg:text-6xl mb-12 text-foreground">
              The Artist
            </h2>
            
            <div className="space-y-8">
              <p className="font-elegant text-xl leading-relaxed text-muted-foreground">
                Since 2018, Emilia has been dedicated to creating exceptional makeup experiences, 
                specializing in luxury bridal and special occasion artistry. With a passion for 
                beauty and an eye for perfection, she crafts bespoke looks that enhance natural 
                features and empower clients to feel radiant, confident, and their most beautiful selves.
              </p>
              
              <p className="font-elegant text-xl leading-relaxed text-muted-foreground">
                Her signature style combines timeless elegance with modern techniques, creating 
                looks that are both sophisticated and enduring. Through her makeup learning courses, 
                Emilia shares her expertise with aspiring artists, fostering the next generation 
                of beauty professionals.
              </p>
              
              <div className="pt-8">
                <div className="font-luxury text-2xl text-accent mb-2">
                  Emilia Rodriguez
                </div>
                <div className="font-elegant text-lg text-muted-foreground">
                  Master Makeup Artist & Educator
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;