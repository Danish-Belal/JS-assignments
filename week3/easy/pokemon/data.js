


const fetchDataById = async(id)=>{
     const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
     const json =await  data.json()
     return json;
     
}

const fetchPokemons = async()=>{
    const pokemons = await fetch('https://pokeapi.co/api/v2/pokemon/');
    const jsonData = await pokemons.json();
    return jsonData;
    

}

const getPokemonData = async () => {
     const id = document.getElementById("pokemonId").value; // Get the value from input
     const ulElement = document.createElement('ul');
     document.body.appendChild(ulElement); 
     if (id) { // Check if the input is not empty
         const data = await fetchDataById(id);
         console.log("Pokemon Data", data);
          // Display specific Pokémon data
        const liTag = document.createElement('li');
        liTag.textContent = `ID: ${data.id}, Name: ${data.name}`;
        ulElement.appendChild(liTag); // Append the Pokémon data to the list

     } else {
         const allPokemon = await fetchPokemons();
         console.log('All POkemons' , allPokemon);
        console.log("VLAUES",allPokemon.results.length);
        const allPokemonlength = allPokemon.results;
        console.log(allPokemonlength);
        
        
        allPokemonlength.forEach(poekmon => {

            console.log('SIngle pokemon', poekmon);
            
            const liTage = document.createElement('li');
            liTage.textContent = `Name: ${poekmon.name}`;
            ulElement.appendChild(liTage)
            
         });{
         }
         
     }
 }