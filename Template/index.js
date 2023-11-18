document.addEventListener("DOMContentLoaded", () => {
    const cart = document.getElementById('cart');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    let total = 0;

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const item = this.closest('.item');
            const title = item.querySelector('h2').innerText;
            const price = parseFloat(item.querySelector('.price').innerText.replace('$', '').replace('.', ''));

            const listItem = document.createElement('li');
            listItem.innerText = `${title} - $${price}`;
            cartItems.appendChild(listItem);

            total += price;
            cartTotal.innerText = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(total);
        });
    });

    // Función para mostrar el carrito
    function toggleCart() {
        cart.style.transform = cart.style.transform === 'translateX(0%)' ? 'translateX(100%)' : 'translateX(0%)';
    }

    // Evento para mostrar/ocultar el carrito
    document.querySelector('.icon-cart').addEventListener('click', toggleCart);
});
