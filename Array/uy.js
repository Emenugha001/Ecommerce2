let root = document.querySelector(".root")
const product = [
    {
        id:0,
        image:'images/image-brownie-desktop.jpg',
        title:'Waffles',
        tite:'waffles',
        price:200,
        thumbnail:'images/image-brownie-thumbnail.jpg',
        input:'<input type="number" value="1" class="cart-quantity"></input>',
    },
    {
        id:1,
        image:'images/image-cake-desktop.jpg',
        title:'Waffles',
        tite:'tite',
        price:200,
        thumbnail:'images/image-cake-thumbnail.jpg'

    },
    {
        id:2,
        image:'images/joy.jpg',
        title:'Waffles',
        tite:'waffles',
        price:200,
        thumbnail:'images/joynail.jpg',
    },
    {
        id:3,
        image:'images/image-macaron-desktop.jpg',
        title:'Waffles',
        tite:'tite',
        price:200,
        thumbnail:'images/image-macaron-thumbnail.jpg'
    },
    {
        id:4,
        image:'images/image-baklava-desktop.jpg',
        title:'Waffles',
        tite:'waffles',
        price:200,
        thumbnail:'images/image-baklava-thumbnail.jpg'
    },
    {
        id:5,
        image:'images/image-meringue-desktop.jpg',
        title:'Waffles',
        tite:'waffles',
        price:200,
        thumbnail:'images/image-meringue-thumbnail.jpg'
    },
    {
        id:6,
        image:'images/good.jpg',
        title:'Waffles',
        tite:'waffles',
        price:200,
        thumbnail:'images/goodnail.jpg'
    },
    {
        id:7,
        image:'images/image-waffle-desktop.jpg',
        title:'Waffles',
        tite:'waffles',
        thumbnail:'images/image-waffle-thumbnail.jpg',
        price:200,
    },
    {
        id:8,
        image:'images/image-tiramisu-desktop.jpg',
        title:'Waffles',
        tite:'waffles',
        price:200,
        thumbnail:'images/image-tiramisu-thumbnail.jpg'
    }
]



function displaycart() {
    let j = 0;
    let total = 0;

    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById('total').innerHTML = "$0.00";
    } else {
        document.getElementById("cartItem").innerHTML = cart.map((items, index) => {
            let { thumbnail, title, price } = items;

            // Creating quantity input properly
            let inputId = `quantity-${index}`;
            return (
                `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowing' src='${thumbnail}'>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <input type="number" value="1" class="cart-quantity" id="${inputId}" onchange="updateTotal()">
                    <h2 style='font-size:15px;'>$${price}.00</h2>
                    <i class='fa-solid fa-trash' onclick='delElement(${index})'></i>
                </div>`
            );
        }).join('');

        // Update total price
        updateTotal();
    }
}

// Function to update the total price
function updateTotal() {
    let total = 0;
    cart.forEach((item, index) => {
        let quantityElement = document.getElementById(`quantity-${index}`);
        let quantity = quantityElement ? parseInt(quantityElement.value) || 1 : 1;
        total += item.price * quantity;
    });

    document.getElementById("total").innerHTML = "$" + total.toFixed(2);
}
