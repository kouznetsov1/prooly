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
    { url: "/contact", name: "Kontakt" },
  ];
  return (
    <div className="h-20 flex text-white bg-black">
      <div className="w-5/6 flex items-center justify-between m-auto">
        <div className="w-40">
          <span className="text-2xl font-extrabold uppercase">gainoteket</span>
        </div>
        <div className="">
          {data.map((item) => (
            <Link href={item.url}>
              <button className="mx-12 w-24 uppercase font-bold text-center m-auto transition hover:-translate-y-1">
                {item.name}
              </button>
            </Link>
          ))}
        </div>
        <div className="w-40">
          <div className="space-x-4">
            <span className="">USER1337</span>
            <span className="border-2 border-emerald-500 rounded-full p-2">
              {":D"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

function MobileNavbar() {
  return (
    <div className="flex justify-between mx-auto px-4 py-2 sticky top-0 bg-black">
      <Logo />
      <BurgerMenu />
    </div>
  );
}

function BurgerMenu() {
  return (
    <div className="flex">
      <div className="space-y-2 m-2">
        <span className="block w-8 h-0.5 bg-white"></span>
        <span className="block w-8 h-0.5 bg-white"></span>
        <span className="block w-8 h-0.5 bg-white"></span>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <Link href="/">
      <button className="">
        <div className="border-2 border-white rounded-full">
          <p className="mx-3 my-1 text-white font-extrabold">G</p>
        </div>
      </button>
    </Link>
  );
}
