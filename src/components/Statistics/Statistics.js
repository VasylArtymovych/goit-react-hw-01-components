import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function statistics({title, stats}){
    return (
        <section className={s.section}>
            {title && <h2 className={s.title}>{title}</h2>}

            <ul className={s.list}>
                {stats.map(({id, label, percentage}) => (
                    <li className={s.item} key={id} style={{backgroundColor: `${rendomHex()}`}}>
                        <span className={s.label}>{label}</span>
                        <span className={s.percentage}>{percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    )
};

statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })).isRequired
};

function rendomHex(){
    return `#${
        Math.floor(Math.random()*16777215)
        .toString(16)
        .padStart(6, 0)
    }`
};