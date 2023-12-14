"use client";
import { getCookies } from "@/utils/cookies";
import {
    ApolloClient,
    ApolloProvider,
    HttpLink,
    InMemoryCache,
} from "@apollo/client";

const cache = new InMemoryCache();
export const Provider = ({ children }: { children: React.ReactNode }) => {
    const token = getCookies("token");
    const client = new ApolloClient({
        link: new HttpLink({
            uri: process.env.NEXT_PUBLIC_API_URL,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }),
        cache: cache,
    });
    return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
