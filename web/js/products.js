const PRODUTOS = [
  {
    id: 1,
    nome: "Guarda-chuva Previsor",
    categoria: "Acessórios",
    preco: 89.90,
    regra: "Cabe em um bolso",
    descricaoCurta: "Guarda-chuva de bolso que prevê onde a chuva cairá.",
    descricaoLonga: "Um guarda-chuva minúsculo que se abre sozinho no ponto exato onde a chuva vai cair, antes mesmo das primeiras gotas.",
    imagem: "☂️",
    material: "Nylon hidrofóbico e fibra de carbono",
    dimensoes: "8 x 3 x 3 cm (fechado)",
    uso: "Abra e aguarde a previsão; funciona uma vez por tempestade."
  },
  {
    id: 2,
    nome: "Estação de Descanso Astroformiga",
    categoria: "Bem-estar",
    preco: 149.50,
    regra: "Servir em uma formiga",
    descricaoCurta: "Estação de descanso para formigas astronautas.",
    descricaoLonga: "Mini estação com gravidade simulada e oxigênio micro, perfeita para formigas em treinamento espacial.",
    imagem: "🐜",
    material: "Aço inoxidável e vidro borossilicato",
    dimensoes: "4 x 4 x 4 cm",
    uso: "Coloque a formiga dentro e feche a tampa hermética."
  },
  {
    id: 3,
    nome: "Jardim Flutuante Leviatã",
    categoria: "Jardins",
    preco: 29990.00,
    regra: "Não cabe em um avião",
    descricaoCurta: "Jardim flutuante maior que um avião.",
    descricaoLonga: "Um jardim suspenso no ar, com 80 metros de envergadura, impossível de transportar por aeronave.",
    imagem: "🌿",
    material: "Terra antigravitacional e sementes raras",
    dimensoes: "80 x 40 x 12 m",
    uso: "Instale em área aberta; regue com água lunar."
  },
  {
    id: 4,
    nome: "Zumbilume",
    categoria: "Iluminação",
    preco: 39.90,
    regra: "Começa com a letra Z",
    descricaoCurta: "Ilumina sonhos uma única vez.",
    descricaoLonga: "Uma lâmpada descartável que acende dentro dos sonhos, iluminando apenas uma noite.",
    imagem: "💡",
    material: "Vidro sopro e poeira estelar",
    dimensoes: "6 cm de altura",
    uso: "Quebre a ampola antes de dormir; efeito único."
  },
  {
    id: 5,
    nome: "Traje Espacial de Bolso",
    categoria: "Vestuário",
    preco: 199.00,
    regra: "Ser usado no espaço sideral",
    descricaoCurta: "Traje espacial dobrável que cabe no bolso.",
    descricaoLonga: "Traje completo com escudo térmico, dobrável ao tamanho de um bolso, para caminhadas espaciais.",
    imagem: "🚀",
    material: "Kevlar e filme refletivo",
    dimensoes: "12 x 8 x 2 cm (dobrado)",
    uso: "Desdobre e vista; selagem automática."
  },
  {
    id: 6,
    nome: "Comprimido de Jardim",
    categoria: "Jardins",
    preco: 12.00,
    regra: "Ser de uso único",
    descricaoCurta: "Um comprimido que vira um jardim completo, uma vez.",
    descricaoLonga: "Comprimido efervescente que, ao ser dissolvido, gera um jardim inteiro que dura um único dia.",
    imagem: "💊",
    material: "Composto orgânico efervescente",
    dimensoes: "2 cm de diâmetro",
    uso: "Dissolva em água; jardim dura 24 horas."
  }
];

function formatarPreco(v) { return v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); }
