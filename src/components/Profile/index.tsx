"use client";
import React, { useContext } from "react";
import Container from "../common/Container";
import { CMSModal } from "@/context";
import { Chart } from "react-google-charts";
import { PrimaryButton } from "../common/PrimaryButton";
import { User } from "@/graphql/generated/schema";

interface ProfileProp {
    authUser: User;
}
export const Profile = ({ authUser }: ProfileProp) => {
    const data = [
        ["Task", "Amount spent"],
        ["Credit Limit", authUser?.creditLimit],
        ["Amount Spent", 12000],
    ];

    const options = {
        title: "My Daily Activities",
        is3D: true,
        backgroundColor: "transparent",
        titleTextStyle: { color: "#FFF" },
        legend: "none",
        pieSliceText: "label",
        pieStartAngle: 100,
    };

    return (
        <Container>
            <div className="bg-header p-6 flex flex-col gap-4">
                <div className="flex flex-col justify-evenly gap-4 md:flex-row md:items-center">
                    <div className="flex flex-col gap-2">
                        <div className="font-semibold flex gap-2">
                            UserName:
                            <span className="text-primary">
                                {authUser?.userName}
                            </span>
                        </div>
                        <div className="font-semibold flex gap-2">
                            Joined{" "}
                            <span className="text-primary">
                                {authUser?.createdAt}
                            </span>
                        </div>
                    </div>
                    <div className="max-w-[200px]">
                        <PrimaryButton label="Change Password" type="button" />
                    </div>
                </div>
                <Chart
                    chartType="PieChart"
                    data={data}
                    options={options}
                    width={"100%"}
                    height={"400px"}
                />
            </div>
        </Container>
    );
};
