import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation, useSearchParams } from "react-router-dom";
import { Search, MessageCircle, Menu, X, MapPin, Clock, Phone, Snowflake, Gift } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Componente de Flocos de Neve
const Snowflakes = () => {
  const snowflakes = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDuration: `${Math.random() * 3 + 5}s`,
    animationDelay: `${Math.random() * 5}s`,
    size: Math.random() * 10 + 5,
    opacity: Math.random() * 0.6 + 0.3
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {snowflakes.map((flake) => (
        <motion.div
          key={flake.id}
          initial={{ y: -20, x: 0 }}
          animate={{
            y: "100vh",
            x: [0, Math.random() * 100 - 50, 0],
          }}
          transition={{
            duration: parseFloat(flake.animationDuration),
            delay: parseFloat(flake.animationDelay),
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            position: "absolute",
            left: flake.left,
            top: -20,
            opacity: flake.opacity
          }}
        >
          <Snowflake size={flake.size} className="text-white drop-shadow-lg" />
        </motion.div>
      ))}
    </div>
  );
};

export const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
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
    className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[9999] bg-gradient-to-br from-red-600 to-green-600 text-white w-12 h-12 md:w-auto md:h-auto p-0 md:p-4 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center ring-4 ring-yellow-300/50"
    title="Fale conosco no WhatsApp"
  >
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
    <header className="sticky top-0 z-40 bg-gradient-to-r from-red-700 via-green-700 to-red-700 shadow-xl border-b-4 border-yellow-400">
      {/* Barra de Guirlanda */}
      <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-red-600 via-green-600 to-red-600 opacity-60"></div>
      
      {/* Top Bar Natalina */}
      <div className="bg-gradient-to-r from-red-800 to-green-800 text-white text-xs py-2 px-4 text-center sm:text-left relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIi8+PC9zdmc+')] opacity-30"></div>
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 relative z-10">
          <span className="flex items-center gap-2 animate-pulse">
            <Gift size={14} className="text-yellow-300" /> 🎄 Ofertas Especiais de Natal! 🎅
          </span>
          <span className="flex items-center gap-2">
            <Clock size={14} className="text-yellow-300" /> Seg a Sex: 09h às 19h | Sáb: 09h às 15h
          </span>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 relative">
        <div className="flex items-center justify-between gap-4">
          {/* Logo Natalina */}
          <Link to="/" onClick={handleHomeClick} className="flex items-center gap-3 group">
            <motion.div 
              className="w-12 h-12 rounded-full bg-white border-4 border-yellow-400 flex items-center justify-center shadow-lg overflow-hidden relative"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="/assets/logo.jpeg"
                alt="Logo JC e DJ Iluminação"
                className="w-full h-full object-contain"
              />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md">
                🎅
              </div>
            </motion.div>
            <div className="leading-tight">
              <h1 className="text-xl font-bold tracking-tight text-white drop-shadow-md">JC & DJ</h1>
              <div className="text-xs font-semibold text-yellow-300 uppercase tracking-wider">Iluminação 🎄</div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8 flex-1 justify-end">
            <nav className="flex items-center gap-6 font-medium text-sm text-white">
              <Link 
                to="/" 
                onClick={handleHomeClick}
                className="hover:text-yellow-300 transition-colors relative group"
              >
                Início
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all"></span>
              </Link>
              <Link to="/products" className="hover:text-yellow-300 transition-colors relative group">
                Produtos
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all"></span>
              </Link>
              <Link 
                to="/contacts" 
                className="hover:text-yellow-300 transition-colors relative group"
              >
                Lojas & Contato
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all"></span>
              </Link>
            </nav>

            <div className="relative w-full max-w-xs">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch(input)}
                className="w-full bg-white/95 text-red-800 rounded-full py-2 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all placeholder-red-400/60 shadow-md"
                placeholder="🎁 Buscar produtos..."
              />
              <button
                onClick={() => handleSearch(input)}
                className="absolute right-1 top-1 p-1.5 bg-gradient-to-r from-red-600 to-green-600 rounded-full text-white hover:scale-110 transition-transform shadow-md"
              >
                <Search size={14} />
              </button>
            </div>
          </div>

          <button
            className="md:hidden p-2 text-white bg-red-600 rounded-lg shadow-md"
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
            className="md:hidden bg-gradient-to-b from-red-700 to-green-700 border-t-2 border-yellow-400 overflow-hidden"
          >
            <div className="p-4 space-y-4">
              <div className="relative">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch(input)}
                  className="w-full bg-white p-3 rounded-lg text-sm outline-none text-red-800 placeholder-red-400/60 shadow-md"
                  placeholder="🎁 O que você procura?"
                />
                <Search className="absolute right-3 top-3 text-red-600" size={18} />
              </div>
              <nav className="flex flex-col gap-3">
                <Link 
                  to="/" 
                  className="font-semibold py-2 border-b border-white/20 text-white hover:text-yellow-300 transition-colors" 
                  onClick={handleHomeClick}
                >
                  🏠 Início
                </Link>
                <Link to="/products" className="font-semibold py-2 border-b border-white/20 text-white hover:text-yellow-300 transition-colors" onClick={() => setMenuOpen(false)}>
                  🎁 Ver Catálogo Completo
                </Link>
                <Link to="/contacts" className="font-semibold py-2 border-b border-white/20 text-white hover:text-yellow-300 transition-colors" onClick={() => setMenuOpen(false)}>
                  📍 Lojas & Contato
                </Link>
                <a href="https://wa.me/5521966718009" className="font-semibold py-2 text-yellow-300 flex items-center gap-2">
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
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ 
        top: 0, 
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-red-800 via-green-800 to-red-900 text-gray-100 pt-12 pb-6 mt-auto relative overflow-hidden">
      {/* Decorações de Neve no Footer */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTMwIDEwbDIgNmg2bC01IDRsMyA2LTYtNS02IDVsMy02LTUtNGg2eiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIi8+PC9zdmc+')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 border-b border-white/20 pb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-yellow-400 text-red-800 flex items-center justify-center font-bold shadow-md">
                🎄
              </div>
              <h3 className="font-bold text-lg text-white drop-shadow-md">JC & DJ ILUMINAÇÃO</h3>
            </div>
            <p className="text-sm text-gray-200 mb-4 leading-relaxed">
              Sua loja especializada em materiais elétricos e soluções completas em iluminação.
              Atendimento técnico e produtos de qualidade. 🎅
            </p>
            <p className="text-xs text-gray-300 mt-2">CNPJ: 52.371.691/0001-33</p>
          </div>

          <div>
            <h4 className="text-yellow-300 font-bold mb-4 uppercase text-sm tracking-wider flex items-center gap-2">
              <Phone size={16} /> Fale Conosco
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-yellow-300" />
                <a href="tel:+5521964126213" className="hover:text-yellow-300 transition-colors">JC: (21) 96412-6213</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-yellow-300" />
                <a href="tel:+5521969251237" className="hover:text-yellow-300 transition-colors">DJ: (21) 96925-1237</a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={16} className="text-yellow-300" />
                <span>Atendimento via WhatsApp</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-yellow-300 font-bold mb-4 uppercase text-sm tracking-wider flex items-center gap-2">
              <Gift size={16} /> Links Rápidos
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products" className="hover:text-yellow-300 transition-colors flex items-center gap-2">
                  🎁 Catálogo de Produtos
                </Link>
              </li>
              <li>
                <Link 
                  to="/" 
                  onClick={handleHomeClick}
                  className="hover:text-yellow-300 transition-colors flex items-center gap-2"
                >
                  🏠 Página Inicial
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-xs text-gray-300">
          <p className="flex items-center justify-center gap-2">
            © {new Date().getFullYear()} JC & DJ Iluminação. Todos os direitos reservados. 
            <span className="text-yellow-300">🎄✨</span>
          </p>
          <p className="mt-1">Belford Roxo, Rio de Janeiro. 🎅 Feliz Natal!</p>
        </div>
      </div>
    </footer>
  );
}

export function AppShell({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-white to-green-50 text-[#393C99] flex flex-col font-sans selection:bg-yellow-300 selection:text-red-800 relative">
      <Snowflakes />
      <Header />
      <main className="flex-1 w-full pb-16 md:pb-0 relative z-10">{children}</main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}