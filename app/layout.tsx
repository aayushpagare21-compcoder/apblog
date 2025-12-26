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

  {/* Optimeleon – Page hide overlay */}
  <Script
    id="metalytic"
    strategy="beforeInteractive"
    dangerouslySetInnerHTML={{
      __html: `
        !(function (h, i, e) {
          var t = 5000;
          var n = h.createElement("style");
          n.id = e;
          n.innerHTML = "body{opacity:0}";
          h.head.appendChild(n);
          i.rmfk = function () {
            var t = h.getElementById(e);
            console.log("rmfk=========e", e);
            console.log("rmfk=========t", t);
            t && t.parentNode.removeChild(t);
          };
          setTimeout(i.rmfk, t);
        })(document, window, "optimeleon-overlay");
      `,
    }}
  />

  {/* Optimeleon – Consent helper */}
  <Script
    id="optimeleon-consent"
    strategy="beforeInteractive"
    dangerouslySetInnerHTML={{
      __html: `
        window.setOptiCookieConsent = function(consent) {
          localStorage.setItem("opti_consent", consent);
        };
      `,
    }}
  />

  {/* Optimeleon SDK */}
  <Script
    id="optimeleon-sdk"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: `
        !function(e,t,n,o,a,c,m){
          e.optimeleon||(a=e.optimeleon=function(){
            a.callMethod ? a.callMethod.apply(a,arguments) : a.queue.push(arguments)
          },a.push=a,a.queue=[],
          (c=t.createElement(n)).async=!0,
          c.src="https://cdn-stag.optimeleon.com/mcf-mh4jy/aay-mh4k4/debug/v1.main.js",
          (m=t.getElementsByTagName(n)[0]).parentNode.insertBefore(c,m))
        }(window,document,"script");
        optimeleon("init", true, true);
      `,
    }}
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
