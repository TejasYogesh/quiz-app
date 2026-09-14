import Image from "next/image";

export const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-full lg:min-h-0 bg-white text-center p-4">
      <Image
      src="/girimage.gif"
      alt="Loading..."
      width={700}
      height={700}
      className="w-full max-w-[700px] md:max-w-[700px]"
      unoptimized={true}
      />

      <div className="mt-6 md:mt-10">
      <p className="text-base md:text-lg lg:text-xl text-gray-500">
        Did you know that the plant gives 83% of its oxygen in the night.
      </p>
      <p>
        <span className="font-bold text-blue-400 text-xl md:text-2xl lg:text-3xl">Please wait.</span>
      </p>
      
      </div>
    </div>
  );
};