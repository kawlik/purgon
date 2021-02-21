import React from 'react';

import Particles from 'react-tsparticles';

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

const ParticlesBoubles = () => {
    
    /*   *   *   *   *   *   *   *   *   *   */

    return(        
    <Particles className='particles' options={{
        detectRetina: true,
        fpsLimit: 60,
            
        interactivity: {
            detectsOn: "canvas",
            resize: true,
            modes: {
                bubble: {
                    distance: 700,
                    duration: 2,
                    opacity: 0.4,
                    size: 50,
                },
            },
        },

        particles: {
            color: {
            value: "#999999",
        },

        move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: true,
            speed: 3,
            straight: false,
        },

        number: {
            density: {
            enable: true,
            value_area: 900,
            },

            value: 30,
        },

        shape: {
            type: "circle",
        },

        size: {
            random: true,
            value: 3,
        },
    },
    }}/>
)};

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

export default ParticlesBoubles;