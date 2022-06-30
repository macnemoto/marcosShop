const link = "http://localhost:3000/";
const product = "product/";

const htmlResponse = document.querySelector(".products");
const caveat = document.querySelector("#caveat");

tippy("#caveat", {
  content: "Precio sin el Descuento.",
  animation: "shift-away",
});

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
          <div class="card card-color h-tama" style="width: 18rem ">
          <img src=" ${
            product.url_image == null || product.url_image == ""
              ? "https://i.pinimg.com/564x/a3/6b/42/a36b422bb2bebcbd77bba846b83ddf5d.jpg"
              : product.url_image
          }" class="card-img-top img-fluid " alt="..." />
          <div class="card-body color-card">
            <a class="a-element" href="name product">${product.name}</a>
            <p class="card-text">
            <span class="sizen-1"><br> ${
              product.discount == 0
                ? ""
                : `Desde <del> $${(
                    product.price +
                    product.price * (product.discount / 100)
                  ).toLocaleString(
                    "es-CL"
                  )}<a id="caveat" href="#"><i class='bx bx-question-mark bx-border-circle'></i></a></del>`
            }
             <br/> </span>
              <span class="price"><br>$ ${product.price.toLocaleString(
                "es-CL"
              )} <br/> </span>
              ${
                product.discount == 0
                  ? ""
                  : `<span class="sale"><br>Ahorra ${product.discount}%<br/></span>`
              }
            </p>
            ${
              product.discount == 0
                ? `<a href="#" class="btn btn-secondary buton-card-ns">Comprar</a>`
                : `<a href="#" class="btn btn-success buton-card">Comprar</a>`
            }
           
          </div>
        </div>
          `;
      });
    })
    .catch((error) => console.log(error));
}
