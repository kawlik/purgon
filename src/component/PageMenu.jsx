import React, { useState } from 'react';
import { NavLink as Link } from 'react-router-dom';

import imgLogo from '../img/logo.png';

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

const PageMenu = ({ pages }) => {
    
    const [ isExtended, setIsExtended ] = useState(false);

    const toggleMenu = () => setIsExtended(prev => !prev);

    /*   *   *   *   *   *   *   *   *   *   */

    const allLinks = pages.map(page =><li key={page.id}><Link exact to={page.path}>{page.name}</Link></li>);

    const responviveMobile = `mobile${!isExtended ? '' : ' active'}`;
    const responsiveNavi = `elem navi${!isExtended ? '' : ' active'}`;

    /*   *   *   *   *   *   *   *   *   *   */

    return(
    <header className='page-menu'>
        
        <div className='elem logo'>
            <Link exact to='/'><img src={imgLogo} alt='page logo'/></Link>
        </div>

        <nav className={responsiveNavi}>
            <ul className='links'>{allLinks}</ul>
        </nav>

        <div className='elem info'>
            <button className={responviveMobile} onClick={() => toggleMenu()}></button>
            <button className='desktop' onClick={() => {}}>Contact us!</button>
        </div>

    </header>
)};


/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

export default PageMenu;