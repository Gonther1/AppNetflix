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
    <img src="${res.header.firstDiv.image}" alt="" style="width: 20%; height:14%">
    </a>`
    )
}
//Segundo Div
let sectAddSecondDiv= async()=>{
    let peticion = await fetch(`${path}.json`)
    let res = await peticion.json();
    let selecion = document.querySelector("#mySecondDiv")
    selecion.insertAdjacentHTML("beforeend",/* html */`        
    <h1 class="display-4 fw-normal text-body-emphasis">${res.header.secondDiv.tittle}</h1>
    <p class="fs-5 text-body-secondary">
    ${res.header.secondDiv.text}
    </p>`
    )
}
sectAddFistDiv()
sectAddSecondDiv()
/* Main */
let main=async()=>{
  let peticion = await fetch(`${path}.json`)
  let res = await peticion.json();
  let selecion = document.querySelector("#main")
  selecion.insertAdjacentHTML("beforeend",/* html */`        
  <div id="cards" class="row row-cols-1 row-cols-md-3 mb-3 text-center">

  </div>

  <h2 class="display-6 text-center mb-4">${res.main.secondTittle}</h2>

  <div class="table-responsive">
    <table class="table text-center">
      <thead>
        <tr>
          <th style="width: 34%;"></th>
          <th style="width: 22%;">${res.main.secondDiv.essential.tittle}</th>
          <th style="width: 22%;">${res.main.secondDiv.standar.tittle}</th>
          <th style="width: 22%;"><p style="color: red;">${res.main.secondDiv.premium.tittle}</p></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row" class="text-start">${res.main.secondDiv.price}</th>
          <td><p class="fs-5 text-body-secondary" >${res.main.secondDiv.essential.price}
          </p></td>
          <td><p class="fs-5 text-body-secondary">${res.main.secondDiv.standar.price}
          </p></td>
          <td><p style="color: red;">${res.main.secondDiv.premium.price}</p></td>
        <tr>
          <th scope="row" class="text-start">${res.main.secondDiv.quality}</th>
          <td><p class="fs-5 text-body-secondary">${res.main.secondDiv.essential.quality}
          </p></td>
          <td><p class="fs-5 text-body-secondary">${res.main.secondDiv.standar.quality}
          </p></td>
          <td><p style="color: red;">${res.main.secondDiv.premium.quality}</p></td>
        </tr>
      </tbody>

      <tbody>
        <tr>
          <th scope="row" class="text-start">${res.main.secondDiv.resolution}</th>
          <td><p class="fs-5 text-body-secondary">${res.main.secondDiv.essential.resolution}
          </p></td>
          <td><p class="fs-5 text-body-secondary">${res.main.secondDiv.standar.resolution}
          </p></td>
          <td ><p style="color: red;">${res.main.secondDiv.premium.resolution}</p></td>
        </tr>
        <tr>
          <th scope="row" class="text-start">${res.main.secondDiv.additional}</th>
          <td>${res.main.secondDiv.essential.svg}</td>              
          <td>${res.main.secondDiv.standar.svg}</td>
          <td>${res.main.secondDiv.premium.svg}</td>
        </tr>
      </tbody>
    </table>
  </div>`
  )
}
main()
// Div
let mainDivs= async()=>{
    let modificado= await fetch(`${path}.json`)
    let res = await modificado.json();
    let selecion = document.querySelector("#cards")
    selecion.insertAdjacentHTML("beforeend",/* html */`        
    <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3">
              <h4 class="my-0 fw-normal">${res.main.firstDiv.essential.tittle}</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">${res.main.firstDiv.essential.price}<small class="text-body-secondary fw-light">${res.main.firstDiv.essential.small}</small></h1>
              <ul class="list-unstyled mt-3 mb-4">
                <li>${res.main.firstDiv.essential.adittional.firstLi}</li>
                <li>${res.main.firstDiv.essential.adittional.secondLi}</li>
                <li>${res.main.firstDiv.essential.adittional.thirdLi}</li>
                <li>${res.main.firstDiv.essential.adittional.fourthLi}</li>
              </ul>
              <button type="button" class="w-100 btn btn-lg btn-outline-danger">${res.main.firstDiv.essential.button}</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3">
              <h4 class="my-0 fw-normal">${res.main.firstDiv.standar.tittle}</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">${res.main.firstDiv.standar.price}<small class="text-body-secondary fw-light">${res.main.firstDiv.standar.small}</small></h1>
              <ul class="list-unstyled mt-3 mb-4">
              <li>${res.main.firstDiv.standar.adittional.firstLi}</li>
              <li>${res.main.firstDiv.standar.adittional.secondLi}</li>
              <li>${res.main.firstDiv.standar.adittional.thirdLi}</li>
              <li>${res.main.firstDiv.standar.adittional.fourthLi}</li>
              </ul>
              <button type="button" class="w-100 btn btn-lg btn-danger">${res.main.firstDiv.standar.button}</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm border-danger">
            <div class="card-header py-3 text-bg-danger border-danger">
              <h4 class="my-0 fw-normal">${res.main.firstDiv.premium.tittle}</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">${res.main.firstDiv.premium.price}<small class="text-body-secondary fw-light">${res.main.firstDiv.premium.small}</small></h1>
              <ul class="list-unstyled mt-3 mb-4">
                <li>${res.main.firstDiv.premium.adittional.firstLi}</li>
                <li>${res.main.firstDiv.premium.adittional.secondLi}</li>
                <li>${res.main.firstDiv.premium.adittional.thirdLi}</li>
                <li>${res.main.firstDiv.premium.adittional.fourthLi}</li>
              </ul>
              <button type="button" class="w-100 btn btn-lg btn-danger">${res.main.firstDiv.premium.button}</button>
            </div>
          </div>
        </div>
        `
    )
}
mainDivs()