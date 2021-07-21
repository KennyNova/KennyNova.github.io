import { useState } from 'react';
import '../styles/stars.css'
import '../styles/tailwind.css';
import Particles from 'react-particles-js';

export const Stars = (props) => {
    const [enable, setEnable] = useState(true)

    return (
        <div>
            <div className="toggle">
                <label for="toggle" class="text-xs text-white mr-5">Background</label>
                <div class="relative inline-block w-10 mr-2 align-middle select-none ">
                    <input type="checkbox" onClick={(e) => setEnable(!enable)} name="toggle" id="toggle" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
                    <label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full bg-green-400 border-green-400 cursor-pointer"></label>
                </div>
            </div>
            
            {enable ? <Particles canvasClassName="particle"
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
                }} /> : null}
            
    </div>
    );
}