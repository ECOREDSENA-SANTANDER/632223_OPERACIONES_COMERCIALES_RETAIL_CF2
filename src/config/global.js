export default {
  global: {
    componenteFormativo: 'Escalado digital',
    descripcionCurso:
      'Este componente formativo aborda la logística en operaciones comerciales en <em>retail</em>, enfocándose en conocimientos relacionados con la gestión de almacenes, incluyendo recibo, despacho y manejo de datos, así como el tratamiento el tratamiento del envase, empaque y embalaje en <em>picking</em> y <em>packing</em>, carga y sus conceptos asociados, además su relación con las Buenas Prácticas de Manufactura (BPM) y la normativa técnica de SST .',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Almacenamiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Recibo',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Despacho',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Datos',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: '<em>Picking</em> y <em>Packing</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Envase',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Empaque',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Embalaje',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Carga',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Unitarización',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Desunitarización',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Rotulación',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Cubicaje',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Buenas Prácticas de Manufactura (BPM)',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Normativa técnica en seguridad y salud en el trabajo',
            hash: 't_3_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      /*{
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },*/
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: 'Gaviria F., (2018). Manual escalado masculino',
      tipo: 'Documento',
      link:
        'https://drive.google.com/file/d/1GnLvwC-1bOnwNcVlXfKcsaA3PzQ4x1lW/view?usp=sharing',
    },
  ],
  referencias: [
    {
      referencia:
        'Gutiérrez, L., Moncayo, A., Tanaka, K., Kimura, F., Moreno, D. (2011). Manual de patronaje básico e interpretación de diseños. Servicio Nacional de Aprendizaje SENA.',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/q6j6k0/sena_aleph000025496',
    },
    {
      referencia:
        'Harpersbazaar. (2019). La ropa que eliges afecta a tu estado de ánimo y cerebro, según expertos. En arpersbazaar.mx.',
      link:
        'https://www.harpersbazaar.mx/belleza/salud-y-bienestar/la-ropa-que-eliges-afecta-a-tu-estado-de-animo-y-cerebro-segun-expertos/',
    },
    {
      referencia:
        'Lafuente M., Navarro J., y Navarro J. (2005). Ilustración de moda. Sistema de Bibliotecas SENA.',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000025549',
    },
    {
      referencia:
        'Laver, J.,  Albizua, H., y Fortea, B. (1990). Breve historia del traje y la moda. Sistema de Bibliotecas SENA.',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000063748',
    },
    {
      referencia:
        'Navarro, J.,  y Lafuente, M. (2010). Ilustración de moda: dibujo plano. Sistema de Bibliotecas SENA.  ',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/q6j6k0/sena_aleph000023241',
    },
    {
      referencia:
        'Sociedad Americana de Ensayos y Materiales (ASTM). (2003). Textiles. Editorial Staff. [Book]. Sistema de Bibliotecas SENA.',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000051551',
    },
    {
      referencia:
        'Szkutnicka, B., Cuenca, C., Koyama, A. (2010). El dibujo técnico de moda paso a paso. Sistema de Bibliotecas SENA. ',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000057728',
    },
    {
      referencia:
        'Vélez, M., García M., Hincapié L. (1996). Patronaje y escalado línea interior y deportiva. Servicio Nacional de Aprendizaje SENA. ',
      link: 'https://repositorio.sena.edu.co/handle/11404/4811',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Lizeth Maritza Rodríguez Beltrán',
          cargo: 'Instructora Técnica',
          centro:
            'Regional Distrito Capital - Centro de Manufactura en Textil y Cuero',
        },
        {
          nombre: 'Natalia Andrea Bueno Pizarro',
          cargo: 'Diseñadora y Evaluadora Instruccional',
          centro:
            'Distrito Capital – Centro para La Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Diseñadora y Evaluadora Instruccional',
          centro:
            'Distrito Capital – Centro para La Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Carolina Jiménez Suescún',
          cargo: 'Evaluador Instruccional',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmin Rocio Figueroa Pacheco',
          cargo: 'Diseñadora de Contenidos Digitales',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Pedro Alonso Bolivar Gonzalez',
          cargo: 'Desarrollador <em>Fullstack</em>',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animador y Productor Multimedia',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
