import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site } from "@/lib/content";
import SiteClient from "@/components/SiteClient";

export const metadata: Metadata = {
  metadataBase: new URL("https://yasirrahim16.github.io"),
  title: `${site.name} — ${site.role}`,
  description: site.bio,
  keywords: ["Yasir Rahim", "Computer Science Engineer", "Frontend Engineer", "Next.js", "Three.js", "React", "GSAP", "WebGL"],
  openGraph: { title: `${site.name} — ${site.role}`, description: site.bio, type: "website" },
  twitter: { card: "summary_large_image", title: site.name, description: site.bio },
  robots: { index: true, follow: true }
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover", colorScheme: "dark", themeColor: "#030407" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className="site-noise"><SiteClient>{children}</SiteClient></body></html>;
}
