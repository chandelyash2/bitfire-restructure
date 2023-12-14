import { User, useMeQuery } from "@/graphql/generated/schema";
import { useRouter } from "next/navigation";
import React from "react";
import { Loader } from "./Loader";
import Container from "./Container";
import { getCookies } from "@/utils/cookies";
interface EnrichedChildren {
    authUser?: User;
    children?: React.ReactNode;
}
function recursiveMap(
    children: React.ReactNode,
    fn: (child: React.ReactElement) => React.ReactElement<EnrichedChildren>
) {
    return React.Children.map(children, child => {
        if (!React.isValidElement<EnrichedChildren>(child)) {
            return child;
        }

        let elementChild: React.ReactElement<EnrichedChildren> = child;

        if (child.props.children) {
            elementChild = React.cloneElement(elementChild, {
                children: recursiveMap(child.props.children, fn),
            });
        }

        if (typeof elementChild.type === "string") {
            return elementChild;
        }

        return fn(elementChild);
    });
}
export interface IAuth {
    children?: React.ReactNode;
    isPublic?: boolean;
}
const Auth = ({ children, isPublic }: IAuth) => {
    const { data, loading, error } = useMeQuery({
        context: {
            headers: {
                Authorization: `Bearer ${getCookies("token")}`,
            },
        },
    });

    const router = useRouter();

    if (loading) {
        return <Loader />;
    }

    // if (error) {
    //   return (
    //     <Container>
    //       API error come back later, server likely does not responds
    //     </Container>
    //   );
    // }

    const authUser = data?.me;

    if (authUser) {
        // Add authUser prop to all child elements.
        const childrenWithProps = recursiveMap(children, child =>
            React.cloneElement(child, { authUser })
        );
        return <>{childrenWithProps}</>;
    }

    if (isPublic) {
        return <>{children}</>;
    }
    router.push("/login");

    return <>This page is authenticated you will be now redirected</>;
};

export default Auth;
