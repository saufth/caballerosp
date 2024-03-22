import {
  type Category,
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

export const socialMedia: NavItemExternal[] = [
  {
    name: 'Facebook',
    url: 'https://fb.com/CaballeroSolutions'
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/caballero.solutions.power'
  }
]

export const services: Category[] = [
  {
    title: 'Instalaciones eléctricas',
    description: 'Instalaciones eficientes y de alta calidad. Aseguramos un abastecimiento óptimo de energía eléctrica.',
    slug: '/instalaciones-electricas',
    items: [
      {
        title: 'Instalación de acometidas eléctricas',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nunc. Nulla facilisi. Nulla nec purus feugiat, molestie ipsum et, consequat nunc.'
      },
      {
        title: 'Instalación de sistemas de alumbrado',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nunc. Nulla facilisi. Nulla nec purus feugiat, molestie ipsum et, consequat nunc.'
      },
      {
        title: 'Conexión de máquinas',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nunc. Nulla facilisi. Nulla nec purus feugiat, molestie ipsum et, consequat nunc.'
      },
      {
        title: 'Instalación de subestaciones',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nunc. Nulla facilisi. Nulla nec purus feugiat, molestie ipsum et, consequat nunc.'
      },
      {
        title: 'Instalación de tableros de distribución',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nunc. Nulla facilisi. Nulla nec purus feugiat, molestie ipsum et, consequat nunc.'
      }
    ]
  },
  {
    title: 'Mantenimiento eléctrico',
    description: 'Preventivo, correctivo y predictivo. Garantizamos el funcionamiento óptimo de toda infraestructura eléctrica.',
    slug: '/mantenimiento-electrico',
    items: [
      {
        title: 'Mantenimiento eléctrico predictivo',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nunc. Nulla facilisi. Nulla nec purus feugiat, molestie ipsum et, consequat nunc.',
        items: [
          {
            title: 'Análisis de aceite de transformadores',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nunc. Nulla facilisi. Nulla nec purus feugiat, molestie ipsum et, consequat nunc.'
          },
          {
            title: 'Monitoreo de parámetros eléctricos',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nunc. Nulla facilisi. Nulla nec purus feugiat, molestie ipsum et, consequat nunc.'
          },
          {
            title: 'Cursos de mantenimiento eléctrico',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nunc. Nulla facilisi. Nulla nec purus feugiat, molestie ipsum et, consequat nunc.'
          },
          {
            title: 'Estudio de Arc-Flash',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nunc. Nulla facilisi. Nulla nec purus feugiat, molestie ipsum et, consequat nunc.'
          },
          {
            title: 'Estudio de corto circuito',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nunc. Nulla facilisi. Nulla nec purus feugiat, molestie ipsum et, consequat nunc.'
          },
          {
            title: 'Estudio de calidad de la energía',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nunc. Nulla facilisi. Nulla nec purus feugiat, molestie ipsum et, consequat nunc.'
          },
          {
            title: 'Termografía',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nunc. Nulla facilisi. Nulla nec purus feugiat, molestie ipsum et, consequat nunc.'
          }
        ]
      },
      {
        title: 'Mantenimiento eléctrico preventivo',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nunc. Nulla facilisi. Nulla nec purus feugiat, molestie ipsum et, consequat nunc.',
        items: [
          {
            title: 'Mantenimiento a plantas de energía',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nunc. Nulla facilisi. Nulla nec purus feugiat, molestie ipsum et, consequat nunc.'
          },
          {
            title: 'Mantenimiento a subestaciones',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nunc. Nulla facilisi. Nulla nec purus feugiat, molestie ipsum et, consequat nunc.'
          },
          {
            title: 'Prueba a transformadores de potencia',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nunc. Nulla facilisi. Nulla nec purus feugiat, molestie ipsum et, consequat nunc.'
          },
          {
            title: 'Prueba a transformadores',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nunc. Nulla facilisi. Nulla nec purus feugiat, molestie ipsum et, consequat nunc.'
          },
          {
            title: 'Prueba a relevadores',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nunc. Nulla facilisi. Nulla nec purus feugiat, molestie ipsum et, consequat nunc.'
          },
          {
            title: 'Medición de tierras',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nunc. Nulla facilisi. Nulla nec purus feugiat, molestie ipsum et, consequat nunc.'
          },
          {
            title: 'Poliza de servicios',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nunc. Nulla facilisi. Nulla nec purus feugiat, molestie ipsum et, consequat nunc.'
          }
        ]
      },
      {
        title: 'Mantenimiento eléctrico correctivo',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nunc. Nulla facilisi. Nulla nec purus feugiat, molestie ipsum et, consequat nunc.',
        items: [
          {
            title: 'Cambio de equipo dañado',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nunc. Nulla facilisi. Nulla nec purus feugiat, molestie ipsum et, consequat nunc.'
          },
          {
            title: 'Cambio de aceite a transformador',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nunc. Nulla facilisi. Nulla nec purus feugiat, molestie ipsum et, consequat nunc.'
          },
          {
            title: 'Reparación de puntos calientes',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nunc. Nulla facilisi. Nulla nec purus feugiat, molestie ipsum et, consequat nunc.'
          },
          {
            title: 'Renta de plantas de emergencia',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nunc. Nulla facilisi. Nulla nec purus feugiat, molestie ipsum et, consequat nunc.'
          },
          {
            title: 'Inspección interna',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nunc. Nulla facilisi. Nulla nec purus feugiat, molestie ipsum et, consequat nunc.'
          },
          {
            title: 'Emergencias',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nunc. Nulla facilisi. Nulla nec purus feugiat, molestie ipsum et, consequat nunc.'
          }
        ]
      }
    ]
  },
  {
    title: 'Diseño e ingeniería eléctrica',
    description: 'Desarrollamos proyectos efecientes y seguros. Te ayudamos a construir el sistema ideal para tu infraestructura.',
    slug: '/diseno-ingenieria-electrica',
    items: [
      {
        title: 'Cuadro de carga',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nunc. Nulla facilisi. Nulla nec purus feugiat, molestie ipsum et, consequat nunc.'
      },
      {
        title: 'Diagrama unifilar',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nunc. Nulla facilisi. Nulla nec purus feugiat, molestie ipsum et, consequat nunc.'
      },
      {
        title: 'Diseño de instalaciones',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nunc. Nulla facilisi. Nulla nec purus feugiat, molestie ipsum et, consequat nunc.'
      },
      {
        title: 'Gestoría y tramitología',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nunc. Nulla facilisi. Nulla nec purus feugiat, molestie ipsum et, consequat nunc.'
      },
      {
        title: 'Lay-Out de instalación',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nunc. Nulla facilisi. Nulla nec purus feugiat, molestie ipsum et, consequat nunc.'
      },
      {
        title: 'Memoria de cálculo',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nunc. Nulla facilisi. Nulla nec purus feugiat, molestie ipsum et, consequat nunc.'
      }
    ]
  }
  // {
  //   title: 'Reingeniería de sistemas eléctricos',
  //   description: 'Optimizamos sistemas eléctricos. Mejoramos la eficiencia y seguridad de tu infraestructura eléctrica.',
  //   slug: '/reingenieria-sistemas-electricos',
  //   items: [
  //     {
  //       title: 'Actualización de equipos eléctricos',
  //       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nunc. Nulla facilisi. Nulla nec purus feugiat, molestie ipsum et, consequat nunc.'
  //     }
  //   ]
  // }
]

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
  title: 'Más que un equipo, somos una familia',
  description: 'Nuestra filosofía y cultura organizacional contagia, impulsa y expone lo mejor de cada miembro del equipo.',
  items: [
    {
      title: 'Nuestra misión',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nunc. Nulla facilisi. Nulla nec purus feugiat, molestie ipsum et, consequat nunc.'
    },
    {
      title: 'Nuestra visión',
      description: 'Es posicionarnos como la mejor empresa de nuestro ramo a nivel regional, una de las mejores a nivel nacional y trascender fronteras para llegar a otros países.'
    }
  ]
}

