import React from 'react';

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

const ContactForm = () => {

    /*   *   *   *   *   *   *   *   *   *   */
    
    return(
    <>
    <h2 className='my-2 p-2'>Contact us!</h2>
    <form className='form-grup col-12'>

        <input className='form-control my-2 p-2' type='text' name='name'  placeholder='Name and surname'/>

        <input className='form-control my-2 p-2' type='phone' name='tel'  placeholder='Phone number'/>

        <input className='form-control my-2 p-2' type='email' name='email'  placeholder='Email address'/>

        <textarea className='form-control my-2 p-2' rows='7' name='body' placeholder='Your message ...'/>

        <button className='btn btn-success my-2 p-3'>Send</button>

    </form>
    </>
)};

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

export default ContactForm;