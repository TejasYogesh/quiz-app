import Image from "next/image";

export const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-full lg:min-h-0 bg-white text-center p-4">
      <Image 
        src="/girimage.gif" 
        alt="Loading..." 
        width={200}
        height={200}
        unoptimized={true} // Add this prop for GIFs to play correctly
      />

      <div className="mt-10">
        <p className="text-2xl lg:text-3xl text-gray-700">
          Did you know that the level of Oxygen increases every night at <span className="font-bold text-blue-400 text-3xl lg:text-4xl">12:00 AM?</span>
        </p>
        <p className="mt-2 text-gray-500">
          Please wait while we cook up the questions for you...
        </p>
      </div>
    </div>
  );
};