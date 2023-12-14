"use client";
import React from "react";
import Container from "../common/Container";
import LiveMatchesCard from "../common/LiveMatchesCard";
import { LiveHighlights } from "./LiveHighlights";
import { TrendingHiglights } from "./TrendingHiglights";
import { User } from "@/graphql/generated/schema";
interface HomeProp {
    authUser: User;
}
const Home = ({ authUser }: HomeProp) => {
    return (
        <Container>
            <div className="flex flex-col gap-4">
                <LiveHighlights />
                <TrendingHiglights />
                <LiveHighlights />
                <LiveHighlights />
            </div>
        </Container>
    );
};

export default Home;
