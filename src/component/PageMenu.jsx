import React, { useContext, useState } from 'react';
import { NavLink as Link } from 'react-router-dom';

import { StoreContext } from '../store/store';

import imgLogo from '../img/logo.png';

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

const PageMenu = () => {

    const { pages } = useContext(StoreContext);

    /*   *   *   *   *   *   *   *   *   *   */
    
    const [ isExtended, setIsExtended ] = useState(false);
    const toggleMenu = () => setIsExtended(prev => !prev);

    /*   *   *   *   *   *   *   *   *   *   */

    const responviveMobile = `mobile${!isExtended ? '' : ' active'}`;
    const responsiveNavi = `elem navi${!isExtended ? '' : ' active'}`;

    /*   *   *   *   *   *   *   *   *   *   */

    return(
    <header className='page-menu'>
        
        <div className='elem logo'>
            <Link exact to='/'><img src={imgLogo} alt='page logo'/></Link>
        </div>

        <nav className={responsiveNavi}>
        <ul className='links'>

            <li><Link exact to={`./${pages.home.path}`}>{pages.home.name}</Link></li>

            <li><Link exact to={`./${pages.offer.path}`}>{pages.offer.name}</Link></li>

            <li><Link exact to={`./${pages.complex.path}`}>{pages.complex.name}</Link></li>

            <li><Link exact to={`./${pages.contact.path}`}>{pages.contact.name}</Link></li>

        </ul>
        </nav>

        <div className='elem info'>
            <button className={responviveMobile} onClick={() => toggleMenu()}></button>
            <button className='desktop' onClick={() => {}}>Contact us!</button>
        </div>

    </header>
)};


/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

export default PageMenu;