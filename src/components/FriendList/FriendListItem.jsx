import PropTypes from 'prop-types';
import css from 'components/FriendList/FriendList.module.css';

export function FriendsListItem({ name, avatar, isOnline }) {
  return (
    <li key={name} className={css.item}>
      <span
        className={css.status}
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      ></span>
      <img
        className={css.image}
        src={avatar}
        alt={name + ' avatar'}
        width="48"
      />
      <p className={css.name}>{name}</p>
    </li>
  );
}

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
