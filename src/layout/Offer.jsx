import React, { useEffect, useContext } from 'react';
import { StoreContext } from '../store/store';

import { FaCheck, FaPhoneAlt } from 'react-icons/fa';

import ScrollAnim from '../script/ScrollAnim';

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

const Offer = ({ content }) => {

    const { contact } = useContext(StoreContext);

    /*   *   *   *   *   *   *   *   *   *   */

    const allList_1 = content.list_1.elems.map((elem, index) => (
        <div key={index} className='col-lg-6 my-3 h4 elem animEaseIn'><div className='max'><span>{`0${index + 1}`}</span>{elem}</div></div>
    ));

    const allList_2 = content.list_2.elems.map((elem, index) => (
        <div key={index} className='col-lg-4 my-3 h3 elem animEaseIn'><div className='max'><span><FaCheck/></span>{elem}</div></div>
    ));

    const allPrices = content.prices.map((elem, index) => (
        <div key={index} className='col-lg-4 my-3 h4 elem'>
        <div className='max'>
            <h3 className={elem.color}>{elem.amount}<a href={`tel: ${contact.phone_1}`}><FaPhoneAlt/></a></h3>
            <ul>
                {elem.services.map((service, i) => (
                  <li key={i} className='lead animEaseIn'>{service}</li>  
                ))}
            </ul>
        </div>
        </div>
    ));

    /*   *   *   *   *   *   *   *   *   *   */

    useEffect(() => {

        const easeIn = new ScrollAnim('.animEaseIn');
        easeIn.setUp('easeIn 1s ease-in-out 1 0.2s normal both');

    }, [])

    /*   *   *   *   *   *   *   *   *   *   */
    
    return(
        <article className='offer container'>
    

        <section className='row mx-2 my-5 entry'>

            <div className='col-lg-6 text'>
                <h2 className='display-4'>{content.entry.title}</h2>
                <p className='lead animEaseIn'>{content.entry.body}</p>
            </div>

            <div className='col-lg-6 photo'>
                <img className='img-fluid' src={content.entry.img_01} alt='banner'/>
            </div>

        </section>


        <section className='row mx-2 my-5 list __type_1'>
        <div></div>
            
            <div className='col-12 title'>
                <span>{content.entry.title}</span>
                <h2>{content.list_1.title}</h2>
            </div>

            <div className='col-12 row'>
                {allList_1}
            </div>

        </section>


        <section className='row mx-2 my-5 list __type_2'>
            
            <div className='col-12 title'>
                <span>{content.entry.title}</span>
                <h2>{content.list_2.title}</h2>
            </div>
        
            <div className='col-12 row'>
                {allList_2}
            </div>

        </section>


        <section className='row mx-2 my-5 list __price'>
            
        <div className='col-12 title'>
                <span>{content.entry.title}</span>
                <h2>Cennik</h2>
            </div>
        
            <div className='col-12 row'>
                {allPrices}
            </div>

        </section>

    </article>
)};

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

export default Offer;