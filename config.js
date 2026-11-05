// =====================================================================
//  EDITA AQUI A INFORMAÇÃO DO CASAMENTO
//  Tudo o que aparece no site vem deste ficheiro.
//  Os textos entre aspas podem ser alterados à vontade.
// =====================================================================

const CASAMENTO = {
  // Nomes do casal
  nome1: "Pedro",
  nome2: "Inês",

  // Data e hora da cerimónia (formato: AAAA-MM-DDTHH:MM, hora de Portugal)
  dataHora: "2027-06-05T15:00",
  // Hora prevista de fim (usada no "Adicionar ao calendário")
  dataHoraFim: "2027-06-06T02:00",

  frase: "Vamos casar! E queremos muito que estejas connosco.",

  cerimonia: {
    nome: "Igreja Matriz de São Félix da Marinha",
    hora: "15:00",
    morada: "São Félix da Marinha, Vila Nova de Gaia",
    mapa: "https://www.google.com/maps/search/?api=1&query=Igreja+Matriz+de+S%C3%A3o+F%C3%A9lix+da+Marinha",
  },

  festa: {
    nome: "Vila Elvira",
    hora: "17:00",
    morada: "Praia da Granja, Vila Nova de Gaia",
    mapa: "https://www.google.com/maps/search/?api=1&query=Vila+Elvira+Praia+da+Granja",
  },

  // Programa do dia
  programa: [
    { hora: "14:30", titulo: "Chegada dos convidados", texto: "Recebemos-vos à porta da igreja." },
    { hora: "15:00", titulo: "Cerimónia", texto: "O momento do sim." },
    { hora: "17:00", titulo: "Cocktail", texto: "Brinde e petiscos nos jardins da Vila Elvira." },
    { hora: "20:00", titulo: "Jantar", texto: "Sentem-se, comam e celebrem connosco." },
    { hora: "23:00", titulo: "Bolo & Festa", texto: "Pista de dança aberta até de madrugada." },
  ],

  // O que vestir
  dressCode: {
    titulo: "Formal / Cocktail",
    texto:
      "Fatos e vestidos de cerimónia. A festa é ao ar livre e em relva, por isso sugerimos sapatos confortáveis (e um casaco leve para a noite).",
    evitar: "Por favor, evita o branco — fica reservado para os noivos.",
  },

  // Presentes
  presentes: {
    texto:
      "A vossa presença é o melhor presente! Mas se quiserem oferecer algo, criámos uma lista com coisas que nos fazem falta na nova casa.",
    amazon: "https://www.amazon.es/hz/wishlist/ls/2702WWDS5O83Y?ref_=wl_share",
    // Opcional: deixa em branco ("") para esconder
    iban: "PT50 0018 0003 6066 1147 0204 1",
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
    { p: "Há estacionamento?", r: "Sim, a Vila Elvira tem estacionamento gratuito para todos os convidados." },
    { p: "As crianças são bem-vindas?", r: "Claro! Haverá um espaço com animação para os mais pequenos." },
    { p: "Onde posso ficar alojado?", r: "Há vários hotéis perto da Vila Elvira. Fala connosco e enviamos sugestões." },
  ],
};
