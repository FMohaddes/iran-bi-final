import HomeView from "@/app/(home)/components/home-view";

type PageProps = {
    params: Record<string, string>;
};

export default async function Home({ params }: PageProps) {
    return (
        <>
            <HomeView />
        </>
    );
}

export const metadata = {
    title: "Home Page",
    description: '',
};