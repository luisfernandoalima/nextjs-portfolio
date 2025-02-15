"use client";
import Atropos from "atropos/react";
import "atropos/css";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { Metadata } from "next";

import img from "../../public/icons/404.png";

import "@/styles/not-found.scss";

export const metadata:Metadata = {
  title: "Page not found"
}

export default function NotFound() {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  return (
    <main className="flex items-center justify-center flex-col md:flex-row gap-4 notFound">
      <Atropos shadow={false} highlight={false}>
        <Image src={img} alt="Erro 404" height={350} width={350} />
      </Atropos>
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-4xl font-semibold flex flex-col gap-2">
          404 Error:
          <span className="text-2xl font-medium">Page not found!</span>
        </h1>
        <Link
          href={"/"}
          className="py-2 px-8 text-xl font-semibold rounded-lg mt-2"
        >
          Home
        </Link>
      </div>
    </main>
  );
}
