const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));
const produto = PRODUTOS.find(p => p.id === id);
const container = document.querySelector("#produtoContainer");
const breadcrumb = document.querySelector("#breadcrumb");
const feedback = document.querySelector("#produtoFeedback");

if (!produto) {
  container.innerHTML = `<div class="text-center py-5"><h1>Produto não encontrado</h1><p>O item solicitado não existe.</p><a class="btn btn-dark" href="index.html">Voltar à vitrine</a></div>`;
} else {
  breadcrumb.innerHTML = `<li class="breadcrumb-item"><a href="index.html">Produtos</a></li><li class="breadcrumb-item active" aria-current="page">${produto.nome}</li>`;
  container.innerHTML = `
    <article class="row g-5 align-items-start">
      <div class="col-lg-6">
        <div class="product-detail-illustration" role="img" aria-label="${produto.nome}">${produto.imagem}</div>
      </div>
      <div class="col-lg-6">
        <p class="eyebrow">${produto.categoria} · ${produto.regra}</p>
        <h1>${produto.nome}</h1>
        <p class="lead">${produto.descricaoLonga}</p>
        <p class="price price-large">${formatarPreco(produto.preco)}</p>
        <section aria-labelledby="titulo-detalhes" class="mb-4">
          <h2 id="titulo-detalhes" class="h4">Detalhes</h2>
          <ul>
            <li>Material: ${produto.material}</li>
            <li>Dimensões: ${produto.dimensoes}</li>
            <li>Modo de uso: ${produto.uso}</li>
          </ul>
        </section>
        <form id="formProduto">
          <div class="mb-3">
            <label for="quantidade" class="form-label">Quantidade</label>
            <input class="form-control quantity-field" id="quantidade" name="quantidade" type="number" min="1" max="10" value="1" required>
          </div>
          <button class="btn btn-dark btn-lg" type="submit">Comprar agora</button>
        </form>
      </div>
    </article>
  `;
  const form = document.querySelector("#formProduto");
  const quantidade = document.querySelector("#quantidade");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const q = Number(quantidade.value);
    if (q < 1 || q > 10) { feedback.textContent = "Escolha uma quantidade entre 1 e 10."; quantidade.focus(); return; }
    sessionStorage.setItem("produtoId", String(produto.id));
    sessionStorage.setItem("quantidade", String(q));
    window.location.href = "checkout.html";
  });
}
