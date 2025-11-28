import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MapPin, Clock, Building2, PlugZap, Lamp, Cable, Wrench, Lightbulb, Home as HomeIcon, Gift, Sparkles, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "../components/ProductCard";
import { PRODUCTS } from "../data/constants";

const HERO_IMAGES = [
  { id: 1, src: "/assets/JC.jpeg", alt: "Jc" },
  { id: 2, src: "/assets/JcInterno.jpeg", alt: "Jc Interno" },
  { id: 3, src: "/assets/DJ.jpeg", alt: "Dj" },
  { id: 4, src: "/assets/DjInterno.jpeg", alt: "Dj Interno" },
];

const STORES = [
  {
    id: "jc",
    name: "JC Iluminação",
    address: "Av. Adamastor, 354 - Xavantes, Belford Roxo - RJ, 26160-000",
    hours: "Seg a Sex: 09:00 - 19:00 | Sáb: 09:00 - 15:00",
    mapQuery: "Av. Adamastor, 354 - Xavantes, Belford Roxo - RJ"
  },
  {
    id: "dj",
    name: "DJ Iluminação",
    address: "R. Felipe Antônio Lopes Pinto, 96 - Xavantes, Belford Roxo - RJ, 26125-063",
    hours: "Seg a Sex: 09:00 - 18:00 | Sáb: 09:00 - 14:00",
    mapQuery: "R. Felipe Antônio Lopes Pinto, 96 - Xavantes, Belford Roxo - RJ"
  }
];

// Componente de Luzes Natalinas Piscantes
const ChristmasLights = () => {
  const lights = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    color: ['#FF0000', '#00FF00', '#FFD700', '#FF69B4', '#00BFFF'][i % 5],
    delay: i * 0.1
  }));

  return (
    <div className="absolute top-0 left-0 right-0 h-8 flex justify-around items-center z-20">
      {lights.map((light) => (
        <motion.div
          key={light.id}
          className="w-3 h-3 rounded-full"
          style={{ backgroundColor: light.color }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: light.delay,
          }}
        />
      ))}
    </div>
  );
};

