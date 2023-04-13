import PropTypes from 'prop-types';
import {
  Avatar,
  ProfileCards,
  Name,
  Tag,
  Location,
  Label,
  Quantity,
  Ul,
  Li,
  Description,
} from './Profile.styled';

export const Profile = ({
  username,
  avatar,
  tag,
  location,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileCards key={username}>
      <Description>
        <Avatar src={avatar} alt={username} />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>
      <Ul>
        <Li>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </Li>
        <Li>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </Li>
        <Li>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </Li>
      </Ul>
    </ProfileCards>
  );
};
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
};
