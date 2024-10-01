import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "Adi Naik - Web Developer & Portfolio",
  description: "Welcome to Adi Naik's portfolio website showcasing projects, web development skills, and professional experience.",
  keywords: "Adi Naik, web developer, portfolio, web development, projects, skills, experience",
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
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="your-verification-code" />
        <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>

        {/* Structured Data for Web Developer */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Adi Naik",
            "jobTitle": "Web Developer",
            "url": "https://portfolio-adis-projects-a430795d.vercel.app/",
            "description": "${metadata.description}",
            "image": "https://portfolio-adis-projects-a430795d.vercel.app/adi.png"
          }
          `}
        </script>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}