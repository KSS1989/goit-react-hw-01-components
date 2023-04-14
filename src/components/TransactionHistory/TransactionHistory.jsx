import React from 'react';
import {
  Table,
  TableTr,
  TableTh,
  TableTd,
  Tbody,
} from 'components/TransactionHistory/TransactionHistory.styled';
// import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <TableTr>
          <TableTh>Type</TableTh>
          <TableTh>Amount</TableTh>
          <TableTh>Currency</TableTh>
        </TableTr>
      </thead>
      <Tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TableTr key={id}>
            <TableTd>{type}</TableTd>
            <TableTd>{amount}</TableTd>
            <TableTd>{currency}</TableTd>
          </TableTr>
        ))}
      </Tbody>
    </Table>
  );
};
// TransactionHistory.PropTypes.objectOf(PropTypes.string.isReactive);
