// src/components/ProductView.tsx
import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {RootState, AppDispatch} from '../app/store';
import {fetchProducts} from '../features/products/productsSlice';
import {Product} from '../features/products/productsSlice';
import AddEditCommentModal from './AddEditCommentModal';

interface ProductViewProps {
    product: Product;
}

const ProductView: React.FC = () => {
    const {id} = useParams<{ id: string }>();
    const dispatch = useDispatch<AppDispatch>();
    const selectedProduct = useSelector((state: RootState) =>
        state.products.products.find((el) => el.id === id)
    );

    useEffect(() => {
        if (!selectedProduct) {
            dispatch(fetchProducts());
        }
    }, [dispatch, selectedProduct]);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    if (!selectedProduct) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{selectedProduct.name}</h1>
            <img src={selectedProduct.imageUrl} alt={selectedProduct.name}/>
            <p>Count: {selectedProduct.count}</p>
            <p>Size: {selectedProduct.size.width}x{selectedProduct.size.height}</p>
            <p>Weight: {selectedProduct.weight}</p>
            <h3>Comments</h3>
            <ul>
                {selectedProduct.comments.map((commentId) => (
                    <li key={commentId}>{/* render comment */}</li>
                ))}
            </ul>
            <button onClick={openModal}>Add Comment</button>
            {isModalOpen && <AddEditCommentModal onClose={closeModal}/>}
        </div>
    );
};

export default ProductView;
