import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
    display: flex;
    justify-content: center;
  padding: 20px;
`;

export const ProductDetails = styled.div`
    display: inline-block;
    text-align: center;
    margin: 50px 300px;
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 5px;

    img {
        max-width: 350px;
        height: 450px;
        margin-bottom: 20px;
    }

    h1 {
        margin-bottom: 10px;
        font-size: 1.5rem;
    }

    p {
        margin-bottom: 10px;
    }
`;

export const CommentsList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const CommentItem = styled.li`
  border-bottom: 1px solid #ccc;
  padding: 10px 0;

  &:last-child {
    border-bottom: none;
  }
`;

export const AddCommentButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
`;

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

// Додаткові стилі можна додавати за потребою
