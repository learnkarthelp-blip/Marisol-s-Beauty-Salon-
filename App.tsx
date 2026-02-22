import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import BookingForm from './components/BookingForm';
import GallerySection from './components/GallerySection';
import ReviewsSection from './components/ReviewsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <BookingForm />
      <GallerySection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
