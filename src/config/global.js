export default {
  global: {
    componenteFormativo: 'Logística comercial',
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
      tema: 'Almacenamiento',
      referencia:
        'Mauleón Torres, M. (2003). Sistemas de almacenaje y picking. Madrid, Spain: Ediciones Díaz de Santos.',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/62786?page=239.',
    },
    {
      tema: 'Recibo - Despacho',
      referencia:
        'Mora García, L. (2010). Gestión logística integral: Las mejores prácticas en la cadena de abastecimiento. Ecoe Ediciones.',
      tipo: 'Revista',
      link: 'https://www-digitaliapublishing-com.bdigital.sena.edu.co/a/29965',
    },
    {
      tema: 'Picking y Packing',
      referencia:
        'Núñez Carballosa, A., Guitart Tarrés, L., & Baraza Sánchez, X. (2014). Dirección de operaciones: Decisiones tácticas y estratégicas.',
      tipo: 'Libro',
      link: 'https://www-digitaliapublishing-com.bdigital.sena.edu.co/a/30102',
    },
    {
      tema: 'Cubicaje',
      referencia:
        'Soluciones Logísticas y Aduaneras E & S (2020). Cubicaje de mercancía en contenedor.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=-3pEFK6hp2A',
    },
  ],
  referencias: [
    {
      referencia:
        'Carro Lupardo, E. (2016). Preparación de pedidos (transversal) (MF1326_1). Madrid, Spain: Editorial CEP, S.L.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/51055',
    },
    {
      referencia:
        'Castellano Ramírez, A. (2015). Logística comercial internacional. Universidad del Norte.',
      link: 'https://www-digitaliapublishing-com.bdigital.sena.edu.co/a/37553',
    },
    {
      referencia:
        'Flamarique, S. (2019). Manual de gestión de almacenes. Barcelona, Marge Books.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/111434?page=20',
    },
    {
      referencia:
        'Gómez Aparicio, J. M. (2013). Gestión logística y comercial. Aravaca, Madrid, Spain: McGraw-Hill España.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/50240?page=87',
    },
    {
      referencia:
        'Soler, D. (2017). Unidades de carga en el transporte (2a. ed.). Barcelona, Spain: Marge Books.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/43753?page=35',
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
          centro: 'Centro Agroturístico - Regional Santander',
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
            'Centro de Manufactura en Textil y Cuero - Regional Distrito Capital',
        },
        {
          nombre: 'Natalia Andrea Bueno Pizarro',
          cargo: 'Diseñadora y Evaluadora Instruccional',
          centro:
            'Centro para La Industria de la Comunicación Gráfica - Distrito Capital',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Diseñadora y Evaluadora Instruccional',
          centro:
            'Centro para La Industria de la Comunicación Gráfica - Distrito Capital',
        },
        {
          nombre: 'Carolina Jiménez Suescún',
          cargo: 'Evaluador Instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmin Rocio Figueroa Pacheco',
          cargo: 'Diseñadora de Contenidos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Pedro Alonso Bolivar Gonzalez',
          cargo: 'Desarrollador <em>Fullstack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animador y Productor Multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Ardila Chaparro',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
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
