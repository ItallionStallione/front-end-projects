var addItems=[];
var numberOfItems = 0;
var itemsTotal= 0;
var grandTotal = 0;
var deliveryCharge = 25;
var handlingCharge = 4;

//cart functionality
var cartModal= document.querySelector('#cartModal');
var cartButton = document.querySelector('#cart-btn');
var closeBtn = document.querySelector('.close');
var proceedbox = document.querySelector('#proceedBox');

//if(cartItemsContainer){
//    cartItemsContainer.innerHTML="";
//}else {
//    console.log('*** element ID not found***');
//}

console.log('cartModal',cartModal);
//open modal when clicking on cart button.
cartButton.addEventListener('click', function () {
    cartModal.style.display = 'flex';
    displayCartItems(addItems);
});

closeBtn.addEventListener('click', function () {
    cartModal.style.display = 'none';
});

//close modal when clicking on outside modal
window.addEventListener('click', function (event) {
    if (event.target == cartModal){
        cartModal.style.display = 'none';
    }
});

var modalTpl = `
                    <div class='cart-container'>
                        <div class='cart-box-one'>
                            <div class='box-one-top'>
                                <div class='timer-image'>
                                    <img class='cart-timer-logo-img' src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png' alt='logo-timer'>
                                </div>
                                <div class='text-box-one'>
                                    <p style>Delivery in 8 mins</p>
                                    <p>Shipment of ${numberOfItems} item</p>
                                </div>
                            </div>
                            <div class='box-one-bottom'>
                                
                            </div>
                        </div>
                        <div class='cart-box-two'>
                            <div class='charge-box-one'>
                                    <p>Bill Details</p>
                                </div>
                                <div class='charge-box-two'>
                                    <p>Items total</p>
                                    <p>₹${itemsTotal}</p>
                                </div>
                                <div class='charge-box-three'>
                                    <p>Delivery Charge</p>
                                    <p>₹25</p>
                                </div>
                                <div class='charge-box-four'>
                                    <p>Handling Charge</p>
                                    <p>₹4</p>
                                </div>
                                <div class='charge-box-five'>
                                    <p>Grand Total</p>
                                    <p>₹${grandTotal}</p>
                                </div>
                        </div>
                        <div class='cart-box-three'>
                            <div class='box-three-text-one'>
                                <p>Cancellation Policy</p>
                            </div>
                            <div class='box-three-text-two'>
                                <p>Orders cannot be cancelled once packed for delivery. In case of unexpected delays, a refund will be provided, if applicable.</p>
                            </div>
                        </div>
                        
                    </div>
                    
                    `;

document.querySelector('#cartItems').innerHTML += modalTpl;

var proceedTpl = `<div class='cart-box-four'>
                    <div class='box-four-left'>
                        <p>₹${grandTotal}</p>
                        <p>TOTAL</p>
                    </div>
                    <div class='box-four-right'>
                        <p>Proceed</p>
                    </div>
                </div>`;

document.querySelector('.proceed-box').innerHTML += proceedTpl;


var cartItemsContainer = document.querySelector('.box-one-bottom');

console.log("cartItemsContainer : ",cartItemsContainer); 

//to add item to cart
function addToCart(item) {
    
    addItems.push(item);
    updateCartTotals(addItems);
    displayCartItems(addItems);
}

//to update cart totals
function updateCartTotals(addItems) {
    console.log('***inside updateCartTotals()***');
    numberOfItems = addItems.length;
    console.log("numberOfItems :",numberOfItems);
    //nsole.log("item :",item);
    itemsTotal= addItems.reduce((total, item) => total + item.price,0);
    console.log("itemsTotal :",itemsTotal);
    grandTotal = itemsTotal + deliveryCharge + handlingCharge; //calculate final total
    console.log("grandTotal :",grandTotal);
    //update UI with totals values
    document.querySelector('.charge-box-two p:nth-child(2)').textContent = `₹${itemsTotal}`;
    document.querySelector('.charge-box-five p:nth-child(2)').textContent = `₹${grandTotal}`;
    document.querySelector('.box-four-left p:first-child').textContent = `₹${grandTotal}`;
    document.querySelector('.text-box-one p:nth-child(2)').textContent = `Shipment of ${numberOfItems} item`;
    
}

function displayCartItems(addItems){
    console.log("***inside displayCartItems() function***");
    console.log("addItems length = ",addItems.length);
    cartItemsContainer.innerHTML = '';
    if(addItems.length == 0){
        //cartItemsContainer.innerHTML = `<p>Your cart is empty.</p>`;
        proceedBox.style.display = 'none';
        
        return ;
    } else{
    
            addItems.forEach((item, index) => {
                console.log("***inside addItems forEach()***");
                console.log("item :",item);
                let itemElement = document.createElement('div');
                itemElement.classList.add('cart-item');
                itemElement.innerHTML = `
                                        <p>${item.productName} - ₹${item.price}</p>
                                        <button onclick='removeFromCart(${index})'>Remove</button>
                                        `;
                console.log("itemElement :",itemElement);
                cartItemsContainer.appendChild(itemElement);
            });
    }
    proceedBox.style.display = 'flex';
}


//add event listeners to add button
document.querySelectorAll('.add-dbe-item').forEach(button => {
    button.addEventListener('click', function () {
        let category= this.getAttribute('data-category');
        let index = this.getAttribute('data-index');
        console.log("category :",category);
        console.log("index",index);
        let product = categories[category][index];
        console.log('product :', product);
        addToCart(product);
    });
});