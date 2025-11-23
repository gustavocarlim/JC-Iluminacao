import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MapPin, Clock, Building2, PlugZap, Lamp, Cable, Wrench, Lightbulb, Home } from "lucide-react";
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

export default function Hoome() {
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

  // Scroll suave para a seção de lojas
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
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="container mx-auto px-4 py-12 md:py-20 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
          {/* Texto */}
          <div className="flex-1 z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-[#FDF20E] text-[#393C99] text-xs font-bold mb-4 uppercase tracking-wide">
                Loja Física & Online
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#393C99] leading-tight mb-6">
                Iluminando seus <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#393C99] to-blue-500">melhores projetos</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
                Encontre tudo em materiais elétricos, lustres, lâmpadas e ferramentas. 
                Compre pelo site ou visite nossas lojas em Belford Roxo.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/products" className="px-8 py-3 rounded-full bg-[#393C99] text-white font-bold hover:bg-[#2a2c75] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Ver Produtos
                </Link>
                {/* Botão com scroll suave */}
                <button 
                  onClick={handleScrollToLocation}
                  className="px-8 py-3 rounded-full border-2 border-[#393C99] text-[#393C99] font-bold hover:bg-blue-50 transition-all cursor-pointer"
                >
                  Visitar Loja
                </button>
              </div>
            </motion.div>
          </div>
          {/* Imagens Hero */}
          <div className="w-full md:w-1/2 relative">
            <div className="absolute inset-0 bg-[#FDF20E] rounded-full blur-3xl opacity-20 -z-10"></div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative h-64 md:h-96 w-full rounded-2xl shadow-2xl transform md:rotate-1 overflow-hidden bg-gray-100"
            >
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
                    className={`rounded-full transition-all duration-300 border border-transparent ${
                      idx === currentImageIndex 
                        ? 'bg-white w-2.5 h-2.5 opacity-100 shadow-lg scale-110' 
                        : 'bg-white w-2.5 h-2.5 opacity-50 hover:opacity-80 hover:scale-105'
                    }`}
                  />
                ))}
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/40 to-transparent pointer-events-none z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categorias */}
      <section className="container mx-auto px-4">
      <h2 className="text-2xl font-bold text-[#393C99] mb-6">Categorias Populares</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { name: "Tomadas", icon: <PlugZap size={30} /> },
            { name: "Luminárias", icon: <Lamp size={30} /> },
            { name: "Fiação", icon: <Cable size={30} /> },
            { name: "Ferramentas", icon: <Wrench size={30} /> },
            { name: "Lâmpadas", icon: <Lightbulb size={30} /> },
            { name: "Casa", icon: <Home size={30} /> },
          ].map((cat) => (
            <Link
              key={cat.name}
              to={`/products?category=${encodeURIComponent(cat.name)}`}
              className="group flex flex-col items-center bg-white border border-gray-100 rounded-xl p-6 text-center hover:shadow-lg hover:border-[#FDF20E] transition-all duration-300"
            >
              <div className="mb-3 text-[#FDF20E] group-hover:scale-110 transition-transform">
                {React.cloneElement(cat.icon, { color: "#393C99" })}
              </div>
              <h3 className="font-semibold text-sm text-gray-700 group-hover:text-[#393C99] transition-colors">
                {cat.name}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Destaques */}
      <section className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-[#393C99] mb-6">Novidades na Loja</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {PRODUCTS.slice(0, 8).map((p, index) => (
            <div
              key={p.id}
              className={`
                ${index > 3 ? "hidden lg:block" : ""}
              `}
            >
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </section>

      {/* Location Banner */}
      <section id="location" className="bg-[#393C99] py-16 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FDF20E] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold mb-8 text-center md:text-left">Visite nossas Lojas Físicas</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Coluna da Esquerda: Seletor e Informações */}
            <div>
              <div className="flex gap-2 mb-8 bg-white/10 p-1 rounded-xl w-fit">
                {STORES.map((store, idx) => (
                  <button
                    key={store.id}
                    onClick={() => setActiveStoreIndex(idx)}
                    className={`px-6 py-2 rounded-lg font-bold text-sm transition-all ${
                      activeStoreIndex === idx 
                        ? 'bg-[#FDF20E] text-[#393C99] shadow-md' 
                        : 'text-white hover:bg-white/10'
                    }`}
                  >
                    {store.id.toUpperCase()} Iluminação
                  </button>
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
                  <h3 className="text-2xl font-bold text-[#FDF20E] flex items-center gap-2">
                    <Building2 size={24}/> {currentStore.name}
                  </h3>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/10 rounded-lg">
                      <MapPin className="text-[#FDF20E]" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Endereço</h4>
                      <p className="text-gray-300 text-lg leading-relaxed">{currentStore.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/10 rounded-lg">
                      <Clock className="text-[#FDF20E]" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Horário de Funcionamento</h4>
                      <p className="text-gray-300">{currentStore.hours}</p>
                    </div>
                  </div>
                  <div className="mt-8 pt-4">
                    <a 
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(currentStore.mapQuery)}`} 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 bg-white text-[#393C99] px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg"
                    >
                      <MapPin size={18} /> Traçar Rota no Maps
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            {/* Coluna da Direita: Mapa Dinâmico */}
            <div className="bg-gray-200 rounded-2xl h-[400px] w-full flex items-center justify-center text-gray-500 relative overflow-hidden shadow-2xl border-4 border-white/10">
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}