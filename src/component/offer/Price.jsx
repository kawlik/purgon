import React, { useContext } from 'react';
import { StoreContext } from '../../store/store';

import { FaPhoneAlt } from 'react-icons/fa';

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

const Price = ({ category, elems }) => {

    const { contact } = useContext(StoreContext);

    /*   *   *   *   *   *   *   *   *   *   */

    const allElems = elems.map((elem, index) => (
        <li className='animEaseIn' key={index}>
            <h3 className={`__${index + 1}`}>{elem.amount}<a href={`tel: ${contact.phone_1}`}><FaPhoneAlt/></a></h3>
            <ul className='subList'>{elem.services.map((service, subIndex) => <li key={100*index + subIndex}>{service}</li>)}</ul>
        </li>));

    /*   *   *   *   *   *   *   *   *   *   */

    return(
    <article className='price'>
        
        <h3 className='title'>Cennik<span>{category}</span></h3>

        <ul className='list'>
            {allElems}
        </ul>

    </article>
)};

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

export default Price;