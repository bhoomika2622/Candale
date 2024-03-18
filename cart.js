// Function to display cart items
function displayCartItems() {
    var cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = ''; 

    var cartData = JSON.parse(localStorage.getItem('cart')) || {};
    for (var productId in cartData) {
        var quantity = cartData[productId];

        
        productId = parseInt(productId);
        
        var productDetails = getProductDetails(productId);
        var productImage=productDetails.image;
        var productName = productDetails.name;
        var productPrice = productDetails.price;
        var itemHTML = `<div class="cart-item-data">
        <div class="cart-item-image"> 
        <img src="${productImage}.jpg" alt="">
        </div>
        <div class="cart-item-name">~${productName}~
        </div>
        <div class="cart-item-price">${productPrice}
        </div>
        <div class="cart-item-quantity">
            <button class="sub-quan" onclick="updateQuantity(${productId}, -1)">-</button> ${quantity}
            <button class="add-quan" onclick="updateQuantity(${productId}, 1)">+</button>
        </div>
        <div class="cart-item-totalprice">Total~${productPrice*quantity}
        </div>
        </div>`;
        cartItemsDiv.innerHTML += itemHTML;
    }
}


window.addEventListener('load', displayCartItems);



function applyCoupon() {
    var couponInput = document.getElementById('couponInput');
    var couponValidDiv = document.querySelector('.coupon-valid');
    var valDiv = document.querySelector('.val');
    var totalValue = calculateTotalValue();
    if (couponInput.value.toLowerCase() === 'welcome22') {
        
        var discount = 0.1 * totalValue;

        couponValidDiv.innerHTML = `Coupon is valid! You get a 10% discount: -Rs.${discount.toFixed(2)}`;
        valDiv.textContent = `C``ovTOTAL PRODUCT VALUE: Rs.${(totalValue - discount).toFixed(2)}`;
    } else {
        couponValidDiv.textContent = 'Coupon is not valid.';
        
        valDiv.textContent = `TOTAL PRODUCT VALUE: Rs.${totalValue.toFixed(2)}`;
    }
}
function displayTotalValue() {
    var totalValueDiv = document.querySelector('.val');
    var totalValue = calculateTotalValue();
    totalValueDiv.textContent = `TOTAL PRODUCT VALUE: Rs.${totalValue.toFixed(2)}`;
}


window.addEventListener('load', function() {
    displayTotalValue();
});
function calculateTotalValue() {
    
    var cartData = JSON.parse(localStorage.getItem('cart')) || {};
    var totalValue = 0;

    for (var productId in cartData) {
        var quantity = cartData[productId];
        var productDetails = getProductDetails(parseInt(productId));
        totalValue += productDetails.price * quantity;
    }

    return totalValue;
}



function updateQuantity(productId, quantityChange) {
    var cartData = JSON.parse(localStorage.getItem('cart')) || {};

    // Update quantity
    cartData[productId] = (cartData[productId] || 0) + quantityChange;

    // Remove item if quantity is zero
    if (cartData[productId] <= 0) {
        delete cartData[productId];
    }

    // Save updated cart data
    localStorage.setItem('cart', JSON.stringify(cartData));

    // Update the displayed cart items
    displayCartItems();
    // Update the total value display
    applyCoupon();
    displayTotalValue();
}

