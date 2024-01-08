import "@/styles/globals.css";

import { Fira_Code, Inter, Space_Mono } from "next/font/google";
import { Nav } from "./_components/Nav";
import { Footer } from "./_components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const spaceMono = Space_Mono({
  weight: ["400", "700"],
  variable: "--font-spaceMono",
  subsets: ["latin"],
});

export const firaCode = Fira_Code({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-firaCode",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shounak Chavan - Full Stack Engineer",
  description: "Developer portfolio of Shounak Chavan",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`font-sans ${firaCode.variable} bg-shark-950 h-full`}>
        <Nav>
          <Footer>{children}</Footer>
        </Nav>
      </body>
    </html>
  );
}
