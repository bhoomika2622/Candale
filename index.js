
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



// 13---15 index.html
document.getElementById('13').addEventListener('click', function() {
    addToCart(13);
});
document.getElementById('13-1').addEventListener('click', function() {
    addToCart(13);
});

document.getElementById('14').addEventListener('click', function() {
    addToCart(14);
});
document.getElementById('14-1').addEventListener('click', function() {
    addToCart(14);
});

document.getElementById('15').addEventListener('click', function() {
    addToCart(15);
});
document.getElementById('15-1').addEventListener('click', function() {
    addToCart(15);
});