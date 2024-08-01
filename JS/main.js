let data = [
  {
    image: {
      thumbnail: "./assets/images/image-waffle-thumbnail.jpg",
      mobile: "./assets/images/image-waffle-mobile.jpg",
      tablet: "./assets/images/image-waffle-tablet.jpg",
      desktop: "./assets/images/image-waffle-desktop.jpg",
    },
    name: "Waffle with Berries",
    category: "Waffle",
    price: 6.5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-creme-brulee-thumbnail.jpg",
      mobile: "./assets/images/image-creme-brulee-mobile.jpg",
      tablet: "./assets/images/image-creme-brulee-tablet.jpg",
      desktop: "./assets/images/image-creme-brulee-desktop.jpg",
    },
    name: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    price: 7.0,
  },
  {
    image: {
      thumbnail: "./assets/images/image-macaron-thumbnail.jpg",
      mobile: "./assets/images/image-macaron-mobile.jpg",
      tablet: "./assets/images/image-macaron-tablet.jpg",
      desktop: "./assets/images/image-macaron-desktop.jpg",
    },
    name: "Macaron Mix of Five",
    category: "Macaron",
    price: 8.0,
  },
  {
    image: {
      thumbnail: "./assets/images/image-tiramisu-thumbnail.jpg",
      mobile: "./assets/images/image-tiramisu-mobile.jpg",
      tablet: "./assets/images/image-tiramisu-tablet.jpg",
      desktop: "./assets/images/image-tiramisu-desktop.jpg",
    },
    name: "Classic Tiramisu",
    category: "Tiramisu",
    price: 5.5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-baklava-thumbnail.jpg",
      mobile: "./assets/images/image-baklava-mobile.jpg",
      tablet: "./assets/images/image-baklava-tablet.jpg",
      desktop: "./assets/images/image-baklava-desktop.jpg",
    },
    name: "Pistachio Baklava",
    category: "Baklava",
    price: 4.0,
  },
  {
    image: {
      thumbnail: "./assets/images/image-meringue-thumbnail.jpg",
      mobile: "./assets/images/image-meringue-mobile.jpg",
      tablet: "./assets/images/image-meringue-tablet.jpg",
      desktop: "./assets/images/image-meringue-desktop.jpg",
    },
    name: "Lemon Meringue Pie",
    category: "Pie",
    price: 5.0,
  },
  {
    image: {
      thumbnail: "./assets/images/image-cake-thumbnail.jpg",
      mobile: "./assets/images/image-cake-mobile.jpg",
      tablet: "./assets/images/image-cake-tablet.jpg",
      desktop: "./assets/images/image-cake-desktop.jpg",
    },
    name: "Red Velvet Cake",
    category: "Cake",
    price: 4.5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-brownie-thumbnail.jpg",
      mobile: "./assets/images/image-brownie-mobile.jpg",
      tablet: "./assets/images/image-brownie-tablet.jpg",
      desktop: "./assets/images/image-brownie-desktop.jpg",
    },
    name: "Salted Caramel Brownie",
    category: "Brownie",
    price: 4.5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-panna-cotta-thumbnail.jpg",
      mobile: "./assets/images/image-panna-cotta-mobile.jpg",
      tablet: "./assets/images/image-panna-cotta-tablet.jpg",
      desktop: "./assets/images/image-panna-cotta-desktop.jpg",
    },
    name: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    price: 6.5,
  },
];

let productsDiv = document.getElementById("products");

