import React from "react";
import HashLoader from "react-spinners/HashLoader";
const img = "/home.jpg";

export const Loader = () => {
    return (
        <div
            className="fixed z-1 left-0 top-0 w-full h-full overflow-auto bg-cover "
            style={{ backgroundImage: `url(${img})` }}
        >
            <div className="relative left-[40%] lg:left-[50%] top-[45%]">
                <HashLoader size={60} color="#b72576" />
            </div>
        </div>
    );
};
