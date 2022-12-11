import PropTypes from 'prop-types';
import { List, Item, Avatar, Name, Status } from './FriendList.styled';

export const FriendListItem = ({friends}) => {
  return (
    <List>
      {friends.map(({avatar, name, isOnline, id}) => (
        <Item key={id}>
          <Status statusType={isOnline}>{isOnline}</Status>
          <Avatar src={avatar} alt={name} width="48" />
          <Name>{name}</Name>
        </Item>
      ))}
    </List>
  );
}

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

