import React from "react";
import { Link } from "react-router-dom";
import { MessageCircle, Gift } from "lucide-react";
import { motion } from "framer-motion";

export default function ProductCard({ product }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      
      whileHover={{ y: -5 }}
      
      className="bg-white rounded-2xl shadow-sm hover:shadow-xl border-2 border-red-200 hover:border-green-400 overflow-hidden flex flex-col group h-full relative"
    >
      {/* Decoração Natalina no Canto */}
      <div className="absolute top-2 right-2 text-2xl z-10 opacity-20 group-hover:opacity-40 transition-opacity">
        🎄
      </div>

      <Link to={`/product/${product.id}`} className="relative block overflow-hidden bg-gradient-to-br from-red-50 to-green-50 p-6">
        <div className="aspect-square flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="object-contain w-full h-full mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
            style={{ minHeight: '150px' }} 
            onError={(e) => e.target.src = 'https://placehold.co/400x400?text=Imagem+Indisponivel'}
          />
        </div>
        
        {/* Badge Oferta Natalina */}
        <div className="absolute top-3 left-3 bg-gradient-to-r from-red-600 to-green-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-md flex items-center gap-1">
          <Gift size={10} />
          Oferta
        </div>
      </Link>

      <div className="p-4 flex-1 flex flex-col">
        <div className="text-xs text-red-600 mb-1 uppercase tracking-wider font-semibold">
          {product.category}
        </div>
        
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="font-bold text-gray-800 text-lg leading-snug mb-2 group-hover:text-red-700 transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        
        <div className="mt-auto pt-4 border-t border-red-100">
          <div className="flex items-end justify-between gap-2">
            <div>
              <span className="text-xs text-gray-400 line-through">
                R$ {(product.price * 1.2).toFixed(2).replace('.', ',')}
              </span>
              <div className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-green-700">
                R$ {product.price.toFixed(2).replace('.', ',')}
              </div>
            </div>
            
            {/* Botão WhatsApp Natalino */}
            <a
              href={`https://wa.me/5521966718009?text=${encodeURIComponent(`Olá! Tenho interesse no produto: ${product.name}`)}`}
              target="_blank"
              rel="noreferrer"
              className="bg-gradient-to-r from-red-600 to-green-600 p-2.5 rounded-lg text-white hover:shadow-lg transition-all shadow-sm transform hover:scale-105"
              title="Comprar via WhatsApp"
            >
              <MessageCircle size={20} fill="white" />
            </a>
          </div>
        </div>
      </div>

      {/* Decoração de Presente no Canto Inferior */}
      <div className="absolute bottom-2 left-2 text-lg opacity-10 group-hover:opacity-30 transition-opacity">
        🎁
      </div>
    </motion.article>
  );
}