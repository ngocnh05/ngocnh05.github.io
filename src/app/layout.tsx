import "./globals.css";
import type { Metadata } from "next";
import { AppProvider } from "@/context/AppContext";

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
    <html lang="en" className="light" suppressHydrationWarning>
      <body className="min-h-screen transition-colors duration-300">
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
