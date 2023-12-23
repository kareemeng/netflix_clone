import { AxiosError } from "axios";

export const handleError = (error: AxiosError): string => {
  if (error.response) {
    return `Server Error: ${error.response.status} - ${error.message}`;
  } else if (error.request) {
    return `Request Error: ${error.request} -${error.message}`;
  } else {
    return `Error: ${error.message}`;
  }
};
