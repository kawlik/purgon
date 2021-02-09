import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';

import { StoreContext } from '../store/store';

import Home from './Home';
import Complex from './Complex';
import Contact from './Contact';
import ErrorPage from './ErrorPage'

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

const MainContent = () => {

    const { pages } = useContext(StoreContext);

    console.log(pages.complex.path);

    /*   *   *   *   *   *   *   *   *   *   */

    return(
    <main>
    <Switch>

        <Route exact path={`/${pages.home.path}`} render={() => <Home/>}/>
        
        <Route exact path={`/${pages.complex.path}`} render={() => <Complex/>}/>

        <Route exact path={`/${pages.contact.path}`} render={() => <Contact/>}/>

        <Route render={() => <ErrorPage/>}/>

    </Switch>
    </main>
)};

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

export default MainContent;