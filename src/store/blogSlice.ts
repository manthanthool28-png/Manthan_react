import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface Comment {
  id: number;
  text: string;
}

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  summary: string;
  image: string;
  likes: number;
  dislikes: number;
  comments: Comment[];
}

interface BlogState {
  posts: BlogPost[];
}

const initialState: BlogState = {
  posts: [
    {
      id: 1,
      title: "First Blog Post",
      date: "2025-10-20",
      summary: "This is the first blog post summary.",
      image: "https://via.placeholder.com/600x400",
      likes: 0,
      dislikes: 0,
      comments: [],
    },
    {
      id: 2,
      title: "Second Blog Post",
      date: "2025-10-22",
      summary: "This is the second blog post summary.",
      image: "https://via.placeholder.com/600x400",
      likes: 0,
      dislikes: 0,
      comments: [],
    },
  ],
};


const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    addPost(state, action: PayloadAction<Omit<BlogPost, 'id' | 'likes' | 'dislikes' | 'comments'>>) {
      const newPost: BlogPost = {
        ...action.payload,
        id: Date.now(),
        likes: 0,
        dislikes: 0,
        comments: [],
      };
      state.posts.push(newPost);
    },
    addComment(state, action: PayloadAction<{ postId: number; text: string }>) {
      const post = state.posts.find(p => p.id === action.payload.postId);
      if (post) {
        post.comments.push({ id: Date.now(), text: action.payload.text });
      }
    },
    likePost(state, action: PayloadAction<number>) {
      const post = state.posts.find(p => p.id === action.payload);
      if (post) post.likes++;
    },
    dislikePost(state, action: PayloadAction<number>) {
      const post = state.posts.find(p => p.id === action.payload);
      if (post) post.dislikes++;
    },
  },
});

export const { addPost, addComment, likePost, dislikePost } = blogSlice.actions;
export const blogReducer = blogSlice.reducer;
export default blogSlice;
