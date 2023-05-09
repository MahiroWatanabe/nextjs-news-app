import Link from "next/link";

type Props = {
  category: string;
  isActive: boolean;
};

const NavLink = ({ category, isActive }: Props) => {
  return (
    <Link
      className={`hover:underline decoration-orange-400 text-center 
      decoration-2 active:underline underline-offset-8 rounded-full p-4 
      cursor-pointer hover:font-bold capitalize hover:scale-110 
      transition-transform duration-200 ease-out ${
        isActive &&
        "underline decoration-orange-400 underline-offset-4 font-bold text-lg"
      }`}
      href={`/news/${category}`}
    >
      {category}
    </Link>
  );
};

export default NavLink;
