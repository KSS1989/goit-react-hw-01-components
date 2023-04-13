import PropTypes from 'prop-types';
import {
  ListItem,
  Percentage,
  Label,
} from 'components/StatisticsList/StatisticsList.styled';

export const StatisticsList = ({ id, label, percentage }) => {
  return (
    <ListItem key={id}>
      <Label>{label}</Label>
      <Percentage>{percentage}</Percentage>
    </ListItem>
  );
};
StatisticsList.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.number,
  percentage: PropTypes.number.isRequired,
};
