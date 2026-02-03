import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Agentic Voice AI Control Center",
  description:
    "Enterprise-grade AI voice call agent platform for multi-tenant businesses."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen bg-slate-950 bg-[radial-gradient(circle_1000px_at_center,_rgba(59,130,246,0.08),_transparent_60%)]">
        <Providers>
          <div className="min-h-screen bg-white/10">
            <main className="mx-auto max-w-7xl px-6 py-12">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
