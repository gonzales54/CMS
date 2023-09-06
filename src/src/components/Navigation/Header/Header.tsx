import Link from "next/link";
import { FC } from "react";

interface HeaderProps {
  title: string;
  navItems: {
    href: string;
    text: string;
  }[];
}

const Header: FC<HeaderProps> = ({ title, navItems }) => {
  return (
    <header className="bg-blue-500">
      <div className="w-[90%] md:w-4/5 h-30 mx-auto py-8 flex justify-between items-center text-gray-100">
        <h1 className="text-xl md:text-4xl font-bold">
          <Link href={"/"}>{title}</Link>
        </h1>
        <nav>
          <ul>
            {navItems.map((navItem) => {
              return (
                <li key={navItem.text}>
                  <Link
                    href={navItem.href}
                    className="text-sm md:text-base lg:text-lg"
                  >
                    {navItem.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
