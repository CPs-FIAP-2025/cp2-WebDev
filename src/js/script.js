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

// Função para verificar entrada de texto
function verificarTexto(campo) { 
    let valor = prompt(`Digite o ${campo} do Vinho:`); 
    while (valor === "" || valor === null || !isNaN(valor)) { 
        valor = prompt(`Inválido, tente novamente. Digite o ${campo} do Vinho (somente texto):`);
    }
    alert(`${valor}, informação cadastrada com sucesso`);
    return valor;
}

// Função para verificar entrada de números
function verificarNumeros(campo) { 
    let valor = prompt(`Digite o ${campo} do Vinho:`); 
    while (valor === "" || valor === null || isNaN(valor)) { 
        valor = prompt(`Inválido, tente novamente. Digite o ${campo} do Vinho (somente números):`);
    }
    alert(`${valor}, número cadastrado com sucesso`);
    return Number(valor); // convertendo para número
}



