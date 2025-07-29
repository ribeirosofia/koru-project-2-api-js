const rickMortyURL = "https://rickandmortyapi.com/api/character";

async function getCharacters(name){
    const response = await fetch(`${rickMortyURL}/?name=${name}`);
    const characterData = await response.json();
    return characterData;
}

async function main(){
    const characterData = await getCharacters('morty');
    console.log(characterData);

}
main();
