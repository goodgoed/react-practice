import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { changed } from "../features/user/userSlice";

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [totalPage, setTotalPage] = useState(0);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get(
        import.meta.env.VITE_API_BASE_URL + "/api" + endpoint,
        {
          headers: {
            Authorization: `bearer ${import.meta.env.VITE_API_GET_POST}`,
          },
        }
      );
      try {
        setData(res.data);
        setTotalPage(res.data.meta.pagination.pageCount);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
    dispatch(changed("idle"));
  }, [endpoint, user.status]);

  return { data, totalPage, error, loading };
};

export default useFetch;
