export type Locale = "pt" | "en" | "es";

export type LocalizedText = Record<Locale, string>;

export interface Dictionary {
  nav: {
    home: string;
    about: string;
    certifications: string;
    projects: string;
  };
  hero: {
    greeting: string;
    title: string;
    contactButton: string;
    downloadCvButton: string;
  };
  about: {
    title: string;
    description: string;
  };
  certifications: {
    title: string;
    modal: {
      details: string;
      institution: string;
      date: string;
      status: string;
      close: string;
      certificateLink: string;
    };
  };
  projects: {
    title: string;
    technologies: string;
    visitProject: string;
    sourceCode: string;
    imageUnavailable: string;
  };
  footer: {
    heading: string;
    email: string;
    whatsapp: string;
    emailCopied: string;
    copyright: string;
  };
}

export const translations: Record<Locale, Dictionary> = {
  pt: {
    nav: {
      home: "Inicio",
      about: "Sobre",
      certifications: "Certificações",
      projects: "Projetos",
    },
    hero: {
      greeting: "👋Olá, meu nome é Udiel! E eu sou um...",
      title: "Desenvolvedor Front End",
      contactButton: "Entre em contato",
      downloadCvButton: "Baixar CV",
    },
    about: {
      title: "Sobre",
      description:
        "Desenvolvedor em formação com foco em front-end, em constante evolução técnica. Tenho conhecimentos em HTML&CSS, JavaScript, React, Next.js e Node.js. Atualmente estou cursando Análise e Desenvolvimento de Sistemas na Universidade Cruzeiro do Sul e busco estágio para aplicar meus conhecimentos em projetos reais e crescer na área.",
    },
    certifications: {
      title: "Certificações",
      modal: {
        details: "Detalhes",
        institution: "Instituição:",
        date: "Data",
        status: "Status:",
        close: "Fechar",
        certificateLink: "Link Certificado",
      },
    },
    projects: {
      title: "Projetos",
      technologies: "Tecnologias",
      visitProject: "Visitar Projeto",
      sourceCode: "Código Fonte",
      imageUnavailable: "Imagem Indisponível",
    },
    footer: {
      heading: "Vamos Construir Algo Incrivel Juntos",
      email: "Email",
      whatsapp: "WhatsApp",
      emailCopied: "Email copiado!",
      copyright: "Todos os direitos reservados.",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      certifications: "Certifications",
      projects: "Projects",
    },
    hero: {
      greeting: "👋Hi, my name is Udiel! And I'm a...",
      title: "Front End Developer",
      contactButton: "Contact me",
      downloadCvButton: "Download CV",
    },
    about: {
      title: "About",
      description:
        "Front-end developer in training, constantly evolving my technical skills. I have knowledge of HTML & CSS, JavaScript, React, Next.js and Node.js. I'm currently studying Systems Analysis and Development at Universidade Cruzeiro do Sul and looking for an internship to apply my skills to real projects and grow in the field.",
    },
    certifications: {
      title: "Certifications",
      modal: {
        details: "Details",
        institution: "Institution:",
        date: "Date",
        status: "Status:",
        close: "Close",
        certificateLink: "Certificate link",
      },
    },
    projects: {
      title: "Projects",
      technologies: "Technologies",
      visitProject: "Visit project",
      sourceCode: "Source code",
      imageUnavailable: "Image unavailable",
    },
    footer: {
      heading: "Let's build something amazing together",
      email: "Email",
      whatsapp: "WhatsApp",
      emailCopied: "Email copied!",
      copyright: "All rights reserved.",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      certifications: "Certificaciones",
      projects: "Proyectos",
    },
    hero: {
      greeting: "👋Hola, me llamo Udiel! Y soy un...",
      title: "Desarrollador Front End",
      contactButton: "Contáctame",
      downloadCvButton: "Descargar CV",
    },
    about: {
      title: "Sobre mí",
      description:
        "Desarrollador en formación con foco en front-end, en constante evolución técnica. Tengo conocimientos en HTML&CSS, JavaScript, React, Next.js y Node.js. Actualmente curso Análisis y Desarrollo de Sistemas en la Universidade Cruzeiro do Sul y busco una pasantía para aplicar mis conocimientos en proyectos reales y crecer en el área.",
    },
    certifications: {
      title: "Certificaciones",
      modal: {
        details: "Detalles",
        institution: "Institución:",
        date: "Fecha",
        status: "Estado:",
        close: "Cerrar",
        certificateLink: "Enlace del certificado",
      },
    },
    projects: {
      title: "Proyectos",
      technologies: "Tecnologías",
      visitProject: "Visitar proyecto",
      sourceCode: "Código fuente",
      imageUnavailable: "Imagen no disponible",
    },
    footer: {
      heading: "Construyamos algo increíble juntos",
      email: "Email",
      whatsapp: "WhatsApp",
      emailCopied: "¡Correo copiado!",
      copyright: "Todos los derechos reservados.",
    },
  },
};
