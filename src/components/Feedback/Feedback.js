import s from './Feedback.module.css';
import PropTypes from 'prop-types';
export default function Feedback({ options, handFeedback }) {
  return (
    <div>
      <ul className={s.list}>
        {options.map(option => (
          <li key={option} className={s.item}>
            <button className={s.button} type="submit" onClick={handFeedback}>
              {option.charAt(0).toUpperCase() + option.slice(1)}
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
