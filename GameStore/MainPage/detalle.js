const gameId = new URLSearchParams(window.location.search).get('id');
const game = games.find(g => g.id === parseInt(gameId));

if (game) {
  const detailDiv = document.getElementById('game-detail');

  const platforms = game.platforms.join(", ");
  const stars = '★'.repeat(Math.round(game.rating)) + '☆'.repeat(5 - Math.round(game.rating));

  detailDiv.innerHTML = `
    <div class="col-md-5">
      <img src="${game.image}" alt="${game.title}" class="img-fluid">
      <p class="mt-2"><strong>Plataformas:</strong> ${platforms}</p>
      <p class="stars">${stars}</p>
    </div>
    <div class="col-md-7">
      <h2>${game.title}</h2>
      <p><strong>Precio:</strong> $${game.price}</p>
      <p><strong>Descripción:</strong> ${game.description}</p>
      <div class="mb-3">
        <strong>Trailer:</strong><br>
        <iframe width="100%" height="315" src="${game.trailer}" frameborder="0" allowfullscreen></iframe>
      </div>
      <h5>Reseñas</h5>
      ${game.reviews.map(r => `<div class="review"><strong>${r.name}</strong>: ${r.text}</div>`).join("")}
    </div>
  `;
} else {
  document.getElementById('game-detail').innerHTML = "<p>Juego no encontrado.</p>";
}
