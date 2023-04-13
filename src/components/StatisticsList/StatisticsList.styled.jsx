import styled from 'styled-components';
import { getRandomHexColor } from 'components/getColor/getColor.js';

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50px;
  padding: 10px;
  background-color: ${props => {
    return getRandomHexColor;
  }};
`;
export const Label = styled.span`
  font-size: 12px;
`;

export const Percentage = styled.span`
  font-size: 18px;
  font-weight: 600;
`;
