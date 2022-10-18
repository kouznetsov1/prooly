import type { NextPage } from "next";
import { StaticImageData } from "next/image";
import backgroundImage from "./../public/index_placeholder.jpg";
import Image from "next/image";
import StandardButton from "./../components/standardButton";
import Link from "next/link";
import backGroundImage_2 from "./../public/groceries.jpg";
import { url } from "inspector";

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
  return (
    <div className="w-full top-0 relative min-h-[calc(100vh-160px)]">
      <div className="flex border-2 h-[600px]">
        <div className="m-auto flex space-x-40">
          <div className="w-[400px] border-4 flex items-center rounded-sm justify-center border-black h-[500px]">
            <div className="w-full h-full object-contain flex">
              <Image src={backGroundImage_2} alt="Groceries" />
            </div>
          </div>
          <div className="h-full m-auto w-60">
            <div>
              <span className="uppercase text-4xl font-bold">
                automizing a healthy lifestyle
              </span>
            </div>
            <div className="my-4">
              <StandardButton
                url="/calculator"
                text="sätt igång"
                inverted={false}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <SiteShowcase />
      </div>
    </div>
  );
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
      title: "3. Till kassan!",
      description: "Dags att få hem maten och bli stark!",
      image: require("../public/index_placeholder.jpg"),
    },
  ];
  return (
    <div className="bg-neutral-900 py-12">
      {data.map((item, index) => (
        <div className="mb-12 w-3/4 flex m-auto justify-center" key={index}>
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
