import React, { useState, useMemo, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ChevronRight, Search } from "lucide-react";
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
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-[#393C99]">Catálogo de Produtos</h2>
          <p className="text-gray-500 mt-1">Mostrando {filtered.length} produtos</p>
        </div>
      </div>

      {/* BOTÃO MOBILE PARA ABRIR/FECHAR FILTROS */}
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setFiltersOpen(!filtersOpen)}
          className="w-full flex items-center justify-between p-3 bg-[#393C99] text-white rounded-lg shadow-md"
        >
          <span className="font-semibold">Filtros</span>
          <ChevronRight
            size={20}
            className={`transition-transform ${filtersOpen ? "rotate-90" : ""}`}
          />
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* SIDEBAR FILTROS COM MENU RETRÁTIL */}
        <aside
          className={`
            w-full lg:w-64 flex-shrink-0 space-y-6 overflow-hidden transition-all duration-300
            ${filtersOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0 lg:max-h-none lg:opacity-100"}
          `}
        >
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-[#393C99] mb-4 flex items-center gap-2">Filtros</h3>

            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Categoria</label>
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="category"
                    checked={queryCategory === ""}
                    onChange={() => updateFilter("category", "")}
                    className="accent-[#393C99]"
                  />
                  <span className="text-sm text-gray-600">Todas</span>
                </label>

                {categories.map(cat => (
                  <label key={cat} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      value={cat}
                      checked={queryCategory === cat}
                      onChange={() => updateFilter("category", cat)}
                      className="accent-[#393C99]"
                    />
                    <span className="text-sm text-gray-600">{cat}</span>
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
                className="w-full py-2 text-sm text-red-500 hover:bg-red-50 rounded-lg transition"
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
            <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-dashed border-gray-300">
              <Search size={48} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-lg font-semibold text-gray-600">Nenhum produto encontrado</h3>
              <p className="text-gray-400">
                Não encontramos resultados para "{querySearch}". <br />
                Tente palavras mais genéricas como "lampada", "fita" ou "cabo".
              </p>
              <button
                onClick={() => updateFilter("q", "")}
                className="mt-4 text-[#393C99] font-semibold hover:underline"
              >
                Limpar busca
              </button>
            </div>
          )}

          {/* PAGINAÇÃO */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-12">
              <button
                disabled={page === 1}
                onClick={() => setPage(p => p - 1)}
                className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="rotate-180" size={20} />
              </button>

              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i + 1)}
                  className={`w-10 h-10 rounded-lg font-semibold transition-colors ${
                    page === i + 1
                      ? "bg-[#393C99] text-white"
                      : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                disabled={page === totalPages}
                onClick={() => setPage(p => p + 1)}
                className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}