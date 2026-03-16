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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <script async id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="7667d368-e0ce-4baa-b12f-bf07310ae6c3" data-blockingmode="auto" type="text/javascript"></script>
        
        <script
          id="opti-cookie-consent"
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              window.setOptiCookieConsent = function(consent) {
                localStorage.setItem("opti_consent", consent);
              };
            `,
          }}
        />
        
        <script
          id="optimeleon-overlay"
          type="text/javascript"
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
          id="optimeleon-init"
          type="text/javascript"
          async
          dangerouslySetInnerHTML={{
            __html: `
              !function(e,t,n,o,c,a,m){e.optimeleon||(c=e.optimeleon=function(){c.callMethod?c.callMethod.apply(c,arguments):c.queue.push(arguments)},c.push=c,c.queue=[],(a=t.createElement(n)).async=!0,a.src="https://cdn-stag.optimeleon.com/mcf-m55jl/aay-1mvcw/v1.main.js",(m=t.getElementsByTagName(n)[0]).parentNode.insertBefore(a,m))}(window,document,"script");
              optimeleon("init",true,true);
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
