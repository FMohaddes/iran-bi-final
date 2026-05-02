import {ConsultationView} from "@/app/(general)/consultation/components/consultation-view";

type PageProps = {
    params: Record<string, string>;
};

export default async function About({params}: PageProps) {
    return (
        <>
            <ConsultationView />
        </>
    );
}

export const metadata = {
    title: "Consultation Page",
    description: '',
};