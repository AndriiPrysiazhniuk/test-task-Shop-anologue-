import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
    
`;

export const ProductItem = styled.li`
  list-style: none;
    display: inline-block;
    text-align: center;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;

  img {
    max-width: 500px;
    height: auto;
    margin-bottom: 10px;
  }

  h2 {
    margin-bottom: 10px;
    font-size: 1.2rem;
  }

  p {
    margin-bottom: 5px;
  }
`;

export const AddButton = styled.button`
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
