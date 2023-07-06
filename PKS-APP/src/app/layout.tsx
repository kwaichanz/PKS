import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "../components/Navbar/Navbar";
import "./globals.css";

export const metadata = {
  title: "Panoatkaset",
  description: "PANOATKASET",
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="autumn">
      <head>
        <title>{metadata.title}</title>
        <meta property="og:title" content="PANOATKASET" key="title" />
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" sizes="any"/> */}
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
