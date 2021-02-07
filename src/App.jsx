import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

import InfoBanner from './component/InfoBanner';
import PageMenu from './component/PageMenu';
import PageFooter from './component/PageFooter';

import MainContent from './layout/MainContent';


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

    /*   *   *   *   *   *   *   *   *   *   */
    
    return(
    <Router>

        <InfoBanner/>
        <PageMenu pages={pages}/>

        <MainContent/>

        <PageFooter/>

    </Router>
)};

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

export default App;