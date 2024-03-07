import { Profile } from "@/components/Profile";
import { Layout } from "@/components/common/Layout";
import { NextPageWithLayout } from "../layout";

const ProfilePage = (authuser: any) => {
    return (
        <Layout authUser={authuser} isPublic={false}>
            <Profile authUser={authuser} />
        </Layout>
    );
};

export default ProfilePage;
