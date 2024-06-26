import { Inter } from "next/font/google";
import Navbar from "../componensts/Navbar";
import "../globals.css";
import { dbConnect } from "@/service/mongo";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hotel Booking",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {

  await dbConnect();
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar sideMenu={false}/>
        <main> {children}</main>
      </body>
    </html>
  );
}
