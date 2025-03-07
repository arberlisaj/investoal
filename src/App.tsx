import About from "./components/About";
import Contact from "./components/Contact";
import CTA from "./components/CTA";
import Focus from "./components/Focus";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Vision from "./components/Vision";
import WhoWeAre from "./components/WhoWeAre";
import WhyJoinUs from "./components/WhyJoinUs";

export default function InvestoalHero() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <WhoWeAre />
      <Vision />
      <Focus />
      <WhyJoinUs />
      <CTA />
      <Contact />
      <Footer />
    </>
  );
}
