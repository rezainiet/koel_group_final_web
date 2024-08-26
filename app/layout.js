import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Koel Group - Leading Companies in Multiple Industries",
  description:
    "Koel Group is a group of companies with brands including Majdi for lifestyle, Koel Modish Apparels for buying and sourcing hub, Jayqo for garments, Koel.shop for e-commerce, Arham for diagnostic center, and Anisha for agro-based industry.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>


    </html>
  );
}
