```javascript
// ===========================
// GASPAR IMPORTADOS — SCRIPT
// ===========================

// --- PRODUCTS DATA com imagens reais ---
const products = [
  { name: "Asad Lattafa 100ml", price: "R$ 219,99", category: "Perfumes Árabes", tag: "Fragrância intensa e marcante", img: "ativos/asad-lattafa.png.png" },
  { name: "Club de Nuit 100ml", price: "R$ 299,99", category: "Perfumes Árabes", tag: "Elegância intensa e moderna", img: "ativos/club-de-nuit.png.png" },
  { name: "Yara Rosa 100ml", price: "R$ 199,99", category: "Perfumes Árabes", tag: "Doce, feminino e envolvente", img: "ativos/yara-rosa.png.png" },
  { name: "Good Girl", price: "R$ 699,99", category: "Perfumes Importados", tag: "Sofisticação feminina marcante", img: "ativos/good-girl.png.png" },
  { name: "iPhone 17 Pro Max 256GB Orange Lacrado", price: "R$ 8.400,00", category: "Aparelhos", tag: "Aparelho lacrado sob consulta", img: "ativos/17-pro-max-256-orange.png.png" },
  { name: "iPhone 17 Pro Max 256GB Silver Lacrado", price: "R$ 8.600,00", category: "Aparelhos", tag: "Aparelho lacrado sob consulta", img: "ativos/17-pro-max-256-silver.png.png" },
  { name: "5 Halas Black EDP 100ml", price: "R$ 299,99", category: "Perfumes Árabes", tag: "Presença forte e sofisticada", img: "ativos/halas-black.png.png" },
  { name: "Armaf Odyssey Mandarin Sky EDP", price: "R$ 318,99", category: "Perfumes Árabes", tag: "Fragrância moderna e exclusiva", img: "ativos/odyssey-mandarin.png.png" },
  { name: "Club de Nuit Woman 105ml", price: "R$ 299,99", category: "Perfumes Árabes", tag: "Elegância feminina", img: "ativos/club-de-nuit-woman.png.png" },
  { name: "Yara Candy 100ml", price: "R$ 199,99", category: "Perfumes Árabes", tag: "Doce, jovem e envolvente", img: "ativos/yara-candy.png.png" },
  { name: "Durrat Al Aroos EDP 85ml", price: "R$ 199,99", category: "Perfumes Árabes", tag: "Delicado e sofisticado", img: "ativos/durrat-al-aroos.png.png" },
  { name: "Eclaire EDP 100ml", price: "R$ 215,99", category: "Perfumes Árabes", tag: "Doçura cremosa e elegante", img: "ativos/eclaire.png.png" },
  { name: "Khamrah Lattafa EDP", price: "R$ 249,99", category: "Perfumes Árabes", tag: "Quente, envolvente e marcante", img: "ativos/khamrah.png.png" },
  { name: "Yara Moi Branco EDP 100ml", price: "R$ 199,99", category: "Perfumes Árabes", tag: "Feminino e elegante", img: "ativos/yara-moi-branco.png.png" },
  { name: "Yara Tous Amarelo EDP 100ml", price: "R$ 199,99", category: "Perfumes Árabes", tag: "Vibrante e sofisticado", img: "ativos/yara-tous-amarelo.png.png" },
  { name: "Pride Of Lattafa Fakhar Black", price: "R$ 199,99", category: "Perfumes Árabes", tag: "Assinatura masculina marcante", img: "ativos/fakhar-black.png.png" },
  { name: "Rasasi Hawas For Him", price: "R$ 214,99", category: "Perfumes Árabes", tag: "Fresco, intenso e desejado", img: "ativos/rasasi-hawas.png.png" },
  { name: "Sabah Al Ward EDP 100ml", price: "R$ 169,99", category: "Perfumes Árabes", tag: "Floral, elegante e feminino", img: "ativos/sabah-al-ward.png.png" },
  { name: "The Kingdom 100ml", price: "R$ 299,99", category: "Perfumes Árabes", tag: "Presença real e sofisticada", img: "ativos/the-kingdom.png.png" },
  { name: "212 VIP 80ml", price: "R$ 799,99", category: "Perfumes Importados", tag: "Estilo urbano e exclusivo", img: "ativos/212-vip.png.png" },
  { name: "Armani Acqua di Gio Parfum 100ml", price: "R$ 749,99", category: "Perfumes Importados", tag: "Elegância aquática masculina", img: "ativos/armani-acqua-di-gio.png.png" },
  { name: "Azzaro Wanted EDP 100ml", price: "R$ 599,99", category: "Perfumes Importados", tag: "Intenso e sedutor", img: "ativos/azzaro-wanted.png.png" },
  { name: "Dolce & Gabbana The King Fem EDP 100ml", price: "R$ 599,99", category: "Perfumes Importados", tag: "Elegância feminina", img: "ativos/the-king-fem.png.png" },
  { name: "Dolce & Gabbana The One Gold 100ml", price: "R$ 699,99", category: "Perfumes Importados", tag: "Luxo em forma de fragrância", img: "ativos/the-one-gold.png.png" },
  { name: "Dolce & Gabbana The King EDP 100ml", price: "R$ 649,99", category: "Perfumes Importados", tag: "Presença masculina sofisticada", img: "ativos/the-king-edp.png.png" },
  { name: "Gabrielle Chanel EDP 100ml", price: "R$ 1.299,99", category: "Perfumes Importados", tag: "Clássico feminino de alto padrão", img: "ativos/gabrielle-chanel.png.png" },
  { name: "Hidratante Angel 200ml", price: "R$ 499,99", category: "Perfumes Importados", tag: "Cuidado sofisticado", img: "ativos/hidratante-angel.png.png" },
  { name: "Prada Paradoxe 100ml EDT", price: "R$ 589,99", category: "Perfumes Importados", tag: "Fresco, moderno e elegante", img: "ativos/prada-paradoxe.png.png" },
  { name: "Dolce & Gabbana Light Blue 80ml", price: "R$ 549,99", category: "Perfumes Importados", tag: "Leveza mediterrânea", img: "ativos/light-blue.png.png" },
  { name: "Carregador Turbo 68W", price: "R$ 49,99", category: "Acessórios", tag: "Mais velocidade para sua rotina", img: "ativos/carregador-turbo-68W.png.png" }
];

// --- RENDER PRODUCTS ---
function renderProducts(filter = "Todos") {
  const grid = document.getElementById("productsGrid");
  grid.innerHTML = "";

  const filtered = filter === "Todos" ? products : products.filter(p => p.category === filter);

  filtered.forEach((product, i) => {
    const waMsg = encodeURIComponent(`Olá! Tenho interesse no produto: *${product.name}* (${product.price}). Pode confirmar disponibilidade?`);
    const waLink = `https://wa.me/5571993570820?text=${waMsg}`;

    const card = document.createElement("div");
    card.className = "product-card";
    card.style.animationDelay = `${i * 0.04}s`;

    card.innerHTML = `
      <img 
        class="product-image" 
        src="${product.img}" 
        alt="${product.name}"
        loading="lazy"
        onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
      >
      <div class="product-image-placeholder" style="display:none;">G</div>
      <div class="product-body">
        <span class="product-category">${product.category}</span>
        <h3 class="product-name">${product.name}</h3>
        <p class="product-tag">${product.tag}</p>
        <div class="product-footer">
          <span class="product-price">${product.price}</span>
          <a class="product-btn" href="${waLink}" target="_blank">Consultar</a>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });
}

// --- CATEGORY FILTER ---
document.querySelectorAll(".cat").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".cat").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderProducts(btn.dataset.category);
  });
});

// --- TOPBAR SCROLL EFFECT ---
const topbar = document.getElementById("topbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    topbar.classList.add("scrolled");
  } else {
    topbar.classList.remove("scrolled");
  }
}, { passive: true });

// --- INIT ---
renderProducts();
```
