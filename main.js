const categories = [
  {
    id: 1,
    name: 'Категорія 1',
    products: [
      { id: 1, name: 'Товар 1.1', price: 100 },
      { id: 2, name: 'Товар 1.2', price: 200 },
      { id: 3, name: 'Товар 1.3', price: 300 },
    ],
  },
  {
    id: 2,
    name: 'Категорія 2',
    products: [
      { id: 4, name: 'Товар 2.1', price: 400 },
      { id: 5, name: 'Товар 2.2', price: 500 },
      { id: 6, name: 'Товар 2.3', price: 600 },
    ],
  },
];

const categoriesElem = document.querySelector('.categories');
const productsElem = document.querySelector('.products');
const productInfoElem = document.querySelector('.product-info');

function showCategories() {
  categoriesElem.innerHTML = '';
  categories.forEach((category) => {
    const categoryElem = document.createElement('div');
    categoryElem.textContent = category.name;
    categoryElem.addEventListener('click', () => {
      showProducts(category);
    });
    categoriesElem.appendChild(categoryElem);
  });
}

function showProducts(category) {
  productsElem.innerHTML = '';
  category.products.forEach((product) => {
    const productElem = document.createElement('div');
    productElem.textContent = product.name;
    productElem.addEventListener('click', () => {
      showProductInfo(product);
    });
    productsElem.appendChild(productElem);
  });
}

function showProductInfo(product) {
  productInfoElem.innerHTML = '';
  const productInfo = document.createElement('div');
  productInfo.innerHTML = `<h2>${product.name}</h2><p>${product.price}</p><button class="buy-btn">Купити</button>`;
  productInfoElem.appendChild(productInfo);
  const buyBtn = productInfoElem.querySelector('.buy-btn');
  buyBtn.addEventListener('click', () => {
    alert(`Ви купили ${product.name} за ${product.price} грн.`);
    productInfoElem.innerHTML = '';
    showCategories();
  });
}

showCategories();




        
        