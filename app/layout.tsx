import "./globals.css";
import Navbar from "./components/Navbar";
import MyProfilePic from "./components/MyProfilePic";

export const metadata = {
  title: "Victor's Blog",
  description: "Created by Victor Adeleye",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate" style={{ backgroundColor: "#475569" }}>
        <Navbar />
        <MyProfilePic />
        {children}
      </body>
    </html>
  );
}
