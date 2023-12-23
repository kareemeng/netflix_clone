import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IMovie } from "../types/moviesTypes";

type MoviesProps = {
  movie: IMovie;
};

const Movies = (props: MoviesProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const imageBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL;
  if (!imageBaseUrl) {
    throw new Error("Image base url not found");
  }
  const { movie } = props;
  return (
    <div className="relative inline-block w-[160px] cursor-pointer  p-2 sm:w-[200px] md:w-[240px] lg:w-[280px] ">
      <img
        src={`${imageBaseUrl}/w500/${movie.backdrop_path}`}
        alt={movie.title}
        className="round/ed-md block h-auto w-full object-cover "
      />
      <div className="absolute left-0 top-0 h-full w-full text-white opacity-0 hover:bg-black/80 hover:opacity-100">
        <p className="flex h-full items-center justify-center whitespace-normal text-center text-xs font-bold  md:text-sm  ">
          {movie.title}
        </p>
        <button
          onClick={() => {
            setIsLiked(!isLiked);
          }}
          className="flex h-full items-center justify-center whitespace-normal text-center text-xs font-bold  md:text-sm  "
        >
          {isLiked ? (
            <FaHeart className=" absolute left-4 top-4 text-gray-300" />
          ) : (
            <FaRegHeart className=" absolute left-4 top-4 text-gray-300" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Movies;
