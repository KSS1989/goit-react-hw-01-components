import PropTypes from 'prop-types';

import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { List } from 'components/FriendList/FriendList.styled';

export const FriendList = ({ friendList }) => {
  return (
    <List>
      {friendList.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          name={name}
          avatar={avatar}
          status={isOnline}
        />
      ))}
    </List>
  );
};
FriendList.protoType = {
  friendList: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
