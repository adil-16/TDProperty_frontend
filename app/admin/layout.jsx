import { Manrope } from "next/font/google";
import Sidebar from "@/components/Navbars/Sidebar";
import Topbar from "@/components/Navbars/Topbar";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "TD Property Management",
  description: "Created by Sinister",
};

export default function RootLayout({ children }) {
  return (
    <main className="flex h-full">
      <Sidebar />
      <div className="flex w-full flex-col">
        <Topbar />
        {children}
      </div>
    </main>
  );
}
