export default interface TagProps {
  tag: string;
  className?: string;
  href: string;
  isNeedIcon?: boolean;
  colorClass?: "bg-blue-500" | "bg-gray-700" | "bg-transparent";
  isTextWhite?: boolean;
}