import React, { useState, useMemo, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ChevronRight, Search, Gift, Sparkles, Filter } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { PRODUCTS } from "../data/constants";

const normalizeText = (text) => {
  if (!text) return "";
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
};

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const querySearch = searchParams.get("q") || "";
  const queryCategory = searchParams.get("category") || "";

  const [page, setPage] = useState(1);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const perPage = 9;

  const categories = useMemo(() => Array.from(new Set(PRODUCTS.map(p => p.category))), []);

  const filtered = useMemo(() => {
    return PRODUCTS.filter(p => {
      const normalizedProductName = normalizeText(p.name);
      const normalizedQuery = normalizeText(querySearch);

      const nameMatch = normalizedProductName.includes(normalizedQuery);

      const tagsMatch = p.keywords?.some(tag => normalizeText(tag).includes(normalizedQuery));

      const matchesSearch = nameMatch || tagsMatch;
      const matchesCategory = queryCategory ? p.category === queryCategory : true;

      return matchesSearch && matchesCategory;
    });
  }, [querySearch, queryCategory]);

  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page, querySearch, queryCategory]);

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) newParams.set(key, value);
    else newParams.delete(key);

    setPage(1);
    setSearchParams(newParams);
  };

  return (
    <div className="container mx-auto px-4 py-8 relative">
      {/* Decorações de fundo sutis */}
      <div className="absolute top-0 left-0 text-6xl opacity-5">🎄</div>
      <div className="absolute top-0 right-0 text-6xl opacity-5">🎅</div>

      {/* Header Natalino */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8 relative z-10">
        <div>
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-green-700 flex items-center gap-2">
            <Gift size={32} className="text-red-600" />
            Catálogo de Produtos 🎄
          </h2>
          <p className="text-gray-600 mt-1 flex items-center gap-2">
            <Sparkles size={16} className="text-yellow-500" />
            Mostrando {filtered.length} produtos especiais
          </p>
        </div>
      </div>

      {/* BOTÃO MOBILE PARA ABRIR/FECHAR FILTROS */}
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setFiltersOpen(!filtersOpen)}
          className="w-full flex items-center justify-between p-3 bg-gradient-to-r from-red-600 to-green-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all"
        >
          <span className="font-semibold flex items-center gap-2">
            <Filter size={18} />
            Filtros
          </span>
          <ChevronRight
            size={20}
            className={`transition-transform ${filtersOpen ? "rotate-90" : ""}`}
          />
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* SIDEBAR FILTROS NATALINO */}
        <aside
          className={`
            w-full lg:w-64 flex-shrink-0 space-y-6 overflow-hidden transition-all duration-300
            ${filtersOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0 lg:max-h-none lg:opacity-100"}
          `}
        >
          <div className="bg-white p-5 rounded-xl shadow-md border-2 border-red-200 relative overflow-hidden">
            {/* Decoração */}
            <div className="absolute top-2 right-2 text-2xl opacity-20">🎁</div>
            
            <h3 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-green-700 mb-4 flex items-center gap-2 relative z-10">
              <Filter size={18} className="text-red-600" />
              Filtros
            </h3>

            <div className="mb-4 relative z-10">
              <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <Sparkles size={14} className="text-yellow-500" />
                Categoria
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input
                    type="radio"
                    name="category"
                    checked={queryCategory === ""}
                    onChange={() => updateFilter("category", "")}
                    className="accent-red-600"
                  />
                  <span className="text-sm text-gray-600 group-hover:text-red-700 transition-colors">
                    🎄 Todas
                  </span>
                </label>

                {categories.map(cat => (
                  <label key={cat} className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="radio"
                      name="category"
                      value={cat}
                      checked={queryCategory === cat}
                      onChange={() => updateFilter("category", cat)}
                      className="accent-green-600"
                    />
                    <span className="text-sm text-gray-600 group-hover:text-green-700 transition-colors">
                      {cat}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {(querySearch || queryCategory) && (
              <button
                onClick={() => {
                  const newParams = new URLSearchParams();
                  setSearchParams(newParams);
                  setPage(1);
                }}
                className="w-full py-2 text-sm text-white bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 rounded-lg transition-all shadow-sm relative z-10"
              >
                Limpar Filtros
              </button>
            )}
          </div>
        </aside>

        {/* LISTA DE PRODUTOS */}
        <section className="flex-1">
          {paginated.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginated.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-xl shadow-md border-2 border-dashed border-red-300 relative overflow-hidden">
              <div className="absolute top-4 left-4 text-4xl opacity-10">🎄</div>
              <div className="absolute bottom-4 right-4 text-4xl opacity-10">🎁</div>
              
              <div className="relative z-10">
                <Search size={48} className="mx-auto text-red-300 mb-4" />
                <h3 className="text-lg font-semibold text-gray-700">Nenhum produto encontrado 😔</h3>
                <p className="text-gray-500 mt-2">
                  Não encontramos resultados para "{querySearch}". <br />
                  Tente palavras mais genéricas como "lampada", "fita" ou "cabo".
                </p>
                <button
                  onClick={() => updateFilter("q", "")}
                  className="mt-4 px-6 py-2 bg-gradient-to-r from-red-600 to-green-600 text-white font-semibold rounded-full hover:shadow-lg transition-all"
                >
                  🎄 Limpar busca
                </button>
              </div>
            </div>
          )}

          {/* PAGINAÇÃO NATALINA */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-12 flex-wrap">
              <button
                disabled={page === 1}
                onClick={() => setPage(p => p - 1)}
                className="p-2 rounded-lg border-2 border-red-200 hover:bg-red-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <ChevronRight className="rotate-180 text-red-600" size={20} />
              </button>

              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i + 1)}
                  className={`w-10 h-10 rounded-lg font-semibold transition-all ${
                    page === i + 1
                      ? "bg-gradient-to-r from-red-600 to-green-600 text-white shadow-md"
                      : "bg-white text-gray-600 border-2 border-red-200 hover:bg-red-50 hover:border-green-400"
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                disabled={page === totalPages}
                onClick={() => setPage(p => p + 1)}
                className="p-2 rounded-lg border-2 border-red-200 hover:bg-red-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <ChevronRight className="text-red-600" size={20} />
              </button>
            </div>
          )}
        </section>
      </div>

      {/* Mensagem Natalina no Final */}
      <div className="text-center mt-12 p-4 bg-gradient-to-r from-red-100 via-green-100 to-red-100 rounded-xl border-2 border-yellow-300 max-w-2xl mx-auto">
        <p className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-green-700">
          🎄 Encontre os melhores produtos para iluminar seu Natal! ✨
        </p>
      </div>
    </div>
  );
}