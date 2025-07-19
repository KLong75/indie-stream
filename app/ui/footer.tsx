"use client";
// import from next
import { usePathname } from "next/navigation";
export default function Footer() {
  const pathname = usePathname();
  return (
    // Don't render footer on the home page
    pathname === "/" ? null : (
      <footer className="bg-gray-900 text-white p-4 text-center">
        <p>©2025</p>
        <p>Rhythm Code Studio</p>
      </footer>
    )
  );
}
