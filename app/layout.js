import "./globals.css";

export const metadata = {
  title: "Flexi plan",
  description: "Sample project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap"
        />
      </head>

      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
