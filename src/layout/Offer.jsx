import React, { useEffect } from 'react';

import Entry from '../component/offer/Entry';
import Quality from '../component/offer/Quality';
import Services from '../component/offer/Services';
import Price from '../component/offer/Price';
import Table from '../component/offer/Table';

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
    
        {content?.entry && <Entry title={content.entry.title} body={content.entry.body} img={content.entry.img}/>}

        {content?.services && <Services category={content.entry.title} title={content.services.title} elems={content.services.elems}/>}

        {content?.quality && <Quality category={content.entry.title} title={content.quality.title} elems={content.quality.elems}/>}

        {content?.prices && <Price category={content.entry.title} elems={content.prices}/>}

        {content?.table && <Table table={content.table}/>}

    </article>
)};

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

export default Offer;