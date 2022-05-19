import PropTypes from 'prop-types';

export default function friendList({data}) {
    return (
    <ul className="friend-list">
        {data.map(({avatar, name, isOnline, id}) => (
            <li className="item" key={id}>
                <span className="status"></span>
                <img className="avatar" src={avatar} alt="User avatar" width="48" />
                <p className="name">{name}</p>
            </li>
        ))}
    </ul>
)}

friendList.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired
        }).isRequired
    ).isRequired
};

