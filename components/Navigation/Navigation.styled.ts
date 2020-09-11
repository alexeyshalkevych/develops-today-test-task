import styled from 'styled-components';

export const NavigationWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavigationLogo = styled.p`
  display: block;
  font-size: 18px;
  color: #fff;
  opacity: 0.8;
  text-transform: uppercase;

  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

export const NavigationList = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 0;
  list-style: none;
`;

export const NavigationListItem = styled.li`
  padding: 10px;

  > a {
    text-decoration: none;
    text-transform: uppercase;
    color: #fff;
  }

  @media (max-width: 500px) {
    padding: 5px;
  }
`;
