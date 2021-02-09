import React, { useContext } from 'react';

import { StoreContext } from '../store/store';

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa';
import { RiMailSendLine } from 'react-icons/ri';


/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

const InfoBanner = () => {

    const { contact, social } = useContext(StoreContext);
    
    /*   *   *   *   *   *   *   *   *   *   */

    return(
    <div className='info-banner'>

        <div className='elem social'>
            <a target='blank' href={social.facebook}><FaFacebookF/></a>
            <a target='blank' href={social.instagram}><FaInstagram/></a>
            <a target='blank' href={social.linkedin}><FaLinkedinIn/></a>
        </div>

        <div className='elem info'>
            <a href={`mailto: ${contact.email}`}><RiMailSendLine/><span>{contact.email}</span></a>
            <a href={`tel: ${contact.phone1}`}><FaPhoneAlt/><span>{contact.phone1}</span></a>
        </div>

    </div>
)};

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

export default InfoBanner;