// ===========================
// GASPAR IMPORTADOS — SCRIPT
// ===========================

// --- PRODUCTS DATA ---
const products = [
  { name: "Asad Lattafa 100ml", price: "R$ 219,99", category: "Perfumes Árabes", tag: "Fragrância intensa e marcante", search: "Lattafa Asad perfume bottle" },
  { name: "Club de Nuit 100ml", price: "R$ 299,99", category: "Perfumes Árabes", tag: "Elegância intensa e moderna", search: "Club de Nuit Armaf perfume bottle" },
  { name: "Yara Rosa 100ml", price: "R$ 199,99", category: "Perfumes Árabes", tag: "Doce, feminino e envolvente", search: "Yara Lattafa perfume bottle pink" },
  { name: "Good Girl", price: "R$ 699,99", category: "Perfumes Importados", tag: "Sofisticação feminina marcante", search: "Carolina Herrera Good Girl perfume bottle" },
  { name: "iPhone 17 Pro Max 256GB Orange Lacrado", price: "R$ 8.400,00", category: "Aparelhos", tag: "Aparelho lacrado sob consulta", search: "iPhone 17 Pro Max orange titanium" },
  { name: "iPhone 17 Pro Max 256GB Silver Lacrado", price: "R$ 8.600,00", category: "Aparelhos", tag: "Aparelho lacrado sob consulta", search: "iPhone 17 Pro Max silver titanium" },
  { name: "5 Halas Black EDP 100ml", price: "R$ 299,99", category: "Perfumes Árabes", tag: "Presença forte e sofisticada", search: "Halas Black Arabic perfume bottle" },
  { name: "Armaf Odyssey Mandarin Sky EDP", price: "R$ 318,99", category: "Perfumes Árabes", tag: "Fragrância moderna e exclusiva", search: "Armaf Odyssey perfume bottle" },
  { name: "Club de Nuit Woman 105ml", price: "R$ 299,99", category: "Perfumes Árabes", tag: "Elegância feminina", search: "Club de Nuit Woman perfume bottle" },
  { name: "Yara Candy 100ml", price: "R$ 199,99", category: "Perfumes Árabes", tag: "Doce, jovem e envolvente", search: "Yara Candy Lattafa perfume bottle" },
  { name: "Durrat Al Aroos EDP 85ml", price: "R$ 199,99", category: "Perfumes Árabes", tag: "Delicado e sofisticado", search: "Durrat Al Aroos Arabic perfume" },
  { name: "Eclaire EDP 100ml", price: "R$ 215,99", category: "Perfumes Árabes", tag: "Doçura cremosa e elegante", search: "Eclaire Lattafa perfume bottle" },
  { name: "Khamrah Lattafa EDP", price: "R$ 249,99", category: "Perfumes Árabes", tag: "Quente, envolvente e marcante", search: "Khamrah Lattafa perfume bottle" },
  { name: "Yara Moi Branco EDP 100ml", price: "R$ 199,99", category: "Perfumes Árabes", tag: "Feminino e elegante", search: "Yara Moi Lattafa perfume white" },
  { name: "Yara Tous Amarelo EDP 100ml", price: "R$ 199,99", category: "Perfumes Árabes", tag: "Vibrante e sofisticado", search: "Yara Tous Lattafa perfume yellow" },
  { name: "Pride Of Lattafa Fakhar Black", price: "R$ 199,99", category: "Perfumes Árabes", tag: "Assinatura masculina marcante", search: "Lattafa Fakhar Black perfume" },
  { name: "Rasasi Hawas For Him", price: "R$ 214,99", category: "Perfumes Árabes", tag: "Fresco, intenso e desejado", search: "Rasasi Hawas perfume bottle" },
  { name: "Sabah Al Ward EDP 100ml", price: "R$ 169,99", category: "Perfumes Árabes", tag: "Floral, elegante e feminino", search: "Sabah Al Ward Arabic perfume floral" },
  { name: "The Kingdom 100ml", price: "R$ 299,99", category: "Perfumes Árabes", tag: "Presença real e sofisticada", search: "The Kingdom Arabic perfume luxury" },
  { name: "212 VIP 80ml", price: "R$ 799,99", category: "Perfumes Importados", tag: "Estilo urbano e exclusivo", search: "Carolina Herrera 212 VIP perfume bottle" },
  { name: "Armani Acqua di Gio Parfum 100ml", price: "R$ 749,99", category: "Perfumes Importados", tag: "Elegância aquática masculina", search: "Acqua di Gio Parfum Giorgio Armani" },
  { name: "Azzaro Wanted EDP 100ml", price: "R$ 599,99", category: "Perfumes Importados", tag: "Intenso e sedutor", search: "Azzaro Wanted EDP perfume" },
  { name: "Dolce & Gabbana The King Fem EDP 100ml", price: "R$ 599,99", category: "Perfumes Importados", tag: "Elegância feminina", search: "Dolce Gabbana The One Queen perfume" },
  { name: "Dolce & Gabbana The One Gold 100ml", price: "R$ 699,99", category: "Perfumes Importados", tag: "Luxo em forma de fragrância", search: "Dolce Gabbana The One Gold perfume" },
  { name: "Dolce & Gabbana The King EDP 100ml", price: "R$ 649,99", category: "Perfumes Importados", tag: "Presença masculina sofisticada", search: "Dolce Gabbana The One King perfume" },
  { name: "Gabrielle Chanel EDP 100ml", price: "R$ 1.299,99", category: "Perfumes Importados", tag: "Clássico feminino de alto padrão", search: "Chanel Gabrielle EDP perfume bottle" },
  { name: "Hidratante Angel 200ml", price: "R$ 499,99", category: "Perfumes Importados", tag: "Cuidado sofisticado", search: "Thierry Mugler Angel body lotion" },
  { name: "Prada Paradoxe 100ml EDT", price: "R$ 589,99", category: "Perfumes Importados", tag: "Fresco, moderno e elegante", search: "Prada Paradoxe perfume bottle" },
  { name: "Dolce & Gabbana Light Blue 80ml", price: "R$ 549,99", category: "Perfumes Importados", tag: "Leveza mediterrânea", search: "Dolce Gabbana Light Blue perfume" },
  { name: "Carregador Turbo 68W", price: "R$ 49,99", category: "Acessórios", tag: "Mais velocidade para sua rotina", search: "USB-C turbo charger 68W technology" }
];

