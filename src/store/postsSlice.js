import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getAllPosts,
  getOnePost,
  getAllCommentsByPost,
  getAllPostsByUser,
  getAllTags,
  getAllPostsByTag,
  searchPosts,
} from '../api';

export const searchPostsAsync = createAsyncThunk(
  'posts/searchPostsAsync',
  async (args, thunkAPI) => {
    try {
      const response = await searchPosts(args);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.message || 'Posts not exists');
    }
  }
);

export const getAllPostsByTagAsync = createAsyncThunk(
  'posts/getAllPostsByTagAsync',
  // args = {tagName, limit, skip}
  async (args, thunkAPI) => {
    try {
      const response = await getAllPostsByTag(args);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.message || 'Posts not exists');
    }
  }
);

export const getAllTagsAsync = createAsyncThunk(
  'posts/getAllTagsAsync',
  async (args, thunkAPI) => {
    try {
      const response = await getAllTags();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.message || 'Tegs not exists');
    }
  }
);

export const getAllPostsByUserAsync = createAsyncThunk(
  'posts/getAllPostsByUserAsync',
  async (id, thunkAPI) => {
    try {
      const response = await getAllPostsByUser(id);
      return response.data.posts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.message || 'Posts not exists');
    }
  }
);

export const getAllPostsAsync = createAsyncThunk(
  'posts/getAllPostsAsync',
  async (args, thunkAPI) => {
    try {
      const response = await getAllPosts(args);
      return response.data;
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
  async (id, thunkAPI) => {
    try {
      const response = await getAllCommentsByPost(id);
      return response.data.comments;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.message || 'Comments not exists');
    }
  }
);

const setPending = (state) => {
  state.isPending = true;
};
const setRejected = (state, action) => {
  state.isPending = false;
  state.error = action.payload;
};
const setFulfilled = (state, action) => {
  state.isPending = false;
  state.posts = action.payload.posts;
  state.total = action.payload.total;
};

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    total: 0,
    postsByUser: [],
    // postsByTag:[],
    selectedPost: null,
    comments: [],
    tags: [],
    error: null,
    isPending: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchPostsAsync.pending, setPending);
    builder.addCase(searchPostsAsync.fulfilled, setFulfilled);
    builder.addCase(searchPostsAsync.rejected, setRejected);

    builder.addCase(getAllPostsByTagAsync.pending, setPending);
    builder.addCase(getAllPostsByTagAsync.fulfilled, setFulfilled);
    builder.addCase(getAllPostsByTagAsync.rejected, setRejected);

    builder.addCase(getAllTagsAsync.pending, setPending);
    builder.addCase(getAllTagsAsync.fulfilled, (state, action) => {
      state.isPending = false;
      state.tags = action.payload;
    });
    builder.addCase(getAllTagsAsync.rejected, setRejected);
    builder.addCase(getAllPostsByUserAsync.pending, setPending);
    builder.addCase(getAllPostsByUserAsync.fulfilled, (state, action) => {
      state.isPending = false;
      state.postsByUser = action.payload;
    });
    builder.addCase(getAllPostsByUserAsync.rejected, setRejected);

    builder.addCase(getAllPostsAsync.pending, setPending);
    builder.addCase(getAllPostsAsync.fulfilled, setFulfilled);
    builder.addCase(getAllPostsAsync.rejected, setRejected);
    builder.addCase(getOnePostAsync.pending, setPending);
    builder.addCase(getOnePostAsync.fulfilled, (state, action) => {
      state.isPending = false;
      state.selectedPost = action.payload;
    });
    builder.addCase(getOnePostAsync.rejected, setRejected);
    builder.addCase(getAllCommentsByPostAsync.pending, setPending);
    builder.addCase(getAllCommentsByPostAsync.fulfilled, (state, action) => {
      state.isPending = false;
      state.comments = action.payload;
    });
    builder.addCase(getAllCommentsByPostAsync.rejected, setRejected);
  },
});

export default postsSlice.reducer;
