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
        id: 3,
        name: "components",
        isFile: true,
        children: [
          {
            id: 4,
            name: "navbar",
            isFile: true,
            children: [
              {
                id: 5,
                name: "Navbar.jsx",
                isFile: false,
              },
            ],
          },
          {
            id: 6,
            name: "footer",
            isFile: true,
            children: [
              {
                id: 7,
                name: "footer.jsx",
                isFile: false,
              },
            ],
          },
        ],
      },
      {
        id: 8,
        name: "global.css",
        isFile: false,
      },
      {
        id: 9,
        name: "layout.js",
        isFile: false,
      },
      {
        id: 10,
        name: "page.js",
        isFile: false,
      },
    ],
  },
  {
    id: 11,
    name: "public",
    isFile: true,
    children: [
      {
        id: 12,
        name: "components",
        isFile: true,
        children: [
          {
            id: 13,
            name: "file.svg",
            isFile: false,
          },
          {
            id: 14,
            name: "asset",
            isFile: true,
            children: [
              {
                id: 15,
                name: "img.png",
                isFile: false,
              },
            ],
          },
        ],
      },
      {
        id: 16,
        name: "global.css",
        isFile: false,
      },
      {
        id: 17,
        name: "layout.js",
        isFile: false,
      },
      {
        id: 18,
        name: "page.js",
        isFile: false,
      },
    ],
  },
];
