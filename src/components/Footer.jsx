import 'react'
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaRegEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
  } from "react-icons/fa";

  const Footer = () => {
    const socialLinks = [
      {
        icon: <FaFacebookF className="sm:size-4 size-3" />,
        color: "bg-blue-600",
      },
      { icon: <FaTwitter className="sm:size-4 size-3" />, color: "bg-sky-400" },
      { icon: <FaInstagram className="sm:size-4 size-3" />, color: "bg-red-500" },
      {
        icon: <FaLinkedinIn className="sm:size-4 size-3" />,
        color: "bg-blue-800",
      },
    ];
  
    const footerLinks = [
      { title: "Quick Links", links: ["Home", "Menu", "Services", "Reviews"] },
      {
        title: "Legal",
        links: ["Privacy Policy", "Terms of Use", "Payment Policy", "Cookies"],
      },
    ];
  return (
    <footer className='relative bg-gradient-to-br from-orange-50 via-white/40 to-orange-100 border-t-8 border-orange-200 
    py-12 sm:py-16 md:p-20'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 marker:gap-10 lg:gap-8 sm:mb-12'>
                {/*Secção da Marca */}
                <div className='text-center sm:text-left space-y-3 sm:space-y-4'>
                    <h2 className='text-4xl sm:text-5xl md:text-4xl lg:text-4xl font-bold text-orange-600 font-serif tracking-wide
                     drop-shadow-lg inline-block px-4 sm:px-6 md:px-8 lg:px-4 py-2 sm:py-4 md:py-3 lg:py-2 border-2 border-gray-300 rounded-full 
                     bg-transparent'>
                        Bega da Banda
                    </h2>
                    <p className='text-gray-700 font-confortaa text-lg sm:text-xl md:text-xl italic'>
                        A servir Sorrisos desde 2001
                    </p>

                    <div className='flex justify-center sm:justify-center space-x-2 sm:space-x-3'>
                        {socialLinks.map((item, index) => (
                            <a href="" key={index} className={`$(item.color)text-white p-2 sm:p-3 rounded-full shadow-sm sm:shadow-lg 
                                transition-all transform hover:scale-110 hover:rotate-6`}>
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/*Secção de links*/}
                {footerLinks.map((section, index) => (
                    <div key={index} className='text-center sm:text-left space-y-3 sm:space-y-4'>
                        <h3 className='text-2xl sm:text-3xl md:text-2xl lg:text-3xl font-semibold text-gray-800 font-serif tracking-wide 
                        inline-block px-4 sm:px-6 md:px-8 lg:px-4 py-2 sm:py-4 md:py-3 lg:py-2 border-2 border-gray-300 rounded-full
                         bg-transparent'>
                        {section.title}
                        </h3>

                        <ul className='space-y-1 sm:space-y-2'>
                        {section.links.map((link, linkIndex) => (
                            <li key={linkIndex}>
                                <a href="" className='text-gray-700 font-confortaa hover:text-orange-600 transition-colors text-base
                                 sm:text-lg md:text-xl'>
                                    {link}
                                </a>
                            </li>
                        ))}
                        </ul>
                    </div>
                ))}

                {/*Secão de contactos*/}
                <div className='text-center sm:text-left space-y-3 sm:space-y-4'>
                    <h3 className='text-2xl sm:txt-3xl font-semibld text-gray-800 font-serif tracking-wide inline-block px-3 
                    sm:px-4 py-q sm:py-2 border-2 border-gray-300 rounded-full bg-transparent'>
                        Contacte-nos
                    </h3>

                    <div className='space-y-2 sm:space-y-3'>
                        <div className='flex justify-center sm:justify-start items-center space-x-2'>
                            <FaMapMarkerAlt className='text-orange-600 shrink-0' size={18}/>
                            <span className='text-gray-600 font-confortaa text--base sm:text-lg md:text-xl'>
                            Rua direita do Camama
                            </span>
                        </div>
                    </div>

                    <div className='space-y-2 sm:space-y-3'>
                        <div className='flex justify-center sm:justify-start items-center space-x-2'>
                            <FaRegEnvelope className='text-orange-600 shrink-0' size={18}/>
                            <span className='text-gray-600 font-confortaa text--base sm:text-lg md:text-xl'>
                            BegaDoChefe@gmail.com
                            </span>
                        </div>
                    </div>

                    <div className='space-y-2 sm:space-y-3'>
                        <div className='flex justify-center sm:justify-start items-center space-x-2'>
                            <FaPhoneAlt className='text-orange-600 shrink-0' size={18}/>
                            <span className='text-gray-600 font-confortaa text--base sm:text-lg md:text-xl'>
                                +244 927738236
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
)
}

export default Footer