import React, {ReactNode} from "react";

type ContainerLayoutProps = {
    children: ReactNode;
    className?: string;
};

export default function ContainerLayout({
                                            children,
                                            className = "",
                                        }: ContainerLayoutProps) {
    return (
        <section className = {`relative w-full h-full mx-auto max-w-screen-2xl py-24 px-10 sm:p-14 lg:p-24
        ${className}`}
        >
            {children}
        </section >
    );
}