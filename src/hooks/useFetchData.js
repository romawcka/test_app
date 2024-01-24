import { useEffect, useState } from "react";
const BASE_URL = `https://jsonplaceholder.typicode.com/`;

export const useFetchData = (path, queryParams = {}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      const url = new URL(path, BASE_URL);
      Object.keys(queryParams).forEach((key) => {
        url.searchParams.append(key, queryParams[key]);
      });
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(url, {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error("Unable to fetch data");
        const data = await res.json();
        if (data.Responce === "False") throw new Error("Unable to fetch data");
        setData(data);
      } catch (err) {
        if (err.message !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [path, queryParams]);

  return {
    data,
    error,
    isLoading,
  };
};
