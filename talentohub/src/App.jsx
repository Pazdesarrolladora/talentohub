import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/inicio";
import Quehacemos from "./pages/quehacemos";
import Paginasweb from "./pages/paginasweb";
import Portafolio from "./pages/portafolio";
import Publicidad from "./pages/publicidad";
import Crecimientodemarca from "./pages/crecimientodemarca";
import Redessociales from "./pages/redessociales";
import Contacto from "./pages/contacto";
import "../src/css/index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="quehacemos" element={<Quehacemos />} />
        <Route path="paginasweb" element={<Paginasweb />} />
        <Route path="publicidad" element={<Publicidad />} />
        <Route path="portafolio" element={<Portafolio />} />
        <Route path="crecimientodemarca" element={<Crecimientodemarca />} />
        <Route path="redessociales" element={<Redessociales />} />
        <Route path="contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
