import Link from "next/link";
import { ModeToggle } from "@/components/themeToggle";
export const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Logo</div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/about" className="text-white hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="text-white hover:text-gray-300">
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-white hover:text-gray-300">
              Contact
            </Link>
          </li>
        </ul>
        <ModeToggle></ModeToggle>
      </div>
    </nav>
  );
};
