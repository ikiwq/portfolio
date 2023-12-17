import { useEffect, useState } from 'react';
import './Styles.scss';

import { AiFillGithub, AiFillLinkedin, AiOutlineMail, AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

const NavBar = ({ prefersDarkTheme, setPrefersDarkTheme }: { prefersDarkTheme: boolean, setPrefersDarkTheme: Function }) => {
  // Socials list
  const socials = [{
    name: "GitHub",
    link: "https://github.com/ikiwq",
    component: <AiFillGithub />,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/christopher-domenicano/",
    component: <AiFillLinkedin />
  },
  {
    name: "Email",
    link: "mailto:domenicano.chris@gmail.com",
    component: <AiOutlineMail />,
  }];

  //Section list
  const sections = [{
    name: 'Home',
    to: 'home'
  },
  {
    name: 'About',
    to: 'about'
  },
  {
    name: 'Work',
    to: 'experience'
  },
  {
    name: 'Portfolio',
    to: 'portfolio'
  },
  {
    name: 'Contact',
    to: 'contact'
  }]

  // Dark mode stuff

  let toggleDarkTheme = () => {
    setPrefersDarkTheme(!prefersDarkTheme);
    document.documentElement.classList.toggle("dark");
  }

  // Menu stuff
  const [menuOpen, setMenuOpen] = useState(false);

  let toggleMenu = () => {
    document.body.classList.toggle("disable-scroll");
    setMenuOpen(!menuOpen);
  }

  // Menu disappearing stuff
  var prevScrollpos = window.scrollY;
  window.onscroll = function (event: Event) {
    if (!event.isTrusted) return;

    let elements = document.querySelectorAll('#navbar-link-top');
    var currentScrollPos = window.scrollY;

    if (prevScrollpos > currentScrollPos) {
      showNavbarElements(0);
      document.getElementById("navbar")?.classList.add("dark:bg-black");
      document.getElementById("navbar")?.classList.add("bg-white");
      for (let element of elements) {
        (element as HTMLElement).style.pointerEvents = "auto";
      }
    } else {
      hideNavbarElements(0);
      document.getElementById("navbar")?.classList.remove('dark:bg-black');
      document.getElementById("navbar")?.classList.remove('bg-white');
      for (let element of elements) {
        (element as HTMLElement).style.pointerEvents = "none";
      }
    }
    prevScrollpos = currentScrollPos;
  }

  useEffect(() => {
    let links = document.getElementsByClassName('navbar-link-menu');

    const observer = new IntersectionObserver(entries => {
      entries.forEach((entry, index) => {
        setTimeout(() => {
          entry.target.classList.add('navbar-link-menu-active');
          entry.target.classList.remove('navbar-link-menu');
        }, index * 50)
      })
    });

    for (let i = 0; i < links.length; i++) {
      observer.observe(links[i]);
    }
  });

  // On load effects
  useEffect(() => {
    let timeoutId = showNavbarElements(1750);
    return () => clearTimeout(timeoutId);
  }, []);

  let showNavbarElements = (delay: number) => {
    const timeoutId = setTimeout(() => {
      let hiddenElements = document.querySelectorAll('#navbar-link-top');
      hiddenElements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.remove('top-navbar-element-hidden');
          element.classList.add("top-navbar-element-shown")
        }, index * 50);
      })
    }, delay);

    return timeoutId;
  }

  let hideNavbarElements = (delay: number) => {
    const timeoutId = setTimeout(() => {
      let shownElements = document.querySelectorAll('#navbar-link-top');
      shownElements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add('top-navbar-element-hidden');
          element.classList.remove('top-navbar-element-shown');
        }, index * 50);
      })
    }, delay);

    return timeoutId;
  }


  return (
    <div className={`py-1 text-3xl font-Bebas fixed top-0 left-0 w-full z-50 bg-white dark:bg-black duration-300`} id='navbar'>
      {menuOpen &&
        <div className={`dark:bg-black bg-white h-screen w-screen absolute z-50`}>
          <div className='text-red-600 gap-4 justify-center items-center flex flex-col h-full text-6xl'>
            {sections.map((section) => {
              return (
                <Link to={section.to} smooth duration={500} onClick={() => toggleMenu()}>
                  <p className='navbar-link-menu'>{section.name}</p>
                </Link>
              )
            })}
            <ul className='flex gap-4 pt-6'>
              {socials.map((social) =>
                <li className={`navbar-link-menu text-secondary`} onClick={() => toggleMenu()}>
                  <a href={social.link} target="_blank" rel='noreferr'>
                    {social.component}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>}

      <div className='flex justify-between container max-w-5xl mx-auto px-2'>
        <div className='text-red-600 navbar-link-top-no-hover' id='written-logo'>
          <a href='https://ikiwq.github.io/blog' rel='noreferr' target='_blank'>
            <p className='font-handwrite text-4xl top-navbar-element-hidden cursor-pointer' id='navbar-link-top'>Iki</p>
          </a>
        </div>
        <ul className='hidden text-red-600 gap-4 justify-center items-center md:flex navbar-links-top'>
          {sections.map((section, index) =>
            <li>
              <Link key={'section-top' + index.toString()} to={section.to} smooth duration={500}>
                <p id='navbar-link-top' className='cursor-pointer duration-200 top-navbar-element-hidden'>
                  {section.name}
                </p>
              </Link>
            </li>
          )}
        </ul>
        <div className='flex text-red-600 navbar-link-top-no-hover items-center justify-center gap-2 text-xl z-50' id='darkmode-switch'>
          <button id='navbar-link-top' className='hover:cursor-pointer top-navbar-element-hidden duration-200' onClick={() => { toggleDarkTheme() }}>
            {!prefersDarkTheme ? <BsFillMoonFill className='moon-icon' /> : <BsFillSunFill className='sun-icon' />}
          </button>
          <button id='navbar-link-top' className='text-2xl hover:cursor-pointer md:hidden duration-200 top-navbar-element-hidden' onClick={() => { toggleMenu() }} >
            {menuOpen ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}
          </button>
        </div>
      </div>
    </div>
  )
}

export default NavBar