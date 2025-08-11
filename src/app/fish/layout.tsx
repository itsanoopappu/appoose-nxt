import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buy Fresh Tilapia & Varal Fish Online Kerala | Appoose Fish Farm Muthukulam Alappuzha",
  description: "Buy fresh fish online Kerala from Appoose farm Muthukulam. Premium tilapia ₹280/kg, varal fish ₹320/kg. Chemical-free, same-day delivery Cherthala, Alappuzha, Kuttanad. Order now!",
  keywords: ["buy fresh tilapia kerala", "buy fresh varal fish online", "fish delivery alappuzha", "tilapia fish farm muthukulam", "fresh fish home delivery kerala", "chemical free fish alappuzha", "premium fish farm kerala"],
  openGraph: {
    title: "Buy Fresh Fish Online Kerala | Premium Tilapia & Varal Fish - Appoose Farm",
    description: "Order fresh tilapia ₹280/kg & varal fish ₹320/kg from our sustainable farm in Muthukulam. Same-day delivery across Alappuzha district.",
    images: ["/images/tilapia-main.jpg", "/images/varal-main.jpg"],
    type: "website",
  },
};

export default function FishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}