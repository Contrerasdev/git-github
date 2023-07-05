    //Selectores
    const inputSearch = document.querySelector('#buscar');
    const contenedor = document.querySelector('#container');

    inputSearch.addEventListener('input', buscar);

    function buscar(){
        console.log(`${inputSearch.value}`);

        const frase = document.querySelector('#buscar').value;
        const respuesta = document.body.innerHTML;
        

        if(respuesta.indexOf(frase) !== -1){
            console.log('Palabra encontrada')
        }else{
            console.log('No se encontro resultado');
        }
        contenedor.innerText = inputSearch;
    }


//     const inputSearch = document.querySelector('#buscar');
// const contenedor = document.querySelector('#container');

// inputSearch.addEventListener('input', buscar);

// function buscar() {
//     console.log(inputSearch.value);

//     const frase = inputSearch.value;
//     const respuesta = document.body.innerText;

//     if (respuesta.indexOf(frase) !== -1) {
//         console.log('Palabra encontrada');
//     } else {
//         console.log('No se encontró resultado');
//     }
//     contenedor.innerText = inputSearch;
// }