const temas = ["Comida", "Viagem", "Esportes", "Trabalho", "Lazer", "Tecnologia", "Dia a dia"];
const temposVerbais = [
    {
        nome: "Present Simple",
        estrutura: "Sujeito + Verbo (base form) + Complemento",
        exemplo: {
            pt: ": Eu como pizza todos os dias.",
            en: ": I eat pizza every day."
        }
    },
    {
        nome: "Present Continuous",
        estrutura: "Sujeito + am/is/are + Verbo (ing form) + Complemento",
        exemplo: {
            pt: ": Eu estou comendo pizza agora.",
            en: ": I am eating pizza now."
        }
    },
    {
        nome: "Present Perfect",
        estrutura: "Sujeito + have/has + Verbo (past participle) + Complemento",
        exemplo: {
            pt: ": Eu tenho comido muita pizza ultimamente.",
            en: ": I have eaten a lot of pizza lately."
        }
    },
    {
        nome: "Present Perfect Continuous",
        estrutura: "Sujeito + have/has + been + Verbo (ing form) + Complemento",
        exemplo: {
            pt: ": Eu tenho estado comendo pizza desde ontem.",
            en: ": I have been eating pizza since yesterday."
        }
    },
    {
        nome: "Past Simple",
        estrutura: "Sujeito + Verbo (past simple) + Complemento",
        exemplo: {
            pt: ": Eu comi pizza ontem.",
            en: ": I ate pizza yesterday."
        }
    },
    {
        nome: "Past Continuous",
        estrutura: ": Sujeito + was/were + Verbo (ing form) + Complemento",
        exemplo: {
            pt: ": Eu estava comendo pizza quando você chegou.",
            en: ": I was eating pizza when you arrived."
        }
    },
    {
        nome: "Past Perfect",
        estrutura: "Sujeito + had + Verbo (past participle) + Complemento",
        exemplo: {
            pt: ": Eu já tinha comido pizza quando você chegou.",
            en: ": I had eaten pizza when you arrived."
        }
    },
    {
        nome: "Past Perfect Continuous",
        estrutura: "Sujeito + had + been + Verbo (ing form) + Complemento",
        exemplo: {
            pt: ": Eu tinha estado comendo pizza por duas horas quando você chegou.",
            en: ": I had been eating pizza for two hours when you arrived."
        }
    },
    {
        nome: "Future Simple",
        estrutura: "Sujeito + will + Verbo (base form) + Complemento",
        exemplo: {
            pt: ": Eu vou comer pizza amanhã.",
            en: ": I will eat pizza tomorrow."
        }
    },
    {
        nome: "Future Continuous",
        estrutura: "Sujeito + will + be + Verbo (ing form) + Complemento",
        exemplo: {
            pt: ": Eu estarei comendo pizza neste horário amanhã.",
            en: ": I will be eating pizza at this time tomorrow."
        }
    },
    {
        nome: "Future Perfect",
        estrutura: "Sujeito + will + have + Verbo (past participle) + Complemento",
        exemplo: {
            pt: ": Eu terei comido pizza até você chegar amanhã.",
            en: ": I will have eaten pizza by the time you arrive tomorrow."
        }
    },
    {
        nome: "Future Perfect Continuous",
        estrutura: "Sujeito + will + have + been + Verbo (ing form) + Complemento",
        exemplo: {
            pt: ": Eu terei estado comendo pizza por duas horas quando você chegar amanhã.",
            en: ": I will have been eating pizza for two hours when you arrive tomorrow."
        }
    }
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

function mostrarExemplo() {
    if (tempoSorteado) {
        document.getElementById("result").innerHTML = `
            <strong>Exemplo:</strong><br>
            pt ${tempoSorteado.exemplo.pt}<br>
            en ${tempoSorteado.exemplo.en}
        `;
    } else {
        document.getElementById("result").innerText = "Por favor, sorteie um tempo verbal primeiro.";
    }
}
