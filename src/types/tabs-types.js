import PropTypes from 'prop-types';

const tabShape = {
  title: PropTypes.string.isRequired,
  propKey: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
};

const tabsType = {
  overview: PropTypes.shape(tabShape).isRequired,
  details: PropTypes.shape(tabShape).isRequired,
  reviews: PropTypes.shape(tabShape).isRequired
};

export default tabsType;
