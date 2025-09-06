import React, { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  // reusable fetch function
  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      setData(res.data);
      setErr(null);
    } catch (error) {
      setErr(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (url) {
      fetchData();
    }
  }, [url]);

  
  return { data, loading, err, refetch: fetchData };
};

export default useFetch;
