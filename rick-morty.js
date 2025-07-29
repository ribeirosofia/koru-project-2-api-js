const rickMortyURL = "https://rickandmortyapi.com/api/character";


async function getCharacters(name){
    const characterData = await response.json();
    return characterData;
}

async function main(){
    const personagem = process.argv[2] || 'rick';
    const characterData = await getCharacters(personagem);
    console.log(characterData);

}
main();