export const culture: Section = {
  title: '¿Por qué Caballero?',
  description: [
    'Construimos relaciones estrechas con nuestros clientes. Nuestros servicios se sustentan con nuestros valores.',
    'Ofrecemos pasión, talento, experiencia y compromiso para desarrollar cualquier proyecto que se nos asigne. Nos debemos y agradecemos a cada cliente que nos brinda la confianza de ser su soporte y proveedor.'
  ],
  items: [
    {
      title: 'Lealtad',
      description: 'Respeto y fidelidad a los compromisos que hacemos con nosotros mismos y con todos los que nos rodean: familia, amigos, compañeros, clientes, proveedores, hablando siempre con verdad y aceptando cuando nos equivocamos.'
    },
    {
      title: 'Libertad',
      description: 'Pensar y actuar bajo criterio propio, pero de manera responsable y enfocada a buscar nuestra felicidad'
    },
    {
      title: 'Fe',
      description: 'Tenemos la firme convicción de que Dios tiene un especial aprecio por nuestra empresa y nuestra gente.'
    },
    {
      title: 'Aprecio',
      description: 'Más que una organización, somos una familia, que respeta y entiende la personalidad de cada integrante, reconociendo sus virtudes y logros.'
    },
    {
      title: 'Perfección',
      description: 'Alcanzar el máximo nivel posible en todo lo que hacemos, tanto en el ámbito personal como profesional, bajo la premisa de que siempre es posible mejorar.'
    }
  ]
}

export const history: Article = {
  title: 'Nuestra razón de ser',
  items: [
    'La cultura organizacional es el pilar de nuestro éxito y de la calidad que garantizamos en nuestros servicios. En esta empresa lo más importante son las personas y nos enfocamos en su bienestar y crecimiento personal antes que profesional, con la firme creencia de que este último resultará como consecuencia de un equilibrio entre la persona y su entorno.',
    'De forma permanente estamos en busca de mejorar nuestros procesos para ser cada vez más eficientes y poder atender de mejor manera a nuestros clientes.'
  ]
}
