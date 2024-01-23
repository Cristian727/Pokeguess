async function getPkmn() {
    const url = `https://pokeapi.co/api/v2/pokemon/251`;
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    return datos
}

async function mi_peticion(){
    const pkmn = await getPkmn()
    console.log(pkmn)
    const url = 
}
mi_peticion()

document.querySelector("img-pkm")
let url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`

in progress