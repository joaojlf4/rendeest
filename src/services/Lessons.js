export default [
  {
    id: 1,
    title: 'Introdução à Educação Financeira',
    description: 'Começe com o pé direito.',
    primaryColor: '#9000ff',
    coins: 50,
    xp: 120,
    disable: false,
    questions: [
      {
        enum: "Qual a importância de um planejamento financeiro?",
        alternatives: [
          "Elaborar uma estratégia com o objetivo de acumular bens e valores, para atingir um nível de bem estar desejado",
          "Garantir o bem-estar, pagar dívidas, e possibilitar a construção de um patrimônio de longo prazo",
          "Proporcionar maior consciência sobre as escolhas, maior eficiência no uso da renda e satisfação das necessidades",
          "Definir um conjunto de operações e aplicações financeiras que conduzam a um melhor resultado financeiro",
          "Todas as anteriores"
        ],
        correctAnswerIndex: 4
      },
      {
        enum: "Qual o objetivo de uma reserva de emergência?",
        alternatives: [
          "Reserva acumulada para realizar um sonho",
          "Acumular patrimônio",
          "Parte do patrimônio que serve para cobrir imprevistos previsíveis",
          "Reserva para cobrir gastos adicionais não planejados",
          "É um reserva que serve para investir em novas oportunidades assim que aparecem"
        ],
        correctAnswerIndex: 2
      },
      {
        enum: "Para formar um Patrimônio Mínimo de Sobrevivência (PMS) deve-se guardar quanto?",
        alternatives: [
          "4 vezes o seu custo mensal",
          "5 vezes o seu custo mensal",
          "6 vezes o seu custo mensal",
          "15% de todo seu patrimônio",
          "Não é correto formar um Patrimônio Mínimo de Sobrevivência"
        ],
        correctAnswerIndex: 2
      },
      {
        enum: "O que deve ser feito para facilitar a conquista de seus objetivos sem problemas?",
        alternatives: [
          "Poupar 10% de toda renda",
          "Não gastar no cartão de crédito",
          "Investir em títulos do governo",
          "Sempre gastar com dinheiro em espécie",
          "Não financiar imóveis e automóveis"
        ],
        correctAnswerIndex: 0
      },
      {
        enum: "Qual dos bens representa um passivo nas suas finanças?",
        alternatives: [
          "Ações de uma empresa",
          "Automóvel para uso particular",
          "Dinheiro a receber",
          "Créditos",
          "Imóvel"
        ],
        correctAnswerIndex: 0
      },
    ],
  },
  {
    id: 2,
    title: 'Como aplicar seu dinheiro ganhando pouco? ',
    description: 'Não espere chefe seu te dar um aumento.',
    primaryColor: '#9000ff',
    coins: 60,
    xp: 130,
    disable: true
  },
 
  {
    id: 3,
    title: 'Metas vs Pessoas próximas',
    description: "Passou da hora de você cobrar sua tia",
    primaryColor: '#9000ff',
    coins: 70,
    xp: 140,
    disable: true
  },
  {
    id: 4,
    title: 'Como consquistar seu objetivos mais rápido?',
    description: 'Esquece essa de financiar',
    primaryColor: '#9000ff',
    coins: 80,
    xp: 140,
    disable: true
  },
  {
    id: 5,
    title: 'Introdução a Investimentos',
    description: 'A partir daqui, seu dinheiro trabalha pra você.',
    primaryColor: '#9000ff',
    coins: 90,
    xp: 150,
    disable: true
  },
];