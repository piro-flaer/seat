"use client";

import { useEffect } from "react";

export default function ImageLoader() {
  useEffect(() => {
    async function getLoader() {
      const { dotSpinner } = await import("ldrs");
      dotSpinner.register();
    }
    getLoader();
  }, []);

  return (
    <div className="h-40 w-40 bg-blue-500">
      <l-dot-spinner size="40" speed="0.9" color="black"></l-dot-spinner>
    </div>
  );
}
