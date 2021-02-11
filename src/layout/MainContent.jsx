import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';

import { StoreContext } from '../store/store';

import Home from './Home';

import SocialMedia from './offer/SocialMedia';

//  import Complex from './Complex';
//  import Contact from './Contact';

import ErrorPage from './ErrorPage'

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

const MainContent = () => {

    const { pages } = useContext(StoreContext);

    /*   *   *   *   *   *   *   *   *   *   */

    return(
    <main>
    <Switch>

        <Route exact path={`/${pages.home.path}`} render={() => <Home/>}/>
        

        <Route exact path={`/${pages.offer.pages[0].path}`} render={() => <SocialMedia/>}/>

        <Route exact path={`/${pages.offer.pages[1].path}`} render={() => <ErrorPage/>}/>

        <Route exact path={`/${pages.offer.pages[2].path}`} render={() => <ErrorPage/>}/>

        <Route exact path={`/${pages.offer.pages[3].path}`} render={() => <ErrorPage/>}/>

        <Route exact path={`/${pages.offer.pages[4].path}`} render={() => <ErrorPage/>}/>

        <Route exact path={`/${pages.offer.pages[5].path}`} render={() => <ErrorPage/>}/>

        <Route exact path={`/${pages.offer.pages[6].path}`} render={() => <ErrorPage/>}/>


        <Route exact path={`/${pages.complex.path}`} render={() => <ErrorPage/>}/>

        <Route exact path={`/${pages.contact.path}`} render={() => <ErrorPage/>}/>

        <Route render={() => <ErrorPage/>}/>

    </Switch>
    </main>
)};

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

export default MainContent;