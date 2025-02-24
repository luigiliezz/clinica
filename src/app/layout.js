
import "./globals.css";
import Header from "../components/Header";


export const metadata = {
  title: "Clínica Stay Health",
  description: "Clínica médica para consultas e atendimentos",
  charset: "UTF-8",
  author: "Luiz Antônio",
  keywords: "HTML,CSS,JavaScript,React,Next.js"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
