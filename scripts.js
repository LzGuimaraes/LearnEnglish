const temas = [
  "Comida",
  "Viagem",
  "Esportes",
  "Trabalho",
  "Lazer",
  "Tecnologia",
  "Dia a dia",
];

// Objeto com verbos regulares e suas formas corretas em ambos os idiomas
const verbosRegulares = {
  Comida: {
    infinitivo: {
      pt: "cozinhar",
      en: "cook",
    },
    gerundio: {
      pt: "cozinhando",
      en: "cooking",
    },
    participio: {
      pt: "cozinhado",
      en: "cooked",
    },
  },
  Viagem: {
    infinitivo: {
      pt: "viajar",
      en: "travel",
    },
    gerundio: {
      pt: "viajando",
      en: "traveling",
    },
    participio: {
      pt: "viajado",
      en: "traveled",
    },
  },
  Esportes: {
    infinitivo: {
      pt: "praticar",
      en: "practice",
    },
    gerundio: {
      pt: "praticando",
      en: "practicing",
    },
    participio: {
      pt: "praticado",
      en: "practiced",
    },
  },
  Trabalho: {
    infinitivo: {
      pt: "trabalhar",
      en: "work",
    },
    gerundio: {
      pt: "trabalhando",
      en: "working",
    },
    participio: {
      pt: "trabalhado",
      en: "worked",
    },
  },
  Lazer: {
    infinitivo: {
      pt: "descansar",
      en: "rest",
    },
    gerundio: {
      pt: "descansando",
      en: "resting",
    },
    participio: {
      pt: "descansado",
      en: "rested",
    },
  },
  Tecnologia: {
    infinitivo: {
      pt: "programar",
      en: "program",
    },
    gerundio: {
      pt: "programando",
      en: "programming",
    },
    participio: {
      pt: "programado",
      en: "programmed",
    },
  },
  "Dia a dia": {
    infinitivo: {
      pt: "estudar",
      en: "study",
    },
    gerundio: {
      pt: "estudando",
      en: "studying",
    },
    participio: {
      pt: "estudado",
      en: "studied",
    },
  },
};

const complementosPorTema = {
  Comida: {
    pt: "uma nova receita",
    en: "a new recipe",
  },
  Viagem: {
    pt: "para diferentes países",
    en: "to different countries",
  },
  Esportes: {
    pt: "esportes diferentes",
    en: "different sports",
  },
  Trabalho: {
    pt: "em um novo projeto",
    en: "on a new project",
  },
  Lazer: {
    pt: "nos fins de semana",
    en: "on weekends",
  },
  Tecnologia: {
    pt: "um novo aplicativo",
    en: "a new application",
  },
  "Dia a dia": {
    pt: "todos os dias",
    en: "every day",
  },
};

// Função para conjugar verbos no passado (pretérito perfeito) em português
function conjugarPassado(verbo) {
  if (verbo.endsWith("ar")) {
    return verbo.replace(/ar$/, "ei"); // Ex: "viajar" → "viajei"
  } else if (verbo.endsWith("er") || verbo.endsWith("ir")) {
    return verbo.replace(/(er|ir)$/, "i"); // Ex: "comer" → "comi", "partir" → "parti"
  }
  return verbo; // Caso não seja um verbo regular, retorna o verbo original
}

