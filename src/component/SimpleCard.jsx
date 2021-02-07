import React from 'react';

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

const SimpleCard = ({ type, icon, title, body }) => {

    /*   *   *   *   *   *   *   *   *   *   */
    
    return(
    <div className={type}>

        <span>{icon}</span>

        <h3>{title}</h3>

        <p>{body}</p>

    </div>
)};

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

export default SimpleCard;