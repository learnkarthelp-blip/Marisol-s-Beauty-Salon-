import { Star } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="order-2 md:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/assets/generated/about-marisol.dim_800x600.png"
                alt="Marisol - Professional Hairstylist"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-6">
              Meet Marisol
            </h2>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[1, 2, 3, 4].map((star) => (
                  <Star key={star} className="w-6 h-6 fill-rosegold text-rosegold" />
                ))}
                <Star className="w-6 h-6 fill-rosegold text-rosegold opacity-60" />
              </div>
              <span className="text-xl font-semibold text-charcoal">4.6 Stars</span>
            </div>

            <div className="space-y-4 text-lg text-charcoal/80 leading-relaxed">
              <p>
                Welcome to Marisol's Beauty Salon, where your beauty transformation begins. 
                With years of experience and a passion for hairstyling, Marisol is dedicated 
                to bringing out the best in every client who walks through our doors.
              </p>
              <p>
                Our salon combines professional techniques with a warm, friendly atmosphere 
                that makes every visit a delightful experience. We take pride in our strong 
                local reputation and the trust our clients place in us.
              </p>
              <p className="font-medium text-rosegold">
                Your satisfaction is our priority, and your beauty is our passion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
