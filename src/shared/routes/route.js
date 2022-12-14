import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Home, Cadastro, Inventario, Login, Detalhamento } from "../pages";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/inventario" element={<Inventario />} />
        <Route path="/detalhamento" element={<Detalhamento />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
