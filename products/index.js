const products = [
  {
    title: 'Lorem',
    price: 4.5,
    image: '../images/image.jpg',
    category: 'electronics',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero itaque!',
  },
  {
    title: 'Lorem ipsum dolor sit amet.',
    price: 14.5,
    image: '../images/image.jpg',
    category: 'electronics',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero itaque!',
  },
  {
    title: 'Lorem ipsum dolor sit amet.',
    price: 24.5,
    image: '../images/image.jpg',
    category: "men's clothing",
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero itaque!',
  },
  {
    title: 'Lorem ipsum dolor sit amet.',
    price: 34.5,
    image: '../images/image.jpg',
    category: "women's clothing",
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero itaque!',
  },
  {
    title: 'Lorem ipsum dolor sit amet.',
    price: 43.5,
    image: '../images/image.jpg',
    category: 'jewelery',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero itaque!',
  },
  {
    title: 'Lorem ipsum dolor sit amet.',
    price: 33.5,
    image: '../images/image.jpg',
    category: 'jewelery',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero itaque!',
  },
];

const productContainer = document.querySelector('.item-container');
const btnContainer = document.querySelector('.btn-container');

const url = `https://fakestoreapi.com/products`;

fetch(url)
  .then((response) => response.json())
  .then((products) => {
    // console.log(products);

    getProducts(products);
    displayItemBtns(products);
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

const displayItemBtns = (items) => {
  const categories = items.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      console.log(values);
      return values;
    },
    ['all']
  );
  //console.log(categories);
  const categoryBtns = categories
    .map((category) => {
      let joinedCategory = category.split(' ').join('_');
      return `<button class='filter-btn' data-id=${joinedCategory} type='button'>
          ${category}
        </button>`;
    })
    .join('');
  //console.log(categoryBtns);
  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll('.filter-btn');

  //Filter Items
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      // console.log(e.currentTarget.dataset.id);
      const category = e.currentTarget.dataset.id;
      const itemCategory = items.filter((productItem) => {
        let splitedCategory = category.split('_').join(' ');

        if (productItem.category === splitedCategory) {
          return productItem;
        }
      });

      if (category === 'all') {
        getProducts(items);
      } else {
        getProducts(itemCategory);
      }
    });
  });
};

// getProducts(products);
// displayItemBtns(products);
