import { Profile } from "@/components/Profile";
import { Layout } from "@/components/common/Layout";
import { NextPageWithLayout } from "../layout";
import { PageProps } from "../../../.next/types/app/layout";

const ProfilePage: NextPageWithLayout<PageProps> = (authuser: any) => {
    return (
        <Layout authUser={authuser} isPublic={false}>
            <Profile authUser={authuser} />
        </Layout>
    );
};

export default ProfilePage;
