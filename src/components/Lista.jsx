import * as React from 'react';
import { useParams } from "react-router-dom";

import lista_pokemon from '../services/lista-services';

export default function Lista() {
    const [actpokemon, setpokemon] = React.useState('');
    const { offset, limite } = useParams();
    React.useEffect(() => {
        const traer = async () => {
            try {
                const arr_pokem = [];
                const lis = await lista_pokemon.lista(offset, limite)

                for (let i = 0; i < lis.data.results.length; i++) {
                    const lis2 = await lista_pokemon.pokemones(lis.data.results[i].url)

                    arr_pokem.push({
                        "name": lis.data.results[i].name,
                        "img": lis2.data.sprites.front_default,
                    })

                }
                setpokemon(arr_pokem)


            } catch (error) {

            }

        }
        traer();

    }, []);

    return (
        <>{actpokemon?
            actpokemon.map(el=>
            <div className="card cartas" >
                <img src={el.img} class="card-img-top" alt="..." />

                <div className="card-body">
                    <p className="card-text">{el.name}</p>
                </div>
                <button onClick={()=>{
                    const filtrados = actpokemon.filter(item => item.name !== el.name)
                    setpokemon(filtrados)
                }} type="button" class="btn btn-danger">Borrar</button>
            </div>
        )
    :
    <p>Cargando</p>
    }
        </>
    )
}