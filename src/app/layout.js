import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Shared/Navbar";
import Footer from "@/Components/Shared/Footer";
import { ToastContainer } from "react-toastify";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Qurbani Hat",
  description:
    "The most trusted online marketplace for healthy, organic, and certified Qurbani animals. Find the best breeds directly from top farmers with doorstep delivery.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${poppins.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col justify-between ">
        <Navbar></Navbar>
        <div className="grow h-full">{children}</div>
        <Footer></Footer>
        <ToastContainer></ToastContainer>
      </body>
    </html>
  );
}
