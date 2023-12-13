
import Header from "@/components/layoutes/Header";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}