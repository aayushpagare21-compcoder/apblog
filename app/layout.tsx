import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
   <head>
  {/* Optimeleon Cookie Consent */}
  <Script
    id="opti-cookie-consent"
    strategy="beforeInteractive"
    dangerouslySetInnerHTML={{
      __html: `
        window.setOptiCookieConsent = function(consent) {
          localStorage.setItem("opti_consent", consent);
        };
      `,
    }}
  />
  
  {/* Optimeleon Overlay */}
  <Script
    id="optimeleon-overlay"
    strategy="beforeInteractive"
    dangerouslySetInnerHTML={{
      __html: `
        !(function (h, i, e) {
          var t = 2000;
          var n = h.createElement("style");
          n.id = e;
          n.innerHTML = "body{opacity:0}";
          h.head.appendChild(n);
          i.rmfk = function () {
            var t = h.getElementById(e);
            t && t.parentNode.removeChild(t);
          };
          setTimeout(i.rmfk, t);
        })(document, window, "optimeleon-overlay");
      `,
    }}
  />
  
  {/* Google Tag Manager */}
  <Script
    id="gtm-script"
    strategy="beforeInteractive"
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
  
  {/* Optimeleon Main Script */}
  <Script
    src="https://cdn-stag.optimeleon.com/gdp-dh8h8/aay-dh8hf/v1.main.js"
    async
  />
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
