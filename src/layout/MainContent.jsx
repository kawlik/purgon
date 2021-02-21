import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';

import { StoreContext } from '../store/store';

import Home from './Home';
import Offer from './Offer';
import Complex from './Complex';
import Contact from './Contact';

import ErrorPage from './ErrorPage'

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

const MainContent = () => {

    const { offer, pages } = useContext(StoreContext);

    /*   *   *   *   *   *   *   *   *   *   */

    return(
    <main>
    <Switch>

        <Route exact path={`/${pages.home.path}`} render={() => <Home/>}/>
        

        <Route exact path={`/${pages.offer.pages[0].path}`} render={() => <Offer content={offer.socialMedia}/>}/>

        <Route exact path={`/${pages.offer.pages[1].path}`} render={() => <Offer content={offer.websites}/>}/>

        <Route exact path={`/${pages.offer.pages[2].path}`} render={() => <Offer content={offer.googleAds}/>}/>

        <Route exact path={`/${pages.offer.pages[3].path}`} render={() => <Offer content={offer.positioning}/>}/>

        <Route exact path={`/${pages.offer.pages[4].path}`} render={() => <Offer content={offer.graphics}/>}/>

        <Route exact path={`/${pages.offer.pages[5].path}`} render={() => <Offer content={offer.photoViedo}/>}/>

        <Route exact path={`/${pages.offer.pages[6].path}`} render={() => <Offer content={offer.accessory}/>}/>


        <Route exact path={`/${pages.complex.path}`} render={() => <Complex/>}/>

        <Route exact path={`/${pages.contact.path}`} render={() => <Contact/>}/>
        

        <Route render={() => <ErrorPage/>}/>

    </Switch>
    </main>
)};

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

export default MainContent;