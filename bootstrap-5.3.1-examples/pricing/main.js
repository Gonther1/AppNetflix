// (async(p1)=>{
//     let peticion=await fetch(`${p1}.json`);
//     let res= await peticion.json();
//     console.log(res)
// })('config')

/* Header */
const path= 'config';
//Primer Div
let agregarLogo= async()=>{
    let modificado= await fetch(`${path}.json`)
    let res = await modificado.json();
    let selecion = document.querySelector("#myFirstDiv")
    selecion.insertAdjacentHTML("beforeend",/* html */`
    <a href="/" class="d-flex align-items-center link-body-emphasis text-decoration-none">
    <img src="${res.header.primerDiv.imagen}" alt="" style="width: 20%; height:14%">
    </a>`
    )
}
//Segundo Div
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
agregarLogo()

