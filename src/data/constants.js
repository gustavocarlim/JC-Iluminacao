export const PRODUCTS = [
  { id: 13, name: "Lâmpada LED 40W", category: "Lâmpadas", price: 29.99, image: "/products/led40wats.webp", description: "Lâmpada LED 40W de alta potência e brilho intenso." },
  { id: 5, name: "Filtro de Linha com 5 entradas", category: "Tomadas", price: 41.99, image: "/products/filtrodelinha.webp", description: "Filtro de linha com múltiplas tomadas e proteção elétrica." },
  {
    id: 32,
    name: "Tomada 10A B Lux",
    category: "Tomadas",
    price: 6.99,
    image: "/products/tomada10amperes.webp",
    description: `Tomada de 10 Amperes ideal para uso residencial.

    Dimensões da placa:
    - Altura: 12,5 cm
    - Largura: 8 cm
    
    Composição:
    - Corpo isolante: Poliamida 6.6
    - Terminais: Liga de cobre
    - Parafusos: Aço bicromatizado
    - Placa de acabamento: ABS com proteção UV`
  },
  { id: 9, name: "Jogo de Chaves", category: "Ferramentas", price: 49.99, image: "/products/jogochaves.webp", description: "Kit de chaves para manutenção geral." },
  { id: 1, name: "Boia Caixa d'Água", category: "Casa", price: 12.99, image: "/products/boiacaixadagua.webp", description: "Boia para controle automático do nível da caixa d’água." },
  { id: 2, name: "Chuveirão", category: "Casa", price: 24.99, image: "/products/chuveirao.webp", description: "Chuveirão para áreas externas com alta vazão de água.",
    keywords: ["ducha", "banho", "piscina", "choveiro", "chuverao", "chuveiro", "chuveiros", "choveiros"]
   },
  { id: 3, name: "Chuveiro Astra", category: "Casa", price: 79.99, image: "/products/chuveiroastra.webp", description: "Chuveiro elétrico Astra com diferentes temperaturas.",
    keywords: ["eletrico", "ducha", "quente", "choveiro", "chuverio", "chuveiros", "choveiros" ]
   },
  { id: 4, name: "Extensão 8m", category: "Fiação", price: 39.99, image: "/products/extensao8m.webp", description: "Extensão de 8 metros ideal para uso doméstico." },
  { id: 7, name: "Passa Fio 20 Metros", category: "Fiação", price: 25.99, image: "/products/fio20metros.webp", description: "Passa fio elétrico de 20 metros para diversas aplicações." },
  { id: 8, name: "Metro de Fio Paralelo 1,5", category: "Fiação", price: 4.80, image: "/products/fioparalelo.webp", description: "Fio paralelo para instalações gerais e iluminação." },
  { id: 10, name: "Kit Pintura Roma", category: "Casa", price: 31.99, image: "/products/kitpinturaroma.webp", description: "Kit completo para pintura residencial." },
  { id: 14, name: "Luminária Emergência 60 LEDs", category: "Luminárias", price: 49.99, image: "/products/luminariaemergencia60leds.webp", description: "Luminária de emergência com 60 LEDs e longa duração." },
  { id: 15, name: "Plafon Duplo", category: "Luminárias", price: 4.50, image: "/products/plafunierduplo.webp", description: "Plafon duplo para iluminação interna moderna." },
  { id: 17, name: "Luminária Plaslumi", category: "Luminárias", price: 14.99, image: "/products/Plaslumluminacao.webp", description: "Luminária Plaslum de alta eficiência luminosa." },
  { id: 18, name: "Ralo Inox", category: "Casa", price: 25.99, image: "/products/raloinox.webp", description: "Ralo inox resistente para áreas molhadas." },
  { id: 19, name: "Ralo Pia", category: "Casa", price: 9.99, image: "/products/ralopia.webp", description: "Ralo para pia, resistente e fácil de instalar." },
  { id: 21, name: "Rolo de Fio 2,5", category: "Fiação", price: 229.99, image: "/products/rolodefio25.webp", description: "Rolo de fio elétrico 2,5." },
  { id: 22, name: "Rolo de Fio 4mm", category: "Fiação", price: 419.99, image: "/products/rolofio4mm.webp", description: "Fio de 4mm para instalações que exigem maior capacidade." },
  { id: 24, name: "Sensor de Presença", category: "Luminárias", price: 34.99, image: "/products/sensordepresenca.webp", description: "Sensor de presença ideal para iluminação automática." },
  { id: 25, name: "Lâmina Serra Starrett", category: "Ferramentas", price: 9.99, image: "/products/serrastaret.webp", description: "Lâmina de serra Starrett para corte preciso." },
  { id: 26, name: "Sifão Sanfonado", category: "Casa", price: 7.99, image: "/products/sifaosanfonado.webp", description: "Sifão sanfonado para pia com fácil instalação." },
  { id: 27, name: "Sifão Sanfonado Duplo", category: "Casa", price: 15.99, image: "/products/sifaosanfonadoduplo.webp", description: "Sifão duplo sanfonado para pias com duas cubas." },
  { id: 29, name: "Spot 5W", category: "Luminárias", price: 15.99, image: "/products/spot5wats.webp", description: "Spot LED 5W ideal para iluminação decorativa." },
  { id: 30, name: "Tinta Spray", category: "Casa", price: 19.99, image: "/products/tintaspray.webp", description: "Tinta spray para diversos tipos de acabamento." },
  { id: 33, name: "Tomada 20A", category: "Tomadas", price: 8.99, image: "/products/tomada20amp.webp", description: "Tomada de 20A para equipamentos de maior potência." },
  { id: 34, name: "Torneira", category: "Casa", price: 4.99, image: "/products/torneira.webp", description: "Torneira comum para uso residencial." },
  { id: 35, name: "Torneira Máquina de Lavar", category: "Casa", price: 31.99, image: "/products/torneiramaquinadelavar.webp", 
    description: `Torneira comum para uso residencial.
    Dimensões do produto: 0 x 12,2 x 13,9 cm; 180 g20 x 12,2 x 13,9 cm; 180 g 
    Tipo de tomada Montagem em parede` },
    { id: 36, name: "Antena Digital", category: "TV", price: 39.99, image: "/products/antenadigital.webp", description: "Antena digital para TV com alta captação de sinal." },
{ id: 37, name: "Cabo Quadruplex 16mm", category: "Fiação", price: 13.99, image: "/products/caboquadruplex16mm.webp", description: "Cabo quadruplex 16mm para ligações elétricas de maior carga." },
{ id: 38, name: "Campainha Digital Sem Fio", category: "Casa", price: 49.99, image: "/products/campainhadigitalsemfio.webp", description: "Campainha digital sem fio com longo alcance." },
{ id: 40, name: "Cola Pracano", category: "Ferramentas", price: 5.99, image: "/products/colapracano.webp", description: "Cola de contato multiuso para reparos gerais." },
{ id: 41, name: "Durex Fita", category: "Ferramentas", price: 4.50, image: "/products/fitadurex.webp", description: "Fita adesiva resistente para trabalhos diversos." },
{ id: 43, name: "Graxadeira 1kg", category: "Ferramentas", price: 17.99, image: "/products/graxade1kg.webp", description: "Graxadeira de 1kg ideal para lubrificação de equipamentos." },
{ id: 44, name: "Lâmpada LED de 30W", category: "Lâmpadas", price: 21.99, image: "/products/lampadaledde30wats.webp", description: "Lâmpada LED 30W de alta luminosidade." },
{ id: 45, name: "Lâmpada LED 9W", category: "Lâmpadas", price: 9.99, image: "/products/lampadaled9w.webp", description: "Lâmpada econômica 9W com baixo consumo." },
{ id: 48, name: "Pisque Pisca", category: "Outros", price: 14.99, image: "/products/piscapisca.webp", description: "Pisca pisca decorativo ideal para festas e celebrações." },
{ id: 51, name: "Silicone Bisnaga", category: "Casa", price: 13.99, image: "/products/siliconebisnaga.webp", description: "Silicone em bisnaga para vedação." },
{ id: 52, name: "Soquete Universal", category: "Luminárias", price: 4.50, image: "/products/soquete.webp", description: "Soquete universal para lâmpadas de rosca E27." },
{ id: 53, name: "Suporte para TV Universal", category: "TV", price: 54.99, image: "/products/SuporteParaTVUniversal.webp", description: "Suporte universal para TV, compatível com vários tamanhos." },
{ id: 53, name: "Fita Led de 5 metros", category: "Iluminação", price: 34.99, image: "/products/fitaledde5metros.webp", description: "Fita LED flexível para iluminação decorativa, econômica e fácil de instalar."}
];
