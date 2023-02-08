import React, { useState } from "react";
import Slider from "react-slick";
import ArrowIcon from "./icons/ArrowIcon";
import mask from "/mask.png";
import mask2 from "/mask2.png";
import mask3 from "/mask3.png";
import italy from "/italy.png";
import spain from "/spain.png";
import uk from "/uk.png";

function SampleNextArrow({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="w-14 aspect-1 absolute -top-20 right-0 bg-primary-200 outline outline-1 outline-primary-200 rounded-full"
        >
            <ArrowIcon className="rotate-180 mx-auto" />
        </button>
    );
}

function SamplePrevArrow({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="w-14 aspect-1 absolute -top-20 right-20 outline outline-1 outline-[#E8E8F6] rounded-full"
        >
            <ArrowIcon className="mx-auto" />
        </button>
    );
}

function Arrows() {
    const [teachers, setTeachers] = useState([
        {
            img: mask,
            flag: italy,
            name: "Christian Howard",
            title: "Italian teacher",
        },
        {
            img: mask2,
            flag: spain,
            name: "Sandra Wilson",
            title: "Spanish teacher",
        },
        {
            img: mask3,
            flag: uk,
            name: "Jimmy Cooper",
            title: "English teacher",
        },
        {
            img: mask,
            flag: italy,
            name: "Christian Howard",
            title: "Italian teacher",
        },
        {
            img: mask2,
            flag: spain,
            name: "Sandra Wilson",
            title: "Spanish teacher",
        },
        {
            img: mask3,
            flag: uk,
            name: "Jimmy Cooper",
            title: "English teacher",
        },
    ]);

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    return (
        <section className="container mx-auto mt-60 relative">
            <div className="mb-[59px]">
                <p className="font-bold text-lg leading-[190%] text-[#B0B0C0]">
                    key persons
                </p>
                <h2 className="font-light text-5xl leading-[130%] text-primary-100 mt-1">
                    Meet our teachers
                </h2>
            </div>

            <Slider {...settings}>
                {teachers.map((person, index) => (
                    <div key={index} className="scale-90">
                        <img src={person.img} alt="" />
                        <div className="mt-10">
                            <h5 className="">{person.name}</h5>
                            <div className="flex items-end">
                                <img
                                    src={person.flag}
                                    alt=""
                                    className="w-[34px] aspect-1"
                                />
                                <p className="pb-0.5 text-[#666680]">
                                    {person.title}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
}

export default Arrows;
