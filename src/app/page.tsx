import Home from "@/components/Home";
import { Layout } from "@/components/common/Layout";
import { NextPageWithLayout } from "./layout";
import { PageProps } from "../../.next/types/app/layout";

const HomePage: NextPageWithLayout<PageProps> = (authuser: any) => (
    <Layout authUser={authuser} isPublic={true}>
        <Home authUser={authuser} />
    </Layout>
);
export default HomePage;
