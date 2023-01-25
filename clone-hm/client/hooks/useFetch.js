import React, { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [meta, setMeta] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const res = await axios.get(`${process.env.API_HOST}/api${endpoint}`, {
        headers: {
          Authorization: `bearer ${process.env.API_TOKEN}`,
        },
      });
      try {
        setData(res.data.data);
        setMeta(res.data.meta);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [endpoint]);

  return { data, loading, meta };
};

export default useFetch;
