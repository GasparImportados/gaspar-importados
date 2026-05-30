const WHATSAPP = "5571993570820";
const productsGrid = document.getElementById("productsGrid");
const cats = document.querySelectorAll(".cat");
function whatsappLink(product){
  const msg = `Olá, vi o produto ${product.name} no site da Gaspar Importados e gostaria de consultar disponibilidade.`;
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
}
function productCard(product){
  return `<article class="product" data-category="${product.category}">
    <span class="catlabel">${product.category}</span>
    <h3>${product.name}</h3>
    <p class="tag">${product.tag || "Produto selecionado pela Gaspar Importados"}</p>
    <div class="price">${product.price}</div>
    <div class="infos">
      <span>🔒 Produto original</span>
      <span>🚚 Prazo médio de entrega: até 7 dias</span>
      <span>📦 Disponível sob consulta</span>
    </div>
    <a target="_blank" href="${whatsappLink(product)}">Consultar disponibilidade</a>
  </article>`;
}
async function loadProducts(category = "Todos"){
  const res = await fetch("products.json");
  const products = await res.json();
  const filtered = category === "Todos" ? products : products.filter(p => p.category === category);
  productsGrid.innerHTML = filtered.map(productCard).join("");
}
cats.forEach(btn => btn.addEventListener("click", () => {
  cats.forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  loadProducts(btn.dataset.category);
}));
loadProducts();
