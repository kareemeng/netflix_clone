import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import useMovieList from "../hooks/useMovieList";
import Movies from "./Movies";
type RowProps = {
  rowId: string;
  title: string;
  FetchUrl: string;
};

const Row = (props: RowProps) => {
  const { title, FetchUrl, rowId } = props;
  const results = useMovieList(FetchUrl);

  if (results.isLoading) {
    return <div>Loading...</div>;
  }
  const movies = results.data?.results ?? [];
  const scroll = (scrollOffset: number) => {
    const slider = document.getElementById(`slider${rowId}`);
    if (slider) {
      slider.scrollLeft += scrollOffset;
    }
  };
  return (
    <>
      <h2 className="p-4 font-bold text-white md:text-xl">{title}</h2>
      <div className="group relative flex items-center">
        <MdChevronLeft
          onClick={() => scroll(-500)}
          className="absolute left-0 z-10 hidden cursor-pointer rounded-full bg-white opacity-50 hover:opacity-100 group-hover:block"
          size={40}
        />
        <div
          id={`slider${rowId}`}
          className="scrollbar-hide relative h-full w-full overflow-y-hidden overflow-x-scroll scroll-smooth whitespace-nowrap "
        >
          {movies.map((movie, id) => {
            return <Movies key={id} movie={movie} />;
          })}
        </div>
        <MdChevronRight
          onClick={() => scroll(500)}
          className="absolute right-0 z-10 hidden cursor-pointer rounded-full bg-white opacity-50 hover:opacity-100 group-hover:block"
          size={40}
        />
      </div>
    </>
  );

  // component implementation
};

export default Row;
