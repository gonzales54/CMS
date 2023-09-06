export default interface TimeStampProps {
  isNeedIcon?: boolean;
  isNeedMarginBottom?: boolean;
  createdAt: string;
  className?: string;
  positionClassName?: "items-start" | "items-center" | "items-end";
}