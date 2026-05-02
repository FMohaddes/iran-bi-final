import {PortfolioView} from "@/app/(general)/portfolio/components/portfolio-view";

type PageProps = {
    params: Record<string, string>;
};

export default async function Portfolio({params}: PageProps) {
    return (
        <>
            <PortfolioView />
        </>
    );
}

export const metadata = {
    title: "Portfolio Page",
    description: '',
};