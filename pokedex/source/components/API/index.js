
async function getPokemons(url) {
    try {
        let response = await fetch(url, {
            method: 'GET',
        });
        let responseJson = await response.json();
        return responseJson;
    } catch (error) {
        return error;
    }

}

async function getSinglePokemon(idPokemon) {
    try {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}/`, {
            method: 'GET',
        });
        let responseJson = await response.json();
        return responseJson;
    } catch (error) {
        return error;
    }
}

export {
    getPokemons,
    getSinglePokemon
}