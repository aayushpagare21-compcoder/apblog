import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Using Inter with a wider subset for better language support
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Aayush Pagare",
  description:
    "Full Stack Engineer with 2+ years of experience building production-ready web apps end-to-end. Expert in AI integration, rapid prototyping, and delivering scalable, maintainable software with a strong focus on collaboration and ownership.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: ` !(function (h, i, e) { var t = 5000; console.log('Applying the overlay'); var n = h.createElement("style"); n.id = e; n.innerHTML = "body{opacity:0}"; h.head.appendChild(n); i.rmfk = function () { var t = h.getElementById(e); t && t.parentNode.removeChild(t); }; setTimeout(i.rmfk, t); })(document, window, "optimeleon-overlay");`,
          }}
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `window.setOptiCookieConsent = function(consent) { localStorage.setItem("opti_consent", consent); };`,
          }}
        /> 
        <script
          type="text/javascript"
          async
          dangerouslySetInnerHTML={{
            __html: ` !function(e,t,n,o,a,c,l){e.optimeleon||(a=e.optimeleon=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},a.push=a,a.queue=[],(c=t.createElement(n)).async=!0,c.src="https://cdn-stag.optimeleon.com/aay-8fyrd/aay-8fyri/v1.main.js",(l=t.getElementsByTagName(n)[0]).parentNode.insertBefore(c,l))}(window,document,"script"); optimeleon("init",true,true);`,
          }}
        />
      </head>
      <body className="bg-background text-foreground antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
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
