export default function Contact() {
  return (
    <section id="contact" className="bg-neutral-950 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Get in Touch
        </h2>
        <p className="mt-4 text-white/60">
          Ready to find your dream home? Contact our team today.
        </p>
        <div className="mt-10">
          <a
            href="mailto:info@esashomes.com"
            className="inline-block rounded-md bg-[--color-brand] px-8 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-[--color-brand-dark]"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
