// src/components/ProductsList.tsx
import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {AppRootStateType, useAppDispatch} from '../app/store';
import {fetchProducts} from '../features/products/productsSlice';
import {Link} from 'react-router-dom';
import AddEditProductModal from './AddEditProductModal';
import styled from "styled-components";
import {AddButton, Container, ProductItem} from "./ProductListStyles";

const ProductsList: React.FC = () => {
    const dispatch = useAppDispatch();
    const products = useSelector((state: AppRootStateType) => state.products.products);
    const loading = useSelector((state: AppRootStateType) => state.products.loading);
    const error = useSelector((state: AppRootStateType) => state.products.error);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        // dispatch(addNewProductTC())
    };

    if (loading) {
        return <div>Loading...</div>;
    }
    //
    // if (error) {
    //     return <div>Error: {error}</div>;
    // }

    return (
        <Container>
            <h1>{error ? 'Error -' && error : ''}</h1>
            <h1>Products</h1>
            <AddButton onClick={openModal}>Add Product</AddButton>
            <ul>
                {products.map((product) => (
                    <ProductItem key={product.id}>
                        <img src={product.imageUrl} alt={product.name}/>
                        <h2>{product.name}</h2>
                        <p>Count: {product.count}</p>
                        <p>Size: {product.size.width}x{product.size.height}</p>
                        <p>Weight: {product.weight}</p>
                        <Link to={`/products/${product.id}`}>View</Link>
                    </ProductItem>
                ))}
            </ul>
            {isModalOpen && <AddEditProductModal onClose={closeModal}/>}
        </Container>
    );
};

export default ProductsList;
