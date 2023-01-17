import Image from 'next/image';
import { CardsDataType } from 'pages';

const MediumCard: React.FC<CardsDataType> = ({ img, title }) => {
  return (
    <div className="transform cursor-pointer transition duration-300 ease-out hover:scale-105">
      <div className="relative h-80 w-80">
        <Image
          className="rounded-xl"
          alt={`Image of ${title}`}
          src={img}
          layout="fill"
        />
      </div>
      <h3 className="mt-3 text-2xl capitalize">{title}</h3>
    </div>
  );
};

export default MediumCard;
