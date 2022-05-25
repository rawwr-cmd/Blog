import { combineReducers } from "@reduxjs/toolkit";
import postsReducer from "./postReducer";
import userReducer from "./userReducer";

export default combineReducers({ posts: postsReducer, users: userReducer });
