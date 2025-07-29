const rickMortyURL = "https://rickandmortyapi.com/api/character";

async function getCharacters(name){
    const response = await fetch(`${rickMortyURL}/?name=${name}`);
    const characterData = await response.json();
    return characterData;
}

async function main(){
<<<<<<< HEAD
    const characterData = await getCharacters('morty');
=======
    const characterData = await getCharacters('artisticmorty');
>>>>>>> ed04ce8 (feat: aterações no codigo)
    console.log(characterData);

}
main();
