// ===========================
// GASPAR IMPORTADOS — SCRIPT 
// ===========================

const products = [
  { name: "Asad Lattafa 100ml", price: "R$ 219,99", category: "Perfumes Árabes", tag: "Fragrância intensa e marcante", img: "assets/asad-lattafa.png.png", brand: "Lattafa" },
  { name: "Club de Nuit 100ml", price: "R$ 299,99", category: "Perfumes Árabes", tag: "Elegância intensa e moderna", img: "assets/club-de-nuit.png.png", brand: "Armaf" },
  { name: "Yara Rosa 100ml", price: "R$ 219,99", category: "Perfumes Árabes", tag: "Doce, feminino e envolvente", img: "assets/yara-rosa.png.png", brand: "Lattafa" },
  { name: "Good Girl", price: "R$ 699,99", category: "Perfumes Importados", tag: "Sofisticação feminina marcante", img: "assets/good-girl.png.png", brand: "Carolina Herrera" },
  { name: "iPhone 17 Pro Max 256GB Orange Lacrado", price: "R$ 8.400,00", category: "Smartphones", tag: "Aparelho lacrado sob consulta", img: "assets/17-pro-max-256-orange.png.png", brand: "Apple" },
  { name: "iPhone 17 Pro Max 256GB Silver Lacrado", price: "R$ 8.600,00", category: "Smartphones", tag: "Aparelho lacrado sob consulta", img: "assets/17-pro-max-256-silver.png.png", brand: "Apple" },
  { name: "5 Halas Black EDP 100ml", price: "R$ 299,99", category: "Perfumes Árabes", tag: "Presença forte e sofisticada", img: "assets/halas-black.png.png", brand: "Al Haramain" },
  { name: "Armaf Odyssey Mandarin Sky EDP", price: "R$ 318,99", category: "Perfumes Árabes", tag: "Fragrância moderna e exclusiva", img: "assets/odyssey-mandarin.png.png", brand: "Armaf" },
  { name: "Club de Nuit Woman 105ml", price: "R$ 299,99", category: "Perfumes Árabes", tag: "Elegância feminina", img: "assets/club-de-nuit-woman.png.png", brand: "Armaf" },
  { name: "Yara Candy 100ml", price: "R$ 219,99", category: "Perfumes Árabes", tag: "Doce, jovem e envolvente", img: "assets/yara-candy.png.png", brand: "Lattafa" },
  { name: "Durrat Al Aroos EDP 85ml", price: "R$ 199,99", category: "Perfumes Árabes", tag: "Delicado e sofisticado", img: "assets/durrat-al-aroos.png.png", brand: "Lattafa" },
  { name: "Eclaire EDP 100ml", price: "R$ 215,99", category: "Perfumes Árabes", tag: "Doçura cremosa e elegante", img: "assets/eclaire.png.png", brand: "Lattafa" },
  { name: "Khamrah Lattafa EDP", price: "R$ 249,99", category: "Perfumes Árabes", tag: "Quente, envolvente e marcante", img: "assets/khamrah.png.png", brand: "Lattafa" },
  { name: "Yara Moi Branco EDP 100ml", price: "R$ 219,99", category: "Perfumes Árabes", tag: "Feminino e elegante", img: "assets/yara-moi-branco.png.png", brand: "Lattafa" },
  { name: "Yara Tous Amarelo EDP 100ml", price: "R$ 219,99", category: "Perfumes Árabes", tag: "Vibrante e sofisticado", img: "assets/yara-tous-amarelo.png.png", brand: "Lattafa" },
  { name: "Pride Of Lattafa Fakhar Black", price: "R$ 199,99", category: "Perfumes Árabes", tag: "Assinatura masculina marcante", img: "assets/fakhar-black.png.png", brand: "Lattafa" },
  { name: "Rasasi Hawas For Him", price: "R$ 214,99", category: "Perfumes Árabes", tag: "Fresco, intenso e desejado", img: "assets/rasasi-hawas.png.png", brand: "Rasasi" },
  { name: "Sabah Al Ward EDP 100ml", price: "R$ 169,99", category: "Perfumes Árabes", tag: "Floral, elegante e feminino", img: "assets/sabah-al-ward.png.png", brand: "Lattafa" },
  { name: "The Kingdom 100ml", price: "R$ 299,99", category: "Perfumes Árabes", tag: "Presença real e sofisticada", img: "assets/the-kingdom.png.png", brand: "Armaf" },
  { name: "212 VIP 80ml", price: "R$ 799,99", category: "Perfumes Importados", tag: "Estilo urbano e exclusivo", img: "assets/212-vip.png.png", brand: "Carolina Herrera" },
  { name: "Armani Acqua di Gio Parfum 100ml", price: "R$ 749,99", category: "Perfumes Importados", tag: "Elegância aquática masculina", img: "assets/armani-acqua-di-gio.png.png", brand: "Armani" },
  { name: "Azzaro Wanted EDP 100ml", price: "R$ 599,99", category: "Perfumes Importados", tag: "Intenso e sedutor", img: "assets/azzaro-wanted.png.png", brand: "Azzaro" },
  { name: "Dolce & Gabbana The King Fem EDP 100ml", price: "R$ 599,99", category: "Perfumes Importados", tag: "Elegância feminina", img: "assets/the-king-fem.png.png", brand: "D&G" },
  { name: "Dolce & Gabbana The One Gold 100ml", price: "R$ 699,99", category: "Perfumes Importados", tag: "Luxo em forma de fragrância", img: "assets/the-one-gold.png.png", brand: "D&G" },
  { name: "Dolce & Gabbana The King EDP 100ml", price: "R$ 649,99", category: "Perfumes Importados", tag: "Presença masculina sofisticada", img: "assets/the-king-edp.png.png", brand: "D&G" },
  { name: "Gabrielle Chanel EDP 100ml", price: "R$ 1.299,99", category: "Perfumes Importados", tag: "Clássico feminino de alto padrão", img: "assets/gabrielle-chanel.png.png", brand: "Chanel" },
  { name: "Hidratante Angel 200ml", price: "R$ 499,99", category: "Perfumes Importados", tag: "Cuidado sofisticado", img: "assets/hidratante-angel.png.png", brand: "Mugler" },
  { name: "Prada Paradoxe 100ml EDT", price: "R$ 589,99", category: "Perfumes Importados", tag: "Fresco, moderno e elegante", img: "assets/prada-paradoxe.png.png", brand: "Prada" },
  { name: "Dolce & Gabbana Light Blue 80ml", price: "R$ 549,99", category: "Perfumes Importados", tag: "Leveza mediterrânea", img: "assets/light-blue.png.png", brand: "D&G" },
  { name: "Diannah Pour Femme", price: "R$ 199,99", category: "Perfumes Árabes", tag: "Feminino, delicado e envolvente", img: "assets/diannah-vurv.png", brand: "VÜRV" },
  { name: "Enora Rouge", price: "R$ 219,99", category: "Perfumes Árabes", tag: "Intenso, floral e marcante", img: "assets/enora-vurv.jpg", brand: "VÜRV" },
  { name: "Invoke", price: "R$ 199,99", category: "Perfumes Árabes", tag: "Moderno, fresco e sedutor", img: "assets/invoke-vurv.png", brand: "VÜRV" },
  { name: "La Bellezza", price: "R$ 199,99", category: "Perfumes Árabes", tag: "Floral e envolvente para a mulher moderna", img: "assets/la-bellezza-vurv.png", brand: "VÜRV" },
  { name: "Salvage Elixir", price: "R$ 219,99", category: "Perfumes Árabes", tag: "Intenso e misterioso. Um elixir que marca presença onde quer que você vá.", img: "assets/salvage-elixir-vurv.png", brand: "VÜRV" },
  { name: "Dareful Pour Homme", price: "R$ 219,99", category: "Perfumes Árabes", tag: "Ousado e sofisticado. Para homens que não passam despercebidos.", img: "assets/dareful-vurv.png", brand: "VÜRV" },
  { name: "Cuir Ébène", price: "R$ 165,00", category: "Perfumes Árabes", tag: "Couro negro e madeiras raras. Uma fragrância de presença inegável.", img: "assets/cuir-ebene-vurv.png", brand: "VÜRV" },
  { name: "Xiaomi Power Bank 10000mAh", price: "R$ 249,99", category: "Acessórios", tag: "Power Bank Xiaomi 10000mAh com cabo integrado USB-C, saída dupla USB-A + USB-C e segurança avançada.", img: "assets/xiaomi-power-bank.png", brand: "Xiaomi" }
];

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
      <img class="product-image" src="${product.img}" alt="${product.name}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
      <div class="product-image-placeholder" style="display:none;">G</div>
      <div class="product-body">
        <div class="product-meta">
          <span class="product-category">${product.category}</span>
          ${product.brand ? `<span class="product-brand">${product.brand}</span>` : ''}
        </div>
        <h3 class="product-name">${product.name}</h3>
        <p class="product-tag">${product.tag}</p>
        <div class="product-footer">
          <span class="product-price">${product.price}</span>
          <a class="product-btn" href="${waLink}" target="_blank">Consultar</a>
        </div>
      </div>`;
    grid.appendChild(card);
  });
}

document.querySelectorAll(".cat").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".cat").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderProducts(btn.dataset.category);
  });
});

// LIGHTBOX
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');

function openLightbox(src, alt) {
  lightboxImg.src = src;
  lightboxImg.alt = alt;
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

document.getElementById('productsGrid').addEventListener('click', e => {
  const img = e.target.closest('.product-image');
  if (img) openLightbox(img.src, img.alt);
});

document.getElementById('lightboxClose').addEventListener('click', closeLightbox);

lightbox.addEventListener('click', e => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLightbox();
});

document.querySelectorAll(".cat-card").forEach(card => {
  card.addEventListener("click", () => {
    const filter = card.dataset.filter;
    document.getElementById("colecao").scrollIntoView({ behavior: "smooth" });
    document.querySelectorAll(".cat").forEach(b => {
      b.classList.toggle("active", b.dataset.category === filter);
    });
    renderProducts(filter);
  });
});

const topbar = document.getElementById("topbar");
window.addEventListener("scroll", () => {
  topbar.classList.toggle("scrolled", window.scrollY > 60);
}, { passive: true });

renderProducts();
