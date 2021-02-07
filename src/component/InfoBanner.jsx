import React from 'react';

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

const infoBanner = () => {
    
    /*   *   *   *   *   *   *   *   *   *   */

    return(
    <div className='info-banner'>

        <div className='elem social'>
            <a href='./'><FaFacebookF/></a>
            <a href='./'><FaInstagram/></a>
            <a href='./'><FaLinkedinIn/></a>
        </div>

        <div className='elem info'>
            <a href='./'><FaMapMarkerAlt/><span>address</span></a>
            <a href='tel: 0'><FaPhoneAlt/><span>phone</span></a>
        </div>

    </div>
)};

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

export default infoBanner;