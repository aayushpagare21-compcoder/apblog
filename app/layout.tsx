import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Aayush Pagare",
  description:
    "Full Stack Engineer with 2+ years of experience building production-ready web apps end-to-end.",
  alternates: {
    canonical: "https://aayushpagare.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>

        {/* Copyright (c) 2000-2026 etracker GmbH. All rights reserved. No reproduction, publication or modification allowed without permission. */}
        {/* etracker code 6.0 */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
// var et_pagename = "";
// var et_areas = "";
`,
          }}
        />
        <script
          id="_etLoader"
          type="text/javascript"
          charSet="UTF-8"
          data-block-cookies="true"
          data-secure-code="MCmVss"
          src="//code.etracker.com/code/e.js"
          async
        />
        {/* etracker code 6.0 end */}

      
        <link rel="canonical" href="https://aayushpagare.com" />

      </head>

      <body className="bg-background text-foreground antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
