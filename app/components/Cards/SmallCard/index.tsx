import Image from 'next/image';
import { ExploreDataType } from 'pages';

export const SmallCard: React.FC<ExploreDataType> = ({
  img,
  location,
  distance,
}) => {
  return (
    <div className="m-2 mt-5 flex transform cursor-pointer items-center space-x-4 rounded-xl transition duration-300 ease-out hover:scale-105 hover:bg-gray-100">
      {/* Left */}
      <div className="relative h-16 w-16">
        <Image
          alt={`Image of ${location}`}
          src={img}
          layout="fill"
          className="rounded-lg"
        />
      </div>
      {/* Right */}
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
};

export default SmallCard;
