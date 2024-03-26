import {
  type Article,
  type Section,
  type NavItemExternal
} from '@/types'

export const slogan = 'Que nada te detenga'

export const contactEmail = `contacto@${process.env.NEXT_PUBLIC_DOMAIN}`

export const contactPhone = '4422432453'

export const emergencyPhone = '4424364177'

export const whatsappUrl = `https://wa.me/${contactPhone}`

export const whatsappEmergencyUrl = `https://wa.me/${emergencyPhone}`

export const address: NavItemExternal = {
  name: 'Adolfo Lopez Mateo #30 Int. #53 San Pablo 76125, Querétaro, Qro.',
  url: 'https://maps.app.goo.gl/vYhLgEPpgrHg6Csr8'
}

export const experience: Article = {
  title: 'Nuestra experiencia',
  description: 'Nunca nos detenemos. La experiencia guía nuestro camino, dejamos huellas de satisfacción en cada proyecto.',
  items: [
    'Instalaciones en baja tensión',
    'Subestaciones y puesta en marcha en 34.5 KV',
    'Desarrollo de proyectos para cumplimiento de Código Red',
    'Instalación de subestaciones en 115 KV',
    'Puesta en servicio',
    'Asesoría en operación de sistemas eléctricos de potencia'
  ]
}

export const clients: NavItemExternal[] = [
  {
    name: 'Aceway',
    url: 'https://aceway.mx/',
    image: {
      src: '/images/clients/aceway-client.webp',
      alt: 'Logotipo de Aceway',
      width: 150,
      height: 120
    }
  },
  {
    name: 'Apex Tool Group',
    url: 'https://www.apextoolgroup.com/',
    image: {
      src: '/images/clients/apex-client.webp',
      alt: 'Logotipo de Apex Tool Group',
      width: 150,
      height: 120
    }
  },
  {
    name: 'Atlatec',
    url: 'https://atlatec.com/',
    image: {
      src: '/images/clients/atlatec-client.webp',
      alt: 'Logotipo de Atletec',
      width: 150,
      height: 120
    }
  },
  {
    name: 'Benteler',
    url: 'https://www.benteler.com/es/',
    image: {
      src: '/images/clients/benteler-client.webp',
      alt: 'Logotipo de Benteler',
      width: 150,
      height: 120
    }
  },
  {
    name: 'Delta TechOps',
    url: 'https://www.deltatechops.com/',
    image: {
      src: '/images/clients/deltatechops-client.webp',
      alt: 'Logotipo de Delta TechOps',
      width: 150,
      height: 120
    }
  },
  {
    name: 'Givaudan',
    url: 'https://www.givaudan.com/',
    image: {
      src: '/images/clients/givaudan-client.webp',
      alt: 'Logotipo de Givaudan',
      width: 150,
      height: 120
    }
  },
  {
    name: 'IEM',
    url: 'https://piensaloiem.com.mx/',
    image: {
      src: '/images/clients/iem-client.webp',
      alt: 'Logotipo de IEM',
      width: 150,
      height: 120
    }
  },
  {
    name: 'Interceramic',
    url: 'https://interceramic.com/mx/',
    image: {
      src: '/images/clients/interceramic-client.webp',
      alt: 'Logotipo de Interceramic',
      width: 150,
      height: 120
    }
  },
  {
    name: 'Magna Cosma International',
    url: 'https://www.magna.com/es/empresa/empresa/grupos-de-magna/cosma/',
    image: {
      src: '/images/clients/magna-client.webp',
      alt: 'Logotipo de Magna Cosma International',
      width: 150,
      height: 120
    }
  },
  {
    name: 'Martinrea International',
    url: 'https://www.martinrea.com/es/',
    image: {
      src: '/images/clients/martinrea-client.webp',
      alt: 'Logotipo de Martinrea International',
      width: 150,
      height: 120
    }
  },
  {
    name: 'Nacobre',
    url: 'https://www.nacobre.com.mx/',
    image: {
      src: '/images/clients/nacobre-client.webp',
      alt: 'Logotipo de Nacobre',
      width: 150,
      height: 120
    }
  },
  {
    name: 'Nutec',
    url: 'https://www.nutec.com/es/',
    image: {
      src: '/images/clients/nutec-client.webp',
      alt: 'Logotipo de Nutec',
      width: 150,
      height: 120
    }
  },
  {
    name: 'PetStar',
    url: 'https://www.petstar.mx/',
    image: {
      src: '/images/clients/petstar-client.webp',
      alt: 'Logotipo de PetStar',
      width: 150,
      height: 120
    }
  },
  {
    name: 'Ronal',
    url: 'https://www.ronal-wheels.com/es/',
    image: {
      src: '/images/clients/ronal-client.webp',
      alt: 'Logotipo de Ronal',
      width: 150,
      height: 120
    }
  },
  {
    name: 'Rehrig Pacific Company',
    url: 'https://rehrigpacific.mx/mx/',
    image: {
      src: '/images/clients/rpacific-client.webp',
      alt: 'Logotipo de Rehrig Pacific Company',
      width: 150,
      height: 120
    }
  },
  {
    name: 'Saavi Energía',
    url: 'https://www.saavienergia.com/',
    image: {
      src: '/images/clients/saavi-client.webp',
      alt: 'Logotipo de Saavi Energía',
      width: 150,
      height: 120
    }
  },
  {
    name: 'Safran',
    url: 'https://www.safran-group.com/es',
    image: {
      src: '/images/clients/safran-client.webp',
      alt: 'Logotipo de Safran',
      width: 150,
      height: 120
    }
  },
  {
    name: 'Valeo',
    url: 'https://www.valeoservice.mx/',
    image: {
      src: '/images/clients/valeo-client.webp',
      alt: 'Logotipo de Valeo',
      width: 150,
      height: 120
    }
  },
  {
    name: 'Windsor',
    url: 'https://wmgtec.com/',
    image: {
      src: '/images/clients/windsor-client.webp',
      alt: 'Logotipo de Windsor',
      width: 150,
      height: 120
    }
  },
  {
    name: 'Yanfeng',
    url: 'https://www.yanfeng.com/en',
    image: {
      src: '/images/clients/yanfeng-client.webp',
      alt: 'Logotipo de Windsor',
      width: 150,
      height: 120
    }
  }
]

