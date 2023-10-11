import Navbar from "@/app/components/navbar/navbar";
import Login from "./components/Login";

export const metadata = {
  title: "Login",
};

export default function LoginPage() {
  return (
    <>
      <Navbar />
      <Login />
    </>
  );
}
