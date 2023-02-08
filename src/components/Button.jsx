import React from "react";

function Button({ type, size, children }) {
    return (
        <button
            className={
                type == "primary" && size == "large"
                    ? "text-white bg-primary-200 hover:bg-primary-300 duration-300 rounded-[73px] py-[17px] px-8 text-lg font-bold leading-[29.61px]"
                    : type == "primary" && size == "small"
                    ? "text-white bg-primary-200 hover:bg-primary-300 duration-300 rounded-[73px] py-3 px-8 text-sm font-bold leading-7"
                    : type == "secondary" && size == "large"
                    ? "text-primary-200 bg-white rounded-[73px] py-[17px] px-8 text-lg font-bold leading-[29.61px]"
                    : type == "secondary" &&
                      size == "small" &&
                      "text-primary-200 bg-white rounded-[73px] py-3 px-8 text-sm font-bold leading-7"
            }
        >
            {children}
        </button>
    );
}

export default Button;
