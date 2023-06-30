import React, {useCallback} from 'react';
import s from './app.module.scss';
import Header from "./components/header/Header";
import AboutMe from "./components/aboutMe/AboutMe";
import MyServices from "./components/myServices/MyServices";
import MyWorks from "./components/myWorks/MyWorks";
import Freelance from "./components/frilance/Freelance";
import Footer from "./components/footer/Footer";
import LogIn from "./components/login/LogIn";
import Particles from "react-tsparticles";
import {Engine} from "tsparticles-engine";
import {loadFull} from "tsparticles";
import {Zoom} from "react-awesome-reveal";

function App() {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);
    return (
        <div className={s.App}>
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    fpsLimit: 60,
                    interactivity: {
                        events: {
                            resize: true,
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffa500",
                        },
                        links: {
                            color: "#a6a1a1",
                            distance: 100,
                            enable: true,
                            opacity: 0.3,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 1,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.1,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: {min: 1, max: 4},
                        },
                    },
                    detectRetina: true,
                }}
            />
            <Header/>
            <Zoom>
                <AboutMe/>
            </Zoom>
            <MyServices/>
            <MyWorks/>
            <Freelance/>
            <LogIn/>
            <Footer/>
        </div>
    );
}

export default App;
