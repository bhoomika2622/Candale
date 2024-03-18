
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
}

window.addEventListener('load', function () {
    updateCartCount();
    window.addEventListener('pageshow', updateCartCount);
});



// 28---39---->from shaped.html
document.getElementById('28').addEventListener('click', function() {
    addToCart(28);
});

document.getElementById('28-1').addEventListener('click', function() {
    addToCart(28);
});

document.getElementById('29').addEventListener('click', function() {
    addToCart(29);
});
document.getElementById('29-1').addEventListener('click', function() {
    addToCart(29);
});

document.getElementById('30').addEventListener('click', function() {
    addToCart(30);
});
document.getElementById('30-1').addEventListener('click', function() {
    addToCart(30);
});

document.getElementById('31').addEventListener('click', function() {
    addToCart(31);
});
document.getElementById('31-1').addEventListener('click', function() {
    addToCart(31);
});

document.getElementById('32').addEventListener('click', function() {
    addToCart(32);
});
document.getElementById('32-1').addEventListener('click', function() {
    addToCart(32);
});

document.getElementById('33').addEventListener('click', function() {
    addToCart(33);
});
document.getElementById('33-1').addEventListener('click', function() {
    addToCart(33);
});

document.getElementById('34').addEventListener('click', function() {
    addToCart(34);
});
document.getElementById('34-1').addEventListener('click', function() {
    addToCart(34);
});

document.getElementById('35').addEventListener('click', function() {
    addToCart(35);
});
document.getElementById('35-1').addEventListener('click', function() {
    addToCart(35);
});

document.getElementById('36').addEventListener('click', function() {
    addToCart(36);
});
document.getElementById('36-1').addEventListener('click', function() {
    addToCart(36);
});

document.getElementById('37').addEventListener('click', function() {
    addToCart(37);
});
document.getElementById('37-1').addEventListener('click', function() {
    addToCart(37);
});


document.getElementById('38').addEventListener('click', function() {
    addToCart(38);
});
document.getElementById('38-1').addEventListener('click', function() {
    addToCart(38);
});

document.getElementById('39').addEventListener('click', function() {
    addToCart(39);
});
document.getElementById('39-1').addEventListener('click', function() {
    addToCart(39);
});

