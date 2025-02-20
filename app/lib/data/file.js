export const fileData = [
  {
    id: 1,
    name: "Readme.md",
    isFile: false,
  },
  {
    id: 2,
    name: "app",
    isFile: true,
    children: [
      {
        id: 4,
        name: "components",
        isFile: true,
        children: [
          {
            id: 1,
            name: "navbar",
            isFile: true,
            children: [
              {
                id: 1,
                name: "Navbar.jsx",
                isFile: false,
              },
            ],
          },
          {
            id: 2,
            name: "footer",
            isFile: true,
            children: [
              {
                id: 1,
                name: "footer.jsx",
                isFile: false,
              },
            ],
          },
        ],
      },
      {
        id: 1,
        name: "global.css",
        isFile: false,
      },
      {
        id: 2,
        name: "layout.js",
        isFile: false,
      },
      {
        id: 3,
        name: "page.js",
        isFile: false,
      },
    ],
  },
  {
    id: 3,
    name: "public",
    isFile: true,
    children: [
      {
        id: 4,
        name: "components",
        isFile: true,
        children: [
          {
            id: 1,
            name: "file.svg",
            isFile: false,
          },
          {
            id: 2,
            name: "asset",
            isFile: true,
            children: [
              {
                id: 1,
                name: "img.png",
                isFile: false,
              },
            ],
          },
        ],
      },
      {
        id: 1,
        name: "global.css",
        isFile: false,
      },
      {
        id: 2,
        name: "layout.js",
        isFile: false,
      },
      {
        id: 3,
        name: "page.js",
        isFile: false,
      },
    ],
  },
];
