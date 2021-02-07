import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import Offer from './Offer';
import About from './About';
import More from './More';
import Contact from './Contact';
import ErrorPage from './ErrorPage'

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

const MainContent = () => {
    
    return(
    <main>
    <Switch>

        <Route exact path='/' render={() => <Home/>}/>

        <Route exact path='/offer' render={() => <Offer/>}/>

        <Route exact path='/about' render={() => <About/>}/>

        <Route exact path='/more' render={() => <More/>}/>
        
        <Route exact path='/contact' render={() => <Contact/>}/>

        <Route render={() => <ErrorPage/>}/>

    </Switch>
    </main>
)};

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

export default MainContent;