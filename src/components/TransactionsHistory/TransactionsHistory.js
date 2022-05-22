import PropTypes from 'prop-types';

const transactionHistory = ({transactions}) => 
    <table className="transaction-history">
        <thead>
            <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            </tr>
        </thead>

        <tbody>
            {transactions.map(({id, type, amount, currency}) => (
                <tr key={id}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
                </tr>
            ))}
        </tbody>
</table>;

transactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
};

export default transactionHistory;