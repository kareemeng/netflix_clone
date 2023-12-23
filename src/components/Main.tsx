import { useQuery } from "@tanstack/react-query";
import topRated from "../api/topRatedMovies";

const Main = () => {
  const imageBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL;
  if (!imageBaseUrl) {
    throw new Error("Image base url not found");
  }
  const results = useQuery({
    queryKey: ["topRated", 1],
    queryFn: topRated,
  });
  const { data } = results;
  const movies = data?.results || [];
  const movieIndex = Math.floor(Math.random() * movies.length);

  if (results.isLoading) {
    return <div>Loading...</div>;
  }

  const movie = movies[movieIndex] ?? [];
  const posterPath = `${imageBaseUrl}/original/${movie.poster_path}`;

  const truncateOverview = (overview: string, brakePoint: number) => {
    if (overview.length > brakePoint) {
      return overview.substring(0, brakePoint) + "...";
    }
    return overview;
  };
  // console.log(posterPath);
  return (
    <div className="h-[550px] w-full text-white">
      <div className="h-full w-full ">
        <div className="absolute h-[550px] w-full bg-gradient-to-r from-black "></div>
        <img
          src={posterPath}
          alt={movie.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute top-[20%] w-full p-4 md:p-8">
          <h1 className="text-3xl font-bold md:text-5xl ">{movie.title}</h1>
          <div className="my-4">
            <button className=" border border-gray-300 bg-gray-300 px-5 py-2 text-black">
              Play
            </button>
            <button className=" ml-4 border border-gray-300  px-5 py-2 text-white ">
              Watch Later
            </button>
          </div>
          <p className=" text-sm text-gray-400">
            Released {movie.release_date}
          </p>
          <p className="w-full text-gray-200 md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]">
            {truncateOverview(movie.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
