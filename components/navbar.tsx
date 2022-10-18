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

const BigScreenNavbar = (): JSX.Element => {
  var data: NavbarProps[] = [
    { url: "/", name: "Start" },
    { url: "/about", name: "Om oss" },
    { url: "/contact", name: "Kontakta oss" },
  ];
  return (
    <div className="h-20 bg-black flex">
      <div className="w-5/6 flex items-center justify-between m-auto">
        <div>
          <span className="underline underline-offset-8 text-yellow-300 text-2xl font-extrabold">
            PROOLY
          </span>
        </div>
        <div className="text-white">
          {data.map((item) => (
            <Link href={item.url}>
              <button className="mx-12 uppercase font-bold text-center m-auto transition hover:text-yellow-300 hover:-translate-y-1">
                {item.name}
              </button>
            </Link>
          ))}
        </div>
        <div className="text-white space-x-4">
          <span className="">USER1337</span>
          <span className="border-2 border-white rounded-full p-2">{":D"}</span>
        </div>
      </div>
    </div>
  );
};

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
