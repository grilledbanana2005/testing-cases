let productItem = 
[
    {
        name: "Cây Hoa Hồng Mini",
        price: 1000000,
        image: "images/products/sp1.png",
        id: "sp01"
    },
    {
        name: "Cây Lantana",
        price: 890000,
        image: "images/products/sp2.png",
        id: "sp02"
    },
    {
        name: "Cây Pyracantha",
        price: 890000,
        image: "images/products/sp3.png",
        id: "sp03"
    },
    {
        name: "Cây Trà Hoa",
        price: 4119000,
        image: "images/products/sp4.png",
        id: "sp04"
    },
    {
        name: "Cây Đỗ Quyên-Hoa Đỏ",
        price: 1119000,
        image: "images/products/sp5.png",
        id: "sp05"
    },
    {
        name: "Cây Trà Hoa Nhỏ",
        price: 2120000,
        image: "images/products/sp6.png",
        id: "sp06"
    },
    {
        name: "Cây Đỗ Quyên-Hoa Hồng",
        price: 1100000,
        image: "images/products/sp7.png",
        id: "sp07"
    },
    {
        name: "Cây Mộc Qua",
        price: 2490000,
        image: "images/products/sp8.png",
        id: "sp08"
    },
    {
        name: "Cây Đỗ Quyên-Hoa Trắng",
        price: 890000,
        image: "images/products/sp9.png",
        id: "sp09"
    },
    {
        name: "Cây Cotoneaster",
        price: 890000,
        image: "images/products/sp10.png",
        id: "sp10"
    },
    {
        name: "Cây Wisteria Lùn",
        price: 1119000,
        image: "images/products/sp11.png",
        id: "sp11"
    },
    {
        name: "Cây Yaupon Holly",
        price: 1120000,
        image: "images/products/sp12.png",
        id: "sp12"
    }
];

// hien thi hinh anh san pham 

let productHTML = '';

    productItem.forEach((product) => {
        const productPrice = product.price.toLocaleString('vi-VN', {
            style: 'currency',
            currency: 'VND'
        });
        productHTML += `
        <div class="product">
            <img id="${product.id}" src="${product.image}">
            <h3 id="${product.id}">${product.name}</h3>
            <h4>${productPrice}</h4>
      </div>`
    });

    document.querySelector('.products_container').innerHTML = productHTML;

// hien thi chi tiet san pham

function loadDetail(productId) {
    const product = productItem.find(item => item.id === productId);

    if (product) {
        localStorage.setItem('selectedProduct', JSON.stringify(product));
        window.location.href = 'chitiet.html';
    }
}

document.querySelectorAll('.product img, .product h3').forEach(element => {
    element.addEventListener('click', (sanpham) => {
        const productId = sanpham.target.id;  
        loadDetail(productId); 
    });
});


