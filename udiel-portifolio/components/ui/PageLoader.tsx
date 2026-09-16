"use client";
import { useEffect, useState } from "react";
import Loading from "@/components/ui/loading";

const MIN_DURATION_MS = 1200;
const MAX_DURATION_MS = 3000;

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const start = Date.now();
    let settled = false;

    const finish = () => {
      if (settled) return;
      settled = true;
      const remaining = Math.max(MIN_DURATION_MS - (Date.now() - start), 0);
      setTimeout(() => setIsLoading(false), remaining);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish);
    }

    const maxTimeout = setTimeout(finish, MAX_DURATION_MS);

    return () => {
      window.removeEventListener("load", finish);
      clearTimeout(maxTimeout);
    };
  }, []);

  if (!isLoading) return null;

  return <Loading />;
}
