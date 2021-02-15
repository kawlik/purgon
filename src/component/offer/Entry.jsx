import React from 'react';


/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

const Entry = ({ title, body, img }) => {
    
    /*   *   *   *   *   *   *   *   *   *   */

    return(
    <section className='entry'>

            <div className='elem text animEaseIn'>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>

            <div className='elem img'>
                <img alt='inspired by pugon' src={img}/>
            </div>

    </section>
)};

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

export default Entry;