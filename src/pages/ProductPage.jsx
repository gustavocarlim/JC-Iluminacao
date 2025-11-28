import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ChevronRight, Star, MessageCircle, Gift, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { PRODUCTS } from "../data/constants";

export default function ProductPage() {
  const { id } = useParams();
  const product = PRODUCTS.find(p => String(p.id) === String(id));
  const navigate = useNavigate();

  if (!product) return (
    <div className="container mx-auto px-4 py-20 text-center">
      <div className="text-6xl mb-4">🎄</div>
      <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-green-700">
        Produto não encontrado
      </h2>
      <p className="text-gray-500 mt-2">O produto que você procurou não existe ou foi removido.</p>
      <button 
        onClick={() => navigate('/products')} 
        className="mt-6 px-6 py-2 bg-gradient-to-r from-red-600 to-green-600 text-white rounded-full font-semibold hover:shadow-lg transition"
      >
        🎁 Voltar para a loja
      </button>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-4 md:py-8">
      {/* Breadcrumbs Natalino */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6 overflow-x-auto whitespace-nowrap pb-2">
        <Link to="/" className="hover:text-red-600 transition-colors">🏠 Início</Link>
        <ChevronRight size={14} className="flex-shrink-0 text-green-600" />
        <Link to="/products" className="hover:text-red-600 transition-colors">🎁 Produtos</Link>
        <ChevronRight size={14} className="flex-shrink-0 text-green-600" />
        <span className="text-red-700 font-semibold truncate max-w-[200px]">{product.name}</span>
      </nav>

      {/* Card Principal Natalino */}
      <div className="bg-white rounded-3xl shadow-xl border-2 border-yellow-200 overflow-hidden relative">
        {/* Decoração de canto */}
        <div className="absolute top-4 right-4 text-4xl z-10 opacity-20">🎄</div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          
          {/* Coluna da Imagem */}
          <div className="p-8 lg:p-12 bg-gradient-to-br from-red-50 to-green-50 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-red-200 relative">
            {/* Botão de Voltar Mobile */}
            <button 
              onClick={() => navigate(-1)}
              className="absolute top-4 left-4 lg:hidden p-2 bg-white rounded-full shadow-md text-red-600 border border-red-200"
            >
              <ChevronRight className="rotate-180" size={20} />
            </button>

            {/* Badge Oferta Natalina */}
            <div className="absolute top-4 right-4 bg-gradient-to-r from-red-600 to-green-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1 z-20">
              <Gift size={12} />
              Oferta Natal
            </div>

            <motion.img 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              src={product.image} 
              alt={product.name} 
              className="w-full max-w-md object-contain mix-blend-multiply max-h-[400px]"
              onError={(e) => e.target.src = 'https://placehold.co/600x600?text=Imagem+Produto'}
            />

            {/* Decoração de presente */}
            <div className="absolute bottom-4 left-4 text-3xl opacity-20">🎁</div>
          </div>

          {/* Coluna dos Detalhes */}
          <div className="p-6 md:p-8 lg:p-12 flex flex-col justify-center h-full bg-gradient-to-br from-white to-red-50/30">
            <div>
              <span className="inline-flex items-center gap-1 text-xs md:text-sm font-bold text-white bg-gradient-to-r from-red-600 to-green-600 px-3 py-1 rounded-full w-fit mb-4 uppercase tracking-wide shadow-md">
                <Sparkles size={12} />
                {product.category}
              </span>
              
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-2 mb-6">
                <div className="flex text-yellow-400">
                  {[1,2,3,4,5].map(i => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <span className="text-sm text-gray-500">⭐ (Item Recomendado)</span>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-green-50 p-4 rounded-xl border-2 border-red-200 mb-6">
                <div className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-green-700">
                  R$ {product.price.toFixed(2).replace('.', ',')}
                </div>
                <span className="block text-sm font-semibold text-gray-600 mt-1">
                  🎄 Promoção de Natal | À vista ou no cartão
                </span>
              </div>

              <p className="text-gray-600 leading-relaxed mb-8 border-t-2 border-b-2 border-red-100 py-6 whitespace-pre-line text-sm md:text-base">
                {product.description || "Sem descrição disponível para este produto. Entre em contato para mais detalhes técnicos."}
              </p>
            </div>

            {/* Área de Ação (Botão WhatsApp) */}
            <div className="space-y-4 mt-auto">
              <a 
                href={`https://wa.me/5521966718009?text=${encodeURIComponent(`Olá! 🎄 Gostaria de comprar o produto: ${product.name}`)}`}
                target="_blank" 
                rel="noreferrer" 
                className="w-full py-4 rounded-xl bg-gradient-to-r from-red-600 to-green-600 hover:from-green-600 hover:to-red-600 text-white font-bold text-lg flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 active:scale-95"
              >
                <MessageCircle size={24} fill="white" />
                🎅 Comprar pelo WhatsApp
              </a>
              <div className="text-center text-xs text-gray-500 flex items-center justify-center gap-1">
                <Gift size={12} className="text-red-600" />
                Fale diretamente com um vendedor da JC & DJ
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Sugestão de Produtos Relacionados Natalino */}
      <div className="mt-12 md:mt-16 mb-8">
        <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-green-700 mb-6 px-4 border-l-4 border-yellow-400 flex items-center gap-2">
          <Sparkles className="text-yellow-500" size={24} />
          Você também pode gostar 🎁
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {PRODUCTS.filter(p => p.id !== product.id && p.category === product.category).slice(0, 4).map(p => (
            <Link 
              key={p.id} 
              to={`/product/${p.id}`} 
              onClick={() => window.scrollTo(0,0)}
              className="block bg-white p-4 rounded-xl shadow-sm border-2 border-red-200 hover:border-green-400 transition-all group relative"
            >
              {/* Mini decoração */}
              <div className="absolute top-2 right-2 text-lg opacity-30 group-hover:opacity-50 transition-opacity">
                🎄
              </div>

              <div className="aspect-square mb-3 overflow-hidden rounded-lg bg-gradient-to-br from-red-50 to-green-50 p-2">
                <img 
                  src={p.image} 
                  alt={p.name} 
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform" 
                  onError={(e) => e.target.src='https://placehold.co/200'}
                />
              </div>

              <p className="font-semibold text-xs md:text-sm text-gray-700 line-clamp-2 mb-1 group-hover:text-red-700 transition-colors">
                {p.name}
              </p>
              
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-green-700 font-bold text-sm">
                R$ {p.price.toFixed(2).replace('.', ',')}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Mensagem Natalina */}
      <div className="text-center mt-8 p-4 bg-gradient-to-r from-red-100 via-green-100 to-red-100 rounded-xl border-2 border-yellow-300">
        <p className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-green-700">
          🎄 Aproveite nossas ofertas especiais de Natal! ✨
        </p>
      </div>
    </div>
  );
}