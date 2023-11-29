import css from './EventBoard.module.css';
// import PropTypes from 'prop-types';
import { Event } from '../Event/Event';

export const EventBoard = ({ events }) => {
  return (
    <div className={css.eventBoard}>
      {events.map(event => (
        <Event key={event.name} />
      ))}
    </div>
  );
};

// EventBoard.propTypes = {
//   events: PropTypes.string.isRequired,
// };
