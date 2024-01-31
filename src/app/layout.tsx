import SessionWrapper from "@/utils/SessionProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Outfit as Font } from "next/font/google";
import { QueryProvider } from "./context/QueryProvider";


// @ts-ignore
const font = Font({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "🤖 Custom Ai Model",
  description: "   ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
      <QueryProvider>
        <html lang="en">
          <body className={font.className} suppressHydrationWarning={true}>
            {children}
          </body>
        </html >
      </QueryProvider>
    </SessionWrapper>
  );
}
