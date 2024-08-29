import { Inter } from "next/font/google";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });
const Navbar = dynamic(() => import("../components/Navbar"), { ssr: false });

export const metadata = {
    title: "Koel Group - Corporate Culture",
    description:
        "Koel Group is a group of companies with brands including Majdi for lifestyle, Koel Modish Apparels for buying and sourcing hub, Jayqo for garments, Koel.shop for e-commerce, Arham for diagnostic center, and Anisha for agro-based industry.",
};

export default function RootLayout({ children }) {
    return (
        <main className={inter.className}>
            <Navbar />
            {children}
        </main>
    );
}
