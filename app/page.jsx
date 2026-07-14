"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.location.replace("/course.html");
  }, []);

  return (
    <main style={{ fontFamily: "system-ui, sans-serif", padding: "32px" }}>
      <p>Abriendo el curso de ICSE...</p>
      <a href="/course.html">Entrar al curso</a>
    </main>
  );
}
