"use client";
import { getCookies } from "@/utils/cookies";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

export const Provider = ({ children }: { children: React.ReactNode }) => {
  const client = new ApolloClient({
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_API_URL,
      headers: {
        Authorization: `Bearer ${getCookies("token")}`,
      },
    }),
    cache: new InMemoryCache(),
    ssrMode: typeof window === "undefined",
  });
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
