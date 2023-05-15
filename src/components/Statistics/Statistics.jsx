import PropTypes from 'prop-types';
import {
  StatisticsSection,
  List,
  Title,
  ListItem,
  Percentage,
  Label,
} from './Statistics.styled';

export const Statistics = ({ stats, title }) => {
  return (
    <StatisticsSection>
      {title && <Title>{title}</Title>}
      <List>
        {stats.map(({ id, label, percentage }) => (
          <ListItem key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </ListItem>
        ))}
      </List>
    </StatisticsSection>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
