import React from "react";
import LogoIcon from "./icons/LogoIcon";
import { Link } from "react-router-dom";
import FacebookIcon from "./icons/FacebookIcon";
import TwitterIcon from "./icons/TwitterIcon";
import InstagramIcon from "./icons/InstagramIcon";

function Foooter() {
    return (
        <section className="container mx-auto flex justify-between items-start gap-[105px] px-[69px] pt-[52px] mb-[89px] pb-[108px] bg-[#F8FAFE]">
            <div className="w-2/12">
                <Link to={"/"} className="flex items-center text-lg font-bold">
                    <LogoIcon className="mr-3" to="footer" />
                    <span>Lingua</span>
                </Link>
                <p className="font-light text-xs leading-6 mt-8 text-[#B0B0C0]">
                    20 Osgood Rd, Milford, NH 03055, USA +1283871239190213021
                </p>
            </div>
            <div className="">
                <p className="font-semibold text-primary-100 mb-6">Company</p>
                <ul className="font-light text-sm leading-6 text-[#B0B0C0] flex flex-col gap-2">
                    <li>
                        <Link>Careers</Link>
                    </li>
                    <li>
                        <Link>Teachers</Link>
                    </li>
                    <li>
                        <Link>Support</Link>
                    </li>
                    <li>
                        <Link>Contact</Link>
                    </li>
                </ul>
            </div>
            <div className="">
                <p className="font-semibold text-primary-100 mb-6">Product</p>
                <ul className="font-light text-sm leading-6 text-[#B0B0C0] flex flex-col gap-2">
                    <li>
                        <Link>Courses</Link>
                    </li>
                    <li>
                        <Link>Pricing</Link>
                    </li>
                    <li>
                        <Link>Blog</Link>
                    </li>
                </ul>
            </div>
            <div className="">
                <p className="font-semibold text-primary-100 mb-6">Legal</p>
                <ul className="font-light text-sm leading-6 text-[#B0B0C0] flex flex-col gap-2">
                    <li>
                        <Link>Terms & Conditions</Link>
                    </li>
                    <li>
                        <Link>Privacy policy</Link>
                    </li>
                </ul>
            </div>
            <div className="flex gap-3">
                <a
                    href="https://facebook.com"
                    className="h-[41px] aspect-1 outline outline-[#B0B0C0] rounded-full grid place-content-center"
                >
                    <FacebookIcon />
                </a>
                <a
                    href="https://twitter.com"
                    className="h-[41px] aspect-1 outline outline-[#B0B0C0] rounded-full grid place-content-center"
                >
                    <TwitterIcon />
                </a>
                <a
                    href="https://instagram.com"
                    className="h-[41px] aspect-1 outline outline-[#B0B0C0] rounded-full grid place-content-center"
                >
                    <InstagramIcon />
                </a>
            </div>
        </section>
    );
}

export default Foooter;
