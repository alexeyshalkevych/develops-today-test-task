import styled from 'styled-components';

export const Image = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  margin: 0 0 10px 0;
  font-size: 22px;
  font-weight: 500;
  color: #222;
`;

export const Description = styled.p`
  margin: 0 0 30px 0;
  font-size: 16px;
  font-weight: 700;
  color: #666;
`;

export const WriteSubtitle = styled.p`
  margin: 0 0 10px 0;
  font-size: 19px;
  font-weight: 500;
  color: #72aeec;
  text-transform: uppercase;
`;

export const AuthorPostWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const AuthorPostAvatar = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 20px;
`;

export const AuthorPostName = styled.h3`
  margin: 0 0 5px 0;
  font-size: 16px;
  font-weight: 500;
  color: #222;
`;
export const AuthorPostCreated = styled.p`
  margin: 0 0 10px 0;
  font-size: 14px;
  font-weight: 600;
  color: #ccc;
  text-transform: uppercase;
`;
