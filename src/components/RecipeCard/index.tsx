import Image from 'next/image';
import Link from 'next/link';

type RecipeCardProps = {
  id: number;
  title: string;
  image: string;
};

const RecipeCard = ({ id, title, image }: RecipeCardProps) => {
  return (
    <>
      <Link
        href={`/recipes/${id}`}
        className="block bg-white rounded-lg overflow-hidden">
        <div className="relative h-48">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800 line-clamp-2 mb-2">
            {title}
          </h2>
        </div>
      </Link>
    </>
  );
};

export default RecipeCard;