// Estrelas Brilhantes
const ShiningStars = () => {
  const stars = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    top: `${Math.random() * 80 + 10}%`,
    left: `${Math.random() * 90 + 5}%`,
    delay: Math.random() * 2
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute"
          style={{ top: star.top, left: star.left }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: star.delay
          }}
        >
          <Star size={16} className="text-yellow-300" fill="currentColor" />
        </motion.div>
      ))}
    </div>
  );
};

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeStoreIndex, setActiveStoreIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === HERO_IMAGES.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const softSlideVariants = {
    enter: { opacity: 0, x: 20, scale: 1.01 },
    center: { opacity: 1, x: 0, scale: 1 },
    exit: { opacity: 0, x: -20, scale: 1 },
  };

  const currentStore = STORES[activeStoreIndex];

  const handleScrollToLocation = (e) => {
    e.preventDefault();
    const section = document.getElementById("location");
  
    if (section) {
      const top = section.getBoundingClientRect().top + window.pageYOffset;
      const offset = 100;
  
      window.scrollTo({
        top: top - offset,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="space-y-12 pb-12">
      {/* Hero Section Natalino */}
      <section className="relative bg-gradient-to-br from-red-50 via-white to-green-50 overflow-hidden">
        <ShiningStars />
        
        {/* Decorações de Fundo */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-200/30 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 py-12 md:py-20 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12 relative z-10">
          {/* Texto */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.span 
                className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-gradient-to-r from-red-600 to-green-600 text-white text-xs font-bold mb-4 uppercase tracking-wide shadow-lg"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Gift size={14} /> Promoções de Natal 🎄
              </motion.span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-green-700 to-red-700 leading-tight mb-6">
                Ilumine seu Natal com <br/>
                  brilho especial!
                  <motion.span
                    className="absolute -top-2 -right-2"
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ✨
                  </motion.span>
              </h1>
              
              <p className="text-lg text-gray-700 mb-8 max-w-lg leading-relaxed">
                Encontre tudo em materiais elétricos, lustres, lâmpadas e ferramentas para deixar seu Natal ainda mais iluminado! 
                🎅 Ofertas especiais para a época mais mágica do ano.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/products" 
                  className="group px-8 py-3 rounded-full bg-gradient-to-r from-red-600 to-green-600 text-white font-bold hover:shadow-2xl transition-all shadow-lg transform hover:-translate-y-1 relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Gift size={18} /> Ver Produtos
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-green-600 to-red-600"
                    initial={{ x: "100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
                
                <button 
                  onClick={handleScrollToLocation}
                  className="px-8 py-3 rounded-full border-2 border-red-600 text-red-600 font-bold hover:bg-red-50 transition-all cursor-pointer transform hover:-translate-y-1 hover:shadow-lg"
                >
                  🏪 Visitar Loja
                </button>
              </div>
            </motion.div>
          </div>

          {/* Imagens Hero com Decoração Natalina */}
          <div className="w-full md:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-red-300 to-green-300 rounded-full blur-3xl opacity-30 -z-10"></div>
            
            {/* Ornamento de Natal no topo */}
            <motion.div 
              className="absolute -top-6 -right-6 z-30 text-6xl"
              animate={{ 
                rotate: [0, 10, -10, 0],
                y: [0, -5, 0]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              🎄
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative h-64 md:h-96 w-full rounded-2xl shadow-2xl transform md:rotate-1 overflow-hidden bg-gray-100 border-4 border-yellow-400"
            >
              <ChristmasLights />
              
              <AnimatePresence initial={false} mode="popLayout">
                <motion.img 
                  key={currentImageIndex}
                  src={HERO_IMAGES[currentImageIndex].src}
                  alt={HERO_IMAGES[currentImageIndex].alt}
                  variants={softSlideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "tween", duration: 0.8, ease: "easeInOut" },
                    opacity: { duration: 0.8, ease: "easeInOut" },
                    scale: { duration: 0.8, ease: "easeOut" }
                  }}
                  className="absolute inset-0 w-full h-full object-cover" 
                />
              </AnimatePresence>

              <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-20">
                {HERO_IMAGES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`rounded-full transition-all duration-300 border-2 ${
                      idx === currentImageIndex 
                        ? 'bg-red-600 border-yellow-300 w-2.5 h-2.5 opacity-100 shadow-lg scale-110' 
                        : 'bg-green-600 border-white w-2.5 h-2.5 opacity-60 hover:opacity-90 hover:scale-105'
                    }`}
                  />
                ))}
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-red-900/50 via-green-900/30 to-transparent pointer-events-none z-10" />
            </motion.div>

            {/* Presente decorativo */}
            <motion.div 
              className="absolute -bottom-4 -left-4 text-5xl"
              animate={{ 
                rotate: [0, -10, 10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              🎁
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categorias Natalinas */}
      <section className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-green-700 flex items-center gap-2">
            <Sparkles className="text-yellow-500" size={28} />
            Categorias Populares
          </h2>
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="text-3xl"
          >
            ⭐
          </motion.div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { name: "Tomadas", icon: <PlugZap size={30} />, emoji: "🔌" },
            { name: "Luminárias", icon: <Lamp size={30} />, emoji: "💡" },
            { name: "Fiação", icon: <Cable size={30} />, emoji: "🔗" },
            { name: "Ferramentas", icon: <Wrench size={30} />, emoji: "🔧" },
            { name: "Lâmpadas", icon: <Lightbulb size={30} />, emoji: "✨" },
            { name: "Casa", icon: <HomeIcon size={30} />, emoji: "🏠" },
          ].map((cat) => (
            <Link
              key={cat.name}
              to={`/products?category=${encodeURIComponent(cat.name)}`}
              className="group relative flex flex-col items-center bg-gradient-to-br from-white to-red-50 border-2 border-red-200 rounded-xl p-6 text-center hover:shadow-xl hover:border-green-400 transition-all duration-300 overflow-hidden"
            >
              <motion.div
                className="absolute top-0 right-0 text-2xl opacity-20"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {cat.emoji}
              </motion.div>
              
              <div className="mb-3 text-red-600 group-hover:scale-110 transition-transform relative z-10">
                {React.cloneElement(cat.icon, { color: "#DC2626" })}
              </div>
              
              <h3 className="font-semibold text-sm text-gray-700 group-hover:text-red-700 transition-colors relative z-10">
                {cat.name}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Destaques com Tema Natalino */}
      <section className="container mx-auto px-4 relative">
        <div className="absolute top-0 left-0 text-6xl opacity-10">🎅</div>
        <div className="absolute top-0 right-0 text-6xl opacity-10">🎄</div>
        
        <div className="flex items-center gap-3 mb-6">
          <Gift className="text-red-600" size={28} />
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-red-700">
            Novidades na Loja - Presentes Perfeitos! 🎁
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {PRODUCTS.slice(0, 8).map((p, index) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`
                ${index > 3 ? "hidden lg:block" : ""}
              `}
            >
              <ProductCard product={p} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Location Banner Natalino */}
      <section id="location" className="bg-gradient-to-br from-red-800 via-green-800 to-red-900 py-16 text-white relative overflow-hidden">
        <ChristmasLights />
        <ShiningStars />
        
        {/* Decorações de fundo */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2 
            className="text-3xl font-bold mb-8 text-center md:text-left flex items-center gap-3 justify-center md:justify-start"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <MapPin className="text-yellow-300" size={32} />
            Visite nossas Lojas Físicas 🎄
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Coluna da Esquerda */}
            <div>
              <div className="flex gap-2 mb-8 bg-white/10 backdrop-blur-sm p-1 rounded-xl w-fit border border-yellow-300/30">
                {STORES.map((store, idx) => (
                  <motion.button
                    key={store.id}
                    onClick={() => setActiveStoreIndex(idx)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-6 py-2 rounded-lg font-bold text-sm transition-all ${
                      activeStoreIndex === idx 
                        ? 'bg-gradient-to-r from-yellow-400 to-yellow-300 text-red-800 shadow-lg' 
                        : 'text-white hover:bg-white/10'
                    }`}
                  >
                    🏪 {store.id.toUpperCase()} Iluminação
                  </motion.button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStoreIndex}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-yellow-300 flex items-center gap-2">
                    <Building2 size={24}/> {currentStore.name}
                  </h3>
                  
                  <motion.div 
                    className="flex items-start gap-4 bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="p-3 bg-gradient-to-br from-red-600 to-green-600 rounded-lg shadow-lg">
                      <MapPin className="text-yellow-300" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg flex items-center gap-2">
                        Endereço <span className="text-xl">📍</span>
                      </h4>
                      <p className="text-gray-200 text-lg leading-relaxed">{currentStore.address}</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start gap-4 bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="p-3 bg-gradient-to-br from-green-600 to-red-600 rounded-lg shadow-lg">
                      <Clock className="text-yellow-300" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg flex items-center gap-2">
                        Horário de Funcionamento <span className="text-xl">⏰</span>
                      </h4>
                      <p className="text-gray-200">{currentStore.hours}</p>
                    </div>
                  </motion.div>

                  <div className="mt-8 pt-4">
                    <motion.a 
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(currentStore.mapQuery)}`} 
                      target="_blank" 
                      rel="noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-300 text-red-800 px-6 py-3 rounded-xl font-bold hover:shadow-2xl transition-all shadow-lg"
                    >
                      <MapPin size={18} /> 🎅 Traçar Rota no Maps
                    </motion.a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Coluna da Direita: Mapa */}
            <motion.div 
              className="bg-gray-200 rounded-2xl h-[400px] w-full relative overflow-hidden shadow-2xl border-4 border-yellow-400"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <iframe 
                key={activeStoreIndex} 
                title={`Mapa ${currentStore.name}`}
                width="100%" 
                height="100%" 
                frameBorder="0" 
                style={{ border:0 }}
                src={`https://maps.google.com/maps?q=${encodeURIComponent(currentStore.mapQuery)}&t=&z=16&ie=UTF8&iwloc=&output=embed`} 
                loading="lazy"
                className="absolute inset-0 w-full h-full"
              ></iframe>
              
              {/* Ornamento no mapa */}
              <div className="absolute top-2 right-2 text-4xl animate-bounce z-10">
                🎁
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}