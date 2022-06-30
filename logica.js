const link = "http://localhost:3000/";
const product = "product/";

const htmlResponse = document.querySelector(".products");

//fetch data
fetch(link)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    htmlResponse.innerHTML = "";
    data.forEach((product) => {
      htmlResponse.innerHTML += `
        <div class="card" style="width: 18rem">
        <img src=" ${
          product.url_image == null || product.url_image == ""
            ? "https://i.pinimg.com/564x/a3/6b/42/a36b422bb2bebcbd77bba846b83ddf5d.jpg"
            : product.url_image
        }" class="card-img-top img-fluid" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">
            <br> Precio: ${product.price} $ <br/>
            <br>Sale!: ${product.discount}% OFF <br/>
            </p>
            <a href="#" class="btn btn-primary">Comprar</a>
        </div>
        </div>
        `;
    });
  })
  .catch((error) => console.log(error));

// boton.addEventListener('click', Filtrar);
function getProducts() {
  fetch(link)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      htmlResponse.innerHTML = "";
      data.forEach((product) => {
        htmlResponse.innerHTML += `
            <div class="card" style="width: 18rem">
            <img src=" ${
              product.url_image == null || product.url_image == ""
                ? "https://i.pinimg.com/564x/a3/6b/42/a36b422bb2bebcbd77bba846b83ddf5d.jpg"
                : product.url_image
            }" class="card-img-top img-fluid" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">
                <br> Precio: ${product.price} $ <br/>
                <br>Sale!: ${product.discount}% OFF <br/>
              </p>
              <a href="#" class="btn btn-primary">Comprar</a>
            </div>
          </div>

            `;
      });
    })
    .catch((error) => console.log(error));
}

//hacer un fetch para obtener los productos segun una variable input
function filtrar() {
  let input = document.querySelector("input").value;

  fetch(link + "product/" + `?name=${input}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      htmlResponse.innerHTML = "";
      data.forEach((product) => {
        htmlResponse.innerHTML += `
            <div class="card" style="width: 18rem">
            <img src=" ${
              product.url_image == null || product.url_image == ""
                ? "https://i.pinimg.com/564x/a3/6b/42/a36b422bb2bebcbd77bba846b83ddf5d.jpg"
                : product.url_image
            }" class="card-img-top img-fluid" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">
                <br> Precio: ${product.price} $ <br/>
                <br>Sale!: ${product.discount}% OFF <br/>
              </p>
              <a href="#" class="btn btn-primary">Comprar</a>
            </div>
          </div>
            `;
      });
    })
    .catch((error) => console.log(error));
}

//arrow function con botn y un hola mundo
const element = document.getElementById("myBtn");
element.addEventListener("click", myFunction);

function myFunction() {
  let input = document.querySelector("input").value;
  fetch(link + product + input)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      htmlResponse.innerHTML = "";
      data.forEach((product) => {
        htmlResponse.innerHTML += `
          <div class="card" style="width: 18rem">
          <img src=" ${
            product.url_image == null || product.url_image == ""
              ? "https://i.pinimg.com/564x/a3/6b/42/a36b422bb2bebcbd77bba846b83ddf5d.jpg"
              : product.url_image
          }" class="card-img-top img-fluid" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">
              <br> Precio: ${product.price} $ <br/>
              <br>Sale!: ${product.discount}% OFF <br/>
              ${
                product.description == 0
                  ? "No hay descripcion"
                  : `<br>Sale!: ${product.description} % OFF <br/>`
              }
            </p>
            <a href="#" class="btn btn-primary">Comprar</a>
          </div>
        </div>
          `;
      });
    })
    .catch((error) => console.log(error));
}

var wage = document.getElementById("wage");
wage.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    //checks whether the pressed key is "Enter"
    validate(e);
    e.preventDefault();
  }
});

function validate(e) {
  var text = e.target.value;
  //validation of the input...
  console.log(text);
  fetch(link + product + text)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      htmlResponse.innerHTML = "";
      data.forEach((product) => {
        htmlResponse.innerHTML += `
          <div class="card card-color h-tama" style="width: 17rem ">
          <img src=" ${
            product.url_image == null || product.url_image == ""
              ? "https://i.pinimg.com/564x/a3/6b/42/a36b422bb2bebcbd77bba846b83ddf5d.jpg"
              : product.url_image
          }" class="card-img-top img-fluid " alt="..." />
          <div class="card-body color-card">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">
            <p class="sizen-1">Desde</p>
              <br> Precio: ${product.price} $ <br/>
              ${
                product.discount == 0
                  ? ""
                  : `<span class="badge text-bg-danger pb-3"><br>Sale!:${product.discount}% OFF!<br/></span>`
              }
            </p>
            <a href="#" class="btn btn-primary">Comprar</a>
          </div>
        </div>
          `;
      });
    })
    .catch((error) => console.log(error));
}
