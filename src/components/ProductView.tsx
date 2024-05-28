// src/components/ProductView.tsx
import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {AppRootStateType, useAppDispatch} from '../app/store';
import {fetchProducts} from '../features/products/productsSlice';
import {Product} from '../features/products/productsSlice';
import AddEditCommentModal from './AddEditCommentModal';
import {AddCommentButton, CommentItem, CommentsList, Container, ProductDetails} from "./ProductViewStyles";
import {commentActions} from "../features/comments/commentsSlice";

interface ProductViewProps {
    product: Product;
}

const ProductView: React.FC = () => {
    const {id} = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const product = useSelector((state: AppRootStateType) =>
        state.products.products.find((el) => el.id === id)
    );

    useEffect(() => {
        if (!product) {
            dispatch(fetchProducts());
        }
    }, [dispatch, product]);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
        commentActions.addNewComment({description: 'kfjsdalf'})
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <ProductDetails>
            <h1>{product.name}</h1>
            <img src={product.imageUrl} alt={product.name}/>
            <p>Count: {product.count}</p>
            <p>Size: {product.size.width}x{product.size.height}</p>
            <p>Weight: {product.weight}</p>
            <h3>Comments</h3>
            <CommentsList>
                {product.comments.map((commentId) => (
                    <CommentItem key={commentId}>{commentId}</CommentItem>
                ))}
            </CommentsList>
            <AddCommentButton onClick={openModal}>Add Comment</AddCommentButton>
            {isModalOpen && <AddEditCommentModal onClose={closeModal}/>}
        </ProductDetails>
    );
};

export default ProductView;
