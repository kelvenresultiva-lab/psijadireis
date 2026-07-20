// Fonte única de verdade para todo o texto e dados de contato do site.
// Nenhum componente deve ter texto hardcoded — tudo vem daqui.
//
// Estrutura da página segue o modelo de referência (Header > Hero+selo >
// Especialidades > Sobre mim > Consultório+Depoimentos > Como funciona >
// Benefícios > FAQ > Mapa > Footer).

export const site = {
  name: "Jadi Reis",
  fullName: "Jadi Reis",
  role: "Psicóloga Clínica e Social",
  // TODO: Jadi ainda não enviou o número do CRP — substituir assim que ela mandar.
  crp: "Psicóloga Clínica — CRP a confirmar",
  city: "Curvelo",
  state: "MG",
  address: {
    street: "R. Pacífico Mascarenhas, 89 - Centro",
    cityLine: "Curvelo - MG, 35790-132",
    mapsUrl: "https://maps.app.goo.gl/YL423A3k3HghVqZL8",
    embedQuery: "R. Pacífico Mascarenhas, 89 - Centro, Curvelo - MG, 35790-132",
  },
  phoneDisplay: "(35) 98864-8360",
  whatsappNumber: "5535988648360",
  whatsappMessage:
    "Olá, Jadi! Encontrei seu site e gostaria de saber mais sobre o acompanhamento psicológico.",
  email: "psicologajadireis@outlook.com",
  instagramHandle: "@jadi.reis14",
  instagramUrl: "https://www.instagram.com/jadi.reis14/",
  hours: "8h às 18h, segunda a sexta",
  hoursNote: "As consultas precisam ser previamente agendadas.",
  modality: "Atendimento presencial em Curvelo (MG) e online para todo o Brasil",
  metaDescription:
    "Jadi Reis é psicóloga clínica e social em Curvelo (MG), com atendimento presencial e online para todo o Brasil. Acompanhamento psicológico para mulheres, adolescentes, jovens e para a comunidade LGBTQIAPN+.",
} as const;

export function whatsappLink(customMessage?: string) {
  const message = encodeURIComponent(customMessage ?? site.whatsappMessage);
  return `https://wa.me/${site.whatsappNumber}?text=${message}`;
}

