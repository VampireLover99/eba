function rodarExercicios() {
    let saida = document.getElementById("saida");
    saida.textContent = ""; // limpar antes de rodar

    // Passo 1 – Declarando variáveis
    var nomeCantina = "Cantina da Escola";
    console.log("Bem-vindo à " + nomeCantina);
    saida.textContent += "Bem-vindo à " + nomeCantina + "\n";

    let salgados = 20;
    console.log("Temos " + salgados + " salgados disponíveis.");
    saida.textContent += "Temos " + salgados + " salgados disponíveis.\n";

    const precoSalgado = 5;
    console.log("Cada salgado custa R$" + precoSalgado);
    saida.textContent += "Cada salgado custa R$" + precoSalgado + "\n";

    // Passo 2 – Atualizando valores
    salgados = salgados - 5;
    let totalVendido = 5 * precoSalgado;

    console.log("Agora restam " + salgados + " salgados.");
    saida.textContent += "Agora restam " + salgados + " salgados.\n";

    console.log("A cantina vendeu R$" + totalVendido);
    saida.textContent += "A cantina vendeu R$" + totalVendido + "\n";

    // Passo 3 – Teste rápido
    try {
        precoSalgado = 6; // Isso gera erro!
    } catch (erro) {
        console.log("Erro ao tentar mudar precoSalgado:", erro.message);
        saida.textContent += "Erro ao tentar mudar precoSalgado: " + erro.message + "\n";
    }

    if (true) {
        var testeVar = "Sou var";
        let testeLet = "Sou let";
        console.log(testeVar); 
        console.log(testeLet);
        saida.textContent += testeVar + "\n";
        saida.textContent += testeLet + "\n";
    }

    console.log(testeVar); // funciona
    saida.textContent += testeVar + " (fora do bloco)\n";

    try {
        console.log(testeLet); // dá erro
        saida.textContent += testeLet + " (fora do bloco)\n";
    } catch (erro) {
        console.log("Erro com testeLet:", erro.message);
        saida.textContent += "Erro com testeLet: " + erro.message + "\n";
    }
}
