import Link from "next/link";
import { useState } from "react";

interface ButtonProps {
  url: string;
  text: string;
  inverted: boolean;
}

export const Button = (props: ButtonProps): JSX.Element => {
  const [inverted, setInverted] = useState(props.inverted);

  return (
    <div>
      <Link href={props.url}>
        <button>
          {inverted ? (
            <div
              className="text-white border-4 py-2 px-4 rounded-lg border-emerald-700 bg-emerald-700"
              onMouseEnter={() => setInverted(!inverted)}
              onMouseLeave={() => setInverted(!inverted)}
            >
              <span className="uppercase font-bold text-center flex m-auto lg:text-xl">
                {props.text}
              </span>
            </div>
          ) : (
            <div
              className="bg-white border-4 py-2 px-4 rounded-lg border-emerald-700 text-emerald-700"
              onMouseEnter={() => setInverted(!inverted)}
              onMouseLeave={() => setInverted(!inverted)}
            >
              <span className="uppercase font-bold text-center flex m-auto lg:text-xl">
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
