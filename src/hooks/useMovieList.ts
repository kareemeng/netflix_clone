import { useQuery } from "@tanstack/react-query";
import rowFetch from "../api/RowFetch";

function useMovieList(FetchUrl: string, page: number = 1) {
  const results = useQuery({
    queryKey: ["Movies", page, FetchUrl],
    queryFn: rowFetch,
  });

  return results;
}

export default useMovieList;
