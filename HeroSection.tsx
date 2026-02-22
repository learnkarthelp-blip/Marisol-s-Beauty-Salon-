import { Button } from '@/components/ui/button';
import { Phone, Calendar } from 'lucide-react';

export default function HeroSection() {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking-form');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-salon-interior.dim_1920x1080.png"
          alt="Marisol's Beauty Salon Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
          Enhancing Your Natural Beauty
          <br />
          <span className="text-rosegold">with Style & Care</span>
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-white/90 font-light tracking-wide">
          Professional Hair & Beauty Services in San Fernando, CA
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            onClick={scrollToBooking}
            className="bg-rosegold hover:bg-rosegold-dark text-white px-8 py-6 text-lg font-medium rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Book Appointment
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg font-medium rounded-full shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <a href="tel:7472798532">
              <Phone className="mr-2 h-5 w-5" />
              Call Now – (747) 279-8532
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
