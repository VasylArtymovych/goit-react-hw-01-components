import PropTypes from 'prop-types';
import s from './FriendList.module.css';

export default function friendList({data}) {
    return (
    <ul className={s.list}>
        {data.map(({avatar, name, isOnline, id}) => (
            <li className={s.item } key={id}>
                <span className={s.status} style={ isOnline ? {backgroundColor: 'green'} : {backgroundColor: 'red'} }></span>
                <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
                <p className={s.name}>{name}</p>
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