for (let i = 0; i < data.length; i++) {
  let divProduct = document.createElement("div");
  divProduct.className = data[i].category;

  // Create Cart
  let cart = document.createElement("div");
  cart.className = "cart";
  cart.id = "cart";

  let cartIcion = document.createElement("img");
  cartIcion.src = "../assets/images/icon-add-to-cart.svg";
  cartIcion.className = "cartIcon";

  let pForCart = document.createElement("P");
  pForCart.className = "pcart";
  pForCart.textContent = "Add To Cart";

  cart.appendChild(cartIcion);
  cart.appendChild(pForCart);

  // Create add and remove product from cart
  let counterData = 1;

  let addAndRemove = document.createElement("div");
  addAndRemove.className = "addAndRemove";

  // create a add button
  let addSvg = document.createElement("img");
  addSvg.className = "addSvg";
  addSvg.id = "addSvg";
  addSvg.src = "../assets/images/icon-increment-quantity.svg";
  addAndRemove.appendChild(addSvg);

  // create a increment and decrement counter
  let counter = document.createElement("p");
  counter.className = "counter";
  counter.id = "counter";
  counter.innerHTML = counterData;
  addAndRemove.appendChild(counter);

  // creat a remove button
  let removeSvg = document.createElement("img");
  removeSvg.className = "removeSvg";
  removeSvg.id = "removeSvg";
  removeSvg.src = "../assets/images/icon-decrement-quantity.svg";
  addAndRemove.appendChild(removeSvg);

  // create p for name , category and price
  let pForName = document.createElement("p");
  let pForCategory = document.createElement("p");
  let pForPrice = document.createElement("p");

  // create image
  let image = document.createElement("img");

  // data entery
  image.src = data[i].image.desktop;
  pForName.innerHTML = data[i].name;
  pForCategory.innerHTML = data[i].category;
  pForPrice.innerHTML = `$${data[i].price.toFixed(2)}`;

  // Add classes for elements
  image.className = "image";
  pForName.className = "name";
  pForCategory.className = "category";
  pForPrice.className = "price";

  // add data to the div product
  divProduct.appendChild(image);
  divProduct.appendChild(cart);
  divProduct.appendChild(addAndRemove);
  divProduct.appendChild(pForCategory);
  divProduct.appendChild(pForName);
  divProduct.appendChild(pForPrice);
  productsDiv.appendChild(divProduct);
}

let cart = document.getElementById("producrtCart");

// create h2 for counting the products in card
let cartH2 = document.createElement("h2");
cartH2.innerHTML = `Your Cart (0)`;

// add h2 to the cart
cart.appendChild(cartH2);

// create a img
let imageEmptyCart = document.createElement("img");
imageEmptyCart.src = "../assets/images/illustration-empty-cart.svg";
imageEmptyCart.className = "imageEmptyCart";

// Add image cart to the cart
cart.appendChild(imageEmptyCart);

// create an p for empty card
let pForEmptyCard = document.createElement("p");
pForEmptyCard.className = "pForEmptyCard";
pForEmptyCard.textContent = "Your added items will appear here";

// Add p to the cart
cart.appendChild(pForEmptyCard);

// add item to the cart when click on (add to cart)
let addItem = document.querySelectorAll("#cart");

let count = 0;
addItem.forEach(function (el) {
  // el.nextElementSibling
  el.addEventListener("click", function () {
    count++;
    imageEmptyCart.style.display = "none";
    pForEmptyCard.style.display = "none";
    cart.style.height = "fit-content";

    let cartItem = document.createElement("div");
    cartItem.className = "cartItem";

    let iconX = document.createElement("img");
    iconX.src = "../assets/images/icon-remove-item.svg";
    iconX.className = "iconX";
    iconX.addEventListener("click", function () {
      count--;
      document.querySelector(
        ".producrtCart h2"
      ).innerHTML = `Your Cart (${count})`;
      iconX.parentElement.remove();
    });

    document.querySelector(
      ".producrtCart h2"
    ).innerHTML = `Your Cart (${count})`;
    // iconX.textContent
    let name =
      this.nextElementSibling.nextElementSibling.nextElementSibling.cloneNode(
        true
      );
    let price =
      this.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.cloneNode(
        true
      );
    price.innerHTML = `<span>${count}x</span>     @${price.textContent}`;
    let pForDataInCART = document.createElement("div");
    pForDataInCART.className = "pForDataInCART";
    pForDataInCART.appendChild(name);
    pForDataInCART.appendChild(price);

    cartItem.appendChild(pForDataInCART);
    cartItem.appendChild(iconX);
    cart.appendChild(cartItem);

    let total = document.createElement("div");
    total.className = "total";

    let tatalP = document.createElement("p");
    tatalP.textContent = "Order Total";

    let tatalPrice = document.createElement("p");
    tatalPrice.textContent = `$`;
    total.append(tatalP);
    total.append(tatalPrice);

    let carbonNatural = document.createElement("div");

    cart.appendChild(total);
  });
});
