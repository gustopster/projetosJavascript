function fechamento() {
    //Informações indexadas pelo Usuário (INICIO)
    const porcentagem = document.getElementById("garcon").value || 0;
    const valorJantar = document.getElementById("jantar").value || 0;
    const valorJantarFormatado = parseFloat(valorJantar);
    const porcentagemFormatado = parseFloat(porcentagem);
    const taxaGarçon = ((porcentagemFormatado / 100) * valorJantarFormatado);
    const horario = new Date().toLocaleString();
    const total = valorJantarFormatado + taxaGarçon;
    //Informações indexadas pelo Usuário (FINAL)
    //Criando Paragrafos com as informações
    let ul = document.createElement("ul");
    ul.setAttribute('class', 'list-group list-group-flush text-center');
    let lista = document.createTextNode(`Total:`);
    ul.appendChild(lista);
    let janta = document.createElement("li");
    janta.setAttribute('class', 'list-group-item text-center');
    let conteudoNovo = document.createTextNode(`Valor do Jantar: R$ ${valorJantarFormatado.toFixed(2)}`);
    janta.appendChild(conteudoNovo);
    let garcon = document.createElement("li");
    garcon.setAttribute('class', 'list-group-item text-center');
    conteudoNovo = document.createTextNode(`Taxa do Garçon (${porcentagemFormatado.toFixed(2)}%): R$ ${taxaGarçon.toFixed(2)}`);
    garcon.appendChild(conteudoNovo);
    let pagar = document.createElement("li");
    pagar.setAttribute('class', 'list-group-item text-center');
    conteudoNovo = document.createTextNode(`Total a Pagar: R$ ${total.toFixed(2)} (Horário ${horario})`);
    pagar.appendChild(conteudoNovo);
    //Criar Elementos no HTML
    let listaUm = document.getElementById("");
    document.body.insertBefore(ul, listaUm);
    let pUm = document.getElementById("");
    document.body.insertBefore(janta, pUm);
    let pDois = document.getElementById("");
    document.body.insertBefore(garcon, pDois);
    let pTres = document.getElementById("");
    document.body.insertBefore(pagar, pTres);
    //Criando Botão para Recarregar a Página (Por padrão a página ficará disponivel por 5 Segundos)
    const inputTempo = document.getElementById("temporizador").value;
    const temporizador = parseFloat(inputTempo);
    const traduzirTempoUsuario = (temporizador * 1000);
    document.getElementById("limpar")
    setTimeout(function () {
        window.location.reload();
    }, traduzirTempoUsuario || 5000)
};

