import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Johannus",
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
          <div className="absolute inset-0 z-0 pointer-events-none w-full h-full"></div>
          {children}
        </div>
      </body>
    </html>
  );
}
