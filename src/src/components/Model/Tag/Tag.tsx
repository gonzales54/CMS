import Link from "next/link";
import { FC } from "react";
import { HiTag } from "react-icons/hi2";

interface TagProps {
  children: string;
  className?: string;
  href: string;
  isNeedIcon: boolean;
  colorClass: "bg-blue-500" | "bg-gray-700" | "bg-transparent";
  isTextWhite?: boolean;
}

const Tag: FC<TagProps> = ({
  children,
  className = "",
  isNeedIcon = true,
  href,
  colorClass,
  isTextWhite = false,
}) => {
  return (
    <Link
      href={href}
      className={`p-1 flex items-center gap-x-1 rounded-sm ${
        isTextWhite ? "text-gray-800" : "text-gray-100"
      } ${className} ${colorClass}`}
    >
      {isNeedIcon && <HiTag className="text-xs md:text-sm" />}
      <p className="text-xs">{children}</p>
    </Link>
  );
};

export default Tag;
