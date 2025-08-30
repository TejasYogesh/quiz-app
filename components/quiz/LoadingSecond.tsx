import React from "react";
import Image from "next/image";
export const LoadingSecond = () => {

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
                <p className="text-xl text-gray-700">
                    We will process your answers<span className="font-bold text-blue-400 text-2xl"> Please Wait!</span>
                </p>
            </div>
        </div>
    )
}