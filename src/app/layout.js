import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/TransitionProvider";

// 1)Updated metadata
export const metadata = {
  title: "dev || Portfolio",
  description: "DevelopedByUsama",
};

// 2) Custom fonts
const Josef = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Josef.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}