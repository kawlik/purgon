import React from 'react';

import { FaFacebookF, FaInstagram, FaLinkedinIn,  FaPhoneAlt } from 'react-icons/fa';
import { RiMailSendLine } from 'react-icons/ri';

import ContactForm from './ContactForm';

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

const PageFooter = () => {

    /*   *   *   *   *   *   *   *   *   *   */
    
    return(
    <>

    <footer className='page-footer'>
    <div className='content-wraper'>

        <div className='elem'>

            <div className='contact'>
                <h3>Contact</h3>
                <a href='mailto:'><RiMailSendLine/><span>address</span></a>
                <a href='tel: 0'><FaPhoneAlt/><span>phone</span></a>
                <a href='tel: 0'><FaPhoneAlt/><span>phone</span></a>
                </div>

            <div className='social'>
                <h3>Will find us</h3>
                <a href='./'><FaFacebookF/></a>
                <a href='./'><FaInstagram/></a>
                <a href='./'><FaLinkedinIn/></a>
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