import '../styles/stars.css'
import Particles from 'react-particles-js';

export const Stars = () => {

    return (
        <Particles canvasClassName="particle"
            params={{
            "backgroundMask": {
                "composite": "destination-out",
                "cover": {
                "color": {
                    "value": "#fff"
                },
                "opacity": 1
                },
                "enable": false
            },
            "fpsLimit": 60,
            "particles": {
                "number": {
                    "value": 1000,
                    "density": {
                        "enable": true,
                        "value_area": 1500
                    }
                },
                "fullScreen": {
                    "enable": true,
                    "zIndex": -1
                },
                "line_linked": {
                    "enable": false,
                },
                "move": {
                    "direction": "up",
                    "speed": .5
                },
                "size": {
                    "value": 1
                },
                "opacity": {
                    "anim": {
                        "enable": true,
                        "speed": 1,
                        "opacity_min": 0.05
                    }
                }
            },
            "interactivity": {
                "events": {
                    "onclick": {
                        "enable": false,
                        "mode": "push"
                    },
                    "onhover": {
                        "enable": true,
                        "mode": "trail",
                        "parallax": {
                        "enable": true,
                        "force": 20,
                        "smooth": 100
                        }
                    }
                },
                "modes": {
                    "push": {
                        "particles_nb": 1
                    }
                }
            },
            "retina_detect": true
        }}/>
    );
}