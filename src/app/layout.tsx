import type { Metadata } from "next";
import { Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import NavBarLatest from "./components/NavBar/NavBarLatest";
import GlobalClickRipple from "./components/rippleAnimation";

const montserrat = Montserrat({
  variable: "--font-monsterrat",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


// Customize it according to your needs
export const metadata: Metadata = {
  title: "Home Page",
  description: "Home Page Describtion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${geistMono.variable} antialiased`}
      >
        <GlobalClickRipple />
        <NavBarLatest />
        {children}
      </body>
    </html>
  );
}
