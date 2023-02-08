import React from "react";

function AddIcon({ bg }) {
    return (
        <div className="relative">
            <span
                className={
                    bg == "primary-200"
                        ? `hidden`
                        : `w-[10.86px] h-[1.09px] bg-${bg} rounded-sm rotate-90 block`
                }
            ></span>
            <span
                className={
                    bg == "primary-200"
                        ? `w-[10.86px] h-[1.09px] bg-${bg} rounded-sm block`
                        : `w-[10.86px] h-[1.09px] bg-${bg} rounded-sm block absolute top-0`
                }
            ></span>
        </div>
    );
}

export default AddIcon;