export const filosophy: Section = {
  title: 'Nuestra filosofía',
  description: 'Nuestra filosofía y cultura organizacional contagia, impulsa y expone lo mejor de cada miembro del equipo.',
  items: [
    {
      title: 'Nuestra visión',
      description: 'Proveer soluciones eléctricas que garanticen la calidad en energía para la industria, con innovación, talento y experiencia, viviendo una cultura genuinamente humana.'
    },
    {
      title: 'Nuestra misión',
      description: 'Ser una empresa de éxito con un modelo replicable cuya principal fortaleza sea su gente.'
    }
  ]
}

export const culture: Section = {
  title: '¿Por qué Caballero?',
  description: 'Nuestros servicios se sustentan con nuestros valores. Garantizamos excelencia en cada detalle.',
  items: [
    {
      title: 'Compañerismo',
      description: 'Te acompaño, te cuido y cumplo siempre con lo mío.'
    },
    {
      title: 'Libertad',
      description: 'Puedo ser y actuar a voluntad, pero siempre con responsabilidad'
    },
    {
      title: 'Lealtad',
      description: 'Actúo siempre de buena fe, siempre fiel a la verdad, a mis valores y principios.'
    },
    {
      title: 'Fe',
      description: 'Creo y confío, siempre firme y convencido.'
    },
    {
      title: 'Perfección',
      description: 'Busco siempre el máximo nivel posible.'
    }
  ]
}

export const ourHistory: Article = {
  title: 'Nuestra razón de ser',
  items: [
    'La cultura organizacional es el pilar de nuestro éxito y de la calidad que garantizamos en nuestros servicios. En esta empresa lo más importante son las personas y nos enfocamos en su bienestar y crecimiento personal antes que profesional, con la firme creencia de que este último resultará como consecuencia de un equilibrio entre la persona y su entorno.',
    'De forma permanente estamos en busca de mejorar nuestros procesos para ser cada vez más eficientes y poder atender de mejor manera a nuestros clientes.'
  ]
}
