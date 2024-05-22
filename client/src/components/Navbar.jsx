import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { style } from '../style';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';


const Navbar = () => {
  const [active, setActive] = useState(' ');
  const [toggle, setToggle] = useState(false);
  const [ipAddress, setIpAddress] = useState([]);
  // Add logic to take user's ip, mac, and other details  
  useEffect(() => {
    fetch('http://localhost:5000/api/user-details')
      .then(response => response.json())
      .catch(error => console.error('Error fetching IP address:', error));
  }, []);

  return (
    <nav className={`${style.paddingX} w-full flex item-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2" onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }
        }><img src={logo} alt='logo' className="logo-photo w-11 object-cover h-11 rounded-full" />
          <p className="text-white text-[18px] font-bold flex">
            Purav &nbsp; <span className="sm:block hidden"> |&nbsp; Full-Stack Developer</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li key={link.id} className={`${active === link.title
              ? "text-white"
              : "text-secondary"} hover:text-white text-[18px] font-medium`}
              onClick={() => setActive(link.title)}>
              <a href={`#${link.id}`}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={toggle ? close : menu} alt='menu' className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)} />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-tertiary
           absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.id} className={`${active === link.title
                  ? "text-white"
                  : "text-secondary"} font-poppins font-medium text-[16px] `}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle)
                  }}>
                  <a href={`#${link.id}`}>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

    </nav>
  )
}

export default Navbar