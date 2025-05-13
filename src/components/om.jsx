import "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaHeart,
  FaStar,
  FaShareAlt,
} from "react-icons/fa";
import burger1 from "../assets/burger1.jpeg";
import burger2 from "../assets/burger2.jpeg";
import batata1 from "../assets/batata1.png";
import Cachorro_Quente1 from "../assets/Cachorro_Quente1.jpeg";
import Cachorro_Quente2 from "../assets/Cachorro_quente2.jpeg";
import molho1 from "../assets/molho1.jpeg";
import molho2 from "../assets/molho2.jpeg";
import bebida1 from "../assets/bebida1.png";
import { useState } from "react";
import api from "../services/api";

const menuItems = [
  { name: "Bega da Banda", price: 2000, icon: " 🍔", image1: burger1 },
  { name: "Bega do Chefe", price: 3000, icon: " 🍔", image1: burger2 },
  {
    name: "Cachorro Da Banda",
    price: 1300,
    icon: " 🍔",
    image1: Cachorro_Quente1,
  },
  {
    name: "Cachorro Do Chefe",
    price: 2000,
    icon: " 🍔",
    image1: Cachorro_Quente2,
  },
  {
    name: "Batata Frita",
    price: 1000,
    icon: "🍟",
    image1: batata1,
  },
  {
    name: "Coca-cola",
    price: 400,
    icon: "🍟",
    image1: bebida1,
  },
  {
    name: "Molho de alho",
    price: 200,
    icon: "🍝",
    image1: molho1,
  },
  {
    name: "Molho da Casa",
    price: 200,
    icon: "🍝",
    image1: molho2,
  },
];

