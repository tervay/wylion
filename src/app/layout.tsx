"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import { themeChange } from "theme-change";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <select data-choose-theme>
          {[
            "light",
            "dark",
            "cupcake",
            "bumblebee",
            "emerald",
            "corporate",
            "synthwave",
            "retro",
            "cyberpunk",
            "valentine",
            "halloween",
            "garden",
            "forest",
            "aqua",
            "lofi",
            "pastel",
            "fantasy",
            "wireframe",
            "black",
            "luxury",
            "dracula",
            "cmyk",
            "autumn",
            "business",
            "acid",
            "lemonade",
            "night",
            "coffee",
            "winter",
          ].map((t) => (
            <option value={t} key={t}>
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </option>
          ))}
        </select>
        <div className="container mx-auto px-4">{children}</div>
      </body>
    </html>
  );
}
