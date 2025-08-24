import type { Metadata } from "next";
import { Montserrat, Funnel_Display } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { UrlContextProvider } from "@/context/Urlcontext";
import { Toaster } from "react-hot-toast";

const mont = Montserrat({
  weight: ["600", "500"],
  variable: "--font-mont",
  subsets: ["latin"],
});
const funnel = Funnel_Display({
  weight: ["400"],
  variable: "--font-funnel",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "ReadLess",
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
            className={`${mont.variable} ${funnel.variable}   antialiased p-5`}
          >
            {children}
            <Toaster position="bottom-left" reverseOrder={false} />
          </body>
        </html>
      </UrlContextProvider>
    </ClerkProvider>
  );
}
