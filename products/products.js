const url = `https://fakestoreapi.com/products`;

const productContainer = document.querySelector('.item-container');
const counter = document.querySelector('.counter');
const filterItems = document.querySelector('.select');

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

fetch(url)
  .then((response) => response.json())
  .then((products) => {
    // console.log(products);

    getProducts(products);
    filterProduct(products);
    searchProduct(products);
  })
  .catch((error) => console.log(error));

const getProducts = (items) => {
  let displayProducts = items
    .map((product) => {
      return `<article class="product-item">
          <img class="pic" src=${product.image} alt="Product Image" />
        <div class="item-info">
          <header>
            <h4>${product.title}</h4>
            <h4 class="price">${product.price}</h4>
          </header>
          <p class="item-text">${product.description}</p>
        </div>
        </article>`;
    })
    .join('');
  productContainer.innerHTML = displayProducts;
  // counter.innerHTML = `${items.length} products available`;
};

const filterProduct = (dataItems) => {
  filterItems.addEventListener('change', (e) => {
    const category = e.currentTarget.value;
    let categoryItem = dataItems.filter((dataItem) => {
      if (dataItem.category === category) {
        return dataItem;
      }
    });
    if (category === '') {
      getProducts(dataItems);
      counter.innerHTML = `${dataItems.length} products available`;
    } else {
      getProducts(categoryItem);
      // counter.innerHTML = `${categoryItem.length} products are found`;
    }
  });
};

const searchProduct = (dataItems) => {};

// getProducts(products);
// filterProduct(products);
