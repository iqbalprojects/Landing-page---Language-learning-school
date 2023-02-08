import React from "react";
import Slider from "react-slick";
import ArrowIcon from "./icons/ArrowIcon";
import { dataTeachers } from "./../model/datateachers";

function Arrows2({ slider }) {
    function next() {
        slider.slickNext();
    }
    function previous() {
        slider.slickPrev();
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };
    return (
        <section className="container mx-auto mt-60">
            <div className="flex justify-between items-center">
                <div className="mb-[59px]">
                    <p className="font-bold text-lg leading-[190%] text-[#B0B0C0]">
                        key persons
                    </p>
                    <h2 className="font-light text-5xl leading-[130%] text-primary-100 mt-1">
                        Meet our teachers
                    </h2>
                </div>
                <div className="flex gap-[30px]">
                    <button
                        onClick={previous}
                        className="w-14 aspect-1 outline outline-1 outline-[#E8E8F6] rounded-full"
                    >
                        <ArrowIcon className="mx-auto" />
                    </button>
                    <button
                        onClick={next}
                        className="w-14 aspect-1 bg-primary-200 outline outline-1 outline-primary-200 rounded-full"
                    >
                        <ArrowIcon className="rotate-180 mx-auto" />
                    </button>
                </div>
            </div>

            <Slider ref={(c) => (slider = c)} {...settings}>
                {dataTeachers.map((teacher, index) => (
                    <div key={index} className="scale-90">
                        <img src={teacher.img} alt="" />
                        <div className="mt-10">
                            <h5 className="">{teacher.name}</h5>
                            <div className="flex items-end">
                                <img
                                    src={teacher.flag}
                                    alt=""
                                    className="w-[34px] aspect-1"
                                />
                                <p className="pb-0.5 text-[#666680]">
                                    {teacher.title}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
}

export default Arrows2;
