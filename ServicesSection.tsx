import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    title: 'Haircut & Styling',
    description: 'Expert cuts and styling tailored to your face shape and lifestyle. From classic to contemporary, we create looks that enhance your natural beauty.',
    price: 'Starting at $45',
    image: '/assets/generated/service-haircut.dim_400x400.png',
  },
  {
    title: 'Hair Coloring',
    description: 'Professional color services including highlights, balayage, ombre, and full color. We use premium products for vibrant, long-lasting results.',
    price: 'Starting at $85',
    image: '/assets/generated/service-coloring.dim_400x400.png',
  },
  {
    title: 'Hair Treatments',
    description: 'Revitalizing treatments to restore health and shine. Deep conditioning, keratin treatments, and repair services for damaged hair.',
    price: 'Starting at $60',
    image: '/assets/generated/service-treatment.dim_400x400.png',
  },
  {
    title: 'Blow Dry',
    description: 'Professional blow dry styling for any occasion. Achieve salon-perfect volume, smoothness, and shine that lasts.',
    price: 'Starting at $35',
    image: '/assets/generated/service-blowdry.dim_400x400.png',
  },
  {
    title: 'Beauty Services',
    description: 'Complete beauty services including makeup application, eyebrow shaping, and special occasion styling to complete your look.',
    price: 'Starting at $40',
    image: '/assets/generated/service-beauty.dim_400x400.png',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4">
            Our Services
          </h2>
          <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
            Discover our range of professional hair and beauty services designed to make you look and feel your best
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-2 border-cream hover:border-rosegold transition-all duration-300 hover:shadow-xl group"
            >
              <CardHeader className="p-0">
                <div className="overflow-hidden rounded-t-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-2xl font-serif text-charcoal mb-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-charcoal/70 mb-4 leading-relaxed">
                  {service.description}
                </CardDescription>
                <p className="text-lg font-semibold text-rosegold">{service.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
