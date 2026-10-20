const lista = document.querySelector("#listaProdutos");
const inputFiltro = document.querySelector("#filtroProduto");
const msg = document.querySelector("#mensagemFiltro");
const ordenacao = document.querySelector("#ordenacao");
const filtroCategoria = document.querySelector("#filtroCategoria");

function renderizar() {
  if (!lista) return;
  const termo = (inputFiltro?.value || "").trim().toLowerCase();
  const cat = filtroCategoria?.value || "";
  const ord = ordenacao?.value || "";
  let itens = PRODUTOS.filter(p => {
    const nomeOk = p.nome.toLowerCase().includes(termo) || p.categoria.toLowerCase().includes(termo);
    const catOk = !cat || p.categoria === cat;
    return nomeOk && catOk;
  });
  if (ord === "nome") itens.sort((a,b)=>a.nome.localeCompare(b.nome));
  if (ord === "preco") itens.sort((a,b)=>a.preco-b.preco);

  lista.innerHTML = itens.map(p => `
    <article class="col-sm-6 col-lg-4 product-item" data-name="${p.nome}">
      <div class="card h-100 product-card">
        <div class="product-illustration" aria-hidden="true">${p.imagem}</div>
        <div class="card-body">
          <p class="small text-secondary mb-1">${p.categoria}</p>
          <h3 class="h5">${p.nome}</h3>
          <p>${p.descricaoCurta}</p>
          <p class="price">${formatarPreco(p.preco)}</p>
          <a class="btn btn-dark" href="produto.html?id=${p.id}">Ver detalhes</a>
        </div>
      </div>
    </article>
  `).join("");

  if (!termo && !cat) { msg.textContent = ""; return; }
  msg.textContent = itens.length === 0 ? "Nenhum produto encontrado." : `${itens.length} produto(s) encontrado(s).`;
}

// popular categorias
if (filtroCategoria) {
  const cats = [...new Set(PRODUTOS.map(p=>p.categoria))];
  cats.forEach(c => { const o = document.createElement("option"); o.value=c; o.textContent=c; filtroCategoria.appendChild(o); });
}

[inputFiltro, ordenacao, filtroCategoria].forEach(el => el?.addEventListener("input", renderizar));
renderizar();
