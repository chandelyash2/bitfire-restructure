import Home from "@/components/Home";
import { Layout } from "@/components/common/Layout";
import { User } from "@/graphql/generated/schema";

const HomePage = (authuser: any) => (
    <Layout authUser={authuser} isPublic={true}>
        <Home authUser={authuser} />
    </Layout>
);
export default HomePage;
