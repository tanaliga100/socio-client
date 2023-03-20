import { createSlice } from "@reduxjs/toolkit";
import { IAuth } from "../interfaces/allModel";

const initialState: IAuth = {
  mode: "light",
  user: null,
  token: null,
  posts: [{ id: "1", name: "Lara Marie" }],
  status: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setStatus: (state, action) => {
      state.status = action.payload.status;
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setFriends: (state, action) => {
      if (state.user) {
        state.user.friends = action.payload.user.friends;
      } else {
        console.log("User friends non-existent");
      }
    },
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },
    setPost: (state, action) => {
      const updatedPosts = state.posts?.map((post) => {
        if (post._id === action.payload.post_id) return action.payload.post;

        return post;
      });
      if (updatedPosts) {
        state.posts = updatedPosts;
      } else {
        console.log("Updated posts is undefined or null");
      }
    },
  },
});

export const {
  setMode,
  setLogin,
  setLogout,
  setPosts,
  setPost,
  setFriends,
  setStatus,
} = authSlice.actions;
export default authSlice.reducer;
