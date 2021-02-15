import React, { useEffect } from 'react';

import Entry from '../component/offer/Entry';
import Quality from '../component/offer/Quality';
import Services from '../component/offer/Services';
import Price from '../component/offer/Price';

import ScrollAnim from '../script/ScrollAnim';

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

const Offer = ({ content }) => {

    /*   *   *   *   *   *   *   *   *   *   */

    useEffect(() => {

        const easeIn = new ScrollAnim('.animEaseIn');
        easeIn.setUp('easeIn 1s ease-in-out 1 0.2s normal both');

        return(() => {

            easeIn.restore();

        });

    }, [content])

    /*   *   *   *   *   *   *   *   *   *   */
    
    return(
    <article className='offer'>
    
        <Entry title={content.entry.title} body={content.entry.body} img={content.entry.img}/>

        <Services category={content.entry.title} title={content.services.title} elems={content.services.elems}/>

        <Quality category={content.entry.title} title={content.quality.title} elems={content.quality.elems}/>

        <Price category={content.entry.title} elems={content.prices}/>

    </article>
)};

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

export default Offer;