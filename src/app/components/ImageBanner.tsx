export function ImageBanner() {
  return (
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="aspect-[4/5] overflow-hidden rounded-[2rem]">
          <img 
            src="/yigit-arisoy-4oD8ZtnKbn8-unsplash.jpg" 
            alt="Nail Art Inspiration 1" 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
        <div className="aspect-[4/5] overflow-hidden rounded-[2rem]">
          <img 
            src="/shoham-avisrur-SBSeFdJouZU-unsplash.jpg" 
            alt="Nail Art Inspiration 2" 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
