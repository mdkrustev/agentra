import type { Metadata } from "next";
import "./style/globals.scss";
import Providers from "@/components/Providers";
import HeaderBar from "@/components/HeaderBar";



export const metadata: Metadata = {
  title: "Agentra",
  description: "Agentra is a smart CRM platform for real estate agencies. Manage properties, clients, and viewings all in one place. Boost your sales and streamline your workflow.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Agentra",
    description: "Agentra is a smart CRM platform for real estate agencies. Manage properties, clients, and viewings all in one place. Boost your sales and streamline your workflow.",
    url: "https://agentra.com ",
    siteName: "Taskendo",
    images: [
      {
        url: "https://agentra.vercel.app/agentra-logo-s.png",
        width: 512,
        height: 512,
        alt: "Taskendo Logo",
      },
    ],
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="page">

          <Providers>
            <HeaderBar />
            {children}
          </Providers>
        </div>
      </body>
    </html>
  );
}
