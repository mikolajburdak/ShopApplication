document.addEventListener("DOMContentLoaded", () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    const container = document.getElementById("order-summary");
    if (cart.length === 0) {
        container.innerHTML = "<p>Brak danych zamówienia.</p>";
        return;
    }

    let total = 0;
    const list = document.createElement("ul");

    cart.forEach(item => {
        const itemTotal = (item.price.main * 100 + item.price.fractional) * item.quantity;
        total += itemTotal;

        const li = document.createElement("li");
        li.textContent = `${item.name} – ${item.quantity} szt. – ${(itemTotal / 100).toFixed(2)} zł`;
        list.appendChild(li);
    });

    container.appendChild(list);

    const totalP = document.createElement("p");
    totalP.innerHTML = `<strong>Łączna kwota: ${(total / 100).toFixed(2)} zł</strong>`;
    container.appendChild(totalP);

    localStorage.removeItem("cart");
});