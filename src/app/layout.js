import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Noble Mind",
  description: "Innovation, Elevating Solutions – Noble Mind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow_hidden`}> {children} </body>{" "}
    </html>
  );
}
