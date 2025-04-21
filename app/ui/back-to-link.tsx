// import from next
import Link from "next/link";
// import icons
import { RiArrowLeftSLine } from "react-icons/ri";
// import { IoIosArrowBack } from "react-icons/io";

interface BackLinkProps {
  href: string;
  label: string;
}

export default function BackToLink({ href, label }: BackLinkProps) {
  return (
    <Link href={href}>
      <div className="flex items-center">
      <RiArrowLeftSLine className="text-3xl" />
      <span className="text-sm">{label}</span>
      </div>
    </Link>
  );
}