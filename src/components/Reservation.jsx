import { useState } from "react";
import { reservationData } from "../data.jsx";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import "../timepicker.css";
import { FaUsers, FaCalendar, FaClock } from "react-icons/fa";

const Reservation = () => {
  const {subtitle, modelImg, btnText } = reservationData;
  const [startDate, setStartDate] = useState(new Date());
  const [value, setValue] = useState("10:00");

  return (
    <section className="bg-white flex top-96 z-30 pb-20 lg:py-[100px] ">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className='text-3xl md:text-4xl font-pacifico text-amber-600 mb-4 md:mb-6 text-center'>Reservas</h2>
          <p className="mb-8 text-dark">{subtitle}</p>
          <div className="flex justify-center mb-8">
            <img src={modelImg} alt="Reservation Image" />
          </div>
        </div>

        <form className="bg-white p-6 rounded-lg ">
          <div className="flex flex-col lg:flex-row gap-y-4 items-center justify-evenly mb-8">
            {/* Escolha uma data */}
            <div>
              <div className="flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3">
                <FaCalendar />
                <div>Escolha uma data</div>
              </div>
              <DatePicker
                className='h-10 w-40 border-2 px-4 py-2 md:px-8 md:py-3 rounded-full text-sm md:text-base'
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                minDate={new Date()}
                aria-label="Selecionar data"
              />
            </div>

            {/* Escolha um horário */}
            <div>
              <div className="flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3">
                <FaClock/>
                <div>Escolha um horário</div>
              </div>
              <TimePicker
                className='h-8 w-40 border-2 px-4 py-2 md:px-8 md:py-3 rounded-full text-sm md:text-base'
                clearIcon={false}
                clockIcon={false}
                onChange={setValue}
                value={value}
                aria-label="Selecionar horário"
              />
            </div>

            {/* Quantidade de pessoas */}
            <div>
              <div className="flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3">
                <FaUsers />
                <div>Quantas pessoas?</div>
              </div>
              <input
                className='h-8 w-40 border-2 px-4 py-2 md:px-8 md:py-3 rounded-full text-sm md:text-base'
                type="number"
                min="1"
                placeholder="1"
                aria-label="Número de pessoas"
              />
            </div>
          </div>

          {/* Botão de Reservar */}
          <div className="max-w-[316px] mx-auto flex justify-center">
            <button className='bg-orange-600 text-white px-6 py-2 md:px-8 md:py-3 rounded-full capitalize hover:bg-orange-500
             transition hover:scale-105
             text-sm md:text-base'>
              {btnText}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Reservation;