const Om = () => {
  const enviarPedido = async () => {
    const pedido = {
      items: selectedItem.name,
      totalPrice: quantidade * selectedItem.price,
    };
    try {
      const response = await api.post("/om", { pedido });
      console.log("Pedido registrado:", response.data);
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao enviar o pedido.");
    }
  };
  {
    /*const[mostrarMensagem, setMostraerMensagem] = useState(false);
      setMostraerMensagem(true);
    setTimeout(() => setMostraerMensagem(false), 15000);

    const handleEncomendar =()=> {
      setMostraerMensagem(true);
      setTimeout(() => {
        setMostraerMensagem(false);
      }, 15000);
    };*/
  }

  const [quantidade, setQuantidade] = useState(1);

  const aumentar = () => {
    setQuantidade(quantidade + 1);
  };

  const diminuir = () => {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1);
    }
  };
  const [selectedItem, setSelectedItem] = useState(menuItems[0]);
  return (
    <div
      className="min-h-screen py-12 px-4 sm:px-6 md:px-8 lg:px-8 bg-white mt-3
    flex flex-col md:flex-col lg:flex-row items-center gap-8"
    >
      {/**Esquerda */}
      <div className="w-full md:w-3/4 lg:w-1/4 bg-white p-4 md:p-6 rounded-3xl shadow-lg border border-amber-300">
        <h1 className="text-3xl md:text-4xl font-pacifico text-amber-600 mb-4 md:mb-6 text-center">
          Nosso menu
        </h1>
        <p className="text-base md:text-lg font-confortaa text-amber-700 italic mb-4 md:mb-6 text-center">
          Com os melhores sabores <br /> Da Banda
        </p>
        <div className="space-y-3 md:space-y-4">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => setSelectedItem(item)}
              className={`flex items-center justify-between w-full p-2
             md:p-3 rounded-2xl transition-all duration-300 ${
               selectedItem.name === item.name
                 ? "bg-amber-600 text-white"
                 : "bg-white text-gray-800 border border-amber-300"
             } hover:bg-amber-500 hover:text-white shadow-md`}
            >
              <div className="flex items-center gap-2">
                {/**Os items  */}
                <div
                  className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-gradient-to-r ${
                    selectedItem.name === item.name
                      ? "from-yellow-400 to-orange-500 border-4 border-white shadow-lg scale-105"
                      : "from-gray-200 to-gray-300 border-2 border-transparent"
                  } text-white shadow:md transition-all duration-300 transform hover:scale-110`}
                >
                  <span className="text-lg md:text-xl">{item.icon}</span>
                </div>
                <h3 className="text-sm md:text-base font-semibold">
                  {item.name}
                </h3>
              </div>
              <span className="text-sm md:text-base font-bold">
                ${item.price}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/*Direito*/}
      <div className="w-full lg:w-3/4 flex flex-col items-center">
        <div className="relative flex flex-col md:flex-row gap-4 md:gap-6">
          <div className="p-2 md:p-4 rounded-3xl">
            <img
              src={selectedItem.image1}
              alt={"$(selectedItem.name) 1"}
              className="w-full md:w-400px lg:w-450px h-100 object-cover
             rounded-xl"
            />
          </div>

          {/*<div className='p-2 md:p-4 rounded-3xl'>
            <img src={selectedItem.image2} alt={'$(selectedItem.name) 2'} className='w-full md:w-[400px lg:w-460px h-auto object-cover
             rounded-xl'/>
          </div>*/}
        </div>

        <h2 className="text-2xl md:text-3xl font-confortaa  font-bold mt-4 md:mt-6 text-gray-800">
          {selectedItem.name}
        </h2>
        <p className="text-xl md:text-2xl font-semibold text-amber-600">
          ${selectedItem.price}
        </p>

        <div className="mt-4 md:mt-6 gap-3 flex-col md:gap-4 lg:gap-6 font-confortaa">
          <div className="p-3 items-center">
            <button
              onClick={diminuir}
              className="bg-orange-300 p-2 md:p-3 rounded-full shadow-lg hover:bg-white transition m-3"
            >
              -
            </button>
            <span>{quantidade}</span>
            <button
              onClick={aumentar}
              className="bg-orange-300 p-2 md:p-3 rounded-full shadow-lg hover:bg-white transition m-3"
            >
              +
            </button>
          </div>
          <div className="min-h-screem flex flex-col items-center justify-center">
            <div>
              <button
                onClick={enviarPedido}
                className="bg-red-500 text-white px-6 py-2 md:px-8 md:py-3 rounded-full hover:bg-red-600 transition hover:scale-105
             text-sm md:text-base"
              >
                Encomendar
              </button>
              {/*               {mostrarMensagem && (
              <div className="fixed top-3 left-1/2 transform -translate-x-1/2 
     shadow-lg rounded-full px-3 sm:px-4 md:px-4 lg:px-8 h-15 lg:w-[75%] py-2 md:py-3 w-[75%] md:w-[95%] max-w-7xl flex items-center
      justify-between
     backdrop-blur-md border border-white/20 z-50">
                <div>
                  <p className="text-lg confortaa">Obrigado pelo pedido, aguarde a resposta do atendente</p>
                </div>
              </div>
              )}*/}
            </div>
          </div>
        </div>

        {/**Botão de navegação  */}

        <div className="mt-4 md:mt-6 flex gap-3 md:gap-4 lg:gap-6">
          <button
            onClick={() => {
              const currentIndex = menuItems.findIndex(
                (item) => item.name === selectedItem.name
              );
              setSelectedItem(
                menuItems[
                  (currentIndex - 1 + menuItems.length) % menuItems.length
                ]
              );
            }}
            className="p-2 md:p-3 bg-amber-600 text-white rounded-full shadow-lg hover:bg-amber-500 transition"
          >
            <FaChevronLeft size={18} />
          </button>
          <button
            onClick={() => {
              const currentIndex = menuItems.findIndex(
                (item) => item.name === selectedItem.name
              );
              setSelectedItem(menuItems[(currentIndex + 1) % menuItems.length]);
            }}
            className="p-2 md:p-3 bg-amber-600 text-white rounded-full shadow-lg hover:bg-amber-500 transition"
          >
            <FaChevronRight size={18} />
          </button>
        </div>

        {/*Itens adicionais */}
        <div className="mt-4 md:mt-6 flex items-center space-x-3 md:space-x-4 lg:space-x-6">
          <div
            className="flex items-center  justify-center p-2 md:p-3 bg-white rounded-full shadow-xl transform transition
           hover:scale-110"
          >
            <FaHeart className="text-red-500" size={20} />
          </div>
          <div
            className="flex items-center  justify-center p-2 md:p-3 bg-white rounded-full shadow-xl transform transition
           hover:scale-110"
          >
            <FaStar className="text-yellow-500" size={20} />
          </div>
          <div
            className="flex items-center  justify-center p-2 md:p-3 bg-white rounded-full shadow-xl transform transition 
          hover:scale-110"
          >
            <FaShareAlt className="text-blue-500" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Om;
