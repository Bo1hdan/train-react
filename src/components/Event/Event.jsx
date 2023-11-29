import PropTypes from 'prop-types';

export const Event = ({ name, location, speaker, type, start, end }) => {
  return (
    <div class="event">
      <h2 class="title">Name</h2>
      <p class="info">
        <i class="icon"></i>
        Location
      </p>
      <p class="info">
        <i class="icon"></i>
        Speaker
      </p>
      <p class="info">
        <i class="icon"></i>
        Start Date
      </p>
      <p class="info">
        <i class="icon"></i>
        Duration
      </p>
      <span class="chip free|paid|vip">Event type</span>
    </div>
  );
};

Event.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};
