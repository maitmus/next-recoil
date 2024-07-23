import Navigation from "@/components/Navigation";
import { Metadata } from "next";
import "./globals.css";
import RecoilWrapper from "@/components/RecoilWrapper";

export const metadata: Metadata = {
  title: {
    template: "%s | Recoil",
    default: "Recoil",
  },
  description: "Recoil Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body>
        <RecoilWrapper>
          <Navigation />
          {children}
        </RecoilWrapper>
      </body>
    </html>
  );
}
