import PropTypes from 'prop-types';
import { ListItem } from 'components/StatisticsList/StatisticsList.styled';
export const StatisticsList = ({ id, label, percentage }) => {
  return (
    <ListItem key={id}>
      <span>{label}</span>
      <span>{percentage}</span>
    </ListItem>
  );
};
StatisticsList.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.number,
  percentage: PropTypes.number.isRequired,
};
