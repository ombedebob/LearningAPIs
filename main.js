//"https://pokeapi.co/api/v2/pokemon/ditto"//

async function fetchData(){
  
  const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
  
  try{
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    
    if(!response.ok){
      throw new Error(`Ooops,Error fetching data on ${pokemonName}`);
    }
    
    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("pokemonSprite");
    
    imgElement.src = pokemonSprite;
    imgElement.style.display = "block"
    
    let pokemonData = document.getElementById ("pokemonData")
    
    pokemonData.innerHTML = data.name.toUpperCase();
  }
  
  catch (error) {
    alert(error);
  }
}
