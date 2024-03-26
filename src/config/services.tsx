import { type Category } from '@/types'

export const services: Category[] = [
  {
    title: 'Instalaciones eléctricas',
    description: 'Instalaciones eficientes y de alta calidad. Aseguramos un abastecimiento óptimo de energía eléctrica.',
    slug: '/instalaciones-electricas',
    image: {
      src: '/images/instalations-service.webp',
      alt: 'Experto en sistemas eléctricos instalando una antena de alta tensión',
      width: 1280,
      height: 720
    },
    items: [
      {
        title: 'Instalación de acometidas eléctricas'
      },
      {
        title: 'Instalación de sistemas de alumbrado'
      },
      {
        title: 'Conexión de máquinas'
      },
      {
        title: 'Instalación de subestaciones'
      },
      {
        title: 'Instalación de tableros de distribución'
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
        description: 'Detectamos fallas antes de que sucedan, analizamos cada parámetro y determinamos las causas.',
        image: {
          src: '/images/maintenance-predictive-service.webp',
          alt: 'Expertos en sistemas eléctricos revisando un transformador de potencia',
          width: 1280,
          height: 720
        },
        items: [
          {
            title: 'Análisis de aceite de transformadores'
          },
          {
            title: 'Monitoreo de parámetros eléctricos'
          },
          {
            title: 'Cursos de mantenimiento eléctrico'
          },
          {
            title: 'Estudio de Arc-Flash'
          },
          {
            title: 'Estudio de corto circuito'
          },
          {
            title: 'Estudio de calidad de la energía'
          },
          {
            title: 'Termografía'
          }
        ]
      },
      {
        title: 'Mantenimiento eléctrico preventivo',
        description: 'Solucionamos cualquier anomalía antes de que se convierta en un problema mayor.',
        image: {
          src: '/images/maintenance-preventive-service.webp',
          alt: 'Profecionales en sistemas eléctricossobre una torre de alta tensión revisando posibles fallas',
          width: 1920,
          height: 1080
        },
        items: [
          {
            title: 'Mantenimiento a plantas de energía'
          },
          {
            title: 'Mantenimiento a subestaciones'
          },
          {
            title: 'Prueba a transformadores de potencia'
          },
          {
            title: 'Prueba a transformadores'
          },
          {
            title: 'Prueba a relevadores'
          },
          {
            title: 'Medición de tierras'
          },
          {
            title: 'Poliza de servicios'
          }
        ]
      },
      {
        title: 'Mantenimiento eléctrico correctivo',
        description: 'Restauramos cualquier falla en tu infraestructura eléctrica. Solucionamos problemas de raíz.',
        image: {
          src: '/images/maintenance-corrective-service.webp',
          alt: 'Expertos en sistemas eléctricos con equipo de seguridad dando mantenimiento a una torre de alta tensión',
          width: 1920,
          height: 1080
        },
        items: [
          {
            title: 'Cambio de equipo dañado'
          },
          {
            title: 'Cambio de aceite a transformador'
          },
          {
            title: 'Reparación de puntos calientes'
          },
          {
            title: 'Renta de plantas de emergencia'
          },
          {
            title: 'Inspección interna'
          },
          {
            title: 'Emergencias eléctricas 24/7'
          }
        ]
      }
    ]
  },
  {
    title: 'Diseño e ingeniería eléctrica',
    description: 'Desarrollamos proyectos efecientes y seguros. Te ayudamos a construir el sistema ideal para tu infraestructura.',
    slug: '/diseno-ingenieria-electrica',
    image: {
      src: '/images/design-engineering-service.webp',
      alt: 'Ingeniero eléctrico desarrollando un proyecto de instalación eléctrica',
      width: 1920,
      height: 1080
    },
    items: [
      {
        title: 'Cuadro de carga'
      },
      {
        title: 'Diagrama unifilar'
      },
      {
        title: 'Diseño de instalaciones'
      },
      {
        title: 'Gestoría y tramitología'
      },
      {
        title: 'Lay-Out de instalación'
      },
      {
        title: 'Memoria de cálculo'
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
  //       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat.'
  //     }
  //   ]
  // }
]
