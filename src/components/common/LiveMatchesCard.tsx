import Image from "next/image";
import React from "react";
import { MdSportsCricket } from "react-icons/md";

const LiveMatchesCard = () => {
    return (
        <div className="rounded-lg bg-header p-4 lg:w-[300px] flex flex-col gap-4">
            <div className="flex justify-between">
                <h3 className="flex gap-2 items-center">
                    <span>
                        <MdSportsCricket />
                    </span>
                    World Cup 2023
                </h3>
                <h3>Today-23:00</h3>
            </div>
            <div className="flex justify-around">
                <h3 className="flex gap-2 items-center">
                    <Image
                        src="/img/aus.png"
                        alt="teaam"
                        width={20}
                        height={20}
                    />
                    Australia
                </h3>
                VS
                <h3 className="flex gap-2 items-center">
                    <Image
                        src="/img/tunisia.png"
                        alt="teaam"
                        width={20}
                        height={20}
                    />
                    Tensia
                </h3>
            </div>
            <div className="flex justify-around">
                <span className="bg-heading p-2 rounded-lg">2.5</span>
                <span className="bg-heading p-2 rounded-lg">1.5</span>
            </div>
        </div>
    );
};

export default LiveMatchesCard;
