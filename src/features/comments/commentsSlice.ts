// src/features/comments/commentsSlice.ts
import {createSlice, createAsyncThunk, PayloadAction, Dispatch} from '@reduxjs/toolkit';
import axios from 'axios';

type  Comment = {
    id: string;
    productId: string;
    description: string;
    date: string;
}

type CommentsState = {
    comments: Comment[];
    loading: boolean;
    error: string | null;
}

const initialState: CommentsState = {
    comments: [],
    loading: false,
    error: null,
};

export const fetchComments = createAsyncThunk('comments/fetchComments', async () => {
    const response = await axios.get('http://localhost:3001/comments');
    return response.data;
});

const slice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        addNewComment: (state, action: PayloadAction<{ description: string }>) => {
            state.comments.map(el => ({
                ...el, description: action.payload.description
            }));
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchComments.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchComments.fulfilled, (state, action: PayloadAction<Comment[]>) => {
                state.loading = false;
                state.comments = action.payload;
            })
            .addCase(fetchComments.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Something went wrong';
            });
    },
});

export const commentsSlice = slice.reducer;
export const commentActions = slice.actions;

const addComment = () => (dispatch: Dispatch) => {

}


