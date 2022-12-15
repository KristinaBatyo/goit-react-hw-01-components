
import PropTypes from 'prop-types';
import {Title, Item, Lists, Percentage} from './Statistics.styled'


export const Statistic = ({title, statistic}) => {
  return (
    <Title>
    
        {title && <h2>{title}</h2>}
    
    
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

Statistic.propTypes = {
    title: PropTypes.string,
    statistic: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    )
}


