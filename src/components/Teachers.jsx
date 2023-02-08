import React from "react";
import ArrowIcon from "./icons/ArrowIcon";
import mask from "/mask.png";
import mask2 from "/mask2.png";
import mask3 from "/mask3.png";
import italy from "/italy.png";
import spain from "/spain.png";
import uk from "/uk.png";

function Teachers() {
    return (
        <section className="container mx-auto mt-60">
            <div className="flex justify-between items-center">
                <div>
                    <p className="font-bold text-lg leading-[190%] text-[#B0B0C0]">
                        key persons
                    </p>
                    <h2 className="font-light text-5xl leading-[130%] text-primary-100 mt-1">
                        Meet our teachers
                    </h2>
                </div>
                <div className="flex gap-[30px]">
                    <button className="w-14 aspect-1 outline outline-1 outline-[#E8E8F6] rounded-full">
                        <ArrowIcon className="mx-auto" />
                    </button>
                    <button className="w-14 aspect-1 bg-primary-200 outline outline-1 outline-primary-200 rounded-full">
                        <ArrowIcon className="rotate-180 mx-auto" />
                    </button>
                </div>
            </div>
            <div className="flex justify-between mt-[59px]">
                {[
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
                ].map((person, index) => (
                    <div key={index}>
                        <img
                            src={person.img}
                            alt=""
                            height={"417px"}
                            width={"366.13px"}
                        />
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
            </div>
        </section>
    );
}

export default Teachers;
