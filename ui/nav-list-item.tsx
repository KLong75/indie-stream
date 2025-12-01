"use client";

import Link from "next/link";
// import { Button } from "@/components/ui/button"

interface NavListItemProps {
  label: string;
  href: string;
  icon?: string;
  // onClick?: () => void;
}

export default function NavListItem({
  label,
  href,
  icon,
}: NavListItemProps
  ) {
  return (
    <li className="flex items-center ">
      <Link href={href} className="flex items-center space-x-2 ">
        {icon && <span>{icon}</span>}
        {label && <span>{label}</span>}
      </Link>
    </li>
  );
}
