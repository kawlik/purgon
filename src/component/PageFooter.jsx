import React, { useContext } from 'react';

import { StoreContext } from '../store/store';

import { FaFacebookF, FaInstagram, FaLinkedinIn,  FaPhoneAlt } from 'react-icons/fa';
import { RiMailSendLine } from 'react-icons/ri';

import ContactForm from './ContactForm';

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

const PageFooter = () => {

    const { contact, social } = useContext(StoreContext);

    /*   *   *   *   *   *   *   *   *   *   */
    
    return(
    <>

    <footer className='page-footer'>
    <div className='content-wraper'>

        <div className='elem'>

            <div className='contact'>
                <h3>Kontakt do nas</h3>
                    <a href={`mailto: ${contact.email}`}><RiMailSendLine/><span>{contact.email}</span></a>
                    <a href={`tel: ${contact.phone1}`}><FaPhoneAlt/><span>{contact.phone1}</span></a>
                    <a href={`tel: ${contact.phone2}`}><FaPhoneAlt/><span>{contact.phone2}</span></a>
                </div>

            <div className='social'>
                <h3>Znajdziesz nas</h3>
                <a target='blank' href={social.facebook}><FaFacebookF/></a>
                <a target='blank' href={social.instagram}><FaInstagram/></a>
                <a target='blank' href={social.linkedin}><FaLinkedinIn/></a>
            </div>

        </div>

        <div className='elem'><ContactForm/></div>

    </div>
    </footer>

    <section className='creator'>
        Kamil Pawlik 2021 &copy; - All rights reserved
    </section>

    </>
)};

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

export default PageFooter;