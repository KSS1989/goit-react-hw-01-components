import PropTypes from 'prop-types';
import { GoPrimitiveDot } from 'react-icons/go';

import {
  Item,
  Status,
  Avatar,
  Name,
} from 'components/FriendListItem/FriendListItem.styled';

export const FriendListItem = ({ avatar, name, status }) => {
  return (
    <Item>
      <Status status={status}>
        <GoPrimitiveDot />
        {status}
      </Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  );
};
FriendListItem.prototype = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};
