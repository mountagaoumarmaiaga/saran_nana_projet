import type { Metadata } from "next";

import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Saran|Nana Gestion Stock",
  description: "Application de gestion de stock",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <html lang="fr" data-theme="forest">
        <body className="antialiased">
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}