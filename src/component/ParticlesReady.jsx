import React from 'react';

import Particles from 'react-tsparticles';

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

const ParticlesReady = () => {
    
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
                    distance: 400,
                    duration: 2,
                    opacity: 0.7,
                    size: 40,
                },
            },
        },

        particles: {
            color: {
            value: "#999999",
        },

        links: {
            color: "#999999",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
        },

        move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 6,
            straight: false,
        },

        number: {
            density: {
            enable: true,
            value_area: 800,
            },

            value: 60,
        },

        shape: {
            type: "circle",
        },

        size: {
            random: true,
            value: 1,
        },
    },
    }}/>
)};

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

export default ParticlesReady;