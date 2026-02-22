import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const reviews = [
  {
    name: 'Sarah Martinez',
    rating: 5,
    text: 'Marisol is absolutely amazing! She transformed my hair and gave me exactly what I wanted. The salon is beautiful and the service is top-notch. Highly recommend!',
  },
  {
    name: 'Jennifer Lopez',
    rating: 5,
    text: 'Best salon experience I\'ve had in years. Marisol really listens to what you want and delivers exceptional results. The atmosphere is so welcoming and relaxing.',
  },
  {
    name: 'Maria Garcia',
    rating: 4,
    text: 'Great service and beautiful results! Marisol is very professional and skilled. My hair color came out perfect. Will definitely be coming back!',
  },
  {
    name: 'Amanda Chen',
    rating: 5,
    text: 'I\'ve been going to Marisol for over a year now and I wouldn\'t trust anyone else with my hair. She\'s talented, friendly, and always makes me feel beautiful.',
  },
];

export default function ReviewsSection() {
  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-6">
            What Our Clients Say
          </h2>
          
          {/* Overall Rating */}
          <div className="flex flex-col items-center gap-3 mb-4">
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4].map((star) => (
                <Star key={star} className="w-8 h-8 fill-rosegold text-rosegold" />
              ))}
              <Star className="w-8 h-8 fill-rosegold text-rosegold opacity-60" />
            </div>
            <div className="text-3xl font-bold text-charcoal">4.6 out of 5</div>
            <p className="text-lg text-charcoal/70">Based on Google Reviews</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <Card key={index} className="border-2 border-rosegold/20 hover:border-rosegold transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < review.rating
                          ? 'fill-rosegold text-rosegold'
                          : 'fill-gray-200 text-gray-200'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-charcoal/80 leading-relaxed mb-4 italic">
                  "{review.text}"
                </p>
                <p className="font-semibold text-charcoal">— {review.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
