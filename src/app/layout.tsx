import type { Metadata } from "next";
import { Montserrat, Play } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { UrlContextProvider } from "@/context/Urlcontext";

const mont = Montserrat({
  weight: ["600", "500"],
  variable: "--font-mont",
  subsets: ["latin"],
});
const play = Play({
  weight: ["400"],
  variable: "--font-play",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Summarize PDF",
  description: "Get a concise summary of pdf in seconds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <UrlContextProvider>
        <html lang="en">
          <body
            className={`${mont.variable} ${play.variable}   antialiased p-6`}
          >
            {children}
          </body>
        </html>
      </UrlContextProvider>
    </ClerkProvider>
  );
}
