import { lazy, Suspense, useState, useEffect } from "react";
import Navbar from "./components/Navbar";

const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const WhoWeAre = lazy(() => import("./components/WhoWeAre"));
const Vision = lazy(() => import("./components/Vision"));
const Focus = lazy(() => import("./components/Focus"));
const WhyJoinUs = lazy(() => import("./components/WhyJoinUs"));
const CTA = lazy(() => import("./components/CTA"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="h-12 w-12 rounded-full border-4 border-primary border-t-transparent animate-[spin_1s_linear_infinite]"></div>
  </div>
);

export default function InvestoalHero() {
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  if (isInitialLoading) {
    return (
      <>
        <Navbar />
        <LoadingSpinner />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <Suspense fallback={<LoadingSpinner />}>
        <Hero />
        <About />
        <WhoWeAre />
        <Vision />
        <Focus />
        <WhyJoinUs />
        <CTA />
        <Contact />
        <Footer />
      </Suspense>
    </>
  );
}
