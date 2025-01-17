import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllPosts, getOnePost, getAllCommentsByPost, getAllPostsByUser, getAllTags , getAllPostsByTag } from '../api';

export const getAllPostsByTagAsync = createAsyncThunk(
  'posts/getAllPostsByTagAsync', 
  async (tagName, thunkAPI)=>{
    try {
      const response = await getAllPostsByTag(tagName);
      return response.data.posts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.message || 'Posts not exists');
    }
  }
)

export const getAllTagsAsync = createAsyncThunk(
  'posts/getAllTagsAsync',
  async (args, thunkAPI)=>{
    try {
      const response = await getAllTags();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.message || 'Tegs not exists');
    }
  }
)

export const getAllPostsByUserAsync = createAsyncThunk(
  'posts/getAllPostsByUserAsync',
  async (id, thunkAPI)=>{
    try {
      const response = await getAllPostsByUser(id);
      return response.data.posts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.message || 'Posts not exists');
    }
  }
)

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
    postsByUser: [],
    // postsByTag:[],
    selectedPost: null,
    comments: [],
    tags:[],
    error: null,
    isPending: false,
  },
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(getAllPostsByTagAsync.pending, (state)=>{
      state.isPending = true;
    })
    builder.addCase(getAllPostsByTagAsync.fulfilled, (state, action)=>{
      state.isPending = false;
      state.posts = action.payload;
    })
    builder.addCase(getAllPostsByTagAsync.rejected, (state, action)=>{
      state.isPending = false;
      state.error = action.payload;
    })

    builder.addCase(getAllTagsAsync.pending, (state)=>{
      state.isPending = true;
    })
    builder.addCase(getAllTagsAsync.fulfilled, (state, action)=>{
      state.isPending = false;
      state.tags = action.payload;
    })
    builder.addCase(getAllTagsAsync.rejected, (state, action)=>{
      state.isPending = false;
      state.error = action.payload;
    })
    builder.addCase(getAllPostsByUserAsync.pending, (state)=>{
      state.isPending = true;
    })
    builder.addCase(getAllPostsByUserAsync.fulfilled, (state, action)=>{
      state.isPending = false;
      state.postsByUser = action.payload;
    })
    builder.addCase(getAllPostsByUserAsync.rejected, (state, action)=>{
      state.isPending = false;
      state.error = action.payload;
    })


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
