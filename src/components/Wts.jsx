import  'react'
import wts1 from'../assets/wts1.png'
import wts3 from'../assets/wts3.png'
import {FaStar, FaUtensils} from "react-icons/fa";

const Wts = () => {
  return (
    <section className='py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-gradient-to-br from-orange-50 to-amber-50 relative overflow-hidden'>
      <div className='container mx-auto px-4 sm:px-6 md:px-8 xl:px-12 2xl:px-16 relative flex flex-col md:flex-row items-center gap-6
       md:gap-8 lg:gap-12 xl:gap-16'>
        {/*Conteúdo Mobile */}
        <div className='w-full md:w-1/2 order-2 md:order-1 mb-6 md:mb-10 md:-ml-20 lg:-ml-24 xl:-ml-24 transform hover:-translate-y-2
         transition-all duration-300'>
          <div className='relative group'>
            <img src={wts1} alt="Cliente Feliz" className='w-full h-auto object-cover rounded-2xl shadow-2xl transform rotate-2
             group-hover:rotate-0 transition-all duration-300 ' style={{maxWidth: "min(100%, 640px"}}/>
            <div className='absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 md:-bottom-6 md:-right-2 bg-white p-2 sm:p-3 md:p-4 
            rounded-2xl shadow-lg'>
              <img src={wts3} alt="" className='w-10 h-10 sm:w-12 sm:h-12 md:h-14 rounded-full border-4 border-orange-100'/>
            </div>
          </div>
        </div>

        {/*Direito */}
        <div className='w-full md:w-1/2 order-1 md:order-2'>
          <div className='bg-white/30 backdrop-blur-sm rounded-3xl sm:p-8 md:p-10 lg:p-12 xl:p-14 shadow-xl border border-white/20
           relative overflow-hidden'>
            <div className='relative z-10'>
              <div className='flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 lg:mb-8'>
                <FaUtensils  className='text-range-500 textxl sm-text-2xl md:text-2xl lg:text-3xl'/>
                  <span className='font-bold text:sm sm:text-base md:text-lg lg:text-xl text-orange-600 uppercase tracking-wider'>
                    Clientes
                  </span>
              </div>

              <h2 className='text-2xl sm:text-3xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 lg:mb-8 leading-tight'
               style={{fontFamily:"Dancing Script, cursive"}}>
                Epicurean Echoes: <br className='hidden md:block '/> Saboreie o momento
              </h2>

              <div className='bg-white/40 rounded-xl p-4 sm:p-6 lg:p-8 mb-6 border border-white/30'>
                <div className='flex gap-1 sm:gap-2 mb-3 text-orange-400'>
                  {[...Array(5)].map((_,i) => (
                    <FaStar key={i} className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6'/>
                  ))}
                  </div>
                  <blockquote className='text-base sm:text-lg md:text-lg lg:text-xl xl:text-2xl text-gray-700 italic mb-4 sm:mb-6'>
                    Bega Da Banda é o melhor que eu já provei. Estão de parabéns...
                  </blockquote>
                  <div className='flex items-center gap-3 sm:gap-4'>
                  <img src={wts3} alt="Cliente" className='w-10 h-10 md:w-14 sm:w-12 md:h-14 rounded-full border-2 border-orange-200'/>


                  <div>
                    <h4 className='font-bold text-sm sm:text-basemd:text.lg lg:text-xl text-gray-800'>
                      João De Oliveira
                    </h4>
                    <p className='text-xs sm:text-sm md:text-base lg:text-lg text-gray-600'>
                      Mecânico
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Wts