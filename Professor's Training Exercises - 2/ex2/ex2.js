/* 2. Create a Pokémon Portfolio
Description:
Create an app that shows 10 Pokémon. It should display the Pokémon and its characteristics based on the result of a query to the API https://pokeapi.co/api/v2/
Tasks:
Upon loading the page, a loading indicator should be created to wait for the query to complete.
Create a function to make the request to the API.
Once the API response is received, create an object of a Pokémon class and populate its attributes with the Pokémon's information.
After creating the Pokémon object, create a div containing the image and the Pokémon's information. */

const arrayPokemons = []; // array para armazenar esses pokemons
loadingAPi();
async function loadingAPi(){
    let myArrayIDs = [54, 50, 39, 255, 37, 420, 92, 778, 527, 60]; // array com os IDs dos pokemons que eu quero

    for (let i = 0; i < myArrayIDs.length; i++){ // for para pegar cada pokemon do arrayIDs por vez
        // response vai armazenar a resposta da nossa requisição | await é para esperar a resposta da promise antes de executar o código, ele vai esperar o retorno da requisição
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${myArrayIDs[i]}`); // fetch "pede" as informações do pokemon no API (no caso, estamos pegando um pokemon, não tudo do API)
        // dentro de data vamos armazenar novamente a resposta | e a await vai esperar a resposta do servidor antes de continuar o código novamente
        const data = await response.json(); // o JSON vai transformar a requisição em objeto, pois ele vem em uma estrutura que o JS não consegue interpretar

        arrayPokemons.push({ // colocando o objeto pokemon com algumas propriedades dentro do array de pokemons
            imageP: data.sprites.front_default,
            name: data.name,
            type: data.types[0].type.name,
            baseExperience: data.base_experience,
            height: data.height,
            weight: data.weight
        }); 
    }
    console.log(arrayPokemons);
}

function showPokemon(){
    res = document.getElementById("result");
    res.innerHTML = '';
    let list = ''; 
    for (let i=0; i < arrayPokemons.length; i++) {
        const pokemon = arrayPokemons[i];
        console.log(pokemon);
        list +=
        `<div class="cards">     
            <img width="70" href="${pokemon.imageP}" src="${pokemon.imageP}"> <br>
            ${pokemon.name.toUpperCase()} ${pokemon.type}<br>
            Base Experience: ${pokemon.baseExperience}<br>
            Height: ${pokemon.height}<br>
            Weight: ${pokemon.weight}
        </div>`;
    }
    res.innerHTML = '<div>' + list + '</div>';
}