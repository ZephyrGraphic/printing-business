"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

export default function NotFound() {
  const { t, language } = useLanguage()

  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] px-4 py-12 md:px-6 md:py-16">
      <div className="flex flex-col items-center space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          404 - {language === "id" ? "Halaman Tidak Ditemukan" : "Page Not Found"}
        </h1>
        <p className="max-w-[600px] text-muted-foreground md:text-xl">
          {language === "id"
            ? "Maaf, halaman yang Anda cari tidak ditemukan atau telah dipindahkan."
            : "Sorry, the page you are looking for could not be found or has been moved."}
        </p>
        <Link href="/">
          <Button>{language === "id" ? "Kembali ke Beranda" : "Back to Home"}</Button>
        </Link>
      </div>
    </div>
  )
}

