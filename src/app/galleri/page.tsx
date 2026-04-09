import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Galleri — Lillehammer Bilverksted AS",
  description: "Bilder fra verkstedet vårt i Lillehammer.",
};

export default function GalleriPage() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
