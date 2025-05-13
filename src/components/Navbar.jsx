import { useState } from 'react';
import Logo_2 from '../assets/Logo_2.png';
import { Link } from "react-router-dom";
import { FaHome, FaUtensils, FaListAlt, FaQuoteLeft, FaSearch, FaShoppingCart, FaUser, FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false); 

  const menuItems = [
    { icon: <FaHome />, text: "Home", to: "/" },
    { icon: <FaUtensils />, text: "Serviços", to: "/wws" },
    { icon: <FaListAlt />, text: "Menu", to: "/om" },
    { icon: <FaQuoteLeft />, text: "Testimonial", to: "/Testimonial" },
  ];
{/*bg-gradient-to-r from-yellow-400 to-orange-500*/}
  return (
    <nav className='fixed top-3 left-1/2 transform -translate-x-1/2 
     shadow-lg rounded-full px-3 sm:px-4 md:px-4 lg:px-8 h-15 lg:w-[75%] py-2 md:py-3 w-[75%] md:w-[95%] max-w-7xl flex items-center
      justify-between
     backdrop-blur-md border border-white/20 z-50'>
      
      {/* Seção da logo */}
      <div className='flex items-center space-x-2'>
        <div className='p-2 bg-white/20 rounded-full backdrop-blur-sm'>
          <img src={Logo_2} className='text-xl text-white animate-pulse h-16' alt="Logo" />
        </div>
      </div>

      {/* Centro */}
      <div className='hidden md:flex space-x-4 lg:space-x-8'>
        {menuItems.map((item, index) => (
          <Link key={index} to={item.to} className='flex items-center space-x-2 text-black hover:text-orange-600
            transition-all duration-300 focus:outline-none'>
            <span className='text-lg transition-transform group-hover:scale-125'>
              {item.icon} 
            </span>
            <span className='text-lg font-semibold md:text-sm group-hover:underline decoration-1 underline-offset-4'>
              {item.text}
            </span>
          </Link>
        ))}
      </div>

      {/*Direita*/}
      <div className='flex items-center space-x-3'>
        <div className='relative hidden sm:block'>
          <input type="text" placeholder='Pesquisar' className='w-28 md:w-32 lg:w-48 border border-gray-300
           rounded-full py-1 pl-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent
           transition duration-300' />
           <FaSearch className='absolute right-3 top-1/2 tranform -translate-y-1/2 text-gray-500 hover:scale-110 transition-transform
            text-base'/>
        </div>
      

        {/*Login */}
        <div className='flex items-center space-x-3'>
          <button className='p-2 md:text-sm bg-white/20 rounded-full hover:bg-white/30 transition-all focus:outline-none'>
            <FaShoppingCart className='text-lg text-black'/>
          </button>

        <Link to="/login">
          <button className='hidden sm:flex items-center space-x-2 bg-gradient-to-br from-yellow-300 to-orange-400 px-2 sm:px-2 md:px-0.5
           lg:px-4 py-2
          rounded-full hover:shadow-lg hover:scale-105 transition-all focus:outline-none whitespace-nowrap'>
            <FaUser className='font-semibold text-white md:text-sm text-lg'/>
            <span className='font-semibold text-white text-sx sm:text-sm md:text-sm lg:text-base'>
            Login
            </span>
          </button>
        </Link>
          
        </div>

        {/*Botão mobile */}
        <button onClick={() => setIsOpen(!isOpen)} aria-label='Toggle Menu' className='md:hidden p-2 text-white
         hover:text-yellow-300
         transition-all 
         focus:outline-none'>
          {isOpen ? <FaTimes className='text-xl' /> : <FaBars className='text-xl'/>}
        </button>
      </div>

      {/*Menu Mobile */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-gradient-to-b from-red-500 to-orange-600
       rounded-2xl shadow-xl mt-3 mx-4 transition-all duration-300 transform 
        ${isOpen ? "opacity-100 visible scale-110" : "opacity-0 invisible scale-95"}`}>
        <div className='p-4 space-y-4'>
          {menuItems.map((item, index) => (
            <button key={index} onClick={() => setIsOpen(false)} className='w-full flex items-center space-x-3
             text-white hover:bg-white/20
             px-4 py-3 rounded-xl transition-all focus:outline-none'>

              <span className='text-xl '>{item.icon}</span>
              <span className='twxt-lg'>{item.text}</span>
            </button>
          ))}

          <div className='sm:hidden'>
            <div className='flex items-center bg-white/20 rounded-full px-3 w-full'>
              <input type="text" placeholder='Pesquisar' className='w-ful bg-transparent 
              border-0 text-white py-1 flex-1 focus:utline-none text-sm'/>
              <FaSearch className='text-white/80'/>
            </div>
          </div>

          <button className='w-full sm:hidden flex items-center justify-center
           space-x-2 bg-gradient-to-br from yellow-300 to-orange-400 px-4 py-2 rounded-full
            hover:shadow-lg transition-all focus:outline.none'>
              <FaUser className='text-white'/>
              <span className='font-semibold text-white text-base'>
                Login
              </span>
            </button>
        </div>
        </div>
    </nav>
  );
};

export default Navbar;
