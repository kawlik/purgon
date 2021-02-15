import React from 'react';

import { BsCheckCircle } from "react-icons/bs";

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

const Quality = ({ category, title, elems }) => {

    const allElems = elems.map((elem, index) => <li key={index}><span><BsCheckCircle/></span><span>{elem}</span></li>)

    /*   *   *   *   *   *   *   *   *   *   */

    return(
    <article className='quality'>
        
        <h3 className='title'>{title}<span>{category}</span></h3>

        <ul className='list'>
            {allElems}
        </ul>

    </article>
)};

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

export default Quality;