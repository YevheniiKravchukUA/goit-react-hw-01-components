import css from 'components/Transactions/Transactions.module.css';
import PropTypes from 'prop-types';

export function Transactions({ items, task }) {
  return (
    <>
      {task && <h2>{task}</h2>}
      <table className={css.transactions}>
        <thead className={css.head}>
          <tr className={css.headRow}>
            <th className={css.headItem}>Type</th>
            <th className={css.headItem}>Amount</th>
            <th className={css.headItem}>Currency</th>
          </tr>
        </thead>

        <tbody className={css.body}>
          {items.map(({ id, type, amount, currency }) => {
            return (
              <tr key={id} className={css.row}>
                <td className={`${css.bodyItem} ${css.type}`}>{type}</td>
                <td className={css.bodyItem}>{amount}</td>
                <td className={css.bodyItem}>{currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
  task: PropTypes.string,
};
