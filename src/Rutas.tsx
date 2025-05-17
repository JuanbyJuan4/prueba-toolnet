import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MostrarTabla from './MostrarTabla';
import DetallePersonaje from './DetallePersonaje';

const Rutas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MostrarTabla />} />
                <Route path="/personaje/:id" element={<DetallePersonaje />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Rutas;
