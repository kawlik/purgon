import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

import StoreProvider  from './store/store';

import InfoBanner from './component/InfoBanner';
import PageMenu from './component/PageMenu';
import PageFooter from './component/PageFooter';

import MainContent from './layout/MainContent';

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

const App = () => {

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