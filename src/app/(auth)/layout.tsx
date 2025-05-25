import type { Metadata } from "next";
import "../globals.css";
import {
  SignedOut,
  SignInButton,
  SignUpButton,
  SignedIn,
  UserButton,
  ClerkProvider,
} from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Login or register to access your account.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center">
          <div className="w-full max-w-md mx-auto bg-white/90 rounded-xl shadow-lg p-8 flex flex-col gap-6">
            <header className="text-center mb-4">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome</h1>
              <p className="text-gray-500 text-sm">
                Please login or register to continue
              </p>
            </header>
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
