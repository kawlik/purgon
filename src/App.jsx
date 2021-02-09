import React, { useEffect } from 'react';
import { HashRouter as Router } from 'react-router-dom';

import StoreProvider  from './store/store';

import InfoBanner from './component/InfoBanner';
import PageMenu from './component/PageMenu';
import PageFooter from './component/PageFooter';

import MainContent from './layout/MainContent';

import ScrollAnim from './script/ScrollAnim';

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

const pages = [
    {id: 1, path: '', name: 'Home',},
    {id: 2, path: 'offer', name: 'Offer',},
    {id: 3, path: 'about', name: 'About',},
    {id: 4, path: 'more', name: 'More',},
    {id: 5, path: 'contact', name: 'Contact',},
];

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

const App = () => {

    useEffect(() => {

        const easeIn = new ScrollAnim('.animEaseIn');
        easeIn.setUp('easeIn 1s ease-in-out 1 0.2s normal both');

    }, [])

    /*   *   *   *   *   *   *   *   *   *   */
    
    return(
    <StoreProvider>


        <InfoBanner/>


        <Router>
            <PageMenu pages={pages}/>
            <MainContent/>
        </Router>


        <PageFooter/>


    </StoreProvider>
)};

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

export default App;