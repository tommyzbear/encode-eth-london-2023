import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const LoginWrapper = ({ children }) => {
  const [privateKey, setPrivateKey] = useState<string | null>("1234");
  const [isAuth, setIsAuth] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // const privateKey = localStorage.getItem("privateKey");

    // if (!privateKey) {
    // fetch("http://localhost:3000/api/hello").then(res => {
    //   console.log(res);
    //   if (!res.ok) {
    //     router.push("/login");
    //   } else {
    //     setIsAuth(true);
    //     router.push("/");
    //   }
    // });
    // fetch(`http://localhost:3000/api/auth`, {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json, text/plain, */*",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ privateKey: "123456" }),
    // }).then(res => {
    //   console.log(res);
    //   if (!res.ok) {
    //     router.push("/login");
    //   } else {
    //     setIsAuth(true);
    //   }
    // });
    // } else {
    //   router.push("/login");
    // }

    if (!privateKey) {
      router.push("/login");
    } else {
      setIsAuth(true);
      if (pathname === "/login") {
        router.push("/");
      }
    }

    setPrivateKey(privateKey);
  }, []);

  return (
    <>
      <Header isAuth={isAuth} />
      <main className="relative flex flex-col flex-1">{children}</main>
      <Footer />
    </>
  );
};
