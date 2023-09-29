import * as Icon from "react-feather";

const SidebarData = [
  { caption: "Home" },
  {
    title: "Dashboard",
    href: "/starter",
    icon: <Icon.Home />,
    id: 1,
    suffix: "New",
    suffixColor: "bg-success",
    collapisble: false,
  },
  { caption: "UI" },
  {
    title: "UI Elements",
    href: "/ui",
    id: 2,
    suffix: "8",
    suffixColor: "bg-info",
    icon: <Icon.Cpu />,
    collapisble: true,
    children: [
      {
        title: "Alert",
        href: "/ui/alerts",
        icon: <Icon.Disc />,
      },
      {
        title: "Buttons",
        href: "/buttons",
        icon: <Icon.Disc />,
      },
      {
        title: "Cards",
        href: "/cards",
        icon: <Icon.Disc />,
      },
      {
        title: "Grid",
        href: "/grid",
        icon: <Icon.Disc />,
      },
      {
        title: "Badges",
        href: "/badges",
        icon: <Icon.Disc />,
      },
      {
        title: "Table",
        href: "/table",
        icon: <Icon.Disc />,
      },
      {
        title: "Forms",
        href: "/forms",
        icon: <Icon.Disc />,
      },
      {
        title: "Breadcrumbs",
        href: "/breadcrumbs",
        icon: <Icon.Disc />,
      },
      {
        title: "About",
        href: "/about",
        icon: <Icon.Disc />,
      },
    ],
  },

  {
    title: "DD Menu",
    href: "/",
    id: 3,
    collapisble: true,
    icon: <Icon.Disc />,
    children: [
      {
        title: "Simple dd 1",
        href: "/",
        icon: <Icon.Disc />,
      },
      {
        title: "Simple dd 2",
        href: "/",
        icon: <Icon.Disc />,
      },
      {
        title: "Simple dd 3",
        href: "/",
        icon: <Icon.Disc />,
        children: [
          {
            title: "Simple dd 1.1",
            href: "/alerts",
            icon: <Icon.Disc />,
          },
        ],
      },
    ],
  },
];

export default SidebarData;
