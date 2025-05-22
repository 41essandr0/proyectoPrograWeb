document.querySelectorAll('.btn-success').forEach(button => {
  button.addEventListener('click', () => {
    const gameId = parseInt(button.getAttribute("data-id"));
    const game = games.find(g => g.id === gameId);

    if (!game) {
      alert("Juego no encontrado.");
      return;
    }

    const cart = getCart();
    const alreadyInCart = cart.some(item => item.id === game.id);

    if (alreadyInCart) {
      alert(`${game.title} ya está en el carrito.`);
    } else {
      cart.push({ id: game.id, title: game.title });
      setCart(cart);
      alert(`${game.title} agregado al carrito.`);
    }
  });
});