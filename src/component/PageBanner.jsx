import React, { useEffect } from 'react';

import ParticlesReady from './ParticlesReady';

import imgDog from '../img/dog.png';

import InstantAnim from '../script/InstantAnim';

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

const PageBanner = () => {
    
    /*   *   *   *   *   *   *   *   *   *   */

    useEffect(() => {

        const jumpIn = new InstantAnim('.animJumpIn');
        jumpIn.setUp('easeIn 0.8s ease-in-out 1 0.8s normal both');

    }, [])

    /*   *   *   *   *   *   *   *   *   *   */

    return(
    <div className='page-banner'>

        <ParticlesReady/>

        <div className='content'>

            <div className='elem text animJumpIn'>
                <h4 className='animFadeIn'>RAZEM Z MOIMI LUDŹMI</h4>
                <h2 className='animFadeIn'>Włączam <span>Skuteczny Marketing</span></h2>
            </div>

            <div className='elem photo animJumpIn'>
                <img className='animFadeIn' src={imgDog} alt='big fafik baner'/>
            </div>

        </div>

    </div>
)};

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

export default PageBanner;