import { Button } from "@/components/ui/button";
import { CheckCircle2, Shield, Zap, Target, Heart } from "lucide-react";
import productImage from "@/assets/product.jpg";

// ============================================
// 🎯 CONFIGURAÇÃO DA PRESELL PAGE
// ============================================
const PRESELL_CONFIG = {
  // Nome do Produto
  productName: "Sistema Emagrecimento 30 Dias",
  
  // Benefício Principal (usado no headline)
  mainBenefit: "Perca 10kg em 30 Dias",
  
  // Headline (máximo 10 palavras)
  headline: "Perca 10kg em 30 Dias de Forma Saudável",
  
  // Subheadline (uma linha, promessa principal)
  subheadline: "Sistema comprovado por +5.000 pessoas que transformaram o corpo definitivamente",
  
  // Link de Afiliado (EDITE AQUI!)
  affiliateLink: "https://seulink.com/produto",
  
  // Preço/Desconto para CTA
  priceDiscount: "67% OFF - R$ 97",
  
  // 3 Benefícios Principais (ícone + uma linha)
  benefits: [
    { icon: Zap, text: "Resultados visíveis em 7 dias sem dietas malucas" },
    { icon: Target, text: "Plano completo passo a passo para seguir facilmente" },
    { icon: Heart, text: "Método saudável aprovado por nutricionistas" }
  ],
  
  // 3 Micro-Depoimentos (nome + cidade)
  testimonials: [
    { text: "Perdi 12kg e me sinto incrível!", name: "Maria Silva", city: "São Paulo" },
    { text: "Funciona mesmo, recomendo!", name: "João Santos", city: "Rio de Janeiro" },
    { text: "Melhor investimento que já fiz!", name: "Ana Costa", city: "Belo Horizonte" }
  ],
  
  // Texto do CTA
  ctaText: "GARANTIR ACESSO COM 67% OFF",
  
  // Público-Alvo (para meta tags)
  targetAudience: "pessoas que querem emagrecer de forma saudável"
};

const Index = () => {
  const handleCTAClick = () => {
    window.open(PRESELL_CONFIG.affiliateLink, '_blank');
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section - Mobile First */}
      <section className="px-4 py-8 md:py-16">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline */}
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            {PRESELL_CONFIG.headline}
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            {PRESELL_CONFIG.subheadline}
          </p>
          
          {/* Hero Image */}
          <div className="mb-8 rounded-lg overflow-hidden shadow-xl">
            <img 
              src={productImage} 
              alt={`${PRESELL_CONFIG.productName} - Imagem do produto`}
              className="w-full h-auto"
            />
          </div>
          
          {/* Primary CTA */}
          <Button 
            size="lg"
            className="w-full md:w-auto text-base md:text-lg px-8 py-6 h-auto font-bold"
            onClick={handleCTAClick}
          >
            {PRESELL_CONFIG.ctaText}
          </Button>
          
          <p className="text-sm text-muted-foreground mt-3">
            {PRESELL_CONFIG.priceDiscount} • Oferta por tempo limitado
          </p>
        </div>
      </section>

      {/* 3 Benefits Section */}
      <section className="px-4 py-12 bg-secondary/30">
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {PRESELL_CONFIG.benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center p-6 bg-card rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-foreground font-medium">{benefit.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social Proof - 3 Micro Testimonials */}
      <section className="px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Veja o que nossos clientes dizem
          </h2>
          
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {PRESELL_CONFIG.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-4">
                <p className="text-foreground mb-3 italic">"{testimonial.text}"</p>
                <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.city}</p>
              </div>
            ))}
          </div>
          
          {/* Guarantee Badge */}
          <div className="flex items-center justify-center gap-3 p-4 bg-primary/5 border border-primary/20 rounded-lg">
            <Shield className="w-8 h-8 text-primary flex-shrink-0" />
            <div>
              <p className="font-bold text-foreground">Garantia de 30 Dias</p>
              <p className="text-sm text-muted-foreground">Risco zero: devolução total se não gostar</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-12 bg-secondary/30">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Comece Sua Transformação Hoje
          </h2>
          <p className="text-muted-foreground mb-6">
            Junte-se a +5.000 pessoas que já transformaram suas vidas
          </p>
          
          <Button 
            size="lg"
            className="w-full md:w-auto text-base md:text-lg px-8 py-6 h-auto font-bold"
            onClick={handleCTAClick}
          >
            {PRESELL_CONFIG.ctaText}
          </Button>
          
          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            <span>Acesso imediato • Pagamento seguro</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-6 border-t">
        <div className="max-w-3xl mx-auto text-center text-xs text-muted-foreground">
          <p>© 2025 - Todos os direitos reservados</p>
          <p className="mt-2">Esta página contém links de afiliado. Podemos receber comissão por compras realizadas.</p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
