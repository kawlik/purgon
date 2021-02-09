import React from 'react';

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

const ContactForm = () => {

    /*   *   *   *   *   *   *   *   *   *   */
    
    return(
    <>
    <h2 className='my-2 p-2'>Napisz do nas!</h2>
    <form className='form-grup col-12'>

        <input className='form-control my-2 p-2' type='text' name='name'  placeholder='Imię i nazwisko'/>

        <input className='form-control my-2 p-2' type='phone' name='tel'  placeholder='Numer telefonu'/>

        <input className='form-control my-2 p-2' type='email' name='email'  placeholder='Adres email'/>

        <textarea className='form-control my-2 p-2' rows='7' name='body' placeholder='Twoja wiadomość ...'/>

        <button className='btn btn-success my-2 p-3'>Wyślij!</button>

    </form>
    </>
)};

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

export default ContactForm;