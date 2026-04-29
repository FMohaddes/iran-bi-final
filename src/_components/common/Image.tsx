"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import {myLoader} from "@/utils/config";


type CustomImageProps = {
    src?: string;
    alt?: string;
    priority?: boolean;
    className?: string;
    absolutePath?: boolean;
    quality?: number;
};

type ErrorComponentProps = {
    alt?: string;
    className?: string;
};

const ERROR_IMG_SRC =
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

export default function CustomImage({
                                        src: srcImage = "",
                                        alt = "",
                                        priority = false,
                                        className = "",
                                        absolutePath = false,
                                        quality = 100,
                                    }: CustomImageProps) {
    const [error, setError] = useState<boolean>(false);
    const [src, setSrc] = useState<string>(srcImage);
    const [loaded, setLoaded] = useState<boolean>(false);

    useEffect(() => {
        setSrc(srcImage);
    }, [srcImage]);

    useEffect(() => {
        setError(false);
        setLoaded(false);
    }, [src]);

    const handleImageError = () => {
        if (!error) {
            setError(true);
        }
    };

    const handleImageLoaded = () => {
        setLoaded(true);
    };

    if (priority && absolutePath) {
        return (
            <Image
                src={src}
                alt={alt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className={className}
                quality={quality}
            />
        );
    }

    if (absolutePath) {
        return (
            <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={className}
                quality={quality}
            />
        );
    }

    return (
        <>
            {!error ? (
                <div>
                    {src ? (
                        <Image
                            src={src}
                            alt={alt}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className={className}
                            quality={quality}
                            loader={myLoader}
                            onError={handleImageError}
                            onLoad={handleImageLoaded}
                            placeholder="blur"
                            blurDataURL={ "/logo.svg"}
                        />
                    ) : (
                        <ErrorComponent
                            alt={alt}
                            className={className}
                        />
                    )}

                    {/* {!loaded && (
            <ErrorComponent
              alt={alt}
              productDefaultImage={productDefaultImage}
              className={className}
            />
          )} */}
                </div>
            ) : (
                <ErrorComponent
                    alt={alt}
                    className={className}
                />
            )}

            <style jsx>{`
        img[aria-hidden="true"] {
          display: none;
        }
      `}</style>
        </>
    );
}

function ErrorComponent({
                            alt = "",
                            className = "",
                        }: ErrorComponentProps) {
    return (
        <div className="flex opacity-80 justify-center items-center">
            <img
                src={ERROR_IMG_SRC}
                alt={alt}
                className={`aspect-square ${className}`}
            />
        </div>
    );
}