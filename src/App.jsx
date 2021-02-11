import React, { useEffect } from 'react';
import { HashRouter as Router } from 'react-router-dom';

import StoreProvider  from './store/store';

import InfoBanner from './component/InfoBanner';
import PageMenu from './component/PageMenu';
import PageFooter from './component/PageFooter';

import MainContent from './layout/MainContent';

import InstantAnim from './script/InstantAnim';
import ScrollAnim from './script/ScrollAnim';

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

const App = () => {

    useEffect(() => {

        const jumpIn = new InstantAnim('.animJumpIn');
        jumpIn.setUp('easeIn 0.8s ease-in-out 1 0.8s normal both');

        const easeIn = new ScrollAnim('.animEaseIn');
        easeIn.setUp('easeIn 1s ease-in-out 1 0.2s normal both');

    }, [])

    /*   *   *   *   *   *   *   *   *   *   */
    
    return(
    <StoreProvider>


        <InfoBanner/>


        <Router>
            <PageMenu/>
            <MainContent/>
        </Router>


        <PageFooter/>


    </StoreProvider>
)};

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

export default App;