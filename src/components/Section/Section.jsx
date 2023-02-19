import PropTypes from 'prop-types';
import css from 'components/Section/Section.module.css';

export function Section({ children }) {
  return <section className={css.section}>{children}</section>;
}

Section.propTypes = { children: PropTypes.any.isRequired };
