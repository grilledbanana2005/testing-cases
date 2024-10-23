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

let gioHang = [];

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
            <select class="quantitySelector-${product.id}">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
            <button class="btn btn-success mx-auto nutDatHang" id="nutDatHang" data-product-id="${product.id}"> Thêm vào Giỏ Hàng</button>
        
    </div>`
});

document.querySelector('.products_container').innerHTML = productHTML;

// them vao gio hang

document.querySelectorAll('.nutDatHang').forEach((button) => {
    button.addEventListener('click', () => {
        const productId = button.dataset.productId;
        let trungLap;

        gioHang.forEach((sanPham) => {
            if (productId === sanPham.productId)
            {
                trungLap = sanPham;
            }
        })

        const quantitySelector = document.querySelector(`.quantitySelector-${productId}`);
        const quantity = Number(quantitySelector.value);
        
        if (trungLap) {
            trungLap.quantity+=quantity;
        } else {
            gioHang.push({
                productId: productId,
                quantity: quantity
            })
        }
        
        console.log(gioHang);
    })
})

//Lien He form
function contactForm(frm){
    var emailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    var contactEmail = document.getElementById("contactEmail");
    var contactText = document.getElementById("contactTextArea");
    if(emailReg.test(contactEmail.value) == false){
        alert("Email không hợp lệ, vui lòng nhập lại Email của bạn!");
        return false;
    }
    if (contactText.value.length < 10){
        alert("Noi dung khong hop le, vui lòng nhập lại nội dung cần liên hệ!");
        return false;
    }
    alert("Cảm ơn phản hồi của bạn, chúng tôi sẽ liên lạc với bạn trong thời gian sớm nhất");
    return true;
}