const temposVerbais = [
  {
    nome: "Present Simple",
    estrutura: "Sujeito + Verbo (base form) + Complemento",
    construirExemplo: (verbo, complemento) => ({
      pt: `Eu ${verbo.infinitivo.pt.replace(/ar$/, "o")} ${
        complemento.pt
      } regularmente`,
      en: `I ${verbo.infinitivo.en} ${complemento.en} regularly`,
    }),
  },
  {
    nome: "Present Continuous",
    estrutura: "Sujeito + am/is/are + Verbo (ing form) + Complemento",
    construirExemplo: (verbo, complemento) => ({
      pt: `Eu estou ${verbo.gerundio.pt} ${complemento.pt}`,
      en: `I am ${verbo.gerundio.en} ${complemento.en}`,
    }),
  },
  {
    nome: "Present Perfect",
    estrutura: "Sujeito + have/has + Verbo (past participle) + Complemento",
    construirExemplo: (verbo, complemento) => ({
      pt: `Eu tenho ${verbo.participio.pt} ${complemento.pt}`,
      en: `I have ${verbo.participio.en} ${complemento.en}`,
    }),
  },
  {
    nome: "Present Perfect Continuous",
    estrutura: "Sujeito + have/has + been + Verbo (ing form) + Complemento",
    construirExemplo: (verbo, complemento) => ({
      pt: `Eu tenho estado ${verbo.gerundio.pt} ${complemento.pt}`,
      en: `I have been ${verbo.gerundio.en} ${complemento.en}`,
    }),
  },
  {
    nome: "Past Simple",
    estrutura: "Sujeito + Verbo (past simple) + Complemento",
    construirExemplo: (verbo, complemento) => ({
      pt: `Eu ${conjugarPassado(verbo.infinitivo.pt)} ${complemento.pt} ontem`,
      en: `I ${verbo.participio.en} ${complemento.en} yesterday`,
    }),
  },
  {
    nome: "Past Continuous",
    estrutura: "Sujeito + was/were + Verbo (ing form) + Complemento",
    construirExemplo: (verbo, complemento) => ({
      pt: `Eu estava ${verbo.gerundio.pt} ${complemento.pt}`,
      en: `I was ${verbo.gerundio.en} ${complemento.en}`,
    }),
  },
  {
    nome: "Past Perfect",
    estrutura: "Sujeito + had + Verbo (past participle) + Complemento",
    construirExemplo: (verbo, complemento) => ({
      pt: `Eu tinha ${verbo.participio.pt} ${complemento.pt}`,
      en: `I had ${verbo.participio.en} ${complemento.en}`,
    }),
  },
  {
    nome: "Past Perfect Continuous",
    estrutura: "Sujeito + had + been + Verbo (ing form) + Complemento",
    construirExemplo: (verbo, complemento) => ({
      pt: `Eu tinha estado ${verbo.gerundio.pt} ${complemento.pt}`,
      en: `I had been ${verbo.gerundio.en} ${complemento.en}`,
    }),
  },
  {
    nome: "Future Simple",
    estrutura: "Sujeito + will + Verbo (base form) + Complemento",
    construirExemplo: (verbo, complemento) => ({
      pt: `Eu vou ${verbo.infinitivo.pt} ${complemento.pt}`,
      en: `I will ${verbo.infinitivo.en} ${complemento.en}`,
    }),
  },
  {
    nome: "Future Continuous",
    estrutura: "Sujeito + will + be + Verbo (ing form) + Complemento",
    construirExemplo: (verbo, complemento) => ({
      pt: `Eu estarei ${verbo.gerundio.pt} ${complemento.pt}`,
      en: `I will be ${verbo.gerundio.en} ${complemento.en}`,
    }),
  },
  {
    nome: "Future Perfect",
    estrutura: "Sujeito + will + have + Verbo (past participle) + Complemento",
    construirExemplo: (verbo, complemento) => ({
      pt: `Eu terei ${verbo.participio.pt} ${complemento.pt}`,
      en: `I will have ${verbo.participio.en} ${complemento.en}`,
    }),
  },
  {
    nome: "Future Perfect Continuous",
    estrutura: "Sujeito + will + have + been + Verbo (ing form) + Complemento",
    construirExemplo: (verbo, complemento) => ({
      pt: `Eu terei estado ${verbo.gerundio.pt} ${complemento.pt}`,
      en: `I will have been ${verbo.gerundio.en} ${complemento.en}`,
    }),
  },
];

let temaSorteado = "";
let tempoSorteado = null;

function sortearTema() {
  temaSorteado = temas[Math.floor(Math.random() * temas.length)];
  document.getElementById("result").innerText = `Tema: ${temaSorteado}`;
}

function sortearTempoVerbal() {
  tempoSorteado =
    temposVerbais[Math.floor(Math.random() * temposVerbais.length)];
  document.getElementById(
    "result"
  ).innerText = `Tempo Verbal: ${tempoSorteado.nome}`;
}

function mostrarEstrutura() {
  if (tempoSorteado) {
    document.getElementById(
      "result"
    ).innerText = `Estrutura: ${tempoSorteado.estrutura}`;
  } else {
    document.getElementById("result").innerText =
      "Por favor, sorteie um tempo verbal primeiro.";
  }
}

function mostrarExemplo() {
  if (tempoSorteado && temaSorteado) {
    const verbo = verbosRegulares[temaSorteado];
    const complemento = complementosPorTema[temaSorteado];
    const exemplo = tempoSorteado.construirExemplo(verbo, complemento);

    document.getElementById("result").innerHTML = `
              <strong>Exemplo (${temaSorteado}):</strong><br>
              pt: ${exemplo.pt}.<br>
              en: ${exemplo.en}.
          `;
  } else {
    document.getElementById("result").innerText =
      "Por favor, sorteie um tema e um tempo verbal primeiro.";
  }
}
