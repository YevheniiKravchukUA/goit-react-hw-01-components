import PropTypes from 'prop-types';
import css from 'components/Profile/Profile.module.css';

export function Profile({ data, task }) {
  const { username, tag, location, avatar, stats } = data;

  return (
    <>
      {task && <h2>{task}</h2>}

      <div className={css.profile}>
        <div className={css.description}>
          <img
            src={avatar}
            alt={username + ' avatar'}
            className={css.avatar}
            width="100"
            height="100"
          />
          <p className={`${css.name} ${css.user}`}>{username}</p>
          <p className={`${css.tag},${css.user}`}>@{tag}</p>
          <p className={`${css.location}, ${css.user}`}>{location}</p>
        </div>

        <ul className={css.stats}>
          <li className={css.statsItem}>
            <span className={`${css.label}${css.statstext}`}>Followers:</span>
            <span className={`${css.quantity}${css.statstext}`}>
              {stats.followers}
            </span>
          </li>
          <li className={css.statsItem}>
            <span className={`${css.label}${css.statstext}`}>Views:</span>
            <span className={`${css.quantity}${css.statstext}`}>
              {stats.views}
            </span>
          </li>
          <li className={css.statsItem}>
            <span className={`${css.label}${css.statstext}`}>Likes:</span>
            <span className={`${css.quantity}${css.statstext}`}>
              {stats.likes}
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}

Profile.propTypes = {
  data: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,

  task: PropTypes.string,
};
