import { useState, useEffect } from "react";
import { HttpRequest } from "../server/HttpRequest";

const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    HttpRequest(url)
      .then((res) => {
        res.data.content ? setData([...res.data.content]) : setData(res.data);
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);
  return [data, loading, error];
};

export default useFetch;
