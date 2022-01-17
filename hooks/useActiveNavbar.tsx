import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const cleanPathname = (path: string): string => {
  const p = path.split("/").join("").trim();
  return p.length > 0 ? p : "Home";
};

const useActiveNavbar = () => {
  const router = useRouter();
  const [activeNavbar, setActiveNavbar] = useState<string>(router.pathname);

  useEffect(() => {
    setActiveNavbar(router.pathname);
    return () => {};
  }, [router]);

  return {
    activeNavbar,
  };
};

export default useActiveNavbar;
