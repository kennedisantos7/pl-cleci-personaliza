// ─────────────────────────────────────────────────────────────────────────────
// links.ts – fonte única de verdade para todos os dados da página
// Para editar links, textos ou URLs, altere apenas este arquivo.
// ─────────────────────────────────────────────────────────────────────────────

export const BRAND = {
  name: 'CLECI PERSONALIZA',
  logo: 'https://i.imgur.com/4oZlDdG.png',
  tagline: 'Mais do que impressão, entregamos a sua marca! 🖨️',
  description: 'Com paixão por design e inovação, a CLECI PERSONALIZA nasceu para transformar a identidade da sua marca em realidade.',
  description2: 'Produzimos desde sacolas até cartões de visita com altíssima qualidade, personalização e o cuidado que o seu negócio merece.',
  whatsapp: 'https://api.whatsapp.com/send/?phone=5563992349085&text=Ol%C3%A1%2C+gostaria+de+solicitar+um+or%C3%A7amento!',
  instagram: 'https://instagram.com/clecipersonaliza',
  facebook: 'https://facebook.com/clecipersonaliza',
  year: 2024,
};

export interface LinkItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  href: string;
  external?: boolean;
}

export const LINKS: LinkItem[] = [
  {
    id: 'site',
    title: 'Nosso Site',
    subtitle: 'Acesse agora',
    image: 'https://i.imgur.com/qCQpdI6.png',
    href: 'https://cleci.com.br',
    external: true,
  },
  {
    id: 'vendedor',
    title: 'Falar com Vendedor',
    subtitle: 'Atendimento via WhatsApp',
    image: 'https://i.imgur.com/toDrKms.png',
    href: 'https://api.whatsapp.com/send/?phone=5563992349085&text=Vim+pelo+site+e+gostaria+de+saber+mais+sobre+os+produtos&type=phone_number&app_absent=0',
    external: true,
  },
  {
    id: 'sacolas',
    title: 'Sacolas Personalizadas',
    subtitle: 'Ver Catálogo',
    image: 'https://i.imgur.com/jpfLJ9V.png',
    href: 'https://cleci.com.br/sacolas',
    external: true,
  },
  {
    id: 'tapetes',
    title: 'Tapetes Sob Medida',
    subtitle: 'Ver Catálogo',
    image: 'https://i.imgur.com/ECZFz9v.png',
    href: 'https://cleci.com.br/tapetes',
    external: true,
  },
  {
    id: 'grafica',
    title: 'Serviços de Gráfica',
    subtitle: 'Conheça mais',
    image: 'https://i.imgur.com/tmkPI9g.png',
    href: 'https://cleci.com.br/grafica',
    external: true,
  },
/*  {
    id: 'afiliados',
    title: 'Afiliados',
    subtitle: 'Seja um afiliado',
    image: 'https://i.imgur.com/yhJP3VN.png',
    href: 'https://imgur.com/yhJP3VN',
    external: true,
  },*/
  {
    id: 'whatsapp-direct',
    title: 'WhatsApp',
    subtitle: 'Fale conosco',
    image: 'https://i.imgur.com/egIkPgN.png',
    href: BRAND.whatsapp,
    external: true,
  },
  {
    id: 'instagram-direct',
    title: 'Instagram',
    subtitle: 'Siga-nos',
    image: 'https://i.imgur.com/pOwYWB7.png',
    href: BRAND.instagram,
    external: true,
  },
];

export interface ProductImage {
  id: string;
  src: string;
  alt: string;
  label: string;
  span?: 'large';
}

export const PRODUCT_IMAGES: ProductImage[] = [
  {
    id: 'sacolas-hero',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA31f1tYryTrR8LGg0u8BafUUubh22Mf8adrdYyxFxqwrnTq1rIrpsoJwSJ6LksxWdbewTP7sqL5lbSfWgDkidi4Ml5igV_EqSH9ChoIvYN_rAxOybdtiO3mYYJn6SHsHzwZ-8MSdlXVhj3auRIiwqt5Ydd4aUZEWlAgcCIik3knbdii_cFrbUFIfkF3MOyr7w3xO2nDzg-1Ppzcz8pBi6qG_rlUjshu0v3wAbIfGei98ZBh02JFBIeM0Xnt7k0F6tMOjUMTxna0-cv',
    alt: 'Sacolas Personalizadas CLECI',
    label: 'Sacolas Personalizadas',
    span: 'large',
  },
  {
    id: 'cartoes-hero',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3ULVNx5OkUgOAxoQvQDqkLzPFlsTv68sxuZd9CCtS8ISmtj4DAa8eNoH8SiFJrz4VETo0qRRRKsVTSLG4gDBS-a7c_jxeA9VUu_fiSTyDfimtIGb_ttH96mfRtRRwgUzTWSOuh6zdK0z8-ezVr3EMIEpAo5-vwoNyxBO0HWbj3phaLWWPScT9Uc5iGfrHAEjA3yVrVnqcgvbf0cxLaZusPhFsmIbi5iv_MQoQuBNJwxkurfTtJTYQ0Vkz-6jVfhVGlpAh4HX52P_k',
    alt: 'Cartões de Visita CLECI',
    label: 'Cartões de Visita',
  },
  {
    id: 'tapetes-hero',
    src: 'https://i.imgur.com/16EL8ea.png',
    alt: 'Tapetes Sob Medida CLECI',
    label: 'Tapetes Sob Medida',
  },
];

export const TEAM_IMAGE = {
  src: 'https://i.imgur.com/5UDP828.png',
  alt: 'Equipe CLECI PERSONALIZA',
};

export const CTA_IMAGE = {
  src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB60osl0fv_7arySwNriMpRM_0wLoz15ho5h3vaSduUj91Bd2d3N1y5bSAoVkkZZI7oS_eCleUkYYBGc3FK1eYscqqrzOr5cQ4BEsCmCv-2UXOJTG1Z0vQkjzHmh8eS37_h62MHv1A9AVw7-zPbZ9TkTLkOX1xQF3Y5Q9_4SfQNX-ZEP3LUDFwOBYdYkYRGb0rSL-aQFNs2_fZQ5kwamPFj6iDvLVOQXmqC74pw9_7GVH-GAG7QgIj7nw1BPc0aau3wLpJqgnE0kch-',
  alt: 'Impressão de qualidade CLECI',
};
