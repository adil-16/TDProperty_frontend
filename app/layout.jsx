import { Manrope } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { ReduxProvider } from "@/redux/provider";
import AuthWrapper from "./authWrapper";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "TD Property Management",
  description: "Created by Sinister",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <ReduxProvider>
          <AuthWrapper children={children} />
        </ReduxProvider>
        <Toaster />
      </body>
    </html>
  );
}
