import Image from "next/image";
import { Button } from "@/components/ui/button";
import { GradientText } from "@/components/animate-ui/text/gradient";
import { Send } from "@/components/animate-ui/icons/send";
import { Download } from "@/components/animate-ui/icons/download";
import { AnimateIcon } from "@/components/animate-ui/icons/icon";
import { buttonStyles } from "@/lib/tailwind-classes/buttonStyles";

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
      <h1 className="text-lg md:text-xl font-semibold text-gray-300 mb-2">
        Hello! I am
      </h1>
      <GradientText
        className="mb-4 text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text"
        text="John Rafael Masilungan"
      />
      <p className="text-xl md:text-2xl font-normal text-gray-300 pt-3 z-20">
        I'm a{" "}
        <span className="underline underline-offset-3 decoration-8 decoration-purple-400">
          Full-Stack Developer
        </span>
      </p>
      <p className="text-sm md:text-base font-normal text-gray-300 pt-3 mt-5 z-20">
        with currently a year of experience in the field of software
        development.
      </p>
      <AnimateIcon animateOnHover animateOnTap animation="default">
        <Button variant="outline" asChild className={buttonStyles}>
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
      <AnimateIcon animateOnHover animateOnTap animation="default">
        <Button variant="outline" asChild className={buttonStyles}>
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
