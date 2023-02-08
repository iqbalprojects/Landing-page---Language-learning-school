import React, { useState } from "react";
import Slider from "react-slick";
import student from "/student.jpeg";
import student2 from "/student2.jpeg";
import student3 from "/student3.jpeg";
import spain from "/spain.png";
import italy from "/italy.png";
import uk from "/uk.png";
import DotIcon from "./icons/DotIcon";

function Carousel2() {
    const [cards, setCards] = useState("#card1");
    const [students, setStudents] = useState([
        {
            img: student,
            flag: spain,
            name: "Martion Watson",
            title: "B2 course student",
            desc: "There is no way I could have made the same progress learning Spanish without using Lingua. The best part is now learning Spanish has become one of my biggest hobbies.",
        },
        {
            img: student2,
            flag: italy,
            name: "Sandra Wilson",
            title: "B2 course student",
            desc: "There is no way I could have made the same progress learning Spanish without using Lingua. The best part is now learning Spanish has become one of my biggest hobbies.",
        },
        {
            img: student3,
            flag: uk,
            name: "Jimmy Cooper",
            title: "B2 course student",
            desc: "There is no way I could have made the same progress learning Spanish without using Lingua. The best part is now learning Spanish has become one of my biggest hobbies.",
        },
    ]);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    function card(index) {
        setCards("#card" + index);
    }
    return (
        <section className="container mx-auto mt-60">
            <div>
                <p className="font-bold text-lg leading-[190%] text-[#B0B0C0]">
                    TOP STUDIYING
                </p>
                <h2 className="font-light text-5xl leading-[130%] text-primary-100 mt-1">
                    Our students say
                </h2>
            </div>

            <Slider {...settings}>
                {students.map(
                    (student, index) =>
                        cards == `#card${index + 1}` && (
                            <div key={index} id={"#card" + (index + 1)}>
                                <div className="flex justify-between items-center gap-32 mt-[59px]">
                                    <img
                                        src={student.img}
                                        alt={student.name}
                                        width={"502px"}
                                        height={"633px"}
                                        className="rounded-[60px]"
                                    />
                                    <div className="w-6/12">
                                        <h3 className="font-bold text-[32px] leading-[36px] text-primary-100">
                                            {student.name}
                                        </h3>
                                        <div className="flex items-end mt-[19px]">
                                            <img
                                                src={student.flag}
                                                alt=""
                                                className="w-[34px] aspect-1"
                                            />
                                            <p className="pb-0.5 text-[#666680]">
                                                {student.title}
                                            </p>
                                        </div>
                                        <h4 className="mt-[50px] font-light text-[26px] leading-[180%]">
                                            {student.desc}
                                        </h4>
                                        <div className="flex gap-2 mt-20">
                                            {students.map((item, index) => (
                                                <a
                                                    onClick={() => {
                                                        card(index + 1);
                                                    }}
                                                    href={"#card" + (index + 1)}
                                                >
                                                    {`#card${index + 1}` ==
                                                    cards ? (
                                                        <DotIcon
                                                            className="bg-primary-200"
                                                            key={index}
                                                        />
                                                    ) : (
                                                        <DotIcon
                                                            className="bg-[#E8E8F6]"
                                                            key={index}
                                                        />
                                                    )}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                )}
            </Slider>
        </section>
    );
}

export default Carousel2;
