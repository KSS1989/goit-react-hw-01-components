import PropTypes from 'prop-types';
import { StatisticsSection, List, Title } from './Statistics.styled';
import { StatisticsList } from 'components/StatisticsList/StatisticsList';

export const Statistics = ({ stats, title }) => {
  return (
    <StatisticsSection>
      {title && <Title>{title}</Title>}
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
