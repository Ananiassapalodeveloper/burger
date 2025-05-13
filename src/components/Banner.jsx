import { useState } from 'react'
import BannerVideo from '../assets/BannerVideo.mp4'
import icon_3 from '../assets/icon_3.jpeg'
import icon_1 from '../assets/icon_1.jpeg'
import icon_2 from '../assets/icon_2.jpeg'
import BannerFood from "'../assets/BannerFood.jpeg'"
import fireIcon from '../assets/fireIcon.jpeg'
import '../components/global.css'

const Banner = () => {

    const[showVideo, setShowVideo] = useState(false);

  return (
    <div className='bg-white pt-12 md:pt-12 min-h-[550px] flex items-center'>
      {/*Modelo de vídeo */}
      {showVideo &&(
        <div className=' fixed inset-0 bg-black/50 flex items-center justify-center p-4'>
        <div className='bg-white p-4 md:p-8 rounded-lg w-full max-w-4xl relative'>
          <button onClick={() => setShowVideo(false)} className='absolute -top-18 right-0 text-white text-2xl'>
            &times;
          </button>
          <div className="aspect-video">
            <iframe src={BannerVideo} width="100%" height="100%" allow='autoplay' allowFullScreen className='rounded-lg'>

            </iframe>
          </div>
        </div>
      </div>
      )}

      <div className='container mx-auto px-6 md:px-12 xl:px-20 flex flex-col lg:flex-row items-center justify-between gap-12'>
        {/* Esquerda */}
        <div className='w-full lg:flex-1 text-center lg:text-left'>
          <h3 className='text-lg mt-5 md:text-2xl font-bold font-confortaa text-gray-600 mb-2 md:mb-5'>
            Bega do chefe
          </h3>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-6xl font-pacifico animate-slide-up 
          font-extrabold leading-tight 
          mb-4'>
            O mehor Hamburguer da Banda<br/>
            <span className='text-yellow-500'>Fast Food</span> {" "}
            <br className='hidden md:block'/>
            {/*<span className='text-yellow-500'>Restaurante</span>*/} 
          </h1>
          <p className='text-sm md:text-base lg:text-lg text-gray-600 mb-6'>
            Saboreie-se com os nossos sabores
            <br className='hidden sm:block'/>
            Com rapida entrega e acessível
          </p>
          <div className='flex flex-wrap justify-center lg:justify-start gap-4'>
            <button className='bg-red-500 text-white px-6 py-2 md:px-8 md:py-3 rounded-full hover:bg-red-600
             transition hover:scale-105
             text-sm md:text-base'>
              Encomendar
            </button>
            {/*<button className='flex items-center gap-2 md:gap-3 group' onClick={() => setShowVideo((true))}>
              <span className='w-10 h-10 md:h-12 bg-re-500 rounded-full flex items-center justify-center transition group-hover:bg-red-600 
              grpup-hover:scale-110
              shadow-lg relative'>
                <span className='absolute inset-0 animate-ping rounded-full bg-red-400 opacity-75'></span>
                <span className='text-white text-lg'>&#9654;</span>
              </span>
              <span className='text-gray-600 group-hover:text-red-500 font-semibold text-sm md:text-base'>
                Assistir vídeo
              </span>
            </button>*/}
          </div>

          <div className='flex flex-col sm:flex-row items-center sm:items-center gap-4 mt-6'>
            <div className='flex -space-x-3'>
              <img src={icon_1} alt="Cliente" className=' w-10 h-10 md:w-10 md:h-12 rounded-full border-2 border-white shaow-md'/>
              <img src={icon_2} alt="Cliente" className=' w-10 h-10 md:w-10 md:h-12 rounded-full border-2 border-white shaow-md'/>
              <img src={icon_3} alt="Cliente" className=' w-10 h-10 md:w-10 md:h-12 rounded-full border-2 border-white shaow-md'/>
            </div>
            <div>
              <p className='text-lg md:text-xl font-bold flex items-center'>
                <span className='text-yellow-500'>&#x2605;&#x2605;</span>7.48k
              </p>
              <p className='text-gray-600 text-sm md:text-base'>
                Nossos Clientes Satisfeitos
              </p>
            </div>
          </div>
        </div>

        {/*Direita */}
        <div className='w-full lg:flex-1 relative max-w-sm sm:max-w-md md:max-w-lg lg:max-w-none mx-auto'>
          <div className='relative mx-auto'>
            <img src={BannerFood} alt="Comida do Banner" className='rounded-full w-full h-auto object-cover '/>

            <div className='absolute right-2 sm:-right-6 md:right:-12 top:1/2 transform -translate-y-1/2'>
              <div className='relative'>
                <img src={fireIcon} alt="Fogo" className='rounded-full w-10 sm:w-12 md:w-14 mb-20 sm:mb-32 md:mb-40'/>
              </div>
            </div> 
          </div>
        </div>
      </div>

    </div>
  )
}

export default Banner