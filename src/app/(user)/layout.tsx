import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import NavbarComponent from "@/components/NavbarComponent/NavbarComponent";
import FooterComponent from "@/components/FooterComponet/FooterComponent";
import StoreProvider from "../StoreProvider";
import SessionWrapper from "../SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s - SKY-Shop",
    default: "SKY-Shop",
  },
  description: "This E-Commerce Website In Cambodia",
  keywords: ["shop", "ecommerce", "sell"],
  openGraph: {
    title: {
      template: "%s - SKY-Shop",
      default: "SKY-Shop",
    },
    description: "This E-Commerce Website In Cambodia",
    images: [
      "https://i.pinimg.com/736x/3d/65/b2/3d65b2895c7a2fb27bf430e24cc7ac81.jpg",
    ],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SessionWrapper>
        <body className={inter.className}>
          <StoreProvider>
            <NavbarComponent />
            {children}
            <FooterComponent />
          </StoreProvider>
        </body>
      </SessionWrapper>
    </html>
  );
}
