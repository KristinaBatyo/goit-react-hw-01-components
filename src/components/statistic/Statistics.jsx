
import PropTypes from 'prop-types';
import {Title, StatList, Item, Lists, Percentage} from './Statistics.styled'


export const Statistic = ({statistic}) => {
  return (
    <Title>
    <StatList>Upload stats</StatList>
    
    <Lists>
        {statistic.map(({id, label, percentage}) => (
            <Item key={id}>
            <span>{label}</span>
            <Percentage>{percentage}%</Percentage>
            </Item>
        ))}
    </Lists>
    </Title>
    );
}

    Statistic.propTypes = 
    {
        statistic: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
        ).isRequired,
    };

