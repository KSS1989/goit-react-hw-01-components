import { Profile } from './Profile/Profile.jsx';
import PropTypes from 'prop-types';
import user from 'user.json';
import data from 'data.json';
import friendList from 'friends.json';
import { Container } from './App.styled.jsx';
import { Statistics } from './Statistics/Statistics.jsx';
import { FriendList } from 'components/FriendList/FriendList.jsx';

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
      <Statistics title="" stats={data} />
      {/* <Statistics title={data.title} stats={data} /> */}
      <FriendList friendList={friendList} />
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
