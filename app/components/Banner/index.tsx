import Image from 'next/image';

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
        alt=""
        layout="fill"
        objectFit="cover"
      />

      <div className="absolute top-2/3 w-full text-center">
        <div className="m-auto w-1/5 rounded-lg bg-white bg-opacity-80 py-6 shadow-lg shadow-rose-300">
          <p className="font-sans text-sm font-bold sm:text-lg">
            Not sure where to go? Perfect
          </p>
          <button className="mt-3 rounded-full bg-white px-10 py-4 font-bold text-rose-400 shadow-lg transition duration-150 hover:shadow-xl active:scale-90">
            I&apos;m flexible
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
