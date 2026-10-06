import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "The Movies - Discover Popular Movies",
    template: "%s | The Movies",
  },
  description:
    "Explore a curated collection of top-rated movies and cinema classics.",
  keywords: ["movies", "cinema", "films", "top rated movies", "classics"],
  authors: [{ name: "Monayem Kabir Khan" }],
  category: "Movie catalogue",
  icons: {
    icon: "/movie-logo.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${bebasNeue.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
