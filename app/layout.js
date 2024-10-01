import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "Adi Naik - Portfolio",
  description: "Welcome to Adi Naik's portfolio website showcasing projects, skills, and experience.",
  keywords: "Adi Naik, portfolio, web developer, projects, skills, experience",
  author: "Adi Naik",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portfolio-adis-projects-a430795d.vercel.app/" />
        <meta property="og:image" content="https://portfolio-adis-projects-a430795d.vercel.app/adi.png" />
        <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
