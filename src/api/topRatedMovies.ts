import { QueryFunction } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { handleError } from "../utils/AxiosErrorMiddleware";
import { IMovieListResponse } from "../types/moviesTypes";
import requests from "../requests";

const topRated: QueryFunction<
  IMovieListResponse,
  ["topRated", number]
> = async ({ queryKey }) => {
  try {
    const page = queryKey[1];
    const res = await axios.get(requests.requestTopRatedMovies, {
      params: {
        page,
      },
    });
    const data = res.data as IMovieListResponse;

    return data;
  } catch (e) {
    // type guard for AxiosError
    if (e instanceof AxiosError) {
      throw new Error(handleError(e));
    } else {
      throw new Error("Error fetching data");
    }
  }
};

export default topRated;
