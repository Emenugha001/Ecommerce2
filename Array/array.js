let root = document.querySelector(".root")
const product = [
    {
        id:0,
        image:'images/image-brownie-desktop.jpg',
        title:'Brownies',
        tite:'Salted Caramel Brownies',
        price:200,
        thumbnail:'images/image-brownie-thumbnail.jpg',
        input:'<input type="number" value="1" class="cart-quantity"></input>',
    },
    {
        id:1,
        image:'images/image-cake-desktop.jpg',
        title:'Cake',
        tite:'Red Velvet Cake',
        price:200,
        thumbnail:'images/image-cake-thumbnail.jpg'

    },
    {
        id:2,
        image:'images/joy.jpg',
        title:'Creme Brulee',
        tite:'Vanilla Beans Creme Brulee',
        price:200,
        thumbnail:'images/joynail.jpg',
    },
    {
        id:3,
        image:'images/image-macaron-desktop.jpg',
        title:'Macaron',
        tite:'Macaron mix of five',
        price:200,
        thumbnail:'images/image-macaron-thumbnail.jpg'
    },
    {
        id:4,
        image:'images/image-baklava-desktop.jpg',
        title:'Baklava',
        tite:'Pistachio Baklava',
        price:200,
        thumbnail:'images/image-baklava-thumbnail.jpg'
    },
    {
        id:5,
        image:'images/image-meringue-desktop.jpg',
        title:'Pie',
        tite:'Lemon Meringue Pie',
        price:200,
        thumbnail:'images/image-meringue-thumbnail.jpg'
    },
    {
        id:6,
        image:'images/good.jpg',
        title:'Panna Cotta',
        tite:'Vanilla PAnna Cotta',
        price:200,
        thumbnail:'images/goodnail.jpg'
    },
    {
        id:7,
        image:'images/image-waffle-desktop.jpg',
        title:'Waffles',
        tite:'Waffles With Berries',
        thumbnail:'images/image-waffle-thumbnail.jpg',
        price:200,
    },
    {
        id:8,
        image:'images/image-tiramisu-desktop.jpg',
        title:'Tiramisu',
        tite:'Classic Tiramisu',
        price:200,
        thumbnail:'images/image-tiramisu-thumbnail.jpg'
    }
]

//add to cart
const categories =[...new Set(product.map((item)=>
    {return item}))]
    let i=0;
    console.log(categories)
    let html = "";
categories.forEach((e, index) => {
    html +=  `<div class='box'>
     <div class='img-box'>
     <img class='images' src=${e.image}></img>
    </div>
     <div class='bottom'>
     <p>${e.title}</p>
     <h3>${e.tite}</h3>
     <h2>$${e.price}.00</h2>` +
     "<button onclick='addtocart("+(i++)+")'> Add to cart </button>" + 
     `</div>
     </div>`
})

root.innerHTML = html


// `<div class='box'>
// <div class='img-box'>
// <img class='images' src=${image}></img>
// </div>
// <div class='bottom'>
// <p>${title}</p>
// <h2>$${price}.00</h2>` +
// "<button onclick='addtocart("+(i++)+")'> Add to cart </button>" + 
// `</div>
// </div>`

let cart=[];


//function addtocart(a){
  //cart.push({...categories[a]});
    //displaycart();
//}
function addtocart(a) {
    // Check if the item is already in the cart by its id
    const existingItem = cart.find(item => item.id === categories[a].id);

    // If the item is already in the cart, show an alert and don't add it again
    if (existingItem) {
        alert("This item is already in your cart.");
    } else {
        // If the item is not in the cart, add it
        cart.push({...categories[a]});
        displaycart(); // Re-display the cart to reflect the changes
    }
    //buy button work
    document.getElementsByClassName("btn-buy")[0].addEventListener('click',buyButtonClicked)
}

//buy button
//also empty cart
//function buyButtonClicked(){
   // alert("Your order is placed");
    //console.log()
    //let cartItem = document.getElementsByClassName("cartItem")[0];
   // while (cartItem.hasChildNodes()) {
     //   cartItem.removeChild(cartItem.firstChild);
    //}
    //updateTotal();
//}


function buyButtonClicked() {
    let cartItemsContainer = document.getElementById("cartItem");

    if (!cartItemsContainer) {
        console.error("Cart container not found!");
        return; // Stop execution if the element is missing
    }

    if (cartItemsContainer.hasChildNodes()) {
        cartItemsContainer.innerHTML = ""; // Empty the cart
        cart = []; // Reset the cart array
        updateTotal(); // Update total to 0
        alert("Thank you for your purchase!");
    }
}


//Remove items from cart
function removeCartItem(event) {
    let buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateTotal();
}

function ready() {
    // Remove items from cart
    let removeCartButtons = document.getElementsByClassName("cart-remove");
    for (let i = 0; i < removeCartButtons.length; i++) {
        let button = removeCartButtons[i];
        button.addEventListener("click", removeCartItem);
    }
}
function delElement(a){
    cart.splice(a,1);
    displaycart()
}
//function displaycart(a){
    //let j = 0; total=0;
    //if (cart.length==0){
      //  document.getElementById('cartItem').innerHTML = "Your cart is empty";
        //document.getElementById('total').innerHTML ="$" + 0 +".00";
    //}
   // else{
     //   document.getElementById("cartItem").innerHTML = cart.map((items) =>
       // {
         //   let {thumbnail,title,price,input} = items;
            
           // total=total+price;
            //document.getElementById("total").innerHTML = "$" + total +".00";
            //return(
              //  `<div class='cart-item'>
                //<div class='row-img'>
                //<img class = 'rowing' src =${thumbnail}>
                //</div>
                //<p style = 'font-size:12px;'>${title}</p>
                ///<input type="number" value="1" class="cart-quantity">
                //<h2 style =font-size:15px;'>$ ${price}.00</h2>
                //` +
                //"<i class ='fa-solid fa-trash' onclick='delElement("+(j++)+")'></i></div>"
           // );
        //}).join('');
   // }
//}

function displaycart() {
    let j = 0;

    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById('total').innerHTML = "$0.00";
    } else {
        document.getElementById("cartItem").innerHTML = cart.map((item, index) => {
            let { thumbnail, title, price } = item;
            
            return `
                <div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowing' src='${thumbnail}'>
                    </div>
                    <h2 style='font-size:15px;'>$${price}.00</h2>
                    <p style='font-size:12px;'>${title}</p>
                    <input type="number" value="1" class="cart-quantity" id="quantity-${index}" min="1" onchange="updateTotal()">
                    
                    <i class='fa-solid fa-trash' onclick='delElement(${index})'></i>
                </div>`;
        }).join('');

        updateTotal(); // Update total whenever the cart is displayed
    }
}

// Function to update the total price dynamically
function updateTotal() {
    let total = 0;
    let quantities = document.querySelectorAll(".cart-quantity");

    cart.forEach((item, index) => {
        let quantityElement = quantities[index];
        let quantity = quantityElement ? parseInt(quantityElement.value) || 1 : 1;
        total += item.price * quantity; // Multiply price by quantity
    });

    document.getElementById("total").innerHTML = "$" + total.toFixed(2);
}

