import React from "react";
import Button from "./Button";

function FormEmail() {
    return (
        <section className="container mx-auto mt-9 pt-52">
            <div className="text-center">
                <h2 className="font-light text-5xl leading-[130%] text-primary-100">
                    Get a free trial lesson today
                </h2>
                <p className="font-light text-lg leading-[190%] text-[#B0B0C0] mt-4">
                    Start fulfilling your language dreams with our school
                </p>
            </div>
            <form
                action=""
                className="flex gap-5 justify-center items-center mt-14 mb-40"
            >
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-[#F8FAFE] w-[410px] h-16 px-8 rounded-full"
                />
                <Button type="primary" size="large">
                    Send
                </Button>
            </form>
        </section>
    );
}

export default FormEmail;
