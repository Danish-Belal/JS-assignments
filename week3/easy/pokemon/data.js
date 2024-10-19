


const fetchData = async(id)=>{
     const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
     const json =await  data.json()
     return json;
     
}

const getPokemonData = async () => {
     const id = document.getElementById("pokemonId").value; // Get the value from input
     if (id) { // Check if the input is not empty
         const data = await fetchData(id);
         console.log("Pokemon Data", data);
     } else {
         console.error("Please enter a valid Pokémon ID");
     }
 }