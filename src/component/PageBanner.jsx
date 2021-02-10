import React from 'react';

import ParticlesReady from './ParticlesReady';

import imgDog from '../img/dog.png';

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

const PageBanner = () => {
    
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