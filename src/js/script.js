var cadastros = 0;
var estoquesBaixos = 0;
var maisVelho = 0;
var nomeVelho = "";

// Função para comparar e classificar o vinho mais velho
function verificarMaisVelho(nome, safra) {
    if (maisVelho === 0 || safra < maisVelho) {
        maisVelho = safra;
        nomeVelho = nome;
    }
}

// Função para verificar estoque
function estoque(quantidade) {
    if (quantidade < 5) {
        alert("Estoque baixo");
        estoquesBaixos += 1;
        console.log("estoque baixo");
    }
}

// Função Classificar vinho por idade
function classificar(safra) {
    if (safra >= 2020) {
        alert("Vinho Jovem");
        console.log("Vinho Jovem");
    }
    else if (safra >= 2015 && safra < 2020) {
        alert("Vinho Amadurecido");
        console.log("Vinho Amadurecido");
    }
    else {
        alert("Vinho Antigo");
        console.log("Vinho Antigo");
    }
}