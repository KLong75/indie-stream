"use client";

import Link from "next/link";
// import { Button } from "@/components/ui/button"

export default function NavListItem({
  label,
  href,
  htmlElement,
  onClick,
}: {
  label: string;
  href: string;
  htmlElement: string;
  onClick?: () => void;
}) {
  return (
    <li className="flex items-center ">
      {htmlElement === "button" ? (
        <button
          // variant="secondary"
          // size="lg"
          onClick={onClick}
          className=""
        >
          <span>{label}</span>
        </button>
      ) : (
        <button
          // asChild
          // variant="secondary"  
          // size="lg"
          onClick={onClick}
        >
        <Link
          href={href}
          className="flex items-center space-x-2 "
        >
          <span>{label}</span>
        </Link>
        </button>
      )}
    </li>
  );
}