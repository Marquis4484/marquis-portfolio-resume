import {
  company,
  company1,
  company2,
  company3,
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client7,
  client21,
  client22,
  client23,
  linkedInLogo,
  upworkLogo,
} from "../assets";

const skills = [
  {
    id: 999,
    title: "Frontend",
    skills: [
      {
        id: 2,
        name: "React",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },

      {
        id: 3,
        name: "Next Js",
        image:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACTklEQVR4Ab1XAaQqURB9DyohSykREpRIQSAlBCoECKUFCSRCBBEAaSEABQEoCIEASCwAUICALgCo83do0//9v819XX845O7VnDkzOzP7JWGaBd3C3IJpQVjAHeJ+Rs9a97vKLGrBsB1KgMhEP3FMUUwt4ENMfxr1yQIU4SSjRkbeOZtERmHk6pXQVDlnkHh9S+QLTm1hkiz4n/gzFQuny9FoFLquE+i34x+n02k0m00UCoV3BIzn3MMJrVYLtp1OJ0cS/X4f5/MZhmG8IyDsWtDfEaDIn2232/3zbrvdxuFwwGg04qRBt+VnETBNE0IIkE2n07/erdfrWK/X6Ha73Hb9ZXII3G43ivy3dNRqtZe7lUoFs9mM6oBDwCQCgquALT1FT3a5XF7qIZ/PYzgcolqtcggIIgBZAgRKB6lCRalp2uM8k8mAVMrlchwC+DEBipycE4n5fP44j8ViKJVKSCaTbAJCpgaez4vFIsjoWa/XA50FAgEkEgmEw2F2CkxZBZ5Br5tt1ITcbjd8Ph88Hg+7CBefECCsVitS4aVJcV9D/VMCVITk/Hq9YrPZyBBo2a1YMGvAcQYcj0cCtWMugcdYNhjDiBrP25mx3++x3W6RzWZZ8isfxzQLlsslJpMJpYY5jhkqcOH1ejEYDDAej9FoNOByuZxGsfqVzC7KTqcDSkkqleKsZOqX0mAwiHK5DGrJfr+fs5SqX8sjkQji8ThCoRC+v78Za7l6JagrUh3YkUuZpqgwDaecc9VYSDoV5Fg+at7n+eLN57kuE/EvzHr/Kvs31aYAAAAASUVORK5CYII=",
      },

      {
        id: 4,
        name: "Redux",
        image:
          "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
      },

      {
        id: 5,
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        id: 6,
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },

      {
        id: 7,
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },

  

      {
        id: 9,
        name: "Bootstrap",
        image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },
      {
        id: 11,
        name: "TailwindCSS",
        image:
          "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      },
    ],
  },
  {
    id: 998,
    title: "Backend",
    skills: [
      {
        id: 101,
        name: "Node Js",
        image: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg",
      },
      {
        id: 102,
        name: "Express Js",
        image: "https://i.ibb.co/3dssqRk/express-js.png",
      },

      {
        id: 103,
        name: "MongoDB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },
      {
        id: 104,
        name: "Firebase",
        image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
      },

      {
        id: 105,
        name: "NoSQL",
        image: "https://i.ibb.co/g6kyNdP/NoSQL.png",
      },
      {
        id: 106,
        name: "Python",
        image:
          "https://qph.cf2.quoracdn.net/main-qimg-28cadbd02699c25a88e5c78d73c7babc",
      },
      {
        id: 107,
        name: "PHP",
        image: "https://www.vectorlogo.zone/logos/php/php-horizontal.svg",
      },
    ],
  },
  {
    id: 997,
    title: "Others",
    skills: [
      {
        id: 201,
        name: "Git",
        image: "https://avatars.githubusercontent.com/u/18133?s=280&v=4",
      },
      {
        id: 202,
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        id: 203,
        name: "Vercel",
        image: "https://i.ibb.co/VjL9zJH/Vercel.png",
      },
      //
      //

      {
        id: 204,
        name: "Netlify",
        image:
          "https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png",
      },
      {
        id: 205,
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        id: 206,
        name: "WordPress",
        image: "https://www.vectorlogo.zone/logos/wordpress/wordpress-icon.svg",
      },
      {
        id: 207,
        name: "Adobe PS",
        image: "https://i.ibb.co/X52kyqc/adobe-photoshop-svgrepo-com.png",
      },
      {
        id: 208,
        name: "Figma",
        image:
          "https://i.pinimg.com/originals/63/a7/b1/63a7b1894b3210d07e434e9d12170586.png",
      },
      {
        id: 209,
        name: "Canva",
        image: "https://www.vectorlogo.zone/logos/canva/canva-icon.svg",
      },
      {
        id: 210,
        name: "Camtasia",
        image: "https://i.ibb.co/rxWnyvh/camtasia.jpg",
      },
      {
        id: 211,
        name: "Filmora",
        image: "https://i.ibb.co/WK1mZ6s/filmora.png",
      },
      {
        id: 212,
        name: "Shopify",
        image:
          "https://logowik.com/content/uploads/images/shopify-bag5181.logowik.com.webp",
      },
    ],
  },
  {
    id: 996,
    title: "Tools",
    skills: [
      
      {
        id: 301,
        name: "Git",
        image: "https://avatars.githubusercontent.com/u/18133?s=280&v=4",
      },
      {
        id: 302,
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        id: 303,
        name: "Vercel",
        image: "https://i.ibb.co/VjL9zJH/Vercel.png",
      },
      //
      //

      {
        id: 304,
        name: "Netlify",
        image:
          "https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png",
      },
      {
        id: 305,
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        id: 306,
        name: "WordPress",
        image: "https://www.vectorlogo.zone/logos/wordpress/wordpress-icon.svg",
      },
      {
        id: 307,
        name: "Adobe PS",
        image: "https://i.ibb.co/X52kyqc/adobe-photoshop-svgrepo-com.png",
      },
      {
        id: 308,
        name: "Figma",
        image:
          "https://i.pinimg.com/originals/63/a7/b1/63a7b1894b3210d07e434e9d12170586.png",
      },
      {
        id: 309,
        name: "Canva",
        image: "https://www.vectorlogo.zone/logos/canva/canva-icon.svg",
      },
      {
        id: 310,
        name: "Camtasia",
        image: "https://i.ibb.co/rxWnyvh/camtasia.jpg",
      },
      {
        id: 311,
        name: "Filmora",
        image: "https://i.ibb.co/WK1mZ6s/filmora.png",
      },
      {
        id: 312,
        name: "Shopify",
        image:
          "https://logowik.com/content/uploads/images/shopify-bag5181.logowik.com.webp",
      },
    ],
  },
];

const portfolio = [
  {
    id: 1,
    gif: "https://uploads-ssl.webflow.com/624ffa8926c9b353747d449f/626117bf88153d043bf91d37_preview.gif",
    title: "[Project]",
    github: "https://github.com/",
    demo: "https://www.google.co/",
    tag: "#Tech #Tech #Tech",
  },

  {
    id: 2,
    gif: "https://uploads-ssl.webflow.com/624ffa8926c9b353747d449f/626117bf88153d043bf91d37_preview.gif",
    title: "[Project]",
    github: "https://github.com/",
    demo: "https://www.google.co/",
    tag: "#Tech #Tech #Tech",
  },

  {
    id: 3,
    gif: "https://uploads-ssl.webflow.com/624ffa8926c9b353747d449f/626117bf88153d043bf91d37_preview.gif",
    title: "[Project]",
    github: "https://github.com/",
    demo: "https://www.google.co/",
    tag: "#Tech #Tech #Tech",
  },

  {
    id: 4,
    gif: "https://uploads-ssl.webflow.com/624ffa8926c9b353747d449f/626117bf88153d043bf91d37_preview.gif",
    title: "[Project]",
    github: "https://github.com/",
    demo: "https://www.google.co/",
    tag: "#Tech #Tech #Tech",
  },

  {
    id: 5,
    gif: "https://uploads-ssl.webflow.com/624ffa8926c9b353747d449f/626117bf88153d043bf91d37_preview.gif",
    title: "[Project]",
    github: "https://github.com/",
    demo: "https://www.google.co/",
    tag: "#Tech #Tech #Tech",
  },

  {
    id: 6,
    gif: "https://uploads-ssl.webflow.com/624ffa8926c9b353747d449f/626117bf88153d043bf91d37_preview.gif",
    title: "[Project]",
    github: "https://github.com/",
    demo: "https://www.google.co/",
    tag: "#Tech #Tech #Tech",
  },

  {
    id: 7,
    gif: "https://uploads-ssl.webflow.com/624ffa8926c9b353747d449f/626117bf88153d043bf91d37_preview.gif",
    title: "[Project]",
    github: "https://github.com/",
    demo: "https://www.google.co/",
    tag: "#Tech #Tech #Tech",
  },
];

const testimonial = [
  {
    index: 1,
    avatar: client1,
    name: "[client]",
    review: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    title: "[Title], [Location]",

    source: "UpWork",
  },

  {
    index: 2,
    avatar: client2,
    name: "[client]",
    review: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    title: "[Title], [Location]",

    source: "LinkedIn",
  },

  {
    index: 3,
    avatar: client3,
    name: "[client]",
    review: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    title: "[Title], [Location]",

    source: "LinkedIn",
  },

  {
    index: 4,
    avatar: client4,
    name: "[client]",
    review: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    title: "[Title], [Location]",

    source: "LinkedIn",
  },

  {
    index: 5,
    avatar: client5,
    name: "[client]",
    review: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    title: "[Title], [Location]",

    source: "LinkedIn",
  },

  {
    index: 6,
    avatar: client6,
    name: "[client]",
    review: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    title: "[Title], [Location]",

    source: "LinkedIn",
  },

  {
    index: 7,
    avatar: client7,
    name: "[client]",
    review: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    title: "[Title], [Location]",

    source: "LinkedIn",
  },

  {
    index: 21,
    avatar: client21,
    name: "[client]",
    review: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    title: "[Title], [Location]",

    source: "Local",
  },
  {
    index: 22,
    avatar: client22,
    name: "[client]",
    review: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    title: "[Title], [Location]",

    source: "Local",
  },
  {
    index: 23,
    avatar: client23,
    name: "[client]",
    review: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    title: "[Title], [Location]",

    source: "Local",
  },
];

export { skills, portfolio, testimonial };
