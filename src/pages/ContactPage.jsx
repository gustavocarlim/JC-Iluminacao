import React from "react";
import { MapPin, Phone, Mail, MessageCircle, Clock, Building2 } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const stores = [
    {
      id: "jc",
      name: "JC Iluminação",
      description:
        "Nossa matriz especializada em iluminação residencial e grandes projetos. Venha conhecer nosso showroom completo.",
      address: "Av. Adamastor, 354 - Xavantes, Belford Roxo - RJ, 26160-000",
      phone: "(21) 96412-6213",
      whatsapp: "5521964126213",
      image: "/assets/jc.jpeg",
    },
    {
      id: "dj",
      name: "DJ Iluminação",
      description:
        "Focada em materiais elétricos e soluções rápidas para o dia a dia. Tudo o que você precisa para sua instalação.",
      address: "R. Felipe Antônio Lopes Pinto, 96 - Xavantes, Belford Roxo - RJ, 26125-063",
      phone: "(21) 96925-1237",
      whatsapp: "5521969251237",
      image: "/assets/teste6.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-[#393C99] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Nossas Lojas</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Dois endereços, a mesma qualidade. Encontre a loja mais próxima de você ou entre em contato online.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto mb-12 border-t-4 border-[#FDF20E]"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                <Mail className="text-[#393C99]" /> Orçamentos & Cotações
              </h3>
              <p className="text-gray-600 mb-4">
                Precisa de um orçamento para sua obra ou projeto? Envie sua lista por e-mail.
              </p>
              <a
                href="mailto:contato@jciluminacao.com.br"
                className="text-lg font-semibold text-[#393C99] hover:underline"
              >
                compras@jciluminacao.com
              </a>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h4 className="font-bold text-gray-700 mb-2 flex items-center gap-2">
                <Building2 size={20} /> Dados da Empresa
              </h4>
              <p className="text-sm text-gray-500 mb-1">Razão Social: JC Iluminação LTDA</p>
              <p className="text-lg font-mono text-gray-800">CNPJ: 52.371.691/0001-33</p>
              <p className="text-xs text-gray-400 mt-2">*Ambas as lojas (JC e DJ) operam sob o mesmo registro.</p>
            </div>
          </div>
        </motion.div>

        {/* GRID NIVELADO */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch">
          {stores.map((store, index) => (
            <motion.div
              key={store.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-100 flex flex-col h-full"
            >
              <div className="h-64 overflow-hidden relative group shrink-0">
                <img
                  src={store.image}
                  alt={`Fachada ${store.name}`}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <h2 className="text-3xl font-bold text-white">{store.name}</h2>
                </div>
              </div>

              {/* BLOCOS NIVELADOS */}
              <div className="p-8 flex flex-col flex-1">
                <p className="text-gray-600 mb-6 min-h-[60px]">{store.description}</p>

                <div className="space-y-4 flex-1">
                  <div className="flex items-start gap-3 text-gray-700 min-h-[3rem]">
                    <MapPin className="text-[#393C99] shrink-0 mt-1" />
                    <span>{store.address}</span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-700">
                    <Phone className="text-[#393C99] shrink-0" />
                    <span>{store.phone}</span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-700">
                    <Clock className="text-[#393C99] shrink-0" />
                    <span>Seg a Sex: 09h às 19h | Sáb: 09h às 15h</span>
                  </div>
                </div>

                <hr className="my-6 border-gray-100" />

                <a
                  href={`https://wa.me/${store.whatsapp}?text=${encodeURIComponent(
                    `Olá, vi o site e gostaria de falar com a ${store.name}`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl font-bold transition-colors shadow-sm mt-auto"
                >
                  <MessageCircle size={20} /> Chamar no WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
