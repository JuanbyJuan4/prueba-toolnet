import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './DetallePersonaje.css'
import { useNavigate } from "react-router-dom";

type Usuario = {
    id: number;
    name: string;
    gender: string;
    origin: {
        name: string;
    };
    species: string;
    image: string;
};

function DetallePersonaje() {
    const { id } = useParams();
    const [data, setData] = useState<Usuario | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((res) => res.json())
        .then((json) => setData(json))
        .catch((err) => console.error(err));
    }, [id]);

    if (!data) return <p>Cargando personaje...</p>;

    return (
        <div className='container'>
            <div className='personajeContenedor'>
            <button
                onClick={() => navigate('/')}
            >Regresar</button>
            <h2>{data.name}</h2>
            <img className='personajeImagen' src={data.image} alt={data.name} />
            <p>Genre: {data.gender}</p>
            <p>Specie: {data.species}</p>
            <p>Origin: {data.origin.name}</p>
            </div>
        </div>
    );
}

export default DetallePersonaje