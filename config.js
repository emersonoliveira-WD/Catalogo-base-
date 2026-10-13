// Configuração do Catálogo Online
window.CATALOGO_CONFIG = {
  // Informações da Loja
  nomeLoja: "Frente Balcão & Conveniência",
  subtitulo: "Ofertas imperdíveis, veículos, imóveis e promoções exclusivas da nossa loja física!",
  telefoneWhatsapp: "5511999999999", // Apenas números: DDI + DDD + Telefone (ex: 5511999999999)
  endereco: "Av. Principal, 1200 - Centro",
  cidade: "São Paulo - SP",
  horarioFuncionamento: "Segunda a Sábado das 08h às 19h",
  
  // Link de embed do Google Maps (para a seção "Como Chegar")
  // Dica: No Google Maps, clique em "Compartilhar" -> "Incorporar um mapa" -> copie a URL que está dentro de src="..."
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.097715091216!2d-46.6549886!3d-23.5649419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr",
  
  // Integração Opcional com Nuvem (Supabase)
  // Se preenchido, os dados atualizados no sistema sincronizam em tempo real!
  supabase: {
    url: "",      // Ex: https://sua-empresa.supabase.co
    anonKey: ""  // Sua chave pública anon
  }
};
