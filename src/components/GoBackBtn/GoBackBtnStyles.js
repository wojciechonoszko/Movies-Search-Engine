import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Search = styled(NavLink)`
    text-decoration: none;
    padding: 14px;
    border: 6px solid grey;
    border-radius: 20px;
    background-color: #253334;
    color: #D8BA24;
    :hover {
    background-color: transparent;
    transition: all 0.2s linear 0s;
    color: black;
`;

export const BtnWrapper = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 20px;
`;