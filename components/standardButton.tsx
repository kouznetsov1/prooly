import Link from "next/link";

interface StandardButtonProps {
  url: string;
  text: string;
  inverted: boolean;
}

const StandardButton = (props: StandardButtonProps): JSX.Element => {
  return (
    <div>
      {props.inverted ? (
        <div className="bg-black text-yellow-300 border-2 py-2 px-4 rounded-md border-yellow-300">
          <Link href={props.url}>
            <button className="uppercase font-bold text-center flex m-auto">
              {props.text}
            </button>
          </Link>
        </div>
      ) : (
        <div className="bg-yellow-300 text-neutral-900 border-2 py-2 px-4 rounded-md border-black">
          <Link href={props.url}>
            <button className="uppercase font-bold text-center flex m-auto">
              {props.text}
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default StandardButton;
