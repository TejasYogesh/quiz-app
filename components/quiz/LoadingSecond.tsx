import React, { useEffect, useState } from "react";
import Image from "next/image";
export const LoadingSecond = () => {
    const [loadingText, setLoadingText] = useState("We are processing your answers...");

    useEffect(() => {
        const sentences = [
            "We are processing your answers...",
            "Please wait while we calculate your results...",
            "Almost there, just a moment...",
            "Please don't go back, your data is being saved..."
        ];
        let currentIndex = 0;

        const interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % sentences.length;
            setLoadingText(sentences[currentIndex]);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col justify-center items-center min-h-full lg:min-h-0 bg-white text-center p-4">
            <Image
                src="/greenbuscom1.gif"
                alt="Loading..."
                width={270}
                height={270}
                unoptimized={true} // Add this prop for GIFs to play correctly
            />

            <div className="mt-10">
                <p id="loading-text" className="text-xl text-gray-700 font-semibold">
                    {loadingText}
                </p>
                <p className="text-blue-400 text-2xl font-bold mt-2">
                    Please donot go back, your data might be lost
                </p>
            </div>
        </div>
    )
}