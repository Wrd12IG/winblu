import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Winblu | Il Futuro è Winblu",
  description: "Computer e Workstation High-End Made in Italy. Scopri la potenza della serie Energy e Enterprise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" suppressHydrationWarning>
      <body className={outfit.className} suppressHydrationWarning>{children}</body>
    </html>
  );
}
