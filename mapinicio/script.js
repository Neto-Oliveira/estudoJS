
const frutas = new Map();

frutas.set("maçãs", 500);
frutas.set("bananas", 300);
frutas.set("laranjas", 200);

function mostrarQuantidade() {
  let quantidade = frutas.get("laranjas");
  document.getElementById("demo").innerHTML = 
    `Temos ${quantidade} laranjas no estoque.`;
}

function adicionarFruta() {
  frutas.set("morangos", 150);
  document.getElementById("demo").innerHTML = 
    "Morangos adicionados! Total de frutas: " + frutas.size;
}

function verificarFruta() {
  let temMaca = frutas.has("maçãs");
  document.getElementById("demo").innerHTML = 
    `Tem maçãs no estoque? ${temMaca ? "SIM" : "NÃO"}`;
}