import { combineReducers } from "@reduxjs/toolkit";
import postsReducer from "./postReducer";

export default combineReducers({ posts: postsReducer });
