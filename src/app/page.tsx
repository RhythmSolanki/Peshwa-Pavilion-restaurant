import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Experience from "@/components/Experience";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Hours from "@/components/Hours";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-off-white text-rich-charcoal flex-1">
        <Hero />
        <About />
        <Menu />
        <Experience />
        <Gallery />
        <Reviews />
        <Hours />
        <Location />
      </main>
      <Footer />
    </>
  );
}
