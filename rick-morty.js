const rickMortyURL = "https://rickandmortyapi.com/api/location/3";

async function getCharacters(character){
    const response = await fetch(`${rickMortyURL}/${character}`);
    const characterData = await response.json();
    return characterData;
}

async function main(){
    const characterData = await getCharacters('artistic morty');
    console.log(characterData);

}
main();