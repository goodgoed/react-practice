import { useQuery, useMutation } from "react-query";
import { axiosInstance } from "../lib/axios";

const useFetch = ({ id, endpoint, enabled = true, config = null }) => {
  return useQuery(
    [id, endpoint, config],
    () =>
      axiosInstance({
        method: "GET",
        url: endpoint,
        headers: config,
      }).then((res) => res.data),
    {
      enabled: enabled,
    }
  );
};
export default useFetch;

export const useMutate = ({ method, endpoint, config }) => {
  return useMutation((info) => {
    return axiosInstance({
      method,
      url: endpoint,
      headers: config,
      data: info,
    });
  });
};
