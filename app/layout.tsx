import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const getPretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ploonet | App",
  description: "Ploonet web application created by Dada Khalandar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${getPretendard.variable}  antialiased`}>
        {children}
      </body>
    </html>
  );
}
