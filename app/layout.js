import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import GoToTop from "./components/GoToTop";
import { AuthProvider } from "./context/AuthContext";
import { NotificationProvider } from "./context/NotificationContext";
import { AutoTaskProvider } from "./context/AutoTaskContext";
import AutoTaskManager from "./components/AutoTaskManager";
// import Chatbot from "./components/Chatbot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NeoNest - For Parents and Babies",
  description:
    "Supporting parents through their baby's incredible first year with expert guidance, AI assistance, and loving community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`w-screen flex flex-col min-h-screen overflow-x-hidden ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <AutoTaskProvider>
            <NotificationProvider>
              <Navbar />
              <main className="flex-grow">{children}</main>
              <AutoTaskManager/>
              <Footer />
              <GoToTop />
            </NotificationProvider>
          </AutoTaskProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
