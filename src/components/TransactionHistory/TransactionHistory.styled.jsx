import styled from 'styled-components';

export const Table = styled.table`
  margin: auto;
  padding: 0;

  width: 700px;
  background: beige;
  border: 1px solid;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const TableTh = styled.th`
  height: 50px;
  font-size: 20px;
  border: 1px solid;
  background-color: #a7a7a4;
`;

export const TableTd = styled.td`
  height: 50px;
  font-size: 18px;
  border: 1px solid;
  font-style: italic;
`;
export const Tbody = styled.tbody`

`;
export const TableTr =styled.tr`
&:hover{
  background-color: #f0f0f0;
}
&:nth-child(even) {
  background-color: #f9f9f9;
}
`


