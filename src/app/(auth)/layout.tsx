"use client";
import "@/app/globals.css";
import SessionWrapper from "../SessionProvider";
import NavbarComponent from "@/components/NavbarComponent/NavbarComponent";
import StoreProvider from "../StoreProvider";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <SessionWrapper>
        <StoreProvider>
          <body>{children}</body>
        </StoreProvider>
      </SessionWrapper>
    </html>
  );
}
