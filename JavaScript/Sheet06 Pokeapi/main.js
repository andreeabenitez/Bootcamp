// Declarar url y funcion para traer los datos de la api
const URL_BASE = "https://pokeapi.co/api/v2/pokemon"
const URL_PKMN_SPECIES = "https://pokeapi.co/api/v2/pokemon-species"
let MAX_PKMN = 18
let paginaactual = 1

//Poner primera letra mayúscula
function capitalize(text){
    const firstletter = text.charAt(0);
    const rest = text.slice(1);
    return firstletter.toUpperCase() + rest;
}

//Evolucion
async function evolucion(data) {
    const respuesta = await fetch(`${URL_PKMN_SPECIES}/${data.id}`);
    const datos = await respuesta.json();
    //console.log(datos)
    let preevolucion = datos.evolves_from_species;
    if(preevolucion !== null){
      preevolucion = datos.evolves_from_species.name;
      return preevolucion;
    }
  }
  
  //Crear tarjeta
  async function crearTarjeta(data) {
    const contenedor = document.querySelector(".contenedor")
    const tarjeta = document.createElement("div");
  tarjeta.classList.add("pkmn");
  let preevolucion = await evolucion(data);
  const str1 = `<div class="pkmn__sup">
  <img
  class="pkmn__img"
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png"
  alt=""
  />
  <p class="pkmn__id">ID/${data.id}</p>
  </div>
  <div class="pkmn__inf">
  <h2 class="pkmn__nombre">${capitalize(data.name)}</h2>
  <span class="pkmn__tipos">
  <p class="pkmn__tipo__1">${data.types[0].type.name}</p>`
  
  let strEvo = `<div class="pkmn__evolucion">
  <div class="barra__evolucion"></div>
  <div class="pkmn__evolucion__texto">
  <p class="evolucionade">Evoluciona de:</p>
  <p class="evolucion">${preevolucion}</p>
  </div>
  </div>`
  const str3 = `</span>
  </div>`
  if(preevolucion === undefined){
    strEvo = ""
      }
  if(data.types.length == 2){
     const tipo2 = `<p class="pkmn__tipo__2">${data.types[1].type.name}</p>`
     tarjeta.innerHTML = str1 + tipo2 +strEvo + str3;
     contenedor.appendChild(tarjeta); 
  }
  else{
    tarjeta.innerHTML = str1 + strEvo + str3;
     contenedor.appendChild(tarjeta);
  }
}



async function traerDatos(pagina = 1) {
  try {
    const contenedor = document.querySelector(".contenedor");
    contenedor.innerHTML = "";
    const inicio = (pagina - 1) * MAX_PKMN + 1;
    const fin = inicio + MAX_PKMN -1;
    for (let i = inicio; i <= fin; i++) {
      const response = await fetch(`${URL_BASE}/${i}`);
      const data = await response.json();
      //console.log(data);
      crearTarjeta(data);
    }
  } catch (e) {
    console.error(`Error: ${e}`)
  }
}


function actualizarBtns() {
  const btnrt = document.querySelector(".btn__rt");
  const btnav = document.querySelector(".btn__av");

  if (paginaactual === 1) {
    btnrt.style.display = "none";
    btnav.style.paddingLeft="5rem"
    btnav.style.paddingRight="5rem"
  } else {
    btnrt.style.display = "";
    btnav.style.paddingLeft="2rem"
    btnav.style.paddingRight="2rem"
  }
}

//Cargar todo el documento
document.addEventListener('DOMContentLoaded', () => {
  traerDatos(paginaactual);
  actualizarBtns();


//Buscador
  //Llamar a los nombres
  let listaNombres = [];
  fetch('https://pokeapi.co/api/v2/pokemon?limit=1250')
  .then(response => response.json())
  .then(data => {
    listaNombres = data.results.map(p => p.name);
  });

  //Convertir a minusculas y limpiar el contenido
  document.querySelector('.barrabusq').addEventListener('input', async (texto_barra) => {
    const search = texto_barra.target.value.toLowerCase();
    const contenedor = document.querySelector(".contenedor");
    contenedor.innerHTML = "";

    //Si no hay busqueda, pintar tarjetas
    if (search === "") {
      traerDatos(paginaactual);
      return;
    }

    // Filtrar nombres que contengan el texto
    const filtrados = listaNombres.filter(nombre => nombre.includes(search));
    if (filtrados.length === 0) {
      contenedor.innerHTML = "<p>No se encontró ningún Pokémon.</p>";
      return;
    }

    // Mostrar tarjetas de los filtrados
    for (let i = 0; i < Math.min(filtrados.length, 18); i++) {
      try {
        const response = await fetch(`${URL_BASE}/${filtrados[i]}`);
        const data = await response.json();
        crearTarjeta(data);
      } catch (e) {
        console.error(e);
      }
    }
  });


  //Paginación
    //Botón avanzar pg
    document.querySelector(".btn__av").addEventListener('click', () => {
      paginaactual++;
      traerDatos(paginaactual);
      console.log(paginaactual);
      actualizarBtns();
    });
    
    //Botón retroceder pg
    document.querySelector(".btn__rt").addEventListener('click', () => {
      if(paginaactual > 1){
        paginaactual--;
        traerDatos(paginaactual);
        console.log(paginaactual);
        actualizarBtns();
      }
    });
  });