import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'marisols-beauty-salon';

  return (
    <footer className="bg-charcoal text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-sm text-white/80">
            © {currentYear} Marisol's Beauty Salon. All rights reserved.
          </p>
          <p className="text-sm text-white/60 mt-2 flex items-center justify-center gap-1">
            Built with <Heart className="h-4 w-4 fill-rosegold text-rosegold inline" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-rosegold hover:text-rosegold-dark transition-colors underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
