import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  width: 300px;
  margin: auto;
  margin-bottom: 5px;
  padding: 20px;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid rgb(218, 218, 218, 0.9);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;
export const Avatar = styled.img`
  margin-left: 10px;
`;
export const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin-left: 15px;
`;
export const Status = styled.span`
  color: ${props => {
    if (props !== true) {
      return '#4caf50';
    }
    return '#f44336';
  }};
`;
