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
    nome: "Capela da Universidade",
    hora: "15:00",
    morada: "R. Dr. Guilherme Moreira 10, 3000-210 Coimbra",
    mapa: "https://www.google.com/maps/place/Capela+Universit%C3%A1ria+de+S%C3%A3o+Miguel/@40.2074163,-8.4290269,17z/data=!3m2!4b1!5s0xd22f909b139916f:0x4311d3f35f146ca6!4m6!3m5!1s0xd22f909b4794891:0x4235c0fc62ea0902!8m2!3d40.2074163!4d-8.426452!16s%2Fm%2F02r7p4j?entry=ttu&g_ep=EgoyMDI2MTAxOS4wIKXMDSoASAFQAw%3D%3D",
  },

  festa: {
    nome: "Palácio Condes de Foz d'Arouce",
    hora: "17:00",
    morada: "R. Chafariz 6, 3780-292 Anadia",
    mapa: "https://www.google.com/maps/place/Pal%C3%A1cio+Condes+de+Foz+d'Arouce/@40.4547943,-8.4485561,88m/data=!3m1!1e3!4m6!3m5!1s0xd2307af01f0cc79:0xb2b85e7b98342b24!8m2!3d40.4548003!4d-8.4486517!16s%2Fg%2F11c60mbymg?entry=ttu&g_ep=EgoyMDI2MTAxOS4wIKXMDSoASAFQAw%3D%3D",
  },

  // Programa do dia
  programa: [
    { hora: "14:30", titulo: "Chegada dos convidados", texto: "Recebemos-vos à porta da igreja." },
    { hora: "15:00", titulo: "Cerimónia", texto: "O momento do sim." },
    { hora: "17:00", titulo: "Cocktail", texto: "Brinde e petiscos nos jardins da quinta." },
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
    { p: "Há estacionamento?", r: "Sim, a quinta tem estacionamento gratuito para todos os convidados." },
    { p: "As crianças são bem-vindas?", r: "Claro! Haverá um espaço com animação para os mais pequenos." },
    { p: "Onde posso ficar alojado?", r: "Há vários hotéis perto da quinta. Fala connosco e enviamos sugestões." },
  ],
};
