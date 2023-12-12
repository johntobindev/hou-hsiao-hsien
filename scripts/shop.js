class Product {
  constructor(title, image, price) {
    this.title = title
    this.image = image
    this.price = price
  }
}

const products = [
  new Product("Millennium Mambo Poster", "poster", 13.99),
  new Product("Hou Hsiao-Hsien Mug", "mug", 17.99),
  new Product("Hou Hsiao-Hsien T-Shirt", "shirt", 24.99),
]

let html = ''

for (let i = 0; i < products.length; i++) {
  html += `
    <div class="product">
      <div class="product-image" style="background-image: url('./images/shop/${products[i].image}.jpg');">
        <div class="product-image-inner"></div>
      </div>

      <div class="product-name">${products[i].title}</div>
      <div class="product-price">&euro;${products[i].price}</div>
      <button
        class="product-buy"
        data-product-key="${i}"
        onclick="addItem(event)"
      >Buy!</button>
    </div>
  `
}

const productsElem = document.getElementById('products')
productsElem.innerHTML = html

let basket = [0, 0, 0]

const addItem = (event) => {
  const key = event.currentTarget.getAttribute('data-product-key')
  basket[key]++;
  updateBasket();
}

const removeItem = event => {
  const key = event.currentTarget.getAttribute('data-product-key')
  if (basket[key] > 0) basket[key]--;
  updateBasket();
}

const deleteItem = event => {
  const key = event.currentTarget.getAttribute('data-product-key')
  if (basket[key] > 0) basket[key] = 0;
  updateBasket();
}

const updateBasket = () => {
  if (basket[0] === 0 && basket[1] === 0 && basket[2] === 0) {
    document.getElementById('basket-empty').classList.add('is-empty')
    document.getElementById('basket-wrapper').classList.add('is-empty')
  } else {
    document.getElementById('basket-empty').classList.remove('is-empty')
    document.getElementById('basket-wrapper').classList.remove('is-empty')
  }

  const basketElem = document.getElementById('basket');

  let totalPrice = 0;
  let html = '';

  for (let i = 0; i < basket.length; i++) {
    const quantity = basket[i];
    if (quantity === 0) continue;
    const totalProductPrice = (products[i].price * quantity);
    totalPrice += totalProductPrice;

    html += `
      <li class="basket-item">
        <div class="basket-item-name">${products[i].title}</div>
        <div class="basket-item-inner">
          <div class="basket-item-quantity">
            <button data-product-key="${i}" onclick="removeItem(event)">-</button>
            <span>${quantity}</span>
            <button data-product-key="${i}" onclick="addItem(event)">+</button>
          </div>
          <button class="basket-delete" data-product-key="${i}" onclick="deleteItem(event)">Delete</button>
          <div class="basket-item-price">&euro;${totalProductPrice.toFixed(2)}</div>
        </div>
      </li>
    `
  }

  basketElem.innerHTML = html;
  const priceElem = document.getElementById('basket-total-price');
  priceElem.innerText = `€${totalPrice.toFixed(2)}`;
}

updateBasket();