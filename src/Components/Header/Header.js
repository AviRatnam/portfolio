import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-headerGray absolute w-full h-10 px-20 flex justify-center items-center ">
      <div className="flex gap-10">
        <a className="text-gray-300 text-sm hover:text-gray-100" href="aboutme">
          About me
        </a>

        <a className="text-gray-300 text-sm hover:text-gray-100">Tech I Use</a>

        <a className="text-gray-300 text-sm hover:text-gray-100">
          Projects and Publications
        </a>
        <a className="text-gray-300 text-sm hover:text-gray-100">Contact</a>
      </div>
    </div>
  );
};

export default Header;
