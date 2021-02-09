import React, { createContext, useEffect, useState } from 'react';

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

const StoreContext = createContext(null);

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

const StoreProvider = ({ children }) => {

    /*   *   *   *   *   *   *   *   *   *   */

    const [ contact, setContact ] = useState(null);
    const [ pages, setPages ] = useState(null);
    const [ social, setSocial ] = useState(null);

    /*   *   *   *   *   *   *   *   *   *   */

    return(
        <StoreContext.Provider value={null}>
            {children}
        </StoreContext.Provider>
)}

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

export default StoreProvider;
export { StoreContext, StoreProvider };