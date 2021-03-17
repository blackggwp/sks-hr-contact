import Axios from "axios";
import { useEffect, useState } from "react";

interface IApiResponses {
  error: {} | null, isLoading: boolean, data: {} | undefined
}
export const useApiRequest = (url: string): IApiResponses => {

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const { data } = await Axios(url);
        setData(data[0]);
        setIsLoading(false);
      } catch (e) {
        console.error("fetchData Error: ", e);
        setError(e);
        setIsLoading(false);
        return { e, isLoading: false, data: undefined };

      }
    }
    fetchData();
  }, [url]);
  return { error, isLoading, data };
};
