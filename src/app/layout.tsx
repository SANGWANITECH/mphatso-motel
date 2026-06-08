import type { Metadata } from "next";
import "./globals.css";
import PageWrapper from "@/components/layout/PageWrapper";

export const metadata: Metadata = {
  title: "Mikoma Beach Lodge | Luxury on Lake Malawi",
  description:
    "Experience comfort and serenity on the shores of Lake Malawi. Mikoma Beach Lodge offers luxury accommodation, beachfront dining, and unforgettable experiences.",
  keywords:
    "Mikoma Beach Lodge, Lake Malawi, luxury lodge, Karonga, Malawi accommodation, beachfront hotel",
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