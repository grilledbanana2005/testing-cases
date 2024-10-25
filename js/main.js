

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

let gioHang = JSON.parse(localStorage.getItem('gioHang')) ||   
[
    
];

if (window.location.pathname.includes('sanpham.html')) {
    sanPhamDisplaying();
}

if (window.location.pathname.includes('giohang.html')) {
    GioHangDisplaying();
}

// hien thi hinh anh san pham 
function sanPhamDisplaying() {
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
            <div>
                <select id="quantityButton" class="quantitySelector-${product.id}">
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
                <button class="nutDatHang" id="nutDatHang" data-product-id="${product.id}"> Thêm vào Giỏ Hàng</button>
            </div>
        
    </div>`
});



document.querySelector('.products_container').innerHTML = productHTML;
}


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
        alert('Đặt hàng thành công !!');
        luuSanPham();
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
    alert("Cảm ơn phản hồi của bạn, chúng tôi sẽ liên lạc với bạn trong thời gian sớm nhất!");
    return true;
}

// hien thi gio hang


function GioHangDisplaying() {
let gioHangDisplayer = '';

gioHang.forEach((sanPham)=>{
    const productId = sanPham.productId;
    let matchingProduct;

    productItem.forEach((product) => {
        if (productId === product.id)
        {
            matchingProduct = product;
        }
    });
    
    gioHangDisplayer+=
    `
    <div class="row itemCart itemContainer-${matchingProduct.id}">
        <div class="col-lg-4">
            <figure class="figure">
                <img class="figure-img img-fluid rounded" src="${matchingProduct.image}">
            </figure>
        </div>
        <div class="col so luong">
            <h4 class="tieuDe4">${matchingProduct.name}</h4>
            <p>Số lượng: ${sanPham.quantity}</p>
            <p>Đơn giá: ${matchingProduct.price.toLocaleString('vi-VN', {
                style: 'currency',
                currency: 'VND'
            })}</p>
            <button class="deleteButton" data-product-id="${sanPham.productId}">Xóa</button>
        </div>
    </div>
    `;
})

document.querySelector('.itemCartContainer').innerHTML = gioHangDisplayer;

tinhTien();

}

document.querySelectorAll('.deleteButton').forEach((button) => {
    button.addEventListener('click', () => {
        const productId = button.dataset.productId;
        xoaSanPham(productId);
        const container = document.querySelector(`.itemContainer-${productId}`);
        container.remove();
        console.log(gioHang);
    })
})

function xoaSanPham(productId) {
    let gioHangMoi =  [];

    gioHang.forEach((sanPham) => {
        if (sanPham.productId !== productId)
        {
            gioHangMoi.push(sanPham);
        }
    })
    
    gioHang = gioHangMoi;
    window.location.reload(1);
    luuSanPham();
    
}

function luuSanPham()
{
    localStorage.setItem('gioHang', JSON.stringify(gioHang));
}

function timSanPham(productId)
{
    let sanPhamCanTim;

    productItem.forEach((product)=> {
        if(product.id === productId)
        {
            sanPhamCanTim = product;
        }
    })

    return sanPhamCanTim;
}

function tinhTien()
{
    let totalPrice = 0;
    gioHang.forEach((sanPham) => {
        let product = timSanPham(sanPham.productId);
        totalPrice += product.price * sanPham.quantity;
    })

    document.querySelector('.tongThanhTien').innerHTML += totalPrice.toLocaleString('vi-VN', {
        style: 'currency',
        currency: 'VND'
    });
    if (gioHang.length === 0)
    {
        document.querySelector('.tongDonHang').innerHTML += ' ';
    } else {
        document.querySelector('.tongDonHang').innerHTML += Number(totalPrice+320000).toLocaleString('vi-VN', {
            style: 'currency',
            currency: 'VND'
        });
    }
    
}

let signUpForm = document.getElementById("signUpForm");
function signup() {
  let username = document.getElementById("username");
  let password = document.getElementById("password");
  let email = document.getElementById("email");
  let errorMessage = document.getElementById("error-message");
  let emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (emailReg.test(email.value) == false) {
    errorMessage.textContent = "Vui lòng nhập đúng địa chỉ email!";
    errorMessage.style.display = "block";
    return false;
  }
  if (username.value.length === 0) {
    errorMessage.textContent = "Vui lòng nhập tên đăng nhập";
    errorMessage.style.display = "block";
    return false;
  }
  if (typeof localStorage[username.value] !== "undefined") {
    errorMessage.textContent = "Vui lòng nhập tên đăng nhập khác!";
    errorMessage.style.display = "block";
    return false;
  }
  if (password.value.length == 0) {
    errorMessage.textContent = "Vui lòng nhập mật khẩu!";
    errorMessage.style.display = "block";
    return false;
  }
  window.localStorage.setItem(username.value, password.value);
  alert("Tạo tài khoản thành công.");
  return true;
}
function checkAccount() {
  let username = document.getElementById("username");
  let password = document.getElementById("password");
  let errorMessage = document.getElementById("error-message");

  if (
    typeof localStorage[username.value] !== "undefined" &&
    window.localStorage.getItem(username.value) == password.value
  ) {
    alert("Đăng nhập thành công, chào mừng " + username.value);
    window.localStorage.setItem("loginSuccesful", username.value);
    return true;
  }
  errorMessage.textContent =
    "Vui lòng kiểm tra lại tên đăng nhập hoặc mật khẩu!";
  errorMessage.style.display = "block";
  return false;
}
function logout() {
  window.localStorage.removeItem("loginSuccesful");
  alert("Đăng xuất thành công!");
  window.location.reload();
}
if (
  typeof localStorage["loginSuccesful"] !== "undefined" &&
  window.localStorage.getItem("loginSuccesful") != 0
) {
  let signup = document.getElementById("signup");
  let login = document.getElementById("login");
  login.remove();
  signup.remove();
  let nav = document.querySelector("nav");
  let cart = document.createElement("a");
  cart.href = "./giohang.html";
  cart.innerHTML = "Giỏ hàng";
  nav.appendChild(cart);
  let logout = document.createElement("a");
  logout.href = "./trangchu.html";
  logout.setAttribute("onclick", "logout()");
  logout.innerHTML = "Đăng xuất";
  nav.appendChild(logout);
}

function datHang() {
    if (gioHang.length <= 0)
    {
        alert('Vui lòng thêm sản phẩm trước khi đặt !');
        window.location.href = "sanpham.html";
    } 
    else {
        alert('Đặt hàng thành công !');
        localStorage.removeItem('gioHang');
        window.location.href = "trangchu.html";
    }
    
}