import { Gift, AlertTriangle, Crown, Star, Check, X, Lock } from 'lucide-react';

export default function App() {
  const completeFeatures = [
    "+100 Técnicas com Resina em conteúdo completo",
    "+60 Aulas em vídeo passo a passo",
    "Modelos de chaveiros, bandejas e peças decorativas",
    "Lista de materiais essenciais"
  ];

  const bonuses = [
    "Bônus 1: Guia de Acabamento Perfeito",
    "Bônus 2: As 20 Peças Mais Vendidas",
    "Bônus 3: Segredos de Brilho e Transparência",
    "Bônus 4: Fotos que Vendem",
    "Bônus 5: Método 3 Etapas",
    "Bônus 6: Moldes Exclusivos"
  ];

  const basicFeatures = [
    "+40 Aulas essenciais em vídeo",
    "Lista de materiais essenciais"
  ];

  return (
    <div className="min-h-screen bg-[#fcfaf8] font-sans text-gray-800 pb-12">
      {/* Logo Section */}
      <div className="bg-white py-4 flex justify-center w-full">
        <img 
          src="https://i.postimg.cc/XYBFDVVM/Arte_com_resinas_delicadas_e_flores_(1).png" 
          alt="Arte Felpuda" 
          className="h-[67px] sm:h-[77px] object-contain"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Top Banner */}
      <div className="bg-[#b48eeb] text-white text-center py-5 px-6 flex flex-col items-center justify-center gap-2">
        <div className="font-extrabold text-[19px] sm:text-xl leading-snug max-w-2xl">
          <span role="img" aria-label="party" className="mr-1.5">🎉</span> 
          Espera! Temos uma oferta exclusiva para você!
        </div>
        <div className="text-[15px] sm:text-base opacity-90 max-w-2xl leading-snug">
          Preços especiais que você não vai encontrar em outro lugar
        </div>
      </div>

      {/* Header Section */}
      <div className="max-w-4xl mx-auto px-4 mt-10 mb-10 text-center">
        <div className="flex items-center justify-center gap-3 sm:gap-6 mb-5">
          <Gift className="text-[#c28e6b] w-7 h-7 sm:w-8 sm:h-8 shrink-0" /> 
          <h1 className="text-[28px] sm:text-4xl font-extrabold text-[#2d2d2d] leading-tight">
            Oferta Especial de <span className="text-[#b48eeb] whitespace-nowrap">Última Chance</span>
          </h1>
          <Gift className="text-[#c28e6b] w-7 h-7 sm:w-8 sm:h-8 shrink-0" />
        </div>
        <p className="text-gray-600 text-[16px] sm:text-lg max-w-[280px] sm:max-w-md mx-auto leading-relaxed">
          Aproveite esses preços exclusivos antes que a página feche!
        </p>
      </div>

      {/* Pricing Cards Container */}
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-center items-stretch gap-8 md:gap-6">
        
        {/* Highlighted Card (Kit Completo) */}
        <div className="relative flex-1 bg-white rounded-2xl border-2 border-[#b48eeb] shadow-lg p-6 sm:p-8 pt-10 flex flex-col">
          {/* Badge */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#b48eeb] text-white px-6 py-1.5 rounded-full text-xs font-bold tracking-wider flex items-center gap-2 shadow-sm whitespace-nowrap">
            <Star className="w-3.5 h-3.5 fill-current" />
            MAIS ESCOLHIDO
          </div>

          <div className="text-center mb-6">
            <Crown className="w-8 h-8 text-[#b48eeb] mx-auto mb-3" />
            <h2 className="text-2xl font-bold mb-1">Kit Completo</h2>
            <p className="text-gray-500 text-sm">Tudo que você precisa para arrasar</p>
          </div>

          <div className="flex-1">
            <ul className="space-y-3 mb-6">
              {completeFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <hr className="border-t-2 border-dotted border-gray-200 my-6" />

            <ul className="space-y-3 mb-8">
              {bonuses.map((bonus, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-[#b48eeb] shrink-0 mt-0.5" />
                  <span>{bonus}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 rounded-xl p-5 text-center mb-6">
            <p className="text-gray-400 line-through text-sm mb-1">De R$ 27,00</p>
            <p className="text-4xl font-black text-[#2d7a4d] mb-2">R$ 14,90</p>
            <p className="text-xs text-gray-500">Acesso imediato após a confirmação ❤️</p>
          </div>

          <a 
            href="https://pay.wiapy.com/j8tCZqXPa"
            className="w-full bg-[#2d7a4d] hover:bg-[#23613c] text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-md"
          >
            GARANTIR KIT COMPLETO 💜
          </a>
          
          <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-gray-400">
            <Lock className="w-3 h-3" />
            <span>Compra 100% segura e garantida</span>
          </div>
        </div>

        {/* Basic Card (Kit Básico) */}
        <div className="flex-1 bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8 flex flex-col md:mt-4">
          <div className="text-center mb-6">
            <Star className="w-8 h-8 text-gray-400 mx-auto mb-3" />
            <h2 className="text-2xl font-bold mb-1">Kit Básico</h2>
            <p className="text-gray-500 text-sm">Para quem quer começar</p>
          </div>

          <div className="flex-1">
            <ul className="space-y-3 mb-6">
              {basicFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Showing excluded bonuses to match the layout style of image 2 */}
            <ul className="space-y-3 mb-8 opacity-50">
              {bonuses.map((bonus, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-gray-400 line-through">
                  <X className="w-4 h-4 text-gray-300 shrink-0 mt-0.5" />
                  <span>{bonus}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 rounded-xl p-5 text-center mb-6">
            <p className="text-gray-400 line-through text-sm mb-1">De R$ 10,00</p>
            <p className="text-4xl font-black text-gray-900 mb-2">R$ 7,00</p>
            <p className="text-xs text-gray-500">Acesso imediato</p>
          </div>

          <a 
            href="https://pay.wiapy.com/_Z8un53Q7"
            className="w-full block text-center bg-[#f4f4f5] hover:bg-[#e4e4e7] text-gray-800 font-bold py-4 rounded-xl transition-colors border border-gray-200"
          >
            QUERO O BÁSICO
          </a>
        </div>

      </div>

      {/* Footer Warning */}
      <div className="max-w-3xl mx-auto mt-12 text-center px-4">
        <p className="text-xs text-amber-600 flex items-center justify-center gap-1.5">
          <AlertTriangle className="w-3.5 h-3.5" />
          Esta oferta é exclusiva e pode sair do ar a qualquer momento.
        </p>
        <p className="text-[10px] text-gray-400 mt-6">
          © 2026 - Todos os direitos reservados.<br/>
          Este produto não garante ganhos financeiros. Resultados variam conforme dedicação.
        </p>
      </div>
    </div>
  );
}
