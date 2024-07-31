let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", function() {
    navbar.classList.toggle("active");
});

window.onscroll = () => {
    navbar.classList.remove("active");
};

document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartIcon = document.getElementById('cart-icon');
    const cartContainer = document.getElementById('cart-container');
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');

    // Show/Hide Cart
    cartIcon.addEventListener('click', () => {
        cartContainer.classList.toggle('hidden');
    });

    // Add to Cart Function
    function addToCart(item) {
        const existingItem = cart.find(cartItem => cartItem.name === item.name);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({...item, quantity: 1});
        }
        updateCart();
    }

    // Update Cart Function
    function updateCart() {
        cartItems.innerHTML = '';
        cart.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
            cartItems.appendChild(listItem);
        });
        cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    }

    // Add Event Listeners to Add to Cart Buttons
    document.querySelectorAll('.bx-cart').forEach((button) => {
        button.addEventListener('click', () => {
            const item = {
                name: button.parentElement.querySelector('h2').textContent,
                price: button.parentElement.querySelector('span').textContent.replace('$', '')
            };
            addToCart(item);
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const cartIcons = document.querySelectorAll('.bx-cart');
    const notification = document.getElementById('notification');

    cartIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            notification.classList.remove('hidden');
            setTimeout(() => {
                notification.classList.add('hidden');
            }, 2000); // Hide after 2 seconds
        });
    });
});
