// src/components/ProductsList.tsx
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../app/store';
import { fetchProducts } from '../features/products/productsSlice';
import { Link } from 'react-router-dom';
import AddEditProductModal from './AddEditProductModal';

const ProductsList: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const products = useSelector((state: RootState) => state.products.products);
    const loading = useSelector((state: RootState) => state.products.loading);
    const error = useSelector((state: RootState) => state.products.error);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Products</h1>
            <button onClick={openModal}>Add Product</button>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <img src={product.imageUrl} alt={product.name} />
                        <h2>{product.name}</h2>
                        <p>Count: {product.count}</p>
                        <p>Size: {product.size.width}x{product.size.height}</p>
                        <p>Weight: {product.weight}</p>
                        <Link to={`/products/${product.id}`}>View</Link>
                    </li>
                ))}
            </ul>
            {isModalOpen && <AddEditProductModal onClose={closeModal} />}
        </div>
    );
};

export default ProductsList;
