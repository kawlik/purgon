import React, { useState } from 'react';

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

const Contact = () => {

    const [ side, setSide ] = useState(false);
    const toggleSide = () => setSide(prev => !prev);

    const float = side ? 'elem __left' : 'elem __right';

    /*   *   *   *   *   *   *   *   *   *   */
    
    return(
    <article className='game' onClick={() => toggleSide()}>
        
        <div className={float}></div>

        <div className='spike'></div>

    </article>
)};

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

export default Contact;