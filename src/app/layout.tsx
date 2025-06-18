import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import { ClerkProvider } from "@clerk/nextjs";
import { AuthProvider } from "@/context/AuthContext";
import QueryProvider from "@/context/QueryProvider";
import { authUser } from "@/lib/auth";
// import { ToastContainer } from "react-toastify";
import { EdgeStoreProvider } from "@/lib/edgestore";
import { dark } from "@clerk/themes";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Digital Tide",
  description:
    "Digital Tide - Your Gateway to the Advance your business with Technology",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const auth = await authUser();
  console.log("Auth user:", auth);

  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: {
          colorPrimary: "#009689",
        },
      }}
    >
      <QueryProvider>
        <AuthProvider>
          <EdgeStoreProvider>
            <PageContent auth={auth}>{children}</PageContent>
          </EdgeStoreProvider>
        </AuthProvider>
      </QueryProvider>
    </ClerkProvider>
  );
}

const PageContent = ({
  children,
  auth,
}: {
  children: React.ReactNode;
  auth: any;
}) => (
  <html lang="en">
    <body>
      <Navbar auth={auth} />
      <div>
        <div className="min-h-screen">
          {children}
          <ShootingStars />
          <StarsBackground />
        </div>
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#333",
              color: "#fff",
            },
          }}
        />
      </div>
      <Footer />
    </body>
  </html>
);
