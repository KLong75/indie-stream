"use client";

import Link from "next/link";

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
    <li className="flex items-center space-x-2">
      {htmlElement === "button" ? (
        <button
          onClick={onClick}
          className="flex items-center space-x-2 "
        >
          <span>{label}</span>
        </button>
      ) : (
        <Link
          href={href}
          className="flex items-center space-x-2 "
        >
          <span>{label}</span>
        </Link>
      )}
    </li>
  );
}