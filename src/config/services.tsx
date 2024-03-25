import { type Category } from '@/types'

export const services: Category[] = [
  {
    title: 'Instalaciones eléctricas',
    description: 'Instalaciones eficientes y de alta calidad. Aseguramos un abastecimiento óptimo de energía eléctrica.',
    slug: '/instalaciones-electricas',
    image: {
      src: '/images/instalations-service.webp',
      alt: 'Trabajador sobre una torre de alta tensión',
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
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit..ipsum et, consequat nunc.',
        image: {
          src: '/images/maintenance-predictive-service.webp',
          alt: 'Trabajador revisando una planta de energía eléctrica',
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
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat.',
        image: {
          src: '/images/maintenance-preventive-service.webp',
          alt: 'Trabajador revisando una planta de energía eléctrica',
          width: 1280,
          height: 720
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
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat.',
        image: {
          src: '/images/maintenance-corrective-service.webp',
          alt: 'Trabajador revisando una planta de energía eléctrica',
          width: 1280,
          height: 720
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
            title: 'Emergencias'
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
      alt: 'Trabajador revisando una planta de energía eléctrica al aire libre',
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
