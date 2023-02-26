import React from "react";
import { easeInOut, motion } from 'framer-motion'; 
import { AppWrap } from '../../wrapper';
import {images} from '../../constants';
import './Header.scss'; 

const scaleVariants = {
    whileInView: {
        scale: [0,1],
        opacity: [0,1],
        transition: {
            duration: 1,
            ease: 'easeInOut'
        }
    }
}

const Header = () => {
    return (
        <div className="app__header app__flex">
            <motion.div
                whileInView={{x:[-100,0], opacity: [0,1]}}
                transition={{duration: 0.5}}
                className="app__header-info"
            >
            <div className="app__header-badge">
                <div className="badge-cmp app__flex">
                    <span>👋</span>
                    <div style={{marginLeft: 20}}>
                        <p className="p-text">Hello, I'm</p>
                        <h1 className="head-text">Manish</h1>
                    </div>
                </div>
                <div className="tag-cmp app__flex">
                    <p className="p-text">B.tech in Computer Science and a full stack developer at a software company</p>
                    <br /> 
                    <p className="p-text">I have fine experience in modern web technologies including ReactJs, NodeJs, MongoDB, Java, Springboot and SQL</p>
                    <br />
                    <p className="p-text">I love open source and building side projects. I am open to work or collaborate.</p>
                    {/* <p className="p-text">TCS</p> */}
                </div>
            </div>
            </motion.div>
            <motion.div
                whileInView={{opacity: [0,1]}}
                transition={{duration: 0.5, delayChildren: 0.5}}
                className="app__header-img"
            >
                <img src={images.profile} alt="profile_bg" />
                <motion.img
                    whileInView={{scale: [0,1]}}
                    transition={{duration: 1, ease: 'easeInOut'}}
                    src={images.circle}
                    alt="profile.circle"
                    className="overlay_circle"
                />
            </motion.div>
            <motion.div
                variants={scaleVariants}
                whileInView={scaleVariants.whileInView}
                className="app__header-circles"
            >
                {[images.java, images.react, images.node].map((circle) => (
                    <div className="circle-cmp app__flex" key={`index-${circle}`}>
                        <img src={circle} alt="circle"/>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}

export default AppWrap(Header, 'home'); 