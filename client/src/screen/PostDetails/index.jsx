import React from "react";

import { useParams } from "react-router-dom";

import { useGetPostDetailQuery } from "../../slices/postApiSlice";

const PostDetails = () => {
  const { id: postId } = useParams();

  const {
    data: post,
    isLoading,
    isError,
    error,
  } = useGetPostDetailQuery(postId);
  console.log(post);
  return isLoading ? (
    <p>Loading</p>
  ) : isError ? (
    <h1>Error Page</h1>
  ) : (
    <>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>{post?.tag?.join(",")}</p>
    </>
  );
};

export default PostDetails;
