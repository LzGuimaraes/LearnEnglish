const temas = ["Comida", "Viagem", "Esportes", "Trabalho", "Lazer", "Tecnologia"];
const temposVerbais = [
    { nome: "Present Simple", estrutura: "Sujeito + Verbo (base form) + Complemento" },
    { nome: "Present Continuous", estrutura: "Sujeito + am/is/are + Verbo (ing form) + Complemento" },
    { nome: "Present Perfect", estrutura: "Sujeito + have/has + Verbo (past participle) + Complemento" },
    { nome: "Present Perfect Continuous", estrutura: "Sujeito + have/has + been + Verbo (ing form) + Complemento" },
    { nome: "Past Simple", estrutura: "Sujeito + Verbo (past simple) + Complemento" },
    { nome: "Past Continuous", estrutura: "Sujeito + was/were + Verbo (ing form) + Complemento" },
    { nome: "Past Perfect", estrutura: "Sujeito + had + Verbo (past participle) + Complemento" },
    { nome: "Past Perfect Continuous", estrutura: "Sujeito + had + been + Verbo (ing form) + Complemento" },
    { nome: "Future Simple", estrutura: "Sujeito + will + Verbo (base form) + Complemento" },
    { nome: "Future Continuous", estrutura: "Sujeito + will + be + Verbo (ing form) + Complemento" },
    { nome: "Future Perfect", estrutura: "Sujeito + will + have + Verbo (past participle) + Complemento" },
    { nome: "Future Perfect Continuous", estrutura: "Sujeito + will + have + been + Verbo (ing form) + Complemento" }
];

let temaSorteado = "";
let tempoSorteado = null;

function sortearTema() {
    temaSorteado = temas[Math.floor(Math.random() * temas.length)];
    document.getElementById("result").innerText = `Tema: ${temaSorteado}`;
}

function sortearTempoVerbal() {
    tempoSorteado = temposVerbais[Math.floor(Math.random() * temposVerbais.length)];
    document.getElementById("result").innerText = `Tempo Verbal: ${tempoSorteado.nome}`;
}

function mostrarEstrutura() {
    if (tempoSorteado) {
        document.getElementById("result").innerText = `Estrutura: ${tempoSorteado.estrutura}`;
    } else {
        document.getElementById("result").innerText = "Por favor, sorteie um tempo verbal primeiro.";
    }
}