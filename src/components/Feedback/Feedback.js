import s from './Feedback.module.css';
import PropTypes from 'prop-types';
export default function Feedback({ options, handFeedback }) {
  return (
    <div>
      <h5 className={s.title}>Please leave feedback</h5>
      <ul className={s.list}>
        {options.map(option => (
          <li key={option} className={s.item}>
            <button className={s.button} type="submit" onClick={handFeedback}>
              {option[0].toUpperCase() + option.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
