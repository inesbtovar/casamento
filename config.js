// =====================================================================
//  EDITA AQUI A INFORMAÇÃO DO CASAMENTO
//  Tudo o que aparece no site vem deste ficheiro.
//  Os textos entre aspas podem ser alterados à vontade.
// =====================================================================

const CASAMENTO = {
  // Nomes do casal
  nome1: "Inês",
  nome2: "Nome",

  // Data e hora da cerimónia (formato: AAAA-MM-DDTHH:MM, hora de Portugal)
  dataHora: "2027-06-12T16:00",
  // Hora prevista de fim (usada no "Adicionar ao calendário")
  dataHoraFim: "2027-06-13T02:00",

  frase: "Vamos casar! E queremos muito que estejas connosco.",

  cerimonia: {
    nome: "Igreja de Exemplo",
    hora: "16:00",
    morada: "Rua Exemplo, 123, 1000-000 Lisboa",
    mapa: "https://maps.google.com/?q=Lisboa",
  },

  festa: {
    nome: "Quinta de Exemplo",
    hora: "18:30",
    morada: "Estrada Exemplo, 45, 2000-000 Sintra",
    mapa: "https://maps.google.com/?q=Sintra",
  },

  // Programa do dia
  programa: [
    { hora: "15:30", titulo: "Chegada dos convidados", texto: "Recebemos-vos à porta da igreja." },
    { hora: "16:00", titulo: "Cerimónia", texto: "O momento do sim." },
    { hora: "18:30", titulo: "Cocktail", texto: "Brinde e petiscos nos jardins da quinta." },
    { hora: "20:30", titulo: "Jantar", texto: "Sentem-se, comam e celebrem connosco." },
    { hora: "23:00", titulo: "Bolo & Festa", texto: "Pista de dança aberta até de madrugada." },
  ],

  // O que vestir
  dressCode: {
    titulo: "Formal / Cocktail",
    texto:
      "Fatos e vestidos de cerimónia. A festa é ao ar livre e em relva, por isso sugerimos sapatos confortáveis (e um casaco leve para a noite).",
    // Cores sugeridas (podes apagar a lista se não quiseres)
    cores: ["#8a9a7b", "#c9b18a", "#e8dcc8", "#6b5b4b"],
    evitar: "Por favor, evita o branco — fica reservado para os noivos.",
  },

  // Presentes
  presentes: {
    texto:
      "A vossa presença é o melhor presente! Mas se quiserem oferecer algo, criámos uma lista com coisas que nos fazem falta na nova casa.",
    amazon: "https://www.amazon.es/hz/wishlist/ls/EXEMPLO",
    // Opcional: deixa em branco ("") para esconder
    iban: "PT50 0000 0000 0000 0000 0000 0",
    ibanTexto: "Também podem contribuir para a nossa lua de mel por transferência:",
  },

  // Confirmação de presença
  rsvp: {
    prazo: "1 de maio de 2027",
    // Link para um Google Form (ou deixa "" e usa o email abaixo)
    formulario: "https://forms.gle/EXEMPLO",
    email: "email@exemplo.com",
  },

  // Perguntas frequentes
  faq: [
    { p: "Posso levar acompanhante?", r: "O convite indica o número de lugares reservados para ti. Se tiveres dúvidas, fala connosco." },
    { p: "Há estacionamento?", r: "Sim, a quinta tem estacionamento gratuito para todos os convidados." },
    { p: "As crianças são bem-vindas?", r: "Claro! Haverá um espaço com animação para os mais pequenos." },
    { p: "Onde posso ficar alojado?", r: "Há vários hotéis perto da quinta. Fala connosco e enviamos sugestões." },
  ],
};
