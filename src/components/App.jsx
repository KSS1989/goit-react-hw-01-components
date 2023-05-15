import React from 'react';
import PropTypes from 'prop-types';
import { Profile } from './Profile/Profile.jsx';
import { Container } from './App.styled.jsx';
import { Statistics } from './Statistics/Statistics.jsx';
import { FriendList } from 'components/FriendList/FriendList.jsx';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory.jsx';
import user from 'data/user.json';
import data from 'data/data.json';
import friendList from 'data/friends.json';
import transactions from 'data/transactions.json';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friendList={friendList} />
      <TransactionHistory items={transactions} />;
    </Container>
  );
};
Profile.propTypes = {
  key: PropTypes.string,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
