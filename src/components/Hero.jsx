import React from 'react';
import profilePic from "../assets/about.jpg";
import {motion} from "framer-motion";
import { HERO_CONTENT } from '../constants';
import "../index.css";

const container =(delay) =>({
    hidden:{x:-100, opacity:0},
    visible:{
        x:0,
        opacity:1,
        transition:{duration:0.5,delay:delay},
    },
});

export const Hero = () => {
  return (
    <div id='home' className='border-b border-neutral-900 pb-4 lg:mb-35 pt-32 lg:pt-30'>
        <div className='flex flex-wrap items-center'>
            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex flex-col items-center lg:items-start'>
                    <motion.h1 
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl'>
                        Shubh Mishra
                    </motion.h1>
                    <motion.span 
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                        className='bg-gradient-to-r from-pink-500 via-slate-400 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'>
                        Data Analyst & Full Stack Web Developer
                    </motion.span>
                    <motion.p 
                        variants={container(1)}
                        initial="hidden"
                        animate="visible"
                        className='my-10 max-w-xl py-6'>
                        {HERO_CONTENT}
                    </motion.p>
                </div>
            </div>
            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex justify-center'>
                    <motion.img 
                        initial={{x:100, opacity:0}}
                        animate={{x:0, opacity:1}}
                        transition={{duration:1, delay:1.2}}
                        className='rounded-2xl h-[500px]' src={profilePic} alt="profilePic" />
                </div>
            </div>
        </div>
    </div>
  );
}

export default Hero;
