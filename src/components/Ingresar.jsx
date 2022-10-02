import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Ingresar() {
    const [actoffset, setoffset] = useState('');
    const [actlimit, setlimit] = useState('');
    const [actpokemon, setpokemon] = useState('');

    

    return (
        <>

            <form >
                <div className="mb-3">
                    <label for="exampleInput1" className="form-label">ingrese el numero de inicio de los pokemones</label>
                    <input onChange={(e) => setoffset(e.target.value)} type="number" className="form-control" id="exampleInput1" />
                </div>
                <div className="mb-3">
                    <label for="exampleInput2" className="form-label">Cuantos pokemones traer</label>
                    <input onChange={(e) => setlimit(e.target.value)} type="number" className="form-control" id="exampleInput2" />
                </div>
                 <Link to={`/pokemon/${actoffset}&${actlimit}`}>
                <button type="submit" className="btn btn-primary">Enviar</button>
                </Link>

            </form>
            
        </>
    )
}   