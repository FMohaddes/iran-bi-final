import {BlogView} from "@/app/(general)/blog/components/blog-view";

type PageProps = {
    params: Record<string, string>;
};

export default async function Blog({params}: PageProps) {
    return (
        <>
            <BlogView />
        </>
    );
}

export const metadata = {
    title: "Blog Page",
    description: '',
};