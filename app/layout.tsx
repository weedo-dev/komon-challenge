import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex justify-center bg-white">
        <div className="shadow-xl px-24 bg-white m-w-4xl w-3/5">{children}</div>
      </body>
    </html>
  );
}
