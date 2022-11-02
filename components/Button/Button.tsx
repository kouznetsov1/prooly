import Link from "next/link";
import { useState } from "react";

interface ButtonProps {
  url: string;
  text: string;
  inverted: boolean;
}

const Button = (props: ButtonProps): JSX.Element => {
  const [inverted, setInverted] = useState(props.inverted);

  return (
    <div>
      <Link href={props.url}>
        <button>
          {inverted ? (
            <div
              className="bg-black text-yellow-300 border-2 py-2 px-4 rounded-md border-yellow-300"
              onMouseEnter={() => setInverted(!inverted)}
              onMouseLeave={() => setInverted(!inverted)}
            >
              <span className="uppercase font-bold text-center flex m-auto">
                {props.text}
              </span>
            </div>
          ) : (
            <div
              className="bg-yellow-300 text-neutral-900 border-2 py-2 px-4 rounded-md border-black"
              onMouseEnter={() => setInverted(!inverted)}
              onMouseLeave={() => setInverted(!inverted)}
            >
              <span className="uppercase font-bold text-center flex m-auto">
                {props.text}
              </span>
            </div>
          )}
        </button>
      </Link>
    </div>
  );
};

export default Button;
