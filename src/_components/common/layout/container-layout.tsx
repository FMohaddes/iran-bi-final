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
        <section className = {`relative w-full h-full mx-auto max-w-screen-2xl 
        min-h-screen bg-background text-foreground transition-colors duration-500 flex flex-col
        ${className}`}
        >
            {children}
        </section >
    );
}