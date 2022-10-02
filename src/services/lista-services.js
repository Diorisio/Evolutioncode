import axios from "axios"

const url="https://pokeapi.co/api/v2/pokemon"

const lista=(offset,limite)=>{
    try {
        return axios.get(url+`?offset=${offset}&limit=${limite}`)
        
    } catch (error) {
        
    }

}
const pokemones=(pokemon)=>{

    return axios.get(pokemon)

}


const lista_pokemon = {
    lista,
    pokemones
}
export default lista_pokemon;