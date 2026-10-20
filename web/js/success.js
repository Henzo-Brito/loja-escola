const mensagemCliente = document.querySelector("#mensagemCliente");
const numeroPedido = document.querySelector("#numeroPedido");
const ok = sessionStorage.getItem("compraOk");
if (!ok) {
  window.location.href = "index.html";
} else {
  const nome = sessionStorage.getItem("clienteNome");
  const pedido = sessionStorage.getItem("pedidoNumero");
  if (nome) mensagemCliente.textContent = `${nome}, sua compra simulada foi concluída.`;
  if (pedido) numeroPedido.textContent = pedido;
  sessionStorage.removeItem("compraOk");
}
