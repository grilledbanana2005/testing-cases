let productItem = 
[
    {
        name: "Cây Hoa Hồng Mini",
        price: 1000e3,
        image:"images/products/sp1.png",
        id:"sp01"
    }
]

let productHTML = '';
const productDisplayer = document.querySelector('.products_container');

productItem.forEach((product) => {
    productHTML += `
    <div class="product">
        <img id="${product.id}" src="${product.image}">
        <h3 id="${product.id}" >${product.name}</h3>
        <h4>${product.price}&nbsp;₫</h4>
  </div>`
});

productDisplayer.innerHTML = productHTML;