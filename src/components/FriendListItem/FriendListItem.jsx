import { GoPrimitiveDot } from 'react-icons/go';

import {
  Item,
  Status,
  Avatar,
  Name,
} from 'components/FriendListItem/FriendListItem.styled';

export const FriendListItem = ({ avatar, name, status }) => {
  console.log(status);
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
