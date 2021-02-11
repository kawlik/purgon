import React, { useContext, useEffect, useState } from 'react';
import { NavLink as Link } from 'react-router-dom';

import { StoreContext } from '../store/store';

import imgLogo from '../img/logo.png';

import DomDetails from '../script/DomDetails';

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

const PageMenu = () => {

    const { currRef, pages } = useContext(StoreContext);
    const scrollToRef = () => currRef.current.scrollIntoView();
    
    /*   *   *   *   *   *   *   *   *   *   */
    
    const [ isExtended, setIsExtended ] = useState(false);
    const toggleMenu = () => setIsExtended(prev => !prev);
    const closeMenu = () => setTimeout(() => toggleMenu(), 400);

    /*   *   *   *   *   *   *   *   *   *   */

    const allOffer = pages.offer.pages.map(elem =>
        (<li key={elem.path}><Link exact to={`./${elem.path}`} onClick={() => closeMenu()}>{elem.name}</Link></li>));

    /*   *   *   *   *   *   *   *   *   *   */

    const responviveMobile = `mobile${!isExtended ? '' : ' active'}`;
    const responsiveNavi = `elem navi${!isExtended ? '' : ' active'}`;

    /*   *   *   *   *   *   *   *   *   *   */

    useEffect(() => {

        const dialog = new DomDetails('.sublist');
        dialog.setUp();

    }, []);

    /*   *   *   *   *   *   *   *   *   *   */

    return(
    <header className='page-menu'>
        
        <div className='elem logo'>
            <Link exact to='/'><img src={imgLogo} alt='page logo'/></Link>
        </div>

        <nav className={responsiveNavi}>
        <ul className='links'>

            <li><Link exact to={`./${pages.home.path}`} onClick={() => closeMenu()}>{pages.home.name}</Link></li>

            <li>
            <details className='sublist'>

                <summary>{pages.offer.name}</summary>

                <ul>{allOffer}</ul>

            </details>
            </li>

            <li><Link exact to={`./${pages.complex.path}`} onClick={() => closeMenu()}>{pages.complex.name}</Link></li>

            <li><Link exact to={`./${pages.contact.path}`} onClick={() => closeMenu()}>{pages.contact.name}</Link></li>

        </ul>
        </nav>

        <div className='elem info'>
            <button className={responviveMobile} onClick={() => toggleMenu()}></button>
            <button className='desktop' onClick={() => scrollToRef()}>Contact us!</button>
        </div>

    </header>
)};


/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

export default PageMenu;