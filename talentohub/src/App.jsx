import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/inicio";
import Quehacemos from "./pages/quehacemos";
import Paginasweb from "./pages/paginasweb";
import Marketing from "./pages/marketing"
import Portafolio from "./pages/portafolio"

function App() {
  return (
    <BrowserRouter>
      <Routes>
  <Route path="/" element={<Inicio />} />
  <Route path="quehacemos" element={<Quehacemos />} />
  <Route path="paginasweb" element={<Paginasweb/>} />
  <Route path="marketing" element={<Marketing/>} />
  <Route path="portafolio" element={<Portafolio/>} />
  
</Routes>
    </BrowserRouter>
  );
}

export default App;