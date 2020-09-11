import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0;
  padding: 20px;
  list-style: none;
`;

export const ListItem = styled.li`
  padding: 5px;
  margin-bottom: 40px;
  width: 30%;

  :nth-child(4n) {
    width: 70%;

    a {
      display: flex;
      justify-content: space-around;
      text-decoration: none;

      > img {
        width: 50%;
        height: 300px;
      }

      > div {
        padding: 20px 0 0 50px;
      }
    }
  }

  :nth-child(5n),
  :nth-child(6n) {
    width: 40%;
  }

  > a {
    text-decoration: none;
  }

  @media (max-width: 900px) {
    width: 40%;
    > a {
      flex-direction: column;
    }

    :nth-child(4n),
    :nth-child(5n),
    :nth-child(6n) {
      width: 40%;

      > a {
        > img {
          width: 100%;
          height: auto;
        }
      }
    }
  }

  @media (max-width: 500px) {
    width: 100%;
    > a {
      flex-direction: column;
    }

    :nth-child(4n),
    :nth-child(5n),
    :nth-child(6n) {
      width: 100%;

      > a {
        > img {
          width: 100%;
          height: auto;
        }
      }
    }
  }
`;
