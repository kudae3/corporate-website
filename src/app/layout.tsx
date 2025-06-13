import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import { ClerkProvider } from "@clerk/nextjs";
import { AuthProvider } from "@/context/AuthContext";
import QueryProvider from "@/context/QueryProvider";
import { authUser } from "@/lib/auth";
import { ToastContainer } from "react-toastify";
import { EdgeStoreProvider } from "@/lib/edgestore";
import { dark } from "@clerk/themes";

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
          {auth ? (
            <EdgeStoreProvider>
              <html lang="en">
                <body>
                  <Navbar auth={auth} />
                  <div>
                    <div className="min-h-screen">{children}</div>
                    <ToastContainer />
                  </div>
                  <Footer />
                </body>
              </html>
            </EdgeStoreProvider>
          ) : (
            <html lang="en">
              <body>
                <Navbar auth={auth} />
                <div>
                  <div className="min-h-screen">{children}</div>
                  <ToastContainer />
                </div>
                <Footer />
              </body>
            </html>
          )}
        </AuthProvider>
      </QueryProvider>
    </ClerkProvider>
  );
}
