import type { Metadata } from "next";
import "./globals.css";
import PageWrapper from "@/components/layout/PageWrapper";

export const metadata: Metadata = {
  title: "Mphatso Motel | Mzuzu, Malawi",
  description:
    "Mphatso Motel offers comfortable rooms and conference facilities along the M1 Road in Mzuzu, Malawi. Book via call or WhatsApp today.",
  keywords:
    "Mphatso Motel, Mzuzu hotel, Mzuzu accommodation, conference hall Mzuzu, Chiwanja Mzuzu, Malawi motel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <PageWrapper>{children}</PageWrapper>
      </body>
    </html>
  );
}