import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import Particles from "@/components/bg/particles";
import { Footer } from "@/components/footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Johannus.dev",
  description: "Portfolio website of John Rafael Masilungan (Johannus)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans antialiased`}>
        <div className="min-h-screen bg-gray-900 text-white relative">
          <div className="absolute inset-0 z-0 pointer-events-none w-full h-full">
            <Particles
              particleColors={["#ffffff", "#ffffff"]}
              particleCount={1122}
              particleSpread={6}
              speed={0.1}
              particleBaseSize={100}
              moveParticlesOnHover={false}
              alphaParticles={false}
              disableRotation={false}
            />
          </div>
          <Navbar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
