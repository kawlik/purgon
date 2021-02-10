import React, { createContext, useEffect, useState, useRef } from 'react';

import * as data from './data'

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

const StoreContext = createContext(null);

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

const StoreProvider = ({ children }) => {

    const [ contact, setContact ] = useState(data.contact);
    const [ pages, setPages ] = useState(data.pages);
    const [ social, setSocial ] = useState(data.social);

    const currRef = useRef(null);

    /*   *   *   *   *   *   *   *   *   *   */

    useEffect(() => {

    }, []);
    
    /*   *   *   *   *   *   *   *   *   *   */

    const storeValue = {
        contact, setContact,
        pages, setPages,
        social, setSocial,
        currRef,
    };

    /*   *   *   *   *   *   *   *   *   *   */

    return(
        <StoreContext.Provider value={storeValue}>
            {children}
        </StoreContext.Provider>
)}

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

export default StoreProvider;
export { StoreContext, StoreProvider };