
function addToCart(productId) {
    var cartData = JSON.parse(localStorage.getItem('cart')) || {}; 
    cartData[productId] = (cartData[productId] || 0) + 1; 
    localStorage.setItem('cart', JSON.stringify(cartData)); 

   
    updateCartCount();
}

function updateCartCount() {
    var cartData = JSON.parse(localStorage.getItem('cart')) || {};
    var totalCount = Object.values(cartData).reduce((total, count) => total + count, 0);

    var cartCountElement = document.querySelector('.hmburger3 span');
    cartCountElement.textContent = totalCount; 

window.addEventListener('load', function () {
    updateCartCount();

    window.addEventListener('pageshow', updateCartCount);
});
}


// 1----12--->from scented.html
document.getElementById('1').addEventListener('click', function() {
    addToCart(1);
});

document.getElementById('1-1').addEventListener('click', function() {
    addToCart(1);
});

document.getElementById('2').addEventListener('click', function() {
    addToCart(2);
});
document.getElementById('2-1').addEventListener('click', function() {
    addToCart(2);
});

document.getElementById('3').addEventListener('click', function() {
    addToCart(3);
});
document.getElementById('3-1').addEventListener('click', function() {
    addToCart(3);
});

document.getElementById('4').addEventListener('click', function() {
    addToCart(4);
});
document.getElementById('4-1').addEventListener('click', function() {
    addToCart(4);
});

document.getElementById('5').addEventListener('click', function() {
    addToCart(5);
});
document.getElementById('5-1').addEventListener('click', function() {
    addToCart(5);
});

document.getElementById('6').addEventListener('click', function() {
    addToCart(6);
});
document.getElementById('6-1').addEventListener('click', function() {
    addToCart(6);
});

document.getElementById('7').addEventListener('click', function() {
    addToCart(7);
});
document.getElementById('7-1').addEventListener('click', function() {
    addToCart(7);
});

document.getElementById('8').addEventListener('click', function() {
    addToCart(8);
});
document.getElementById('8-1').addEventListener('click', function() {
    addToCart(8);
});

document.getElementById('9').addEventListener('click', function() {
    addToCart(9);
});
document.getElementById('9-1').addEventListener('click', function() {
    addToCart(9);
});

document.getElementById('10').addEventListener('click', function() {
    addToCart(10);
});
document.getElementById('10-1').addEventListener('click', function() {
    addToCart(10);
});


document.getElementById('11').addEventListener('click', function() {
    addToCart(11);
});
document.getElementById('11-1').addEventListener('click', function() {
    addToCart(11);
});

document.getElementById('12').addEventListener('click', function() {
    addToCart(12);
});
document.getElementById('12-1').addEventListener('click', function() {
    addToCart(12);
});

