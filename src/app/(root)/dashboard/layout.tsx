import { isAdmin } from "@/lib/isAdmin";
import SideBar from "./components/SideBar";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const admin = await isAdmin();
  if (!admin) {
    return (
      <div className="container">You are not authorized to view this page</div>
    );
  }
  return (
    <html lang="en">
      <body>
        <div>
          <div className="min-h-screen container">
            <div className="flex justify-center items-start">
              <SideBar /> {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
