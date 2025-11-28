import React from "react";
import { MapPin, Phone, Mail, MessageCircle, Clock, Building2, Gift, Sparkles } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-white to-green-50 pb-20">
      {/* Hero Banner Natalino */}
      <div className="bg-gradient-to-r from-red-700 via-green-700 to-red-700 text-white py-16 relative overflow-hidden">
        {/* Decorações de fundo */}
        <div className="absolute top-0 left-0 text-6xl opacity-10">🎄</div>
        <div className="absolute top-0 right-0 text-6xl opacity-10">🎅</div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-6xl opacity-10">⭐</div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
              <Sparkles className="text-yellow-300" size={36} />
              Nossas Lojas 🎄
            </h1>
            <p className="text-gray-100 text-lg max-w-2xl mx-auto">
              Dois endereços, a mesma qualidade. Encontre a loja mais próxima de você ou entre em contato online. 
              🎅 Atendimento especial de Natal!
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-8">
        {/* Card de Orçamentos Natalino */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto mb-12 border-4 border-yellow-400 relative overflow-hidden"
        >
          {/* Decorações no card */}
          <div className="absolute top-2 right-2 text-3xl">🎁</div>
          <div className="absolute bottom-2 left-2 text-3xl opacity-30">✨</div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
            <div>
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-green-700 mb-2 flex items-center gap-2">
                <Mail className="text-red-600" /> Orçamentos & Cotações 🎄
              </h3>
              <p className="text-gray-600 mb-4">
                Precisa de um orçamento para sua obra ou projeto? Envie sua lista por e-mail.
              </p>
              <a
                href="mailto:compras@jciluminacao.com"
                className="text-lg font-semibold text-red-700 hover:text-green-700 transition-colors hover:underline"
              >
                compras@jciluminacao.com
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-green-50 p-6 rounded-xl border-2 border-red-200">
              <h4 className="font-bold text-gray-700 mb-2 flex items-center gap-2">
                <Building2 size={20} className="text-red-600" /> Dados da Empresa
              </h4>
              <p className="text-sm text-gray-500 mb-1">Razão Social: JC Iluminação LTDA</p>
              <p className="text-lg font-mono text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-green-700 font-bold">
                CNPJ: 52.371.691/0001-33
              </p>
              <p className="text-xs text-gray-400 mt-2">*Ambas as lojas (JC e DJ) operam sob o mesmo registro.</p>
            </div>
          </div>
        </motion.div>

        {/* Grid de Lojas Natalino */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch">
          {stores.map((store, index) => (
            <motion.div
              key={store.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all border-2 border-red-200 hover:border-green-400 flex flex-col h-full relative group"
            >
              {/* Decoração no canto */}
              <div className="absolute top-3 right-3 text-3xl z-20 opacity-40 group-hover:opacity-70 transition-opacity">
                {index === 0 ? '🎄' : '🎅'}
              </div>

              {/* Imagem da Loja */}
              <div className="h-64 overflow-hidden relative shrink-0">
                <img
                  src={store.image}
                  alt={`Fachada ${store.name}`}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/70 via-green-900/30 to-transparent flex items-end p-6">
                  <h2 className="text-3xl font-bold text-white drop-shadow-lg">{store.name}</h2>
                </div>
                
                {/* Badge Oferta */}
                <div className="absolute top-3 left-3 bg-gradient-to-r from-red-600 to-green-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                  <Gift size={12} />
                  Ofertas de Natal
                </div>
              </div>

              {/* Conteúdo da Loja */}
              <div className="p-8 flex flex-col flex-1 bg-gradient-to-br from-white to-red-50/30">
                <p className="text-gray-600 mb-6 min-h-[60px]">{store.description}</p>

                <div className="space-y-4 flex-1">
                  <div className="flex items-start gap-3 text-gray-700 min-h-[3rem] bg-white/60 p-3 rounded-lg">
                    <MapPin className="text-red-600 shrink-0 mt-1" />
                    <span>{store.address}</span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-700 bg-white/60 p-3 rounded-lg">
                    <Phone className="text-green-600 shrink-0" />
                    <span>{store.phone}</span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-700 bg-white/60 p-3 rounded-lg">
                    <Clock className="text-red-600 shrink-0" />
                    <span>Seg a Sex: 09h às 19h | Sáb: 09h às 15h</span>
                  </div>
                </div>

                <hr className="my-6 border-red-100" />

                {/* Botão WhatsApp Natalino */}
                <a
                  href={`https://wa.me/${store.whatsapp}?text=${encodeURIComponent(
                    `Olá, vi o site e gostaria de falar com a ${store.name} 🎄`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-red-600 to-green-600 hover:from-green-600 hover:to-red-600 text-white rounded-xl font-bold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 mt-auto"
                >
                  <MessageCircle size={20} fill="white" /> 
                  Chamar no WhatsApp 🎅
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mensagem Natalina Final */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12 p-6 bg-gradient-to-r from-red-100 via-green-100 to-red-100 rounded-2xl max-w-2xl mx-auto border-2 border-yellow-400"
        >
          <p className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-green-700">
            🎄 Feliz Natal! Ilumine suas festas com a JC & DJ Iluminação ✨
          </p>
        </motion.div>
      </div>
    </div>
  );
}