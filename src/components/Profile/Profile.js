import PropTypes from 'prop-types';
import s from './Profile.module.css';

export default function profile(props){
    const {username, tag, location, avatar, stats:{followers, views, likes}} = props;
    return (
        <div className={s.profile}>
            <div className={s.description}>
                <img
                src={avatar}
                alt="User avatar"
                className="avatar"
                />
                <p className={s.name}>{username}</p>
                <p className={s.tag}>@{tag}</p>
                <p className={s.location}>{location}</p>
            </div>

            <ul className={s.stats}>
                <li>
                <span className={s.label}>followers</span>
                <span className={s.quantity}>{followers}</span>
                </li>
                <li>
                <span className={s.label}>Views</span>
                <span className={s.quantity}>{views}</span>
                </li>
                <li>
                <span className={s.label}>Likes</span>
                <span className={s.quantity}>{likes}</span>
                </li>
            </ul>
        </div>
    )
};

profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }).isRequired,
}