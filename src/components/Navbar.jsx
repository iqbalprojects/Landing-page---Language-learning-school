import React, { useState, useEffect } from "react";
import LogoIcon from "./icons/LogoIcon";
import { Link } from "react-router-dom";
import Button from "./Button";
import clsx from "clsx";

function Navbar() {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            const position = window.pageYOffset;
            setScrollPosition(position);
        });
    }, []);
    return (
        <header
            className={clsx(
                scrollPosition < 30 && "mt-[71px]",
                "w-full z-10 fixed transition-all flex justify-center"
            )}
        >
            <div
                className={clsx(
                    scrollPosition < 755 ? "bg-secondary" : "bg-white",
                    "w-full py-3 mx-8 rounded-b-[40px] transition-all"
                )}
            >
                <div className="container mx-auto  flex items-center justify-between">
                    <Link
                        to={"/"}
                        className="flex items-center text-lg font-bold"
                    >
                        <LogoIcon className="mr-3" to="navbar" />
                        <span>Lingua</span>
                    </Link>
                    <ul className="flex space-x-6 text-body">
                        {[
                            "Courses",
                            "About Us",
                            "Teachers",
                            "Pricing",
                            "Careers",
                            "Blog",
                        ].map((item, index) => (
                            <MenuItem
                                key={index}
                                text={item}
                                href={
                                    "/" +
                                    item.toLocaleLowerCase().replace(/\s/, "")
                                }
                            />
                        ))}
                    </ul>
                    <Button type="secondary" size="small">
                        Get Started
                    </Button>
                </div>
            </div>
        </header>
    );

    function MenuItem({ text = "", href = "" }) {
        return (
            <li>
                <Link className="text-sm leading-6 font-light" to={href}>
                    {text}
                </Link>
            </li>
        );
    }
}

export default Navbar;
