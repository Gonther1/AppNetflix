// (async(p1)=>{
//     let peticion=await fetch(`${p1}.json`);
//     let res= await peticion.json();
//     console.log(res)
// })('config')

/* Header */
const path= 'config';
//Primer Div
let sectAddFistDiv= async()=>{
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
let sectAddSecondDiv= async()=>{
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
sectAddFistDiv()
sectAddSecondDiv()
/* Main */
// First Div
// Essential
let mainFirstDivEs= async()=>{
    let modificado= await fetch(`${path}.json`)
    let res = await modificado.json();
    let selecion = document.querySelector("#cards")
    selecion.insertAdjacentHTML("beforeend",/* html */`        
    <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3">
              <h4 class="my-0 fw-normal">${res.main.primerDiv.essential.titulo}</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">${res.main.primerDiv.essential.precio}<small class="text-body-secondary fw-light">${res.main.primerDiv.essential.small}</small></h1>
              <ul class="list-unstyled mt-3 mb-4">
                <li>${res.main.primerDiv.essential.adittional.firstLi}</li>
                <li>${res.main.primerDiv.essential.adittional.secondLi}</li>
                <li>${res.main.primerDiv.essential.adittional.thirdLi}</li>
                <li>${res.main.primerDiv.essential.adittional.fourthLi}</li>
              </ul>
              <button type="button" class="w-100 btn btn-lg btn-outline-danger">${res.main.primerDiv.essential.button}</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3">
              <h4 class="my-0 fw-normal">${res.main.primerDiv.standar.titulo}</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">${res.main.primerDiv.standar.precio}<small class="text-body-secondary fw-light">${res.main.primerDiv.standar.small}</small></h1>
              <ul class="list-unstyled mt-3 mb-4">
              <li>${res.main.primerDiv.standar.adittional.firstLi}</li>
              <li>${res.main.primerDiv.standar.adittional.secondLi}</li>
              <li>${res.main.primerDiv.standar.adittional.thirdLi}</li>
              <li>${res.main.primerDiv.standar.adittional.fourthLi}</li>
              </ul>
              <button type="button" class="w-100 btn btn-lg btn-danger">${res.main.primerDiv.standar.button}</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm border-danger">
            <div class="card-header py-3 text-bg-danger border-danger">
              <h4 class="my-0 fw-normal">${res.main.primerDiv.premium.titulo}</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">${res.main.primerDiv.premium.precio}<small class="text-body-secondary fw-light">${res.main.primerDiv.premium.small}</small></h1>
              <ul class="list-unstyled mt-3 mb-4">
                <li>${res.main.primerDiv.premium.adittional.firstLi}</li>
                <li>${res.main.primerDiv.premium.adittional.secondLi}</li>
                <li>${res.main.primerDiv.premium.adittional.thirdLi}</li>
                <li>${res.main.primerDiv.premium.adittional.fourthLi}</li>
              </ul>
              <button type="button" class="w-100 btn btn-lg btn-danger">${res.main.primerDiv.premium.button}</button>
            </div>
          </div>
        </div>
        `
    )
}
mainFirstDivEs()
