// src/features/products/productsSlice.ts
import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import axios from 'axios';

interface Size {
    width: number;
    height: number;
}

export interface Product {
    id: string;
    imageUrl: string;
    name: string;
    count: number;
    size: Size;
    weight: string;
    comments: number[];
}

interface ProductsState {
    products: Product[];
    loading: boolean;
    error: string | null;
}

const initialState: ProductsState = {
    products: [],
    loading: false,
    error: null,
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await axios.get('http://localhost:3001/products');
    return response.data;
});

const slice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addNewProduct: (state, action: PayloadAction<{ product: Product }>) => {
            state.products.push(action.payload.product);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Something went wrong';
            });
    },
});

export const productsSlice = slice.reducer;
