import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Reservation from './components/Reservation';
import Om from './components/Om';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import Login from './components/login';
import Cadastro from './components/cadastro';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col overflow-x-hidden">
        <Navbar />

        <br />

        <Routes>
          {/* Página inicial exibe tudo junto */}
          <Route
            path="/"
            element={
              <main>
                <Banner />
                <Om />
                <Reservation />
                <Testimonial />
              </main>
            }
          />

          {/* Rotas individuais para cada seção */}
          <Route path="/Reservation" element={<Reservation />} />
          <Route path="/om" element={<Om />} />
          <Route path="/Testimonial" element={<Testimonial />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Cadastro" element={<Cadastro />} />
        </Routes>

        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
