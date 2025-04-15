"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button"

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
    <li className="flex items-center space-x-">
      {htmlElement === "button" ? (
        <Button
          variant="secondary"
          size="lg"
          onClick={onClick}
          className=""
        >
          <span>{label}</span>
        </Button>
      ) : (
        <Button
          asChild
          variant="secondary"  
          size="lg"
        >
        <Link
          href={href}
          className="flex items-center space-x-2 "
        >
          <span>{label}</span>
        </Link>
        </Button>
      )}
    </li>
  );
}