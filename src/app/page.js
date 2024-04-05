"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./components/About";
import BackToTop from "./components/BackToTop";
import Choose from "./components/Choose";
import Contact from "./components/Contact";
import Faqaccordion from "./components/Faqaccordion";
import FooterSection from "./components/FooterSection";
import HeaderSection from "./components/HeaderSection";
import Preloader from "./components/Preloader";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);
  return (
    <>
      <HeaderSection />
      <About />
      <Choose />
      <Contact />
      <Faqaccordion />
      <FooterSection />
      <BackToTop /> <Preloader />
    </>
  );
}