// --- IMAGE CACHE (usando Unsplash Source para busca por palavras-chave) ---
// Usamos imagens do Unsplash via keywords por categoria
const categoryImages = {
  "Perfumes Árabes": [
    "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=400&fit=crop&q=80",
    "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=400&h=400&fit=crop&q=80",
    "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400&h=400&fit=crop&q=80",
    "https://images.unsplash.com/photo-1541643600914-78b084683702?w=400&h=400&fit=crop&q=80",
    "https://images.unsplash.com/photo-1616604426203-b5e66b60c1e4?w=400&h=400&fit=crop&q=80",
    "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=400&h=400&fit=crop&q=80",
    "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?w=400&h=400&fit=crop&q=80",
    "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400&h=400&fit=crop&q=80",
  ],
  "Perfumes Importados": [
    "https://images.unsplash.com/photo-1590156206657-aec7e6a401e2?w=400&h=400&fit=crop&q=80",
    "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?w=400&h=400&fit=crop&q=80",
    "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?w=400&h=400&fit=crop&q=80",
    "https://images.unsplash.com/photo-1601295148100-6b6ef5c4ce8c?w=400&h=400&fit=crop&q=80",
    "https://images.unsplash.com/photo-1575467678930-c7acd65d6470?w=400&h=400&fit=crop&q=80",
    "https://images.unsplash.com/photo-1617897903246-719242758050?w=400&h=400&fit=crop&q=80",
    "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=400&fit=crop&q=80",
    "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop&q=80",
  ],
  "Aparelhos": [
    "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=400&h=400&fit=crop&q=80",
    "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=400&fit=crop&q=80",
  ],
  "Acessórios": [
    "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400&h=400&fit=crop&q=80",
    "https://images.unsplash.com/photo-1526406915894-7bcd65f60845?w=400&h=400&fit=crop&q=80",
  ]
};

// Counter para variar imagens por categoria
const imgCounters = {};

function getImageForProduct(product) {
  const cat = product.category;
  const imgs = categoryImages[cat] || categoryImages["Perfumes Árabes"];
  if (!imgCounters[cat]) imgCounters[cat] = 0;
  const img = imgs[imgCounters[cat] % imgs.length];
  imgCounters[cat]++;
  return img;
}

// --- RENDER PRODUCTS ---
function renderProducts(filter = "Todos") {
  const grid = document.getElementById("productsGrid");
  grid.innerHTML = "";

  const filtered = filter === "Todos" ? products : products.filter(p => p.category === filter);

  filtered.forEach((product, i) => {
    const waMsg = encodeURIComponent(`Olá! Tenho interesse no produto: *${product.name}* (${product.price}). Pode confirmar disponibilidade?`);
    const waLink = `https://wa.me/5571993570820?text=${waMsg}`;
    const imgSrc = getImageForProduct(product);

    const card = document.createElement("div");
    card.className = "product-card";
    card.style.animationDelay = `${i * 0.04}s`;

    card.innerHTML = `
      <img 
        class="product-image" 
        src="${imgSrc}" 
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
    // Reset image counters on filter change
    Object.keys(imgCounters).forEach(k => imgCounters[k] = 0);
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
