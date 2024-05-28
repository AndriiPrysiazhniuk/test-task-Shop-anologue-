// src/components/AddEditCommentModal.tsx
import React, { useState } from 'react';

interface AddEditCommentModalProps {
    onClose: () => void;
}

const AddEditCommentModal: React.FC<AddEditCommentModalProps> = ({ onClose }) => {
    const [description, setDescription] = useState('');

    const handleSubmit = () => {
        // handle form submission
        onClose();
    };

    return (
        <div>
            <h2>Add/Edit Comment</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Description:
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
                </label>
                <button type="submit">Confirm</button>
                <button type="button" onClick={onClose}>Cancel</button>
            </form>
        </div>
    );
};

export default AddEditCommentModal;
