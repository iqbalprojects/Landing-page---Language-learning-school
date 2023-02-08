import React from "react";
import glassicon from "/glass icon.png";
import glassicon2 from "/glass icon2.png";
import glassicon3 from "/glass icon3.png";

function Values() {
    return (
        <section className="container mx-auto mt-[200px]">
            <div className="text-center flex flex-col mb-[88px]">
                <p
                    className="font-bold text-lg leading-[190%] text-[#B0B0C0]
]]"
                >
                    WHY CHOOSE US
                </p>
                <h2 className="font-light text-5xl leading-[130%] text-primary-100 mt-1">
                    Our values
                </h2>
            </div>
            <div className="flex items-end justify-center">
                <ValueItem
                    src={glassicon}
                    title="Speaking clubs"
                    mb="mb-[47px]"
                    px="px-[120px]"
                >
                    In our school you will practice your speaking skills and
                    just get a lot of positive emotions!
                </ValueItem>
                <ValueItem
                    src={glassicon2}
                    title="Quality control"
                    mb="mb-[46px]"
                    px="px-[120px]"
                >
                    A huge work has been done with the teachers and their work
                    has been monitored thoroughly.
                </ValueItem>
                <ValueItem
                    src={glassicon3}
                    title="Progress analysis"
                    mb="mb-[45px]"
                    px="px-[100px]"
                >
                    The CEF of Reference has been used at our school. It allows
                    to control our students’ success in studying.
                </ValueItem>
            </div>
        </section>
    );

    function ValueItem({ src, title, mb, px, children }) {
        return (
            <div className={px}>
                <div className="flex flex-col flex-1 items-center">
                    <img
                        src={src}
                        alt={src.replace("/", "").replace(".png", "")}
                        width="80px"
                        className={mb}
                    />
                    <h5 className="font-medium text-2xl leading-9 text-primary-100 mb-4">
                        {title}
                    </h5>
                    <p className="font-light text-lg leading-[190%] text-center">
                        {children}
                    </p>
                </div>
            </div>
        );
    }
}

export default Values;
