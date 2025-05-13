import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FaFingerprint } from "react-icons/fa";
import { ImAppleinc } from "react-icons/im";
import { MdAlternateEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import api from "../services/api.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleLogin = async () => {
    try {
      const response = await api.post("/login", { email, password });

      const token = response.data;
      localStorage.setItem("token", token); 

      console.log("Login feito com sucesso!");

    } catch (err) {
      console.error(err);
      setError("Email ou senha inválidos");
    }
  };

  return (
    <div className="w-full h-screen justify-items-center pt-15">
      <div className="w-[90%] md-w-sm md:max-w-md p-5 border-2 border-amber-600 flex-col flex items-center gap-3 rounded-xl drop-shadow-md">
        <h1 className="text-lg md:text-xl font-semibold pacifico confortaa">
          Seja bem-vindo de volta
        </h1>
        <p className="text-xs md:text-sm text-gray-500 text-center">
          Ainda não tem uma conta? <span>Criar conta</span>
        </p>

        <div className="w-full flex flex-col gap-3">
          <div className="w-full flex items-center bg-gray-800 p-2 rounded-xl">
            <MdAlternateEmail />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent border-0 w-full outline-none text-sm md:text-base text-white"
            />
          </div>

          <div className="w-full flex items-center bg-gray-800 p-2 rounded-xl relative">
            <FaFingerprint />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Palavra-passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-transparent border-0 w-full outline-none text-sm md:text-base text-white"
            />
            {showPassword ? (
              <FaRegEyeSlash
                className="absolute right-5 cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            ) : (
              <FaRegEye
                className="absolute right-5 cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            )}
          </div>
        </div>

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <button
          onClick={handleLogin}
          className="w-full p-2 bg-orange-600 rounded-xl mt-3 cursor-pointer hover:bg-orange-500 text-sm md:text-base"
        >
          Entrar
        </button>

        <div className="relative w-full flex items-center justify-center py-3">
          <div className="w-2/3 h-[2px] bg-gray-800"></div>
          <h3 className="text-xs md:text-sm px-4 text-gray-500">Ou</h3>
          <div className="w-2/3 h-[2px] bg-gray-800"></div>
        </div>

        <div className="relative w-full flex items-center justify-between py-3">
          <div className="p-2 md:px-10 bg-slate-700 cursor-pointer rounded-xl hover:bg-slate-800">
            <ImAppleinc className="text-lg md:text-xl" />
          </div>
          <div className="p-1 md:px-6 lg:px-10 bg-slate-700 cursor-pointer rounded-xl hover:bg-slate-800"></div>
          <div className="p-2 md:px-10 bg-slate-700 cursor-pointer rounded-xl hover:bg-slate-800">
            <FaXTwitter className="text-lg md:text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
