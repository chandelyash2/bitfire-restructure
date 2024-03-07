"use client";
import React from "react";
import Container from "../common/Container";
import LiveMatchesCard from "../common/LiveMatchesCard";
import { LiveHighlights } from "./LiveHighlights";
import { User, useInPlayQuery } from "@/graphql/generated/schema";
import { Loader } from "../common/Loader";
interface HomeProp {
    authUser: User;
}
const Home = ({ authUser }: HomeProp) => {
    const { data, loading } = useInPlayQuery();
    const inPlayData = data?.inPlay;
    return (
        <Container>
            <div className="flex flex-col gap-4">
                {inPlayData?.map(
                    item =>
                        item?.eventType &&
                        item?.event && (
                            <LiveHighlights
                                key={item?.eventType?.id}
                                event={item?.event}
                                eventType={item?.eventType}
                            />
                        )
                )}
            </div>
            {loading && <Loader />}
        </Container>
    );
};

export default Home;