export const nav = [
  { label: "Início", href: "#hero" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Sobre mim", href: "#sobre" },
  { label: "Consultório", href: "#consultorio" },
  { label: "Como funciona", href: "#processo" },
  { label: "FAQ", href: "#faq" },
] as const;

export const header = {
  ctaLabel: "Vamos conversar?",
} as const;

export const hero = {
  eyebrow: site.crp,
  greeting: "Olá, sou",
  name: "Jadi Reis",
  subtitle:
    "Disponibilizo um espaço de escuta sem julgamento, com cuidado ético, afeto e compromisso com a sua singularidade.",
  checklist: [
    "Mulheres, adolescentes, jovens e comunidade LGBTQIAPN+",
    "Abordagem ética, sigilosa e sem julgamento",
    "Atendimento presencial em Curvelo (MG) e online para todo o Brasil",
  ],
  ctaLabel: "Vamos conversar?",
  ctaSecondaryLabel: "Conhecer as especialidades",
  ctaSecondaryHref: "#especialidades",
  image: {
    src: "/images/jadi-hero-full.png",
    alt: "Jadi Reis, psicóloga clínica e social, sorrindo sentada em um ambiente acolhedor",
  },
} as const;

// TODO: valor fictício até a Jadi enviar um número real (pessoas acompanhadas, anos de atuação etc.).
export const heroStat = {
  value: "+200",
  label: "pessoas acompanhadas",
} as const;

export const heroMobile = {
  eyebrow: "PSICÓLOGA CLÍNICA",
  title: "Jadi Reis",
  tagline: "UM ESPAÇO DE ESCUTA PARA VOCÊ SE ENCONTRAR.",
  ctaLabel: "Mais informações",
  image: {
    src: "/images/jadi-hero-mobile-2.png",
    alt: "Jadi Reis, psicóloga clínica, sentada em uma poltrona em um ambiente acolhedor",
  },
} as const;

export const specialties = {
  items: [
    {
      icon: "Flower2",
      title: "Terapia para mulheres em sobrecarga",
      description:
        "Por meio de sessões semanais, presenciais ou online, com cerca de 50 minutos de duração, acompanho mulheres em momentos de sobrecarga, ansiedade ou relações difíceis. Através da escuta clínica, é possível compreender a origem do que incomoda e caminhar, no seu próprio tempo, para um processo de redescoberta de si mesma.",
    },
    {
      icon: "Sparkle",
      title: "Terapia para adolescentes e jovens",
      description:
        "Adolescentes e jovens podem enfrentar dificuldades próprias dessa fase da vida, como ansiedade, insegurança e conflitos nas relações. Por meio do acompanhamento psicológico, presencial ou online, é possível desenvolver autoconhecimento, fortalecer a autoestima e lidar melhor com os desafios emocionais típicos da adolescência e da juventude.",
    },
    {
      icon: "Rainbow",
      title: "Terapia para comunidade LGBTQIAPN+",
      description:
        "Adolescentes, adultos e idosos da comunidade LGBTQIAPN+ contam com um espaço de escuta ética, sigilosa e livre de julgamentos, presencial ou online. O acompanhamento psicológico caminha ao lado de cada pessoa na busca por autonomia, identidade e autoconhecimento, respeitando o tempo e a singularidade de cada processo.",
    },
  ],
} as const;

export const about = {
  eyebrow: "SOBRE MIM",
  greeting: "Olá, sou",
  title: "Jadi Reis",
  paragraphs: [
    "Sou psicóloga clínica e social, e acredito que a psicologia é, antes de tudo, um exercício de escuta ética e sem julgamento. Disponibilizo um espaço de cuidado, afeto e compromisso com a singularidade de cada pessoa que acompanho.",
    "Atendo mulheres em momentos de sobrecarga, ansiedade, relações difíceis ou redescoberta de si; acompanho adolescentes e jovens com sensibilidade às fases de transição e aos desafios emocionais da juventude; e caminho ao lado de adolescentes, adultos e idosos da comunidade LGBTQIAPN+ em busca de autonomia, identidade e autoconhecimento.",
    "Minha formação reúne a Psicologia Clínica e Social a uma Pós-graduação em Saúde Pública, além das certificações em Mediação de Conflitos e em Escuta Especializada — um olhar que une a clínica ao compromisso social com quem eu acompanho.",
  ],
  formationCard: {
    label: "Formação",
    text: "Psicóloga Clínica e Social, Pós-Graduada em Saúde Pública.",
  },
  image: {
    src: "/images/jadi-sobre.png",
    alt: "Retrato de Jadi Reis, psicóloga clínica e social",
  },
} as const;

// TODO: fotos ilustrativas (geradas por IA) até a Jadi enviar fotos reais do
// próprio consultório — substituir os arquivos em /public/images quando ela mandar.
export const gallery = {
  id: "consultorio",
  eyebrow: "AMBIENTE SEGURO E DE FÁCIL ACESSO",
  title: "Um espaço pensado para você se sentir acolhida(o) e confortável",
  images: [
    {
      src: "/images/jadi-consultorio-01.png",
      alt: "Sala de espera do consultório, com sofá, poltrona e ambiente aconchegante",
    },
    {
      src: "/images/jadi-consultorio-02.png",
      alt: "Ambiente do consultório com iluminação natural e decoração acolhedora",
    },
    {
      src: "/images/jadi-consultorio-03.png",
      alt: "Cantinho de leitura do consultório com estante de livros e poltrona",
    },
  ],
} as const;

// TODO: depoimentos fictícios — a Jadi ainda não enviou depoimentos reais de
// pacientes. Substituir por avaliações reais (com autorização) antes de publicar.
export const testimonials = {
  eyebrow: "DEPOIMENTOS",
  title: "O que dizem sobre o meu trabalho",
  isPlaceholder: true,
  items: [
    {
      name: "Paciente em acompanhamento",
      rating: 5,
      text: "Cheguei sem saber nem por onde começar a falar do que sentia. Encontrei um espaço de escuta que me ajudou a organizar minha cabeça sem nenhum julgamento.",
    },
    {
      name: "Paciente em acompanhamento",
      rating: 5,
      text: "O acolhimento no primeiro atendimento já fez toda diferença. Hoje entendo muito mais sobre mim mesma e sobre como lidar com a ansiedade do dia a dia.",
    },
    {
      name: "Paciente em acompanhamento",
      rating: 5,
      text: "Um acompanhamento sensível e respeitoso com a minha história. Me senti segura para falar de assuntos que nunca tinha conseguido colocar em palavras.",
    },
  ],
} as const;

export const process = {
  eyebrow: "COMO FUNCIONA MEU TRABALHO",
  title: "Um processo claro para sua evolução",
  paragraphs: [
    "Meu trabalho começa com um primeiro contato acolhedor, onde você tira suas dúvidas e escolhe o melhor horário para a sua primeira sessão, presencial ou online. A partir daí, seguimos com uma escuta atenta e sem julgamento sobre a sua história e o que te trouxe até aqui.",
    "Com base nesse acolhimento inicial, construímos juntas um direcionamento terapêutico alinhado às suas necessidades. O acompanhamento segue com sessões regulares e devolutivas ao longo do processo, sempre respeitando o seu tempo e a sua singularidade.",
  ],
  // TODO: percentuais fictícios até a Jadi enviar dados reais — mantidos apenas como recurso visual.
  progressBars: [
    { label: "Ambiente acolhedor", value: 100 },
    { label: "Compromisso com o processo", value: 97 },
  ],
  ctaLabel: "Vamos conversar?",
  // TODO: valor fictício até a Jadi enviar o número real de atendimentos realizados.
  stat: {
    value: "+500",
    label: "Atendimentos realizados",
  },
  image: {
    src: "/images/jadi-processo.png",
    alt: "Jadi Reis sentada, anotando durante uma sessão de atendimento",
  },
} as const;

export const reasons = {
  eyebrow: "ALGUNS BENEFÍCIOS DA TERAPIA",
  title: "Benefícios do acompanhamento psicológico",
  subtitle:
    "O acompanhamento psicológico traz benefícios reais para o dia a dia, como maior controle emocional, relações mais saudáveis e mais qualidade de vida.",
  items: [
    {
      number: "01",
      title: "Controle das emoções",
      description:
        "Uma pessoa com mais controle emocional consegue lidar com os desafios do dia a dia de forma mais equilibrada e positiva.",
    },
    {
      number: "02",
      title: "Melhora nas relações",
      description:
        "As relações que vivemos influenciam diretamente nossa motivação, produtividade e satisfação com a vida.",
    },
    {
      number: "03",
      title: "Diminuição da agressividade",
      description:
        "Compreender melhor o que sente ajuda a construir formas mais leves e saudáveis de se relacionar com os outros.",
    },
    {
      number: "04",
      title: "Diminuição da insônia",
      description:
        "Dormir melhor faz diferença em tudo — no humor, na disposição e na forma como encaramos o dia a dia.",
    },
  ],
} as const;

export const faq = {
  eyebrow: "DÚVIDAS FREQUENTES",
  title: "Ainda tem dúvidas?",
  featured: {
    eyebrow: "DÚVIDAS FREQUENTES",
    title: "Por que buscar acompanhamento psicológico?",
    paragraphs: [
      "A terapia é um espaço para encontrar mais clareza diante dos seus conflitos e dificuldades, com o apoio de uma profissional. No acompanhamento psicológico, existem técnicas que ajudam cada pessoa a reconhecer o que a tem incomodado no dia a dia.",
      "Esse processo acontece a partir da relação de confiança entre psicóloga e paciente — por isso, é importante encontrar uma profissional qualificada, ética e responsável, com quem você se sinta à vontade.",
    ],
    ctaLabel: "Mais informações",
  },
  items: [
    {
      question: "Como funciona o atendimento online?",
      answer:
        "As sessões online acontecem por videochamada, no mesmo formato e com a mesma qualidade do atendimento presencial. Você só precisa de um lugar tranquilo e conexão com a internet — posso atender qualquer pessoa em qualquer lugar do Brasil.",
    },
    {
      question: "Quanto tempo dura cada sessão?",
      answer:
        "As sessões de acompanhamento psicológico costumam durar cerca de 50 minutos, com frequência combinada de acordo com a sua necessidade.",
    },
    {
      question: "Vocês fazem diagnóstico ou passam medicação?",
      answer:
        "Não. Como psicóloga, meu trabalho é de acompanhamento psicológico, escuta clínica e avaliação psicológica — não realizo diagnóstico médico nem prescrevo medicação. Quando necessário, oriento o encaminhamento para acompanhamento psiquiátrico em conjunto.",
    },
    {
      question: "Como sei se preciso de acompanhamento psicológico?",
      answer:
        "Não é preciso esperar uma crise. Se você sente sobrecarga, ansiedade, dificuldade nas relações ou vontade de se entender melhor, esse já é um bom motivo para buscar apoio.",
    },
    {
      question: "Como faço para agendar minha primeira sessão?",
      answer:
        "É só me chamar no WhatsApp. Vamos conversar sobre o que te trouxe até aqui e encontrar o melhor horário para começar.",
    },
  ],
} as const;

export const footer = {
  about:
    "Espaço de escuta psicológica com ética, afeto e compromisso com a sua singularidade.",
  quickLinksTitle: "Links rápidos",
  hoursTitle: "Horário de atendimento",
  ctaLabel: "Agendar consulta",
  rightsText: `© ${new Date().getFullYear()} ${site.name} — ${site.role}. Todos os direitos reservados.`,
} as const;
