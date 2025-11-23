import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ChevronRight, Star, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { PRODUCTS } from "../data/constants";

export default function ProductPage() {
  const { id } = useParams();
  // Garante que a comparação seja feita como string para evitar erros de tipagem
  const product = PRODUCTS.find(p => String(p.id) === String(id));
  const navigate = useNavigate();

  if (!product) return (
    <div className="container mx-auto px-4 py-20 text-center">
      <h2 className="text-2xl font-bold text-gray-800">Produto não encontrado</h2>
      <p className="text-gray-500 mt-2">O produto que você procurou não existe ou foi removido.</p>
      <button 
        onClick={() => navigate('/products')} 
        className="mt-6 px-6 py-2 bg-[#393C99] text-white rounded-full font-semibold hover:bg-[#2a2c75] transition"
      >
        Voltar para a loja
      </button>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-4 md:py-8">
      {/* Breadcrumbs - Navegação de trilha */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6 overflow-x-auto whitespace-nowrap pb-2">
        <Link to="/" className="hover:text-[#393C99]">Início</Link>
        <ChevronRight size={14} className="flex-shrink-0" />
        <Link to="/products" className="hover:text-[#393C99]">Produtos</Link>
        <ChevronRight size={14} className="flex-shrink-0" />
        <span className="text-[#393C99] font-semibold truncate max-w-[200px]">{product.name}</span>
      </nav>

      <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          
          {/* Coluna da Imagem */}
          <div className="p-8 lg:p-12 bg-gray-50 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-gray-100 relative">
             {/* Botão de Voltar Mobile (opcional, visualmente agradável) */}
             <button 
                onClick={() => navigate(-1)}
                className="absolute top-4 left-4 lg:hidden p-2 bg-white rounded-full shadow-sm text-gray-500"
             >
                <ChevronRight className="rotate-180" size={20} />
             </button>

            <motion.img 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              src={product.image} 
              alt={product.name} 
              className="w-full max-w-md object-contain mix-blend-multiply max-h-[400px]"
              onError={(e) => e.target.src = 'https://placehold.co/600x600?text=Imagem+Produto'}
            />
          </div>

          {/* Coluna dos Detalhes */}
          <div className="p-6 md:p-8 lg:p-12 flex flex-col justify-center h-full">
            <div>
              <span className="inline-block text-xs md:text-sm font-bold text-[#393C99] bg-blue-50 px-3 py-1 rounded-full w-fit mb-4 uppercase tracking-wide">
                {product.category}
              </span>
              
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-2 mb-6">
                <div className="flex text-[#FDF20E]">
                  {[1,2,3,4,5].map(i => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <span className="text-sm text-gray-500">(Item Recomendado)</span>
              </div>

              <div className="text-3xl md:text-4xl font-extrabold text-[#393C99] mb-6">
                R$ {product.price.toFixed(2).replace('.', ',')}
                <span className="block text-sm font-normal text-gray-500 mt-1">À vista ou no cartão</span>
              </div>

              <p className="text-gray-600 leading-relaxed mb-8 border-t border-b border-gray-100 py-6 whitespace-pre-line text-sm md:text-base">
                {product.description || "Sem descrição disponível para este produto. Entre em contato para mais detalhes técnicos."}
              </p>
            </div>

            {/* Área de Ação (Botão WhatsApp) */}
            <div className="space-y-4 mt-auto">
              <a 
                href={`https://wa.me/5521966718009?text=${encodeURIComponent(`Olá! Gostaria de comprar o produto: ${product.name}`)}`}
                target="_blank" 
                rel="noreferrer" 
                className="w-full py-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-lg flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 active:scale-95"
              >
                <MessageCircle size={24} />
                Comprar pelo WhatsApp
              </a>
              <div className="text-center text-xs text-gray-400">
                Fale diretamente com um vendedor da JC & DJ.
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Sugestão de Produtos Relacionados */}
      <div className="mt-12 md:mt-16 mb-8">
         <h3 className="text-xl font-bold text-gray-800 mb-6 px-2 border-l-4 border-[#FDF20E]">
            Você também pode gostar
         </h3>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
           {PRODUCTS.filter(p => p.id !== product.id && p.category === product.category).slice(0, 4).map(p => (
             <Link 
                key={p.id} 
                to={`/product/${p.id}`} 
                onClick={() => window.scrollTo(0,0)}
                className="block bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:border-[#393C99] transition-all group"
             >
                <div className="aspect-square mb-3 overflow-hidden rounded-lg bg-gray-50 p-2">
                    <img 
                        src={p.image} 
                        alt={p.name} 
                        className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform" 
                        onError={(e) => e.target.src='https://placehold.co/200'}
                    />
                </div>
                <p className="font-semibold text-xs md:text-sm text-gray-700 line-clamp-2 mb-1 group-hover:text-[#393C99]">
                    {p.name}
                </p>
                <p className="text-[#393C99] font-bold text-sm">
                    R$ {p.price.toFixed(2).replace('.', ',')}
                </p>
             </Link>
           ))}
         </div>
      </div>
    </div>
  );
}