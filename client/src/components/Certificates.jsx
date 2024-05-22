import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { style } from '../style';
import { github } from '../assets';
import { link } from '../assets';
import { SectionWrapper } from '../hoc';
import { certificate } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
    return (
        <motion.div>
            <Tilt
                options={
                    {
                        max: 45,
                        scale: 1,
                        speed: 450
                    }
                }
                className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
            >
                <div className="relative w-full h-full">
                    <img src={image} alt={name} className="w-full h-full object-contain rounded-2xl" style={{ aspectRatio: 3 / 2 }} />
                </div>
                <div className="mt-5">
                    <h3 className="text-white font-bold text-[24px]">{name}</h3>
                </div>

            </Tilt>
        </motion.div>
    )
}

const Certificates = () => {
    return (
        <div>
            <motion.div>
                <p className={style.sectionSubText}>My Accomplishments</p>
                <h2 className={style.sectionHeadText}>Certificates.</h2>
            </motion.div>
            <div className="w-full flex">
                <motion.p
                    className="mt-3 text-secondary text-[17px] max-w-5xl leading-[30px]"
                >
                    Throughout my journey as a passionate and dedicated Full Stack Developer, I have continually sought to expand my skillset and stay updated with the latest technologies and industry best practices.Each certificate represents a milestone in my learning process, earned through rigorous study, hands-on projects, and a commitment to excellence. I take great pride in the knowledge and expertise gained from these certifications, as they signify my ability to tackle complex challenges and deliver innovative solutions.
                </motion.p>
            </div>
            <div className="mt-20 flex flex-wrap gap-7 work-card">
                {certificate.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}
            </div>
        </div>
    )
}

export default SectionWrapper(Certificates, "");