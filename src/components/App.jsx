import { Profile } from './Profile/Profile.jsx';
import PropTypes from 'prop-types';
import user from 'user.json';
import data from 'data.json';
import { Container } from './App.styled.jsx';
import { Statistics } from './Statistics/Statistics.jsx';

export const App = () => {
  return (
    <Container key={user.username}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
    </Container>
  );
};
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.number.isRequired,
};
