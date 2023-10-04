import Sidebar from "@/components/Sidebar";
import { getServerSession } from "next-auth";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { authOptions } from "./api/auth/[...nextauth]";
import { SessionProvider } from "@/components/SessionProvider";
import Login from "@/components/Login";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Emotional Freedom Coach",
  description: "Your personalized emotional freedom coach.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  console.log(session);
  console.log("hello");

  return (
    <html lang="en">
      <head />
      <SessionProvider session={session}>
        {!session ? (
          <Login />
        ) : (
          <body className={inter.className}>
            <div className="flex">
              <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
                {/* Sidebar */}
                <Sidebar />
              </div>

              {/* ClientProvider - Notifications */}

              <div className="bg-[#343541] flex-1">{children}</div>
            </div>
          </body>
        )}
      </SessionProvider>
    </html>
  );
}
