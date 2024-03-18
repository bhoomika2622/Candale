
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



// 16---27---->from gift.html
document.getElementById('16').addEventListener('click', function() {
    addToCart(16);
});

document.getElementById('16-1').addEventListener('click', function() {
    addToCart(16);
});

document.getElementById('17').addEventListener('click', function() {
    addToCart(17);
});
document.getElementById('17-1').addEventListener('click', function() {
    addToCart(17);
});

document.getElementById('18').addEventListener('click', function() {
    addToCart(18);
});
document.getElementById('18-1').addEventListener('click', function() {
    addToCart(18);
});

document.getElementById('19').addEventListener('click', function() {
    addToCart(19);
});
document.getElementById('19-1').addEventListener('click', function() {
    addToCart(19);
});

document.getElementById('20').addEventListener('click', function() {
    addToCart(20);
});
document.getElementById('20-1').addEventListener('click', function() {
    addToCart(20);
});

document.getElementById('21').addEventListener('click', function() {
    addToCart(21);
});
document.getElementById('21-1').addEventListener('click', function() {
    addToCart(21);
});

document.getElementById('22').addEventListener('click', function() {
    addToCart(22);
});
document.getElementById('22-1').addEventListener('click', function() {
    addToCart(22);
});

document.getElementById('23').addEventListener('click', function() {
    addToCart(23);
});
document.getElementById('23-1').addEventListener('click', function() {
    addToCart(23);
});

document.getElementById('24').addEventListener('click', function() {
    addToCart(24);
});
document.getElementById('24-1').addEventListener('click', function() {
    addToCart(24);
});

document.getElementById('25').addEventListener('click', function() {
    addToCart(25);
});
document.getElementById('25-1').addEventListener('click', function() {
    addToCart(25);
});


document.getElementById('26').addEventListener('click', function() {
    addToCart(26);
});
document.getElementById('26-1').addEventListener('click', function() {
    addToCart(26);
});

document.getElementById('27').addEventListener('click', function() {
    addToCart(27);
});
document.getElementById('27-1').addEventListener('click', function() {
    addToCart(27);
});

