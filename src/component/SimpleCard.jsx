import React from 'react';

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

const SimpleCard = ({ type, icon, title, body }) => {

    /*   *   *   *   *   *   *   *   *   *   */
    
    return(
    <div className={type}>

        <span><img src={icon} alt='card image'/></span>

        <h3>{title}</h3>

        <p>{body}</p>

    </div>
)};

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

export default SimpleCard;