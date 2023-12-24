
// import React from 'react';
import Icon from "../Icon/Icon";
import './Card.css';

function Card({ player }) {
    let icon = <Icon name="default" />; // Assuming you have a default icon or a name that fits your needs

    if (player === 'X') {
        icon = <Icon name="cross" />;
    } else if (player === 'O') {
        icon = <Icon name="circle" />;
    }

    return (
        <div className="card" onClick={() => onPlay(index)}>
            {icon}
        </div>
    );
}

export default Card;
