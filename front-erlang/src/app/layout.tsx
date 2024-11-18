"use client";
import React, { ReactNode, useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../i18n";
import "../styles/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body>
//         <Header />
//         {children}
//         <Footer />
//       </body>
//     </html>
//   );
// }
interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  useEffect(() => {}, []);
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="video" href="/videos/about.mp4" />
      </head>

      <body>
        {/* Header Component */}
        <Header />

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer Component */}
        {/* <Footer /> */}

        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
};
export default RootLayout;
