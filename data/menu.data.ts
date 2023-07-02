export const menu = [
  {
    title: "대시보드",
    icon: "mdi:view-dashboard",
    link: "/",
  },
  {
    title: "계정관리",
    icon: "mdi:account-circle-outline",
    link: "/users",
    submenu: [
      {
        title: "계정목록",
        icon: "mdi:format-list-bulleted",
        link: "",
      },
    ],
  },
  {
    title: "게시물관리",
    icon: "material-symbols:camera-rounded",
    link: "/posts",
    submenu: [
      {
        title: "게시물목록",
        icon: "mdi:format-list-bulleted",
        link: "",
      },
      {
        title: "예약현황",
        icon: "material-symbols:calendar-month-outline-sharp",
        link: "/schedules",
      },
    ],
  },
  {
    title: "생산성",
    icon: "material-symbols:astrophotography-auto-outline",
    link: "/automate",
    submenu: [
      {
        title: "템플릿관리",
        icon: "tabler:template",
        link: "/template",
      },
      {
        title: "텍스터블 이미지 관리",
        icon: "material-symbols:insert-text-outline",
        link: "/textable",
      },
    ],
  },
];
