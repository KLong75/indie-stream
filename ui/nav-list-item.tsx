"use client";

import Link from "next/link";
import { RiHome2Fill } from "react-icons/ri";
import { IoMdPerson } from "react-icons/io";
import { FaRecordVinyl } from "react-icons/fa";
import { PiPlaylistFill } from "react-icons/pi";
import { NavItem } from "@/lib/nav-items";
import { JSX } from "react";

const iconMap: Record<string, JSX.Element> = {
  home: <RiHome2Fill size={24} />,
  artists: <IoMdPerson size={24} />,
  releases: <FaRecordVinyl size={24} />,
  playlists: <PiPlaylistFill size={24} />,
};

type IconKey = keyof typeof iconMap;


export default function NavListItem({ item }: { item: NavItem }) {
  return (
    <li className="flex items-center" title={item.label}>
      <Link href={item.href} className="flex items-center space-x-2 ">
        {item.icon && <span>{iconMap[item.icon]}</span>}
        {/* {item.label && <span>{item.label}</span>} */}
      </Link>
    </li>
  );
}
