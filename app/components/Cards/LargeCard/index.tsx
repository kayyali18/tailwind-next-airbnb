import Image from 'next/image';
import { LargeCardDataType } from 'pages';

const LargeCard: React.FC<LargeCardDataType> = ({
  img,
  title,
  description,
  btnText,
}) => {
  return (
    <section className="group relative my-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px] overflow-hidden rounded-2xl">
        <Image
          className="transition-transform group-hover:scale-105"
          src={img}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="absolute top-16 left-12 rounded-lg bg-white bg-opacity-80 p-2 pl-5 ">
        <h3 className="mb-3 w-64 text-4xl first-letter:text-7xl first-letter:font-bold ">
          {title}
        </h3>
        <p>{description}</p>

        <button className="mt-5 rounded-lg bg-gray-900 px-4 py-2 text-sm text-white transition-transform duration-200 active:scale-90">
          {btnText}
        </button>
      </div>
    </section>
  );
};

export default LargeCard;
