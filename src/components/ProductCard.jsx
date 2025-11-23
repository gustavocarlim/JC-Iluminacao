import React from "react";
import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function ProductCard({ product }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      
      whileHover={{ y: -5 }}
      
      className="bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden flex flex-col group h-full"
    >
      <Link to={`/product/${product.id}`} className="relative block overflow-hidden bg-gray-50 p-6">
        <div className="aspect-square flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="object-contain w-full h-full mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
            style={{ minHeight: '150px' }} 
            onError={(e) => e.target.src = 'https://placehold.co/400x400?text=Imagem+Indisponivel'}
          />
        </div>
        <div className="absolute top-3 left-3 bg-[#393C99] text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide">
          Oferta
        </div>
      </Link>

      <div className="p-4 flex-1 flex flex-col">
        <div className="text-xs text-gray-500 mb-1 uppercase tracking-wider font-semibold">{product.category}</div>
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="font-bold text-gray-800 text-lg leading-snug mb-2 group-hover:text-[#393C99] transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        
        <div className="mt-auto pt-4 border-t border-gray-50">
          <div className="flex items-end justify-between gap-2">
            <div>
              <span className="text-xs text-gray-400 line-through">R$ {(product.price * 1.2).toFixed(2).replace('.', ',')}</span>
              <div className="text-xl font-extrabold text-[#393C99]">
                R$ {product.price.toFixed(2).replace('.', ',')}
              </div>
            </div>
            <a
              href={`https://wa.me/5517996625883?text=${encodeURIComponent(`Olá! Tenho interesse no produto: ${product.name}`)}`}
              target="_blank"
              rel="noreferrer"
              className="bg-[#FDF20E] p-2.5 rounded-lg text-[#393C99] hover:bg-[#e6dc0d] transition-colors shadow-sm"
              title="Comprar via WhatsApp"
            >
              <MessageCircle size={20} />
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}