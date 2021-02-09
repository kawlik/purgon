import React from 'react';

import { BsLightning } from 'react-icons/bs';

import PageBanner from '../component/PageBanner';
import SimpleCard from '../component/SimpleCard';

import icon from '../img/logo_min.png';
import icon_1 from '../img/icon_1.png';
import icon_2 from '../img/icon_2.png';
import icon_3 from '../img/icon_3.png';
import icon_4 from '../img/icon_4.png';
import icon_5 from '../img/icon_5.png';
import icon_6 from '../img/icon_6.png';
import icon_7 from '../img/icon_7.png';

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

const cardTitle = 'Card Title';
const cardBody = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nobis maxime tempore doloremque nemo consectetur. Sed dolor, deserunt repellendus minus at recusandae velit accusantium culpa quae assumenda autem nisi libero?';

const cardBodyShort = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nobis maxime tempore doloremque nemo consectetur.';

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

const Home = () => {

    /*   *   *   *   *   *   *   *   *   *   */
    
    return(
    <>

        <PageBanner/>

        <section className='home'>
        <div className='entry-text animEaseIn'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, nam sunt dolore, nihil a cumque quos corrupti nisi dignissimos veniam, <span>vel maxime nesciunt harum doloribus quasi minima fugiat impedit tenetur.</span>
        </div>

        <div className='simple-cards'>
            <SimpleCard type='simple-card animEaseIn' title={cardTitle} body={cardBody} icon={icon} />
            <SimpleCard type='simple-card animEaseIn' title={cardTitle} body={cardBody} icon={icon} />
            <SimpleCard type='simple-card animEaseIn' title={cardTitle} body={cardBody} icon={icon} />
            <SimpleCard type='simple-card animEaseIn' title={cardTitle} body={cardBody} icon={icon} />
        </div>

        <div className='simple-list'>
            <h2 className='animEaseIn'>Our services</h2>
            <ul>
            <li className='animEaseIn'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit mollitia, temporibus ...</li>
            <li className='animEaseIn'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit mollitia, temporibus ...</li>
            <li className='animEaseIn'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit mollitia, temporibus ...</li>
            <li className='animEaseIn'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit mollitia, temporibus ...</li>
            <li className='animEaseIn'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit mollitia, temporibus ...</li>
            </ul>
        </div>

        <div className='service-cards'>

            <div className='card-row'>
            <SimpleCard type='service-card animEaseIn' title={cardTitle} body={cardBodyShort} icon={icon_1} />
            <SimpleCard type='service-card animEaseIn' title={cardTitle} body={cardBodyShort} icon={icon_2} />
            <SimpleCard type='service-card animEaseIn' title={cardTitle} body={cardBodyShort} icon={icon_3} />
            </div>

            <div className='card-row'>
            <SimpleCard type='service-card animEaseIn' title={cardTitle} body={cardBodyShort} icon={icon_4} />
            <SimpleCard type='service-card animEaseIn' title={cardTitle} body={cardBodyShort} icon={icon_5} />
            </div>

            <div className='card-row'>
            <SimpleCard type='service-card animEaseIn' title={cardTitle} body={cardBodyShort} icon={icon_6} />
            <SimpleCard type='service-card animEaseIn' title={cardTitle} body={cardBodyShort} icon={icon_7} />
            </div>

        </div>
        </section>
    </>
)};

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

export default Home;