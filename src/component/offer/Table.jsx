import React from 'react';

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

const Table = ({ table }) => {

    const parseOption = option => (
        <li className='price-tag'>
            <span className='body'>{option.body}</span>
            <span className='price'>{option.price}</span>
        </li>
    ); 

    /*   *   *   *   *   *   *   *   *   *   */

    const allRows = table.map((elem, index) => (
    <div key={elem.name} className={`elem-row ${(index%2) ? '__light' : '__dark'}`}>
        <h5>{elem.name}</h5>
        <ol>{elem.options.map(option => parseOption(option))}</ol>
    </div>));

    /*   *   *   *   *   *   *   *   *   *   */

    return(
    <section className='table'>

        {allRows}

    </section>
)};

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

export default Table;