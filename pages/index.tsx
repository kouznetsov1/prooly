import type { NextPage } from "next";
import { StaticImageData } from "next/image";
import backgroundImage from "./../public/big.png";
import Image from "next/image";
import StandardButton from "../components/Button/Button";
import Link from "next/link";
import { useState } from "react";

const Home: NextPage = () => {
  return (
    <div className="">
      <div className="lg:hidden">
        <MobileIndex />
      </div>
      <div className="hidden lg:block">
        <BigScreenIndex />
      </div>
    </div>
  );
};

function BigScreenIndex() {
  const [x, setX] = useState(200);

  return (
    <div className="w-full top-0 relative min-h-[calc(100vh-160px)]">
      <div className="h-[600px]">
        <div className="m-auto flex justify-center text-center">
          <div className="">
            <h1 className="text-7xl uppercase font-extrabold text-center w-96 m-auto flex justify-center mb-10 mt-32">
              skräddarsy din kostplan
            </h1>
            <StandardButton
              url="/calculator"
              inverted={true}
              text="Sätt igång"
            />
          </div>
          <div className="h-[600px] w-full border-2 border-emerald-500 absolute overflow-hidden pointer-events-none">
            <div className="bubble-wrapper"></div>
          </div>
        </div>
      </div>
      <div>
        <SiteShowcase />
      </div>
    </div>
  );
}

const animateBubble = (x: number) => {
  const wrapper = document.getElementById("bubble-wrapper");
  const bubble = document.createElement("div");

  bubble.className =
    "w-80 h-80 bg-emerald-500 rounded-full absolute top-full animate-wave";
  bubble.style.left = `${x}px`;

  if (wrapper) {
    wrapper.appendChild(bubble);
    setTimeout(() => wrapper.removeChild(bubble), 2000);
  }
};

if (typeof window !== "undefined") {
  window.onmousemove = (e) => {
    animateBubble(e.clientX);
  };
}

function MobileIndex() {
  return (
    <div>
      <ImageSection />
      <SiteShowcase />
      <FormSection />
    </div>
  );
}

function ImageSection() {
  const imageSource: StaticImageData = backgroundImage;
  return (
    <div className="w-full top-0 relative bg-neutral-900">
      <Image src={imageSource} alt="placeholder" />
      <div className="grid justify-start mx-8 absolute text-start top-2/3 sm:top-3/4">
        <div className="text-yellow-300 grid my-2">
          <span className="text-4xl font-bold">Ät hälsosamt,</span>
          <span className="text-2xl">vi gör jobbet.</span>
        </div>
        <Link href="/calculator">
          <button className="bg-yellow-300 text-neutral-900 uppercase font-bold py-2 px-4 border-4 text-2xl border-black">
            Sätt igång
          </button>
        </Link>
      </div>
    </div>
  );
}

function SiteShowcase() {
  const data: Array<{
    title: string;
    description: string;
    image: StaticImageData;
  }> = [
    {
      title: "1. Räkna ut ditt kaloribehov",
      description:
        "Med prooly:s egna kaloriräknare räknar du enkelt ut vilka behov du har för dina mål.",
      image: require("../public/index_placeholder.jpg"),
    },
    {
      title: "2. Välj vad du vill äta",
      description:
        "Här väljer du vad du vill äta och ändrar näringsvärden för att passa det du valde i steg 1.",
      image: require("../public/index_placeholder.jpg"),
    },
    {
      title: "3. Kostplan färdig!",
      description: "Exportera din kostplan och nå dina mål!",
      image: require("../public/index_placeholder.jpg"),
    },
  ];
  return (
    <div className="bg-neutral-900 py-12 pt-24">
      {data.map((item, index) => {
        return index % 2 === 0 ? (
          <div className="mb-32 w-3/4 flex m-auto justify-center" key={index}>
            <div className="text-white text-center py-2 flex m-auto">
              <div className="bg-gray-200 w-96 h-56 flex m-auto">
                <span className="text-black text-4xl flex m-auto">Bild</span>
              </div>
              <div className="w-96 m-auto ml-32">
                <div className="mb-4 text-yellow-300">
                  <span className="text-2xl font-bold my-4">{item.title}</span>
                </div>
                <div className="">
                  <span className="text-md">{item.description}</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="mb-32 w-3/4 flex m-auto justify-center" key={index}>
            <div className="text-white text-center py-2 flex m-auto">
              <div className="w-96 m-auto mr-32">
                <div className="mb-4 text-yellow-300">
                  <span className="text-2xl font-bold my-4">{item.title}</span>
                </div>
                <div className="">
                  <span className="text-md">{item.description}</span>
                </div>
              </div>
              <div className="bg-gray-200 w-96 h-56 flex m-auto">
                <span className="text-black text-4xl flex m-auto">Bild</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function FormSection() {
  return (
    <div className="w-3/4 my-6 grid m-auto justify-center">
      <span className="text-2xl flex m-auto text-center w-3/4 my-4">
        Har du förslag på förbättringar? Vi vill gärna höra från dig!
      </span>
      <textarea
        className="w-full p-2 h-72 border-2 border-neutral-500 text-start shadow rounded-sm"
        placeholder="Jag har ett förslag om..."
      />
      <div className="justify-end w-full flex">
        <div className="w-40 justify-end m-4">
          <StandardButton text="skicka" url="/" inverted={true} />
        </div>
      </div>
    </div>
  );
}

export default Home;
