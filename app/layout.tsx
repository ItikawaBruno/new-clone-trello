import "@/styles/globals.css";
import { Metadata } from "next";
import { Providers } from "./providers";
import { Poppins } from "next/font/google";
import { siteConfig } from "@/config/site";
import { text } from "stream/consumers";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};


const textFont = Poppins({
   subsets: ["latin"],
  weight: ["400", "700"], // pesos que você precisa
  variable: "--font-roboto",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
    <html suppressHydrationWarning lang="pt-br" className={`${textFont.className}`}>
      <head />
      <body className="h-screen w-screen bg-slate-100"
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
    </ClerkProvider>
  );
}
