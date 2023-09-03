import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Hub",
  description: "Created By AKAKI CHACHAVA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}

        <Footer />
      </body>
    </html>
  );
}
