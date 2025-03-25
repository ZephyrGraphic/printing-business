"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, Printer } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useLanguage } from "@/components/language-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { categories } from "@/lib/data"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { t, language } = useLanguage()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300 ${
        scrolled ? "bg-background/95 shadow-sm" : "bg-background/80"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" aria-label="Toggle Menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link
                  href="/"
                  className="text-lg font-medium transition-colors hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("nav.home")}
                </Link>
                <div className="flex flex-col gap-2">
                  <div className="font-medium">{t("nav.products")}</div>
                  {categories.map((category) => (
                    <Link
                      key={category.id}
                      href={`/categories/${category.id}`}
                      className="text-sm transition-colors hover:text-primary pl-4"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t(`category.${category.id}`) || category.name}
                    </Link>
                  ))}
                </div>
                <Link
                  href="/services"
                  className="text-lg font-medium transition-colors hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("nav.services")}
                </Link>
                <Link
                  href="/about"
                  className="text-lg font-medium transition-colors hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("nav.about")}
                </Link>
                <Link
                  href="/contact"
                  className="text-lg font-medium transition-colors hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("nav.contact")}
                </Link>
                <Link
                  href="/documentation"
                  className="text-lg font-medium transition-colors hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("nav.documentation") || (language === "id" ? "Dokumentasi" : "Documentation")}
                </Link>
                <div className="flex items-center gap-2 mt-4">
                  <LanguageToggle />
                  <ThemeToggle />
                </div>
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2">
            <motion.div whileHover={{ rotate: [0, -10, 10, -10, 0] }} transition={{ duration: 0.5 }}>
              <Printer className="h-6 w-6 text-primary" />
            </motion.div>
            <motion.span
              className="font-bold text-xl hidden sm:inline-block"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              Sakinah Grafika
            </motion.span>
          </Link>
        </div>
        <nav className="hidden lg:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary relative group">
            {t("nav.home")}
            <motion.span
              className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
              layoutId="navIndicator"
            />
          </Link>
          <div className="relative group">
            <button className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-1 relative">
              {t("nav.products")}
              <motion.span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </button>
            <AnimatePresence>
              <motion.div
                className="absolute left-0 top-full hidden group-hover:block bg-background border rounded-md shadow-md p-4 w-48 z-50"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
              >
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    href={`/categories/${category.id}`}
                    className="block py-2 text-sm transition-colors hover:text-primary"
                  >
                    {t(`category.${category.id}`) || category.name}
                  </Link>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
          <Link href="/services" className="text-sm font-medium transition-colors hover:text-primary relative group">
            {t("nav.services")}
            <motion.span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary relative group">
            {t("nav.about")}
            <motion.span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
          </Link>
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary relative group">
            {t("nav.contact")}
            <motion.span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
          </Link>
          <Link
            href="/documentation"
            className="text-sm font-medium transition-colors hover:text-primary relative group"
          >
            {t("nav.documentation") || (language === "id" ? "Dokumentasi" : "Documentation")}
            <motion.span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>
          <Link href="/contact">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" size="sm">
                {t("nav.getQuote")}
              </Button>
            </motion.div>
          </Link>
        </div>
      </div>
    </header>
  )
}

