import {PostView} from "@/app/(general)/blog/components/post-view";

type PageProps = {
    params: Record<string, string>;
};

export default async function Post({params}: PageProps) {
    return (
        <>
            <PostView />
        </>
    );
}

export const metadata = {
    title: "Post Page",
    description: '',
};