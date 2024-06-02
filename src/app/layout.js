import { Inter } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local';
import 'bootstrap/dist/css/bootstrap.min.css';

const inter = Inter({ subsets: ["latin"] });
const myFont = localFont({ src: '../../public/DINOT-Regular.ttf' })


export const metadata = {
  title: "Intermedia Login",
  description: "Ready. Set. Login.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
