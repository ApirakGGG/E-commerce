import Image from "next/image";

const HomeBanner = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-300 to-purfrom-blue-600 mb-8 rounded-md">
      <div className="mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-center justify-evenly">
        <div className="mb-8 md:mb-0 text-center animate-ping
">
          <h1 className=" text-center text-4xl md:text-6xl font-bold mb-1 
           bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 opacity-75">
            APPLE IPHONE
          </h1>
          <p className="text-lg md:text-1xl   ">Titanium.So strong.So Pro.</p>
          <p className="md:text-1xl text  ">New Design</p>
        </div>
        <div className="w-1/4 relative aspect-video ">
          <Image
            src="/banner-image.png"
            fill
            alt="Banner Image"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
