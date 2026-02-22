const galleryImages = [
  {
    src: '/assets/generated/gallery-transformation-1.dim_800x600.png',
    alt: 'Hair Transformation - Before and After',
    category: 'transformation',
  },
  {
    src: '/assets/generated/gallery-transformation-2.dim_800x600.png',
    alt: 'Hair Transformation - Volume and Styling',
    category: 'transformation',
  },
  {
    src: '/assets/generated/gallery-interior-1.dim_800x600.png',
    alt: 'Salon Interior - Reception Area',
    category: 'interior',
  },
  {
    src: '/assets/generated/gallery-interior-2.dim_800x600.png',
    alt: 'Salon Interior - Styling Stations',
    category: 'interior',
  },
];

export default function GallerySection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4">
            Our Gallery
          </h2>
          <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
            Explore our transformations and beautiful salon space
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-xl group cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white text-lg font-medium p-6">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
