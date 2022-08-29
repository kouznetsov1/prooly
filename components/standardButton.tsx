import Link from "next/link";

interface StandardButtonProps {
  url: string;
  text: string;
}

export default function StandardButton(props: StandardButtonProps) {
  return (
    <div className="bg-yellow-300 text-neutral-900 border-2 py-2 px-4 rounded-md text-2xl border-black">
      <Link href={props.url}>
        <button className="uppercase font-bold text-center flex m-auto">
          {props.text}
        </button>
      </Link>
    </div>
  );
}
