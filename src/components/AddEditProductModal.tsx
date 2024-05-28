// src/components/AddEditProductModal.tsx
import React, { useState } from 'react';
import {Modal} from ".//ProductListStyles";

interface AddEditProductModalProps {
    onClose: () => void;
}

const AddEditProductModal: React.FC<AddEditProductModalProps> = ({ onClose }) => {
    const [name, setName] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [count, setCount] = useState(0);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState('');

    const handleSubmit = () => {
        // handle form submission
        onClose();
    };

    return (
        <Modal>
            <h2>Add/Edit Product</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </label>
                <label>
                    Image URL:
                    <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required />
                </label>
                <label>
                    Count:
                    <input type="number" value={count} onChange={(e) => setCount(Number(e.target.value))} required />
                </label>
                <label>
                    Width:
                    <input type="number" value={width} onChange={(e) => setWidth(Number(e.target.value))} required />
                </label>
                <label>
                    Height:
                    <input type="number" value={height} onChange={(e) => setHeight(Number(e.target.value))} required />
                </label>
                <label>
                    Weight:
                    <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} required />
                </label>
                <button type="submit">Confirm</button>
                <button type="button" onClick={onClose}>Cancel</button>
            </form>
        </Modal>
    );
};

export default AddEditProductModal;
