import css from 'components/Statistics/Statistics.module.css';
import PropTypes from 'prop-types';
import { getRandomHexColor } from 'js/randomColor';

export function Statistics({ title, stats, task }) {
  return (
    <>
      {task && <h2>{task}</h2>}
      <div className={css.wrapper}>
        {title && <h3 className={css.title}>{title}</h3>}
        <ul className={css.statList}>
          {stats.map(({ id, label, percentage }) => {
            return (
              <li
                key={id}
                className={css.item}
                style={{ backgroundColor: getRandomHexColor() }}
              >
                <span className={css.label}>{label}</span>
                <span className={css.percentage}>{percentage + ' %'}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,

  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,

  task: PropTypes.string,
};
