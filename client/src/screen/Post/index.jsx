import React from "react";
import { useGetAllPostQuery } from "../../slices/postApiSlice";

const Post = () => {
  const { data: posts, isLoading, isError, error } = useGetAllPostQuery();
  console.log(posts);
  console.log(posts?.[0]?.category);
  return (
    <div>
      {isLoading ? (
        <h2>Loading</h2>
      ) : isError ? (
        <h1>Error</h1>
      ) : (
        <>
          {posts.map((post) => (
            <div key={post._id}>
              <h1>{post.title}</h1>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Post;
