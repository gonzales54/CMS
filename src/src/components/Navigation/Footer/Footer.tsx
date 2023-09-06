import Link from "next/link";
import { FC } from "react";

interface FooterProps {
  title: string;
}

const Footer: FC<FooterProps> = ({ title }) => {
  return (
    <footer className="bg-gray-800 text-gray-100">
      <div className="w-[90%] md:w-4/5 h-28 mx-auto py-8">
        <h3 className="text-xl">
          <Link href={"/"}>{title}</Link>
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
