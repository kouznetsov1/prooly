import Link from "next/link";

interface FooterProps {
  url: string;
  name: string;
}

export default function Footer() {
  return (
    <div className="bg-neutral-900 flex fixed bottom-0 w-full">
      <MobileFooter />
    </div>
  );
}

function MobileFooter() {
  return (
    <div className="w-full flex justify-center">
      <div className="m-2 flex w-3/4 justify-around">
        <InternalLinks />
        <SocialLinks />
      </div>
    </div>
  );
}

function InternalLinks() {
  return (
    <div className="grid">
      <a href="/" className="text-neutral-200">
        Om oss
      </a>
      <a href="/" className="text-neutral-200">
        Kontakt
      </a>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="grid">
      <a href="/" className="text-neutral-200">
        Facebook
      </a>
      <a href="/" className="text-neutral-200">
        Instagram
      </a>
    </div>
  );
}
