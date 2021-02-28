
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

export {
    getPokemons,
}