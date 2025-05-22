document.getElementById("checkout-form").addEventListener("submit", function(e) {
    e.preventDefault();
    setCart([]);
    window.location.href = "/Shop/purchase.html";
  });