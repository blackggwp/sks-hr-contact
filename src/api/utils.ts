import Axios from "axios";
import { useEffect, useState } from "react";

export const useApiRequest = (url: string): {} => {

  // function useApiRequest(x: number, y: number): number {
  //   return x + y;
  // }

  const [data, setData] = useState([]);
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
      }
    }
    fetchData();
  }, [url]);

  return { error, isLoading, data };
};
