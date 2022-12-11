import PropTypes from 'prop-types';
import {Container, THead, TBody, TRow, TData, THeadData} from "./Transaction.styled"

export const TransactionHistory = ({items}) => {
    return (
        <Container className="transaction-history">
        <THead>
            <TRow>
            <THeadData>Type</THeadData>
            <THeadData>Amount</THeadData>
            <THeadData>Currency</THeadData>
            </TRow>
        </THead>
    
        <TBody>
            {items.map(({id, type, amount, currency}) => (
            <TRow key={id}>
                <TData>{type}</TData>
                <TData>{amount}</TData>
                <TData>{currency}</TData>
            </TRow>
            ))}
        </TBody>
        </Container>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })
    ).isRequired,
};

