// src/app/store.ts
import {configureStore} from '@reduxjs/toolkit';
import {productsSlice} from '../features/products/productsSlice';
import {commentsSlice} from '../features/comments/commentsSlice';
import {useDispatch} from "react-redux";

export const store = configureStore({
    reducer: {
        products: productsSlice,
        comments: commentsSlice,
    },
});

export type AppRootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch<AppDispatch>;