import React from 'react'
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { style } from '../style';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import * as icons from 'react-icons/bi';
import * as icon from 'react-icons/ai';
import * as icons_a from 'react-icons/si';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    emailjs.send(
      'service_rmzbwna',
      'template_svp12gk',
      {
        from_name: form.name,
        to_name: 'Purav',
        from_email: form.email,
        to_email: 'workwidpurav@gmail.com',
        message: form.message,
      },
      '0LdKcL5yREhBG4mFg'
    )
      .then(() => {
        setLoading(false);
        setForm({ name: '', email: '', message: '' })
      }, (error) => {
        setLoading(false);
        console.log(error);
        alert('Something went wrong');
      })

  }
  return (
    <div className="form xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">

      <motion.div
        variants={slideIn('left', 'tween', 0, 0.7)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={style.sectionSubText}>Get in touch</p>
        <h3 className={style.sectionHeadText}>Contact.</h3>
        <form ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8">

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input autoComplete="off" type="text" name="name" value={form.name} onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" required />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input autoComplete="off" type="email" name="email" value={form.email} onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" required />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea rows="7" name="message" valu  e={form.message} onChange={handleChange} placeholder="What do you want to say?" className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" required />
          </label>
          <button type="submit" className="bg-tertiary button-submit py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">{loading ? 'Sending...' : 'Send'}</button>
          <div className='flex flex-row gap-4 px-3 icons-social'>
            <a className="rounded-full p-3 bg-primary h-[50px] w-[50px] hover:bg-[#0A66C2]" href="https://www.linkedin.com/in/purav308/" target='_blank'><icons.BiLogoLinkedin style={{ fontSize: '25px' }} /></a>
            <a className="rounded-full p-3 bg-primary h-[50px] w-[50px] hover:bg-[#171515]" href="https://github.com/Purav2003" target='_blank'><icons.BiLogoGithub style={{ fontSize: '25px' }} /></a>
            <a className="rounded-full p-3 bg-primary h-[50px] w-[50px] hover:text-[#ec6a20] hover:bg-white" href="https://www.credly.com/users/purav-shah.75a00201/badges"  target='_blank'><icons_a.SiCredly style={{ fontSize: '30px' }} /></a>
            <a className="rounded-full p-3 bg-primary h-[50px] w-[50px]" role="button" title='Download Resume' target='_blank'
            href='https://drive.google.com/file/d/1CuMGm5gq37Lu-GzYicZOWGv5gDhlvM69/view?usp=drive_link'><icon.AiOutlineDownload style={{ fontSize: '25px' }} /></a>
          </div>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn('right', 'tween', 0, 0.7)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />

      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")
