// export const navItems = [
//   {
//     name: "Playlists",
//     href: "/playlists",
//   },
//   {
//     name: "Releases",
//     href: "/releases",
//   },
//   {
//     name: "Artists",
//     href: "/artists",
//   },
// ];

export type NavItem = {
  label: string;
  href: string;
  icon?: string;
};

export const navItems: NavItem[] = [
  {
    label: "Home",
    href: "/listeners/_id_",
    icon: "home"
  },
  {
    label: "Artists",
    href: "/artists",
    icon: "artists"
  },
  {
    label: "Releases",
    href: "/releases",
    icon: "releases"
  },
  {
    label: "Playlists",
    href: "/playlists",
    icon: "playlists"
  },
];
