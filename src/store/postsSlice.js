import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllPosts, getOnePost, getAllCommentsByPost } from '../api';

export const getAllPostsAsync = createAsyncThunk(
  'posts/getAllPostsAsync',
  async (args, thunkAPI) => {
    try {
      const response = await getAllPosts(args);
      return response.data.posts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.message || 'Posts not exists');
    }
  }
);

export const getOnePostAsync = createAsyncThunk(
  'posts/getOnePostAsync',
  async (id, thunkAPI) => {
    try {
      const response = await getOnePost(id);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.message || 'Post not exists');
    }
  }
);

export const getAllCommentsByPostAsync = createAsyncThunk(
  'posts/getAllCommentsByPostAsync',
  async (id, thunkAPI)=>{
    try {
      const response = await getAllCommentsByPost(id);
      return response.data.comments;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.message || 'Comments not exists');
    }
  }
)

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    selectedPost: null,
    comments: [],
    error: null,
    isPending: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllPostsAsync.pending, (state)=>{
      state.isPending = true;
    })
    builder.addCase(getAllPostsAsync.fulfilled, (state, action)=>{
      state.isPending = false;
      state.posts = action.payload;
    })
    builder.addCase(getAllPostsAsync.rejected, (state, action)=>{
      state.isPending = false;
      state.error = action.payload;
    })
    builder.addCase(getOnePostAsync.pending, (state)=>{
      state.isPending = true;
    })
    builder.addCase(getOnePostAsync.fulfilled, (state,action)=>{
      state.isPending = false;
      state.selectedPost = action.payload;
    })
    builder.addCase(getOnePostAsync.rejected, (state, action)=>{
      state.isPending = false;
      state.error = action.payload;
    })
    builder.addCase(getAllCommentsByPostAsync.pending, (state)=>{
      state.isPending = true;
    })
    builder.addCase(getAllCommentsByPostAsync.fulfilled, (state, action)=>{
      state.isPending = false;
      state.comments = action.payload;
    })
    builder.addCase(getAllCommentsByPostAsync.rejected, (state, action)=>{
      state.isPending = false;
      state.error = action.payload;
    })
  },
});

export default postsSlice.reducer;
