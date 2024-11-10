import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jackson's Demo App",
  description: "Exploration Playground",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
