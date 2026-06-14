import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Properties from "@/components/Properties";
import Contact from "@/components/Contact";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Properties />
      <Contact />
      <WhyChooseUs />
      <Testimonials />
      <Blog />
      <Footer />
    </>
  );
}
