import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
  padding: 100px;
`;

export const InputField = styled.input`
  display: block;
  width: 100%;
  padding: 10px 15px;
  margin-bottom: 20px;
  border: none;
  border-bottom: 2px solid #222;
  font-family: 'Kufam', cursive;
  font-size: 16px;
`;

export const FormButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 150px;
  height: 50px;
  margin-top: 40px;
  font-family: 'Kufam', cursive;
  font-size: 16px;
  color: #eee;
  background-color: #222;
  border: none;
  border-radius: 10px;
  transition: 0.6s;
  cursor: pointer;

  &:hover {
    color: #222;
    background-color: transparent;
    border-bottom: 2px solid #222;
    border-radius: 0;
  }

  &:disabled {
    color: #222;
    background-color: #ccc;
    border-radius: 0;
  }
`;

export const MissField = styled.p`
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: red;
`;
