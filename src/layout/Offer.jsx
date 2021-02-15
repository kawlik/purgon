import React, { useEffect } from 'react';

import Entry from '../component/offer/Entry';
import Quality from '../component/offer/Quality';
import Services from '../component/offer/Services';

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

        <Services title={content.services.title} elems={content.services.elems}/>

        <Quality title={content.quality.title} elems={content.quality.elems}/>

    </article>
)};

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

export default Offer;