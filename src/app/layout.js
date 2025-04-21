import {Poppins} from "next/font/google";
import "./globals.css";
import Navbar from "@/component/navbar/page";


// Poppins font
const poppins = Poppins({
  weight: ["400", "500", "600"],  // You can specify different weights if needed
  subsets: ["latin"],  // Ensure proper character support
  variable: "--font-poppins", // You can also create a variable for it
});

export const metadata = {
  title: "Social Media Marketing |Ariz Global",
  description: "Social Media Marketing Platform Ariz Global Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
