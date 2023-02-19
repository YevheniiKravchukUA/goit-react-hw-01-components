import PropTypes from 'prop-types';
import css from 'components/FriendList/FriendList.module.css';
import { FriendsListItem } from 'components/FriendList/FriendListItem';

export function FriendList({ friends, task }) {
  return (
    <>
      {task && <h2>{task}</h2>}
      <ul className={css.list}>
        {friends.map(({ avatar, name, isOnline, id }) => {
          return (
            <FriendsListItem
              key={id}
              name={name}
              avatar={avatar}
              isOnline={isOnline}
            />
          );
        })}
      </ul>
    </>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,

  task: PropTypes.string,
};
