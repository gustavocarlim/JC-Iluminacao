import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation, useSearchParams } from "react-router-dom";
import { Search, MessageCircle, Menu, X, MapPin, Clock, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    // Mantém o scroll instantâneo ao TROCAR de página para não confundir o usuário
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  return null;
};

export const WhatsAppFloat = () => (
  <motion.a
    href="https://wa.me/5521966718009"
    target="_blank"
    rel="noreferrer"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    whileHover={{ scale: 1.1 }}
    className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[9999] bg-green-500 text-white w-12 h-12 md:w-auto md:h-auto p-0 md:p-4 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
    title="Fale conosco no WhatsApp"
  >
    {/* Ícone menor no mobile (size={24}) e maior no desktop (md:size={28}) */}
    <MessageCircle className="w-6 h-6 md:w-7 md:h-7" fill="white" />
  </motion.a>
);

export function Header() {
  const [input, setInput] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const query = searchParams.get("q");
    if (query) {
      setInput(query);
    } else {
      setInput("");
    }
  }, [searchParams, location.pathname]);

  const handleSearch = (term) => {
    const query = term.trim();
  
    if (query === "") {
      navigate("/products");
      return;
    }
  
    navigate(`/products?q=${encodeURIComponent(query)}`);
    setMenuOpen(false);
  };

  // Gerencia o clique no Início
  const handleHomeClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault(); 
      window.scrollTo({ 
        top: 0, 
        behavior: "smooth" 
      });
      setMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm border-b border-gray-100">
      <div className="bg-[#393C99] text-white text-xs py-2 px-4 text-center sm:text-left">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <span className="flex items-center gap-2">
            <MapPin size={14} className="text-[#FDF20E]" /> Belford Roxo, RJ
          </span>
          <span className="flex items-center gap-2">
            <Clock size={14} className="text-[#FDF20E]" /> Seg a Sex: 09h às 19h | Sáb: 09h às 15h
          </span>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo com Scroll Suave */}
          <Link to="/" onClick={handleHomeClick} className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-full bg-[#393C99] border-2 border-[#FDF20E] flex items-center justify-center shadow-md overflow-hidden group-hover:scale-105 transition-transform">
            <img 
              src="/assets/logo.jpeg"
              alt="Logo JC e DJ Iluminação"
              className="w-full h-full object-contain"
            />
          </div>
            <div className="leading-tight">
              <h1 className="text-xl font-bold tracking-tight text-[#393C99]">JC & DJ</h1>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Iluminação</div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8 flex-1 justify-end">
            <nav className="flex items-center gap-6 font-medium text-sm">
              {/* Link Início com Scroll Suave */}
              <Link 
                to="/" 
                onClick={handleHomeClick}
                className="hover:text-[#FDF20E] transition-colors"
              >
                Início
              </Link>
              <Link to="/products" className="hover:text-[#FDF20E] transition-colors">Produtos</Link>
              <Link 
                to="/contacts" 
                className="hover:text-[#FDF20E] transition-colors"
              >
                Lojas & Contato
              </Link>
            </nav>

            <div className="relative w-full max-w-xs">
            <input
                type="text"
                value={input}
                onChange={(e) => {
                  const value = e.target.value;
                  setInput(value);
                }}
                onKeyDown={(e) => e.key === "Enter" && handleSearch(input)}
                className="w-full bg-gray-100 text-[#393C99] rounded-full py-2 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-[#393C99]/20 transition-all"
                placeholder="Buscar produtos..."
              />
              <button
                onClick={() => handleSearch(input)}
                className="absolute right-1 top-1 p-1.5 bg-[#393C99] rounded-full text-white hover:bg-[#2a2c75] transition-colors"
              >
                <Search size={14} />
              </button>
            </div>
          </div>

          <button
            className="md:hidden p-2 text-[#393C99]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="p-4 space-y-4">
              <div className="relative">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch(input)}
                  className="w-full bg-gray-100 p-3 rounded-lg text-sm outline-none"
                  placeholder="O que você procura?"
                />
                <Search className="absolute right-3 top-3 text-gray-400" size={18} />
              </div>
              <nav className="flex flex-col gap-3">
                {/* Mobile Menu Início com Scroll Suave */}
                <Link 
                  to="/" 
                  className="font-semibold py-2 border-b border-gray-50" 
                  onClick={handleHomeClick}
                >
                  Início
                </Link>
                <Link to="/products" className="font-semibold py-2 border-b border-gray-50" onClick={() => setMenuOpen(false)}>Ver Catálogo Completo</Link>
                <Link to="/contacts" className="font-semibold py-2 border-b border-gray-50" onClick={() => setMenuOpen(false)}>Lojas & Contato</Link>
                <a href="https://wa.me/5521966718009" className="font-semibold py-2 text-green-600 flex items-center gap-2">
                  <MessageCircle size={18} /> Falar no WhatsApp
                </a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export function Footer() {
    const location = useLocation();

    const handleHomeClick = (e) => {
      // Se estiver na página inicial
      if (location.pathname === "/") {
        e.preventDefault(); // Impede o recarregamento da rota
        window.scrollTo({ 
          top: 0, 
          behavior: "smooth" // Animação suave
        });
      }
      // Se não estiver na home, o link funcionará normalmente
    };

    return (
    <footer className="bg-[#393C99] text-gray-100 pt-12 pb-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 border-b border-[#4d50ad] pb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#FDF20E] text-[#393C99] flex items-center justify-center font-bold">JC</div>
              <h3 className="font-bold text-lg text-white">JC & DJ ILUMINAÇÃO</h3>
            </div>
            <p className="text-sm text-gray-300 mb-4 leading-relaxed">
              Sua loja especializada em materiais elétricos e soluções completas em iluminação.
              Atendimento técnico e produtos de qualidade.
            </p>
            <p className="text-xs text-gray-300 mt-2">CNPJ: 52.371.691/0001-33</p>
          </div>

          <div>
            <h4 className="text-[#FDF20E] font-bold mb-4 uppercase text-sm tracking-wider">Fale Conosco</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#FDF20E]" />
                <a href="tel:+5521964126213" className="hover:text-white transition-colors">JC: (21) 96412-6213</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#FDF20E]" />
                <a href="tel:+5521969251237" className="hover:text-white transition-colors">DJ: (21) 96925-1237</a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={16} className="text-[#FDF20E]" />
                <span>Atendimento via WhatsApp</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#FDF20E] font-bold mb-4 uppercase text-sm tracking-wider">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products" className="hover:text-[#FDF20E] transition-colors">Catálogo de Produtos</Link></li>
              <li>
                {/* Link Atualizado com o manipulador de clique */}
                <Link 
                    to="/" 
                    onClick={handleHomeClick}
                    className="hover:text-[#FDF20E] transition-colors"
                >
                    Página Inicial
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-xs text-gray-400">
          <p>© {new Date().getFullYear()} JC & DJ Iluminação. Todos os direitos reservados.</p>
          <p className="mt-1">Belford Roxo, Rio de Janeiro.</p>
        </div>
      </div>
    </footer>
  );
}

export function AppShell({ children }) {
  return (
    <div className="min-h-screen bg-[#FBFBFA] text-[#393C99] flex flex-col font-sans selection:bg-[#FDF20E] selection:text-[#393C99]">
      <Header />
      <main className="flex-1 w-full pb-16 md:pb-0">{children}</main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}