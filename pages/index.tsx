import type { NextPage } from "next";
import { StaticImageData } from "next/image";
import backgroundImage from "./../public/index_placeholder.jpg";
import Image from "next/image";

const Home: NextPage = () => {
  const backgroundImage = require("../public/index_placeholder.jpg");

  return (
    <div className="">
      <ImageSection />
      <SiteShowcase />
    </div>
  );
};

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
        <button className="bg-yellow-300 text-neutral-900 uppercase font-bold py-2 px-4 border-4 text-2xl border-black">
          Sätt igång
        </button>
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
      title: "3. Till kassan!",
      description: "Dags att få hem maten och bli stark!",
      image: require("../public/index_placeholder.jpg"),
    },
  ];
  return (
    <div className="bg-neutral-900 py-12">
      {data.map((item) => (
        <div className="mb-12 w-3/4 flex m-auto">
          <div className="grid text-white text-center py-2">
            <div className="bg-gray-200 w-56 h-48 flex m-auto">
              <span className="text-black text-4xl flex m-auto">Bild</span>
            </div>
            <span className="text-2xl font-bold my-4">{item.title}</span>
            <span className="text-md">{item.description}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