var products = [
    { id: 1, name: "DAYDREAM", price: 899, image: "scentedcandles/daydream" },
    { id: 2, name: "NIGHTDREAM", price: 999, image: "scentedcandles/nightdream"},
    { id: 3, name: "VANILA GREY CANDLE", price: 799, image: "scentedcandles/vanilagrey"},
    { id: 4, name: "DAYDREAM FRESHVIBE", price: 899, image: "scentedcandles/freshvibe" },
    { id: 5, name: "FRESH CHANDAN", price: 2999, image: "scentedcandles/chandan"},
    { id: 6, name: "OCEAN BREEZE", price: 1199, image: "scentedcandles/ocean"},
    { id: 7, name: "VANILA COFFEE", price: 1499, image: "scentedcandles/coffee" },
    { id: 8, name: "SCENTED DELIGHT", price: 1999, image: "scentedcandles/delight"},
    { id: 9, name: "AROMA FRESH", price: 1299, image: "scentedcandles/aroma"},
    { id: 10, name: "WHITE PEARL", price: 799, image: "scentedcandles/pearl" },
    { id: 11, name: "MILKY WAY", price: 999, image: "scentedcandles/milky"},
    { id: 12, name: "TAFFY PINK", price: 1099, image: "scentedcandles/pinky"},

    { id: 13, name: "SOFT WAX JASMINE", price: 999, image: "softwax"},
    { id: 14, name: "EARTHY GLOW MILKY", price: 1999, image: "earthyglow"},
    { id: 15, name: "DAYDREAM YELLOW VIBE", price: 2999, image: "yellowdaydream"},

    { id: 16, name: "EARTHY GLOW", price: 2999, image: "gift/earthy" },
    { id: 17, name: "LUSTRE HUT JAR", price: 1999, image: "gift/hut"},
    { id: 18, name: "MACARON SET", price: 2599, image: "gift/set"},
    { id: 19, name: "PEACH SACRED", price: 1499, image: "gift/peach" },
    { id: 20, name: "ABDITORY SET", price: 1699, image: "gift/abditory"},
    { id: 21, name: "MODERN MATTE GLASS JARS", price: 1999, image: "gift/modern"},
    { id: 22, name: "FLOWER BLOSSOM", price: 1299, image: "gift/flower" },
    { id: 23, name: "PURE LOVE", price: 1399, image: "gift/love"},
    { id: 24, name: "VORY ROYAL PILLAR", price: 1499, image: "gift/royal"},
    { id: 25, name: "CRYSTAL ENERGY", price: 1199, image: "gift/crystal" },
    { id: 26, name: "THE ILLUME SANDELWOOD ", price: 1899, image: "gift/sandalwood"},
    { id: 27, name: "COCONUT BOWL", price: 999, image: "gift/bowl"},

    { id: 28, name: "MINI ROSE", price: 899, image: "shaped/mini" },
    { id: 29, name: "SANDALWOOD AND INSENSE COINS", price: 1699, image: "shaped/coins"},
    { id: 30, name: "DESERT LOVE", price: 799, image: "shaped/derest"},
    { id: 31, name: "CERMIC JAR", price: 1099, image: "shaped/cermic" },
    { id: 32, name: "COMBO PILLAR AND TEDDY", price: 899, image: "shaped/combo"},
    { id: 33, name: "TWIN-TEDDY", price: 799, image: "shaped/twinsteddy"},
    { id: 34, name: "HEAT ROOF JAR", price: 999, image: "shaped/heat" },
    { id: 35, name: "TWIN-CARTOON", price: 1299, image: "shaped/cartoon"},
    { id: 36, name: "COOL-COLMIC JAR", price: 1199, image: "shaped/colmic"},
    { id: 37, name: "GREEN LALTEN JAR", price: 1799, image: "shaped/green" },
    { id: 38, name: "SCENTED STICK HOUSE", price: 1599, image: "shaped/house"},
    { id: 39, name: "SHANTI SET", price: 1999, image: "shaped/shanti"}

   
];
function getProductDetails(productId) {
    
    var product = products.find(product => product.id === productId);
    if (product) {
        return { name: product.name, price: product.price,image: product.image };
    } else {
        console.error('Product with ID', productId, 'not found.');
        return { name: 'Unknown', price: 0 }; 
    }
}


function addToCart(productId) {
    var cartData = JSON.parse(localStorage.getItem('cart')) || {};
    cartData[productId] = (cartData[productId] || 0) + 1;
    localStorage.setItem('cart', JSON.stringify(cartData));

    // Update cart count in the header
    updateCartCount();
}
 