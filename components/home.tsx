import Image from "next/image";

import { Button } from "@/components/ui/button";
import { GradientText } from "@/components/animate-ui/text/gradient";
import { Send } from "@/components/animate-ui/icons/send";
import { Download } from "@/components/animate-ui/icons/download";
import { AnimateIcon } from "@/components/animate-ui/icons/icon";

export function HomeSection() {
  return (
    <div className="text-center mx-6" id="smooth-wrapper">
      <Image
        className="mx-auto mt-10 mb-6 rounded-full pointer-events-none border-4 border-purple-600"
        src="/pfpic.jpg"
        alt=""
        height={98}
        width={98}
      />
      <h1 className="text-lg font-semibold text-gray-300">Hello! I am</h1>
      <GradientText
        className="mb-4 text-5xl font-extrabold text-transparent bg-clip-text"
        text="John Rafael Masilungan"
      />
      <p className="text-xl font-normal text-gray-300 pt-3 z-20">
        I'm a Software{" "}
        <span className="underline underline-offset-3 decoration-8 decoration-purple-300">
          Engineer
        </span>
      </p>
      <AnimateIcon animateOnHover animateOnTap animation="default">
        <Button
          variant="outline"
          asChild
          className="hover:scale-95 z-20 mt-6 mr-2 border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white bg-transparent"
        >
          <a
            href="/CV-Masilungan JR.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2"
          >
            <Download animateOnHover animateOnTap animation="default-loop" />
            <span>Download CV</span>
          </a>
        </Button>
      </AnimateIcon>
      <AnimateIcon animateOnHover animation="default">
        <Button
          variant="outline"
          asChild
          className="hover:scale-95 mt-6 border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white bg-transparent"
        >
          <a
            href="mailto:jmasilungan1822@gmail.com"
            className="flex items-center justify-center space-x-2"
          >
            <Send animateOnHover animation="default" />
            <span>Contact</span>
          </a>
        </Button>
      </AnimateIcon>
    </div>
  );
}
