import "./globals.css";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { AppProvider } from "@/context/AppContext";

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Hong Ngoc's Portfolio",
  description: "Hong Ngoc's personal portfolio",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${sansFont.variable}`} suppressHydrationWarning>
      <body className={`${sansFont.className} min-h-screen transition-colors duration-300 antialiased`}>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
