import PropTypes from 'prop-types';



export const Statistic = ({statistic}) => {
  return (
    <section>
    <h2>Upload stats</h2>
    
    <ul>
        {statistic.map(({id, label, percentage}) => (
            <li key={id}>
            <span>{label}</span>
            <span>{percentage}</span>
            </li>
        ))}
    </ul>
    </section>
    );
}

    Statistic.propTypes = {
        data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
        ).isRequired,
    };
