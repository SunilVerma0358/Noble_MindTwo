"use client";
import { useEffect, useState } from "react";
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
    const [Loader, setLorder] = useState(false);
    useEffect(() => {
        setLorder(true);
        setTimeout(() => {
            setLorder(false);
        }, 3500);
    }, []);
    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: true,
        });
    }, []);
    return ( <
        > { " " } {
            Loader ? ( <
                Preloader / >
            ) : ( <
                >
                <
                HeaderSection / >
                <
                About / >
                <
                Choose / >
                <
                Contact / >
                <
                Faqaccordion / >
                <
                FooterSection / >
                <
                BackToTop / >
                <
                />
            )
        } { " " } <
        />
    );
}