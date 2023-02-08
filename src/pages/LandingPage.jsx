import React from "react";
import Carousel from "../components/Carousel";
import Arrows from "../components/Arrows";
import FormEmail from "../components/FormEmail";
import Hero from "../components/Hero";
import Questions from "../components/Questions";
import Students from "../components/Students";
import Teachers from "../components/Teachers";
import Values from "../components/Values";
import Arrows2 from "../components/Arrows2";
import Carousel2 from "../components/Carousel2";
import Carousel3 from "../components/Carousel3";

function LandingPage() {
    document.title = "Landing Page";
    return (
        <section className="p-8">
            <div className="min-h-[800px] bg-secondary rounded-[40px] pt-40">
                <Hero />
            </div>
            <Values />
            {/* <Teachers /> */}
            {/* <Arrows /> */}
            {/* <Carousel /> */}
            {/* <Students /> */}
            {/* <Carousel2 /> */}
            <Arrows2 />
            <Carousel3 />
            <Questions />
            <FormEmail />
        </section>
    );
}

export default LandingPage;
