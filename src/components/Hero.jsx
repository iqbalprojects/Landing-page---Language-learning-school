import React from "react";
import hero from "/hero.png";
import avatar from "/avatar.png";
import Button from "./Button";

function Hero() {
    return (
        <section className="container mx-auto py-3 flex items-center">
            <div className="flex-1">
                <h1 className="font-light text-[56px] leading-[126%] w-8/12">
                    A{" "}
                    <span className="text-primary-200 font-medium">unique</span>{" "}
                    approach to learning foreign languages online
                </h1>
                <p className="mt-[18px] mb-8 font-light text-lg leading-[190%] w-5/12 text-body">
                    Learn at your own pace, with lifetime access on mobile and
                    desktop
                </p>
                <Button type="primary" size="large">
                    Get Started
                </Button>
            </div>
            <div className="flex-1 relative flex justify-end mr-3">
                <div className="w-[534px] aspect-1 bg-[#FFD6B0]/30 rounded-[60px] -rotate-[4.37deg]">
                    <div className="w-[534px] aspect-1 bg-[#FFD6B0] rounded-[60px] rotate-[10deg] overflow-hidden">
                        <img
                            src={hero}
                            alt="hero"
                            className="scale-[1.15] absolute -rotate-[10deg] -bottom-2 right-2"
                        />
                    </div>
                </div>
                <div className="bg-white absolute flex items-center py-3 px-5 rounded-[19px] left-36 top-14 animate-bounce">
                    <img
                        className="rounded-full w-12 outline outline-[#E8E8F6]"
                        src={avatar}
                        alt="avatar"
                    />
                    <div className="ml-4">
                        <p className="text-primary-100 font-bold text-sm leading-7">
                            Jane Cooper
                        </p>
                        <p className="text-body font-normal text-xs leading-7">
                            I loved the Italian course!
                        </p>
                    </div>
                </div>
                <div className="bg-white absolute flex flex-col items-center py-[22px] px-5 rounded-[21px] -right-12 top-40 animate-bounce">
                    <p className="text-primary-200 font-bold text-lg leading-[30px]">
                        10+ Courses
                    </p>
                    <p className="text-body font-normal text-xs leading-6">
                        Multiple Categories
                    </p>
                </div>
                <div className="bg-white absolute flex flex-col py-[22px] px-5 rounded-[29px] right-24 -bottom-16 animate-bounce">
                    <ul className="flex items-center -space-x-3">
                        {Array.from(Array(5).keys()).map((img) => (
                            <li key={img}>
                                <img
                                    className="rounded-full w-12 outline outline-white"
                                    src={avatar}
                                    alt="avatar"
                                />
                            </li>
                        ))}
                        <li
                            className="w-12 h-12 bg-[#E8E8F6] rounded-full outline outline-white flex items-center justify-center text-primary-200 font-bold text-sm leading-6
                            ]"
                        >
                            + 50
                        </li>
                    </ul>
                    <p className="text-body  font-normal text-xs leading-6 mt-2">
                        Dedicated students per day
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Hero;
