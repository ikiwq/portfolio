import { useEffect } from 'react';

import { BsHandIndexThumb, BsMouse2 } from 'react-icons/bs';
import { IoMdPaperPlane } from 'react-icons/io';
import { Link } from 'react-scroll';
import { Typewriter } from 'react-simple-typewriter';
import { socials } from '../../static/config';
import homeContent from '../../static/home/home.content';

import './Styles.scss';

const Home = () => {

  const selfDescriptions = homeContent.selfDescriptions;

  // On load effects
  useEffect(() => {
    const delay = 1750;

    const timeoutId = setTimeout(() => {
      let hiddenElements = document.querySelectorAll('.social-icon-hidden');
      hiddenElements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.remove('social-icon-hidden');
        }, index * 100);
      })
    }, delay);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div name="home" className={`max-w-5xl mx-auto h-screen text-black dark:text-white`}>
      <div className='grid grid-cols-1 h-full relative'>
        <div className='flex flex-row mb-20 md:mb-0'>
          <div className='hidden text-red-600 justify-center items-center pr-5 md:flex'>
            <ul className='border-red-500 flex gap-2 border-r-2 px-2 pr-8 flex-col md:pr-2'>
              {socials.map((social) => {
                return (
                  <li key={social.name} className={`text-5xl relative hover:cursor-pointer z-30 duration-200 social-icon-hidden`} data-tooltip={social.tooltip}>
                    <a href={social.link} target='_blank' rel='noopener noreferrer' className="hover:text-black dark:hover:text-white duration-300">{social.component}</a>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className=' relative w-full h-full flex flex-col items-center md:items-start justify-center gap-0 col-span-1 pr-3 md:pr-0'>
            <div className={`flex w-full justify-center items-center md:justify-start font-Bebas text-9xl transition-200`}>
              <div className='flex flex-col items-center md:items-start px-2 md:px-0'>
                <p className='text-5xl'>Hello, I am</p>
                <p className='hidden md:block'>
                  <span className='text-red-600'>Chris</span>
                  <span className='text-8xl'> And I am a </span>
                </p>
                <div className='flex flex-col md:hidden items-center justify-center'>
                  <p className='text-red-600'>Chris</p>
                  <p className='text-7xl -mt-2'> And I am a </p>
                </div>
                <p className='md:-mt-4 -mt-9 text-center'>
                  <span className='text-red-600 text-6xl md:text-9xl text-center md:text-start'>
                    {selfDescriptions &&
                      <Typewriter words={selfDescriptions} cursor={true} cursorStyle={"_"} loop={true} />
                    }
                  </span>
                </p>
              </div>
            </div>
            <div className='w-full md:w-auto flex items-center justify-center  md:relative bottom-15% md:bottom-auto z-20'>
              <div className='absolute md:relative bottom-16 md:bottom-0'>
                <Link to="contact" smooth duration={500}>
                  <button className='contact-button my-2 md:my-0 px-8 md:px-6 py-4 bg-red-600 rounded-md flex items-center justify-center gap-2 md:mx-0 text-white z-20'>Contact me! <IoMdPaperPlane className='paper-plane text-xl' /></button>
                </Link>
              </div>
            </div>
            <Link to="about" smooth duration={500}><button className={`absolute hidden bottom-20 items-center text-xl animate-bounce lg:flex`}><BsMouse2 />Scroll Down!</button></Link>
          </div>
        </div>
        <div className='flex items-center justify-center absolute bottom-20 w-full'>
          <span className={`flex items-center justify-center text-center text-xl gap-2 move-div lg:hidden absolute mr-auto ml-auto`}><BsHandIndexThumb /> Scroll down! </span>
        </div>
      </div>
    </div>
  )
}

export default Home

