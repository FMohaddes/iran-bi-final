import {CaseStudyView} from "@/app/(general)/case-study/components/case-study-view";

type PageProps = {
    params: Record<string, string>;
};

export default async function CaseStudy({params}: PageProps) {
    return (
        <>
            <CaseStudyView />
        </>
    );
}

export const metadata = {
    title: "Case Study Page",
    description: '',
};