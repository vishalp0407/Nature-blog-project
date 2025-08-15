import { POSTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const PostApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllPost: builder.query({
      query: () => ({
        url: POSTS_URL,
      }),
      keepUnusedDataFor: 5,
      providesTags: ["Post"],
    }),
    getPostDetail: builder.query({
      query: (postId) => ({
        url: `${POSTS_URL}/${postId}`,
      }),
      keepUnusedDataFor: 5,
      providesTags: ["Post"],
    }),
  }),
});

export const { useGetAllPostQuery, useGetPostDetailQuery } = PostApiSlice;
