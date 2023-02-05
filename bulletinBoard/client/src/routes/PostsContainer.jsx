import React, { useState, useEffect, useMemo } from "react";
import Posts from "../components/Posts";
import useFetch from "../hooks/useFetch";
import { useSelector } from "react-redux";
import { useQueryClient, useMutation } from "react-query";
import { axiosInstance } from "../lib/axios";

const PostsContainer = ({ style }) => {
  const deleteArr = useMemo(() => [], []);
  const user = useSelector((state) => state.user);
  const [searchQuery, setSearchQuery] = useState("");

  const queryClient = useQueryClient();
  const deletePosts = async (id) => {
    await axiosInstance.delete(`/posts/${id}?populate=*`, {
      headers: {
        Authorization: `Bearer ${user.jwt}`,
      },
    });
  };
  const { mutateAsync } = useMutation({
    mutationFn: deletePosts,
  });

  const handleDeletePosts = () => {
    const deletePromises = [];
    console.log(deleteArr);
    deleteArr.forEach((item) => {
      deletePromises.push(mutateAsync(item));
    });

    console.log(deleteArr);

    Promise.all(deletePromises).then(() => {
      queryClient.invalidateQueries("posts/get");
      console.log(`Successfully deleted ${deleteArr.length} entries`);
      deleteArr.length = 0;
    });
  };

  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const { data, error, isFetched } = useFetch({
    id: "posts/get",
    endpoint: searchQuery
      ? `/posts?filters[title][$containsi]=${searchQuery}&sort[0]=priority:desc&sort[1]=updatedAt:desc&pagination[page]=${currentPage}&pagination[pageSize]=10&populate=*`
      : `/posts?sort[0]=priority:desc&sort[1]=updatedAt:desc&pagination[page]=${currentPage}&pagination[pageSize]=10&populate=*`,
    config: {
      Authorization: `Bearer ${user.jwt}`,
    },
  });

  useEffect(() => {
    if (data) {
      setTotalPage(data.meta.pagination.pageCount);
    }
  }, [data]);

  if (error) {
    console.log(error);
    return <div>Something is wrong</div>;
  }

  if (!isFetched) {
    return <div>Loading!</div>;
  }

  console.log("searchQuery: ", searchQuery);
  return (
    <>
      <Posts
        data={data}
        totalPage={totalPage}
        handleDelete={handleDeletePosts}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        user={user}
        deleteArr={deleteArr}
        style={style}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
    </>
  );
};

export default PostsContainer;
