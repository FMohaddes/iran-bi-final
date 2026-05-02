import {AboutView} from "@/app/(general)/about/components/about-view";

type PageProps = {
    params: Record<string, string>;
};

export default async function About({params}: PageProps) {
    return (
        <>
            <AboutView />
        </>
    );
}

export const metadata = {
    title: "About Page",
    description: '',
};