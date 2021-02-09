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

            <div className='elem text'>
                <h2 className='animFadeIn'>Big banner title</h2>
                <h4 className='animFadeIn'>Smaller banner title</h4>
            </div>

            <div className='elem photo'>
                <img className='animFadeIn' src={imgDog} alt='big fafik baner'/>
            </div>

        </div>

    </div>
)};

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

export default PageBanner;