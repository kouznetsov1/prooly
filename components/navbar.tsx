import Link from "next/link";

interface NavbarProps {
  url: string;
  name: string;
}

export default function NavBar() {
  return (
    <div className="z-0 w-full">
      <div className="lg:hidden">
        <MobileNavbar />
      </div>
      <div className="hidden lg:block">
        <BigScreenNavbar />
      </div>
    </div>
  );
}

function BigScreenNavbar() {
  return (
    <div>
      <p>navbar</p>
    </div>
  );
}

function MobileNavbar() {
  return (
    <div className="flex justify-between mx-auto px-4 py-2 sticky top-0 bg-neutral-900">
      <Logo />
      <BurgerMenu />
    </div>
  );
}

function BurgerMenu() {
  return (
    <div className="flex">
      <div className="space-y-2 m-2">
        <span className="block w-8 h-0.5 bg-yellow-300"></span>
        <span className="block w-8 h-0.5 bg-yellow-300"></span>
        <span className="block w-8 h-0.5 bg-yellow-300"></span>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <Link href="/">
      <button className="">
        <div className="border-4 border-yellow-300 rounded-full">
          <p className="mx-3 my-1 text-yellow-300 font-bold">P</p>
        </div>
      </button>
    </Link>
  );
}
