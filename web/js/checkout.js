const form = document.querySelector("#checkoutForm");
const cepInput = document.querySelector("#cep");
const buscarCepButton = document.querySelector("#buscarCep");
const cepFeedback = document.querySelector("#cepFeedback");
const resumoItens = document.querySelector("#resumoItens");
const totalResumo = document.querySelector("#totalResumo");

function somenteNumeros(v){return v.replace(/\D/g,"");}
function formatarCep(v){const n=somenteNumeros(v).slice(0,8); if(n.length<=5) return n; return `${n.slice(0,5)}-${n.slice(5)}`;}
function cepValido(cep){return somenteNumeros(cep).length===8;}

// resumo
const pid = Number(sessionStorage.getItem("produtoId"));
const q = Number(sessionStorage.getItem("quantidade")||1);
const produto = PRODUTOS.find(p=>p.id===pid) || PRODUTOS[0];
const total = produto.preco * q;
resumoItens.innerHTML = `<div class="d-flex justify-content-between"><span>${produto.nome} x${q}</span><span>${formatarPreco(total)}</span></div><div class="d-flex justify-content-between mt-2"><span>Frete</span><span>Grátis</span></div>`;
totalResumo.textContent = formatarPreco(total);

cepInput?.addEventListener("input", ()=>{ cepInput.value = formatarCep(cepInput.value); });
buscarCepButton?.addEventListener("click", async ()=>{
  const cep = somenteNumeros(cepInput.value);
  if (cep.length !== 8){ cepFeedback.textContent="CEP deve ter 8 dígitos."; return; }
  cepFeedback.textContent="Buscando...";
  try {
    const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    if(!res.ok) throw new Error("falha");
    const data = await res.json();
    if(data.erro){ cepFeedback.textContent="CEP não encontrado."; return; }
    document.querySelector("#logradouro").value = data.logradouro || "";
    document.querySelector("#bairro").value = data.bairro || "";
    document.querySelector("#cidade").value = data.localidade || "";
    document.querySelector("#estado").value = data.uf || "";
    cepFeedback.textContent="Endereço preenchido.";
  } catch {
    cepFeedback.textContent="Falha na consulta. Tente novamente.";
  }
});

form?.addEventListener("submit", (e)=>{
  e.preventDefault();
  cepInput.setCustomValidity(cepValido(cepInput.value)?"":"CEP inválido");
  if(!form.checkValidity()){ form.classList.add("was-validated"); form.querySelector(":invalid")?.focus(); return; }
  const nome = document.querySelector("#nome").value.trim();
  sessionStorage.setItem("clienteNome", nome);
  sessionStorage.setItem("pedidoNumero", `PED-${Math.floor(100000+Math.random()*900000)}`);
  sessionStorage.setItem("compraOk", "1");
  window.location.href = "sucesso.html";
});
