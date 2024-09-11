const Zoologico = require('./zoologico');
const Animais = require('./animais');

class RecintosZoo {
  constructor() {
    this.zoologico = new Zoologico();
  }

  analisaRecintos(animal, quantidade) {
    const especie = Animais[animal];
    
    if (!especie) {
      return { erro: "Animal inválido" };
    }

    if (quantidade <= 0 || !Number.isInteger(quantidade)) {
      return { erro: "Quantidade inválida" };
    }

    const recintosViaveis = this.zoologico.encontrarRecintosViaveis(especie, quantidade);

    if (recintosViaveis.length === 0) {
      return { erro: "Não há recinto viável" };
    }

    return {
      recintosViaveis: recintosViaveis.map(
        recinto => `Recinto ${recinto.numero} (espaço livre: ${recinto.espacoLivre} total: ${recinto.tamanhoTotal})`
      )
    };
  }
}

module.exports = RecintosZoo;
