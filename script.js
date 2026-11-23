
let cartCount = 0;

let buttons = document.querySelectorAll(".product button");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        cartCount++;
        document.getElementById("cart-count").textContent = cartCount;
        alert("Product Added to Cart! 🛒");
    });
});
