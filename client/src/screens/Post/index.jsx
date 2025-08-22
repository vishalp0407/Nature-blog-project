import React from "react";
import { useGetAllPostQuery } from "../../slices/postApiSlice";
import { Link } from "react-router-dom";

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
        <div className="flex  items-center justify-center flex-wrap">
          {posts.map((post) => (
            <Link key={post._id} to={`/post/${post._id}`}>
              <img src={post.image} className="w-[50px] h-[50px]" />
              <h1>{post.title}</h1>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Post;
