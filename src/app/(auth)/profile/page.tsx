import Navbar from "@/app/components/navbar/navbar";
import Profile from "./components/profile";

export const metadata = {
  title: "Profile",
};

export default function ProfilePage() {
  return (
    <>
      <Navbar />
      <Profile />
    </>
  );
}
