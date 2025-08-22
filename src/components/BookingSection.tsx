import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const BookingSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.service) {
      toast({
        title: "Please fill in required fields",
        description: "Name, email, and service selection are required.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Booking Request Sent!",
      description: "We'll contact you within 24 hours to confirm your appointment.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      date: "",
      message: ""
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="booking" className="py-24 bg-muted">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-luxury text-5xl lg:text-6xl mb-6 text-foreground">
            Book Your Experience
          </h2>
          <p className="font-elegant text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to embrace your beauty? Let's create something extraordinary together.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 animate-fade-in-up">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block font-elegant text-sm mb-3 text-foreground">
                Full Name *
              </label>
              <Input 
                type="text"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className="font-elegant border-0 bg-background shadow-sm"
                placeholder="Your full name"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block font-elegant text-sm mb-3 text-foreground">
                Email Address *
              </label>
              <Input 
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="font-elegant border-0 bg-background shadow-sm"
                placeholder="your.email@example.com"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Phone */}
            <div>
              <label className="block font-elegant text-sm mb-3 text-foreground">
                Phone Number
              </label>
              <Input 
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className="font-elegant border-0 bg-background shadow-sm"
                placeholder="+1 (514) 000-0000"
              />
            </div>

            {/* Service */}
            <div>
              <label className="block font-elegant text-sm mb-3 text-foreground">
                Service *
              </label>
              <Select onValueChange={(value) => handleChange('service', value)}>
                <SelectTrigger className="font-elegant border-0 bg-background shadow-sm">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="luxury-makeup">Luxury Makeup</SelectItem>
                  <SelectItem value="bridal-makeup">Bridal Makeup</SelectItem>
                  <SelectItem value="makeup-course">Makeup Learning Course</SelectItem>
                  <SelectItem value="consultation">Consultation</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Preferred Date */}
          <div>
            <label className="block font-elegant text-sm mb-3 text-foreground">
              Preferred Date & Time
            </label>
            <Input 
              type="datetime-local"
              value={formData.date}
              onChange={(e) => handleChange('date', e.target.value)}
              className="font-elegant border-0 bg-background shadow-sm"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block font-elegant text-sm mb-3 text-foreground">
              Additional Details
            </label>
            <Textarea 
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
              className="font-elegant border-0 bg-background shadow-sm min-h-[120px] resize-none"
              placeholder="Tell us about your event, preferred style, or any special requirements..."
            />
          </div>

          {/* Submit Button */}
          <div className="text-center pt-6">
            <Button type="submit" className="btn-luxury min-w-[250px]">
              Book Now
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookingSection;