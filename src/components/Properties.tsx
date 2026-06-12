export default function Properties() {
  return (
    <section id="properties" className="bg-neutral-950 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Featured Properties
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-white/60">
          Explore our curated selection of premium properties.
        </p>

        {/* Property grid — replace with real data */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <article
              key={i}
              className="group overflow-hidden rounded-lg bg-neutral-900 transition-transform hover:-translate-y-1"
            >
              <div className="aspect-[4/3] bg-neutral-800" />
              <div className="p-6">
                <h3 className="text-lg font-semibold">Property {i}</h3>
                <p className="mt-2 text-sm text-white/50">
                  Premium location with modern amenities.
                </p>
                <p className="mt-4 text-lg font-bold text-[--color-brand]">
                  Contact for Price
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
