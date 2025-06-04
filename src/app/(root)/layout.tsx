import type { Metadata } from "next";
import "../globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import { ClerkProvider } from "@clerk/nextjs";
import { AuthProvider } from "@/context/AuthContext";
import { EdgeStoreProvider } from "@/lib/edgestore";

export const metadata: Metadata = {
  title: "Digital Tide",
  description:
    "Digital Tide - Your Gateway to the Advance your business with Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <EdgeStoreProvider>
        <AuthProvider>
          <html lang="en">
            <body>
              <Navbar />
              <div>
                <div className="min-h-screen">{children}</div>
              </div>
              <Footer />
            </body>
          </html>
        </AuthProvider>
      </EdgeStoreProvider>
    </ClerkProvider>
  );
}
