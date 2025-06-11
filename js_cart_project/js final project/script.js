const products = [
    { name: "Mahabirpun Bio", image: "mahabir pun.jpg", price: 650 },
    { name: "Flute", image:"flute.jpg", price: 1850 },
    { name: "Headphone", image:"headphones.jpg", price: 550 },

    { name: "Airpods", image:"airpods1.jpg", price: 3000 },
    { name: "flute", image:"images.jpg", price: 1500 },
   
    { name: "Rudane", image:"rudane.jpg", price: 550 },
    { name: "Muna madan", image: "muna madan.jpg", price: 500 },
    
    { name: "Lost_time", image: "lost time.jpg", price: 650 },
    { name: "Jibankadkophul", image: "jibankadakophul.jpg", price: 650 },
    { name: "Harrypotter", image: "harryPotter.jpg", price: 650 },
    // Add more products as needed
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function displayProducts() {
    const productList = document.getElementById('product-list');
    products.forEach((product, index) => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${index})">Add to cart</button>
    `;
        productList.appendChild(productDiv);
    });
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${item.name} - $${item.price.toFixed(2)} x 
            <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)">
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItems.appendChild(li);
        total += item.price * item.quantity;
    });

    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
    document.getElementById('checkout-btn').disabled = cart.length === 0;
    localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(productIndex) {
    const product = products[productIndex];
    const existingItemIndex = cart.findIndex(item => item.name === product.name);

    if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCart();
}

function updateQuantity(index, quantity) {
    cart[index].quantity = parseInt(quantity, 10);
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    updateCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

document.getElementById('checkout-btn').addEventListener('click', () => {
    window.location.href = 'checkout.html';
});

window.onload = () => {
    displayProducts();
    updateCart();
};
