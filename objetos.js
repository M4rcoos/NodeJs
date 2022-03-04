let pais = {
  nome: "Brasil",
  capital: "Brasilia",
  nacionalidade: function () {
    return "sou do " + this.nome;
  },
};
let carro = {
  marca: "fiat",
  modelo: "uno",
};
function carro (valorMarca, valorModelo){
  this.marca = valorMarca;
  this.modelo = valorModelo;
}
console.log(carro);
console.log(new carro("renult", "clio"));
