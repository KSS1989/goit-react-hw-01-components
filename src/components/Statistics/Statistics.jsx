import PropTypes from 'prop-types';
import { StatisticsSection, List } from './Statistics.styled';
import { StatisticsList } from 'components/StatisticsList/StatisticsList';

export const Statistics = ({ stats }) => {
  return (
    <StatisticsSection>
      <List>
        {stats.map(({ id, label, percentage }) => (
          <StatisticsList key={id} label={label} percentage={percentage} />
        ))}
      </List>
    </StatisticsSection>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.number,
  percentage: PropTypes.number,
};
