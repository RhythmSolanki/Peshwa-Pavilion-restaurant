import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Peshwa Pavilion | ITC Maratha, Mumbai | Luxury Multi-Cuisine Fine Dining",
  description: "Experience the elegance of Peshwa Pavilion inside the luxury ITC Maratha Hotel in Mumbai. Offering a lavish buffet, iconic Indian specialties like Dal Bukhara, and international cuisines in a sun-bathed atrium.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#FDFBF8] text-[#2C2C2C]">{children}</body>
    </html>
  );
}
