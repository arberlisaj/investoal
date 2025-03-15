import { lazy, Suspense, useEffect, useState } from "react";

const Navbar = lazy(() => import("./Navbar"));
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Vision = lazy(() => import("../components/Vision"));
const JoinUs = lazy(() => import("../components/JoinUs"));
const Focus = lazy(() => import("../pages/Focus"));
const Contact = lazy(() => import("../pages/Contact"));
const Sponsors = lazy(() => import("../components/Sponsors"));
const Footer = lazy(() => import("./Footer"));

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary border-gray-300"></div>
  </div>
);

const Layout = () => {
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
        <Home />
        <About />
        <Vision />
        <Focus />
        <JoinUs />
        <Sponsors />
        <Contact />
        <Footer />
      </Suspense>
    </>
  );
};

export default Layout;
