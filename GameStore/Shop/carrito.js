const cart = getCart();
const container = document.getElementById("cart-container");
const totalEl = document.getElementById("total-price");

let total = 0;

if (cart.length === 0) {
    container.innerHTML = "<p>No hay juegos en tu carrito.</p>";
    document.getElementById("pay-btn").style.display = "none";
} else {
    cart.forEach((item, index) => {
        const game = getGameByTitle(item.title);
        if (!game) return;

        total += game.price;
        container.innerHTML += `
        <div class="cart-card">
          <img src="${game.image}" class="cart-img" />
          <div class="cart-info">
            <h5>${game.title}</h5>
            <p>Precio: $${game.price}</p>
            <button class="btn btn-sm btn-danger" onclick="removeItem(${index})">Eliminar</button>
          </div>
        </div>
      `;
    });
    totalEl.textContent = `Total: $${total.toFixed(2)}`;
}

function removeItem(index) {
    cart.splice(index, 1);
    setCart(cart);
    location.reload();
}