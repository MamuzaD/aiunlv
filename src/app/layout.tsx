import type { Metadata } from "next";
import "~/styles/index.css";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import AOSWrapper from "~/components/AOSWrapper";
import ArchiveBanner from "~/components/ArchiveBanner";

export const metadata: Metadata = {
  metadataBase: new URL("https://aiunlv.vercel.app"),
  title: "UNLV AI & Data Science Club",
  description:
    "Join us to explore the latest in AI and data science at UNLV. Participate in events, workshops, and networking opportunities.",
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://aiunlv.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: "AI Data Science Club",
    url: "https://aiunlv.vercel.app",
    title: "AI & Data Science Club at UNLV",
    description:
      "Join us to explore the latest in AI and data science at UNLV. Participate in events, workshops, and networking opportunities.",
    images: ["https://aiunlv.vercel.app/AIDataScience_Image.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "UNLV AI & Data Science Club",
    description:
      "Join us to explore the latest in AI and data science at UNLV. Participate in events, workshops, and networking opportunities.",
    images: ["https://aiunlv.vercel.app/AIDataScience_Image.webp"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AOSWrapper>
          <div className="sticky top-0 z-60">
            <ArchiveBanner />
            <Navbar />
          </div>
          {children}
          <Footer />
        </AOSWrapper>
      </body>
    </html>
  );
}
