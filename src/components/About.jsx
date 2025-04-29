import aboutMe from "../assets/profile.jpeg"
import {motion} from "framer-motion";
import "../index.css";
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:pt-5 ">
        <motion.h2 
        id="about"
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1}}
        className="my-20 text-center text-4xl">About <span className="text-neutral-500">Me</span></motion.h2>
        <div className="flex flex-wrap">
            <motion.div 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:0.5,delay:0.5}}
            className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <img className="rounded-2xl h-[500px]" src={aboutMe} alt="aboutMe" />
                </div>
            </motion.div>

            <motion.div
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:100}}
            transition={{duration:0.5,delay:1}}
             className="w-full lg:w-1/2 ">
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-10 max-w-xl py-6">
                        Hi, I’m Shubh Mishra — a Computer Science undergraduate at Jaypee University of Engineering and Technology. I have experience developing stock trading bots, predictive machine learning applications, and full-stack web apps. With a strong background in Python, C++, SQL, and modern web technologies, I aim to design software that is not just functional but meaningful. I enjoy diving into new challenges, whether it's automating workflows, visualizing data for better insights, or enhancing user experiences through smart interfaces. Outside of coding, I’m constantly exploring new tools, APIs, and frameworks to push my skills to the next level.
                        </p>
                    </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About