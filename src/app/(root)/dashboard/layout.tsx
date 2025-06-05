import { isAdmin } from "@/lib/isAdmin";
import SideBar from "./components/SideBar";
import { notFound } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const admin = await isAdmin();
  if (!admin) notFound();
  return (
    <div>
      <div className="min-h-screen container">
        <div className="flex justify-center items-start">
          <SideBar /> {children}
        </div>
      </div>
    </div>
  );
}
