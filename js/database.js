// Banco de dados dos produtos

const data = [
  {
    id: 1,
    category: 'Armas',
    name: 'Vento Sombrio',
    desc: 'Uma kusarigama negra imbuida de magia da escuridão',
    img: 'img/Gancho com peso.jpg',
    price: 300
  },
  {
    id: 2,
    category: 'Armas',
    name: "Chicote de K'lan",
    desc: 'Um chicote feito de ossos de Lich ancestral',
    img: 'img/bone whip.jpg',
    price: 500
  },
  {
    id: 3,
    category: 'Armas',
    name: 'Garras de Urizel',
    desc: 'Garras arrancadas de um demônio vindo do setimo circulo do tártaro',
    img: 'img/Demon claws.jpg',
    price: 700
  },
  {
    id: 4,
    category: 'Armas',
    name: 'Enma',
    desc: 'Uma katana imbuída de energia demoniaca capaz de cortar até as profundezas do inferno',
    img: 'img/demon katana.jpg',
    price: 1000
  },
  {
    id: 5,
    category: 'Armas',
    name: 'Garou',
    desc: 'Uma espada forjada no núcleo de uma estrela durante seu proprio nascimento, armazenando seu poder',
    img: 'img/cosmos sword.jpg',
    price: 3000
  },
  {
    id: 6,
    category: 'Armas',
    name: 'Roseira',
    desc: 'Uma Rapieira forjada na divisa entre as dimensões por um druida, sendo composta por essencia da natureza de multiplos universos',
    img: 'img/Roseira.jpg',
    price: 1500
  },
  {
    id: 7,
    category: 'Magias',
    name: 'Mão de Shoggoth',
    desc: 'Você transforma sua propria mão na mão da entidade Shoggoth, ganhando algumas habilidades exclusivas',
    img: 'img/demonhand.jpg',
    price: 600
  },
  {
    id: 8,
    category: 'Magias',
    name: 'Eclipse',
    desc: 'Um eclipse mágico é invocado, enfraquecendo seus adversarios e aumentando o poder de seus aliados',
    img: 'img/darkmoon.jpg',
    price: 1700
  },
  {
    id: 9,
    category: 'Magias',
    name: 'Aura de escuridão',
    desc: 'Você emite uma aura roxa bem escura que dimnui a moral e a coragem de qualquer um no ambiente, menos você',
    img: 'img/shadow aura.jpg',
    price: 300
  },
  {
    id: 10,
    category: 'Magias',
    name: 'Projeção de alma',
    desc: 'Sua alma projeta seu poder externamente, formando um avatar com habilidades exclusivas combinadas com sua personalidade',
    img: 'img/stand.jpg',
    price: 2300
  },
  {
    id: 11,
    category: 'Magias',
    name: 'Invocação',
    desc: 'Usando essa magia você invoca um familiar astral poderoso',
    img: 'img/summon.jpg',
    price: 1200
  },
  {
    id: 12,
    category: 'Magias',
    name: 'BlackHole',
    desc: 'Todos conhecemos a familiar bola de fogo, mas poucos conhecem sua versão melhorada: uma bola de tanta energia que se torna negra e distorce o espaço',
    img: 'img/black hole.jpg',
    price: 5000
  },
  {
    id: 13,
    category: 'Pets',
    name: 'Thessalhydra',
    desc: 'Criatura com varios tentaculos atrás da cabeça especializada em combate a curta distancia',
    img: 'img/pet1.jpg',
    price: 6000
  },
  {
    id: 14,
    category: 'Pets',
    name: 'Spectraraptor',
    desc: 'Raptor alien anormalmente veloz e forte, com a boca bizarra, especializado em transporte e furtividade',
    img: 'img/pet2.jpg',
    price: 8000
  },
  {
    id: 15,
    category: 'Pets',
    name: 'Tessalopardo',
    desc: 'Um felino magico com anatomia diferenciada bem docil normalmente, especializado em patrulha, segurança e ser animal domestico',
    img: 'img/pet3.png',
    price: 4000
  },
  {
    id: 16,
    category: 'Pets',
    name: 'LG4-6969',
    desc: 'Ciborgue com IA simples no quesito de pensamento comum mas complexa para combate, capaz de cumprir ordens simples, patrulhar, ser auxiliar domestico e parceiro de missões e combate',
    img: 'img/pet4.png',
    price: 6500
  },
  {
    id: 17,
    category: 'Pets',
    name: 'Phantom',
    desc: 'Almas sem consciencia que se manifestam em criaturas, especialistas em transporte e furtividade',
    img: 'img/pet5.jpg',
    price: 9500
  },
  {
    id: 18,
    category: 'Pets',
    name: 'Grey Lord',
    desc: 'Lorde demonio cuja consciencia foi roubada, ficando em sua forma bestial. Especialista em combate e transporte',
    img: 'img/pet6.jpg',
    price: 11500
  },
  
];