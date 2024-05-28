// src/components/ProductView.tsx
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../app/store';
import { fetchProducts } from '../features/products/productsSlice';
import { Product } from '../features/products/productsSlice';
import AddEditCommentModal from './AddEditCommentModal';

interface ProductViewProps {
    product: Product;
}

const ProductView: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch<AppDispatch>();
    const product = useSelector((state: RootState) =>
        state.products.products.find((product) => product.id === parseInt(id))
    );

    useEffect(() => {
        if (!product) {
            dispatch(fetchProducts());
        }
    }, [dispatch, product]);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{product.name}</h1>
            <img src={product.imageUrl} alt={product.name} />
            <p>Count: {product.count}</p>
            <p>Size: {product.size.width}x{product.size.height}</p>
            <p>Weight: {product.weight}</p>
            <h3>Comments</h3>
            <ul>
                {product.comments.map((commentId) => (
                    <li key={commentId}>{/* render comment */}</li>
                ))}
            </ul>
            <button onClick={openModal}>Add Comment</button>
            {isModalOpen && <AddEditCommentModal onClose={closeModal} />}
        </div>
    );
};

export default ProductView;
