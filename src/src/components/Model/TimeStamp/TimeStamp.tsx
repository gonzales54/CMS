import TimeStampProps from "@/types/components/TimeStampProps";
import { FC } from "react";
import { HiOutlineCalendar } from "react-icons/hi2";

const TimeStamp: FC<TimeStampProps>= ({
  isNeedIcon = true,
  isNeedMarginBottom = false,
  createdAt,
  className = "",
  positionClassName = "items-center",
}) => {
  return (
    <div
      className={`${
        isNeedMarginBottom ? "mb-2" : ""
      } flex gap-x-1 text-gray-400 ${className} ${positionClassName}`}
    >
      {isNeedIcon && <HiOutlineCalendar aria-label="calender icon" />}
      <time className="inline-block text-xs md:text-sm">{createdAt}</time>
    </div>
  );
};
export default TimeStamp;
