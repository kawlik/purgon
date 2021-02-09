import React from 'react';

import { BsLightning } from 'react-icons/bs';

import PageBanner from '../component/PageBanner';
import SimpleCard from '../component/SimpleCard';

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
            <SimpleCard type='simple-card animEaseIn' title={cardTitle} body={cardBody} icon={<BsLightning/>} />
            <SimpleCard type='simple-card animEaseIn' title={cardTitle} body={cardBody} icon={<BsLightning/>} />
            <SimpleCard type='simple-card animEaseIn' title={cardTitle} body={cardBody} icon={<BsLightning/>} />
            <SimpleCard type='simple-card animEaseIn' title={cardTitle} body={cardBody} icon={<BsLightning/>} />
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
            <SimpleCard type='service-card animEaseIn' title={cardTitle} body={cardBodyShort} icon={<BsLightning/>} />
            <SimpleCard type='service-card animEaseIn' title={cardTitle} body={cardBodyShort} icon={<BsLightning/>} />
            <SimpleCard type='service-card animEaseIn' title={cardTitle} body={cardBodyShort} icon={<BsLightning/>} />
            <SimpleCard type='service-card animEaseIn' title={cardTitle} body={cardBodyShort} icon={<BsLightning/>} />
            <SimpleCard type='service-card animEaseIn' title={cardTitle} body={cardBodyShort} icon={<BsLightning/>} />
            <SimpleCard type='service-card animEaseIn' title={cardTitle} body={cardBodyShort} icon={<BsLightning/>} />
        </div>
        </section>
    </>
)};

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

export default Home;