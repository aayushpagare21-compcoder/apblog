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

        {/* eslint-disable-next-line @next/next/next-script-for-ga */}
        <script
          id="gtm-script"
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-M9FQVCPW');
            `,
          }}
        />

        <script
          dangerouslySetInnerHTML={{ __html: `console.log("Aayush Aayush Aayush")` }}
        />
        <script
          dangerouslySetInnerHTML={{ __html: `console.log("Aayush Aayush Aayush")` }}
        />
        <script
          dangerouslySetInnerHTML={{ __html: `console.log("Aayush Aayush Aayush")` }}
        />
        <script
          dangerouslySetInnerHTML={{ __html: `console.log("Aayush Aayush Aayush")` }}
        />

        <link rel="canonical" href="https://aayushpagare.com" />


        {/* Optimeleon anti-flicker + loader snippet */}
        <style
          id="__opti_af"
          dangerouslySetInnerHTML={{ __html: "body{opacity:0!important}" }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.optimeleon=window.optimeleon||function(){(optimeleon.q=optimeleon.q||[]).push(arguments);return{ok:true,verb:String(arguments[0]||''),error:'queued'}};window.__opti_bus="__opti_capture";window.__opti_capture=window.__opti_capture||function(){(__opti_capture.q=__opti_capture.q||[]).push(arguments)};setTimeout(function(){var s=document.getElementById('__opti_af');if(s)s.remove()},300);`,
          }}
        />
        <script async src="https://edge.optimeleon.com/b/SqTx4MCBUrHE.js" />
        <script async src="https://edge.optimeleon.com/c/SqTx4MCBUrHE.js" />


      </head>

      <body className="bg-background text-foreground antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M9FQVCPW"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
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
