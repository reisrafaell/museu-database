import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Home, Cadastro, Inventario, Login } from "../pages";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/inventario" element={<Inventario />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
