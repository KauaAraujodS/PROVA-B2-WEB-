function enviar(event) {
    event.preventDefault();

    var nome = event.target.nome.value;
    var matricula = event.target.matricula.value;
    var nota1 = parseFloat(event.target['nota 1'].value);
    var nota2 = parseFloat(event.target['nota 2'].value);

    if (!nome ||!matricula || isNaN(nota1) || isNaN(nota2)) {
        alert("Insira os valores obrigatórios!");
        return;
    }

    var aluno = { nome, matricula, nota1, nota2 };

    var media = (nota1 + nota2) / 2;

    var tr = document.createElement("tr");
    var td_nome = document.createElement("td");
    td_nome.innerHTML = nome;
    var td_matricula = document.createElement("td");
    td_matricula.innerHTML = matricula;
    var td_nota1 = document.createElement("td");
    td_nota1.innerHTML = nota1;
    var td_nota2 = document.createElement("td");
    td_nota2.innerHTML = nota2;
    var td_media = document.createElement("td");
    td_media.innerHTML = media.toFixed(2);
    var td_situacao = document.createElement("td");

    if (media > 5) {
        td_media.style.backgroundColor = "green";
        td_situacao.innerHTML = "Aprovada(o)";
    } else {
        td_media.style.backgroundColor = "red";
        td_situacao.innerHTML = "Reprovada(o)";
    }

    tr.appendChild(td_nome);
    tr.appendChild(td_matricula);
    tr.appendChild(td_nota1);
    tr.appendChild(td_nota2);
    tr.appendChild(td_media);
    tr.appendChild(td_situacao);

    document.querySelector("tbody").appendChild(tr);

    localStorage.setItem("aluno", JSON.stringify(aluno));
}