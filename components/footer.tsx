"use client"

import Link from "next/link"
import { Printer, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-provider"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-muted/40 border-t">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <FadeIn>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <motion.div whileHover={{ rotate: [0, -10, 10, -10, 0] }} transition={{ duration: 0.5 }}>
                  <Printer className="h-6 w-6 text-primary" />
                </motion.div>
                <span className="font-bold text-xl">Sakinah Grafika</span>
              </div>
              <p className="text-sm text-muted-foreground">{t("footer.description")}</p>
              <div className="flex space-x-4">
                <motion.div whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                </motion.div>
              </div>
            </div>
          </FadeIn>

          <StaggerChildren className="space-y-4" delay={0.1}>
            <h3 className="text-sm font-medium">{t("footer.products")}</h3>
            <ul className="space-y-2 text-sm">
              <StaggerItem>
                <motion.div whileHover={{ x: 3 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Link href="/products/business-cards" className="text-muted-foreground hover:text-primary">
                    {t("home.services.businessCards")}
                  </Link>
                </motion.div>
              </StaggerItem>
              <StaggerItem>
                <motion.div whileHover={{ x: 3 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Link href="/products/flyers" className="text-muted-foreground hover:text-primary">
                    {t("category.flyers")}
                  </Link>
                </motion.div>
              </StaggerItem>
              <StaggerItem>
                <motion.div whileHover={{ x: 3 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Link href="/products/banners" className="text-muted-foreground hover:text-primary">
                    {t("category.banners")}
                  </Link>
                </motion.div>
              </StaggerItem>
              <StaggerItem>
                <motion.div whileHover={{ x: 3 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Link href="/products/stationery" className="text-muted-foreground hover:text-primary">
                    {t("category.stationery")}
                  </Link>
                </motion.div>
              </StaggerItem>
              <StaggerItem>
                <motion.div whileHover={{ x: 3 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Link href="/products" className="text-muted-foreground hover:text-primary">
                    {t("footer.viewAll")} {t("footer.products")}
                  </Link>
                </motion.div>
              </StaggerItem>
            </ul>
          </StaggerChildren>

          <StaggerChildren className="space-y-4" delay={0.2}>
            <h3 className="text-sm font-medium">{t("footer.services")}</h3>
            <ul className="space-y-2 text-sm">
              <StaggerItem>
                <motion.div whileHover={{ x: 3 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Link href="/services/digital-printing" className="text-muted-foreground hover:text-primary">
                    {t("home.services.digitalPrinting")}
                  </Link>
                </motion.div>
              </StaggerItem>
              <StaggerItem>
                <motion.div whileHover={{ x: 3 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Link href="/services/graphic-design" className="text-muted-foreground hover:text-primary">
                    {t("home.services.graphicDesign")}
                  </Link>
                </motion.div>
              </StaggerItem>
              <StaggerItem>
                <motion.div whileHover={{ x: 3 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Link href="/services/large-format" className="text-muted-foreground hover:text-primary">
                    {t("service.largeFormat")}
                  </Link>
                </motion.div>
              </StaggerItem>
              <StaggerItem>
                <motion.div whileHover={{ x: 3 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Link href="/services/packaging" className="text-muted-foreground hover:text-primary">
                    {t("home.services.packaging")}
                  </Link>
                </motion.div>
              </StaggerItem>
              <StaggerItem>
                <motion.div whileHover={{ x: 3 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Link href="/services" className="text-muted-foreground hover:text-primary">
                    {t("footer.viewAll")} {t("footer.services")}
                  </Link>
                </motion.div>
              </StaggerItem>
            </ul>
          </StaggerChildren>

          <StaggerChildren className="space-y-4" delay={0.3}>
            <h3 className="text-sm font-medium">{t("footer.contact")}</h3>
            <ul className="space-y-2 text-sm">
              <StaggerItem>
                <li className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    <a
                      href="https://maps.app.goo.gl/6yBkkELve4d2e8t6A"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Jl. Arwana (BLOK H21), Perum Sakura Gardenia
                    </a>
                  </span>
                </li>
              </StaggerItem>
              <StaggerItem>
                <li className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary shrink-0" />
                  <Link href="tel:+6281563104864" className="text-muted-foreground hover:text-primary">
                    +62 815 6310 4864
                  </Link>
                </li>
              </StaggerItem>
              <StaggerItem>
                <li className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary shrink-0" />
                  <Link href="mailto:info@sakinahgrafika.com" className="text-muted-foreground hover:text-primary">
                    info@sakinahgrafika.com
                  </Link>
                </li>
              </StaggerItem>
            </ul>
          </StaggerChildren>
        </div>
        <FadeIn delay={0.4}>
          <div className="mt-12 pt-8 border-t border-muted flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2024 Sakinah Grafika. {t("footer.copyright")}</p>
            <div className="flex gap-4 text-sm">
              <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary">
                {t("footer.privacyPolicy")}
              </Link>
              <Link href="/terms-of-service" className="text-muted-foreground hover:text-primary">
                {t("footer.termsOfService")}
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  )
}

