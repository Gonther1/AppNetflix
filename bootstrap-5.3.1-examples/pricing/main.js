// (async(p1)=>{
//     let peticion=await fetch(`${p1}.json`);
//     let res= await peticion.json();
//     console.log(res)
// })('config')


//Primer Div

//Segundo Div
const path= 'config';
let construirElEncabezado= async()=>{
    let peticion = await fetch(`${path}.json`)
    let res = await peticion.json();
    let selecion = document.querySelector("#mySecondDiv")
    selecion.insertAdjacentHTML("beforeend",/* html */`        
    <h1 class="display-4 fw-normal text-body-emphasis">${res.header.segundoDiv.titulo}</h1>
    <p class="fs-5 text-body-secondary">
    ${res.header.segundoDiv.parrafo}
    </p>`
    )
}
construirElEncabezado()