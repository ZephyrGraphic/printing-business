"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Printer, PenTool, FileText, Package } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { featuredProducts } from "@/lib/data"
import { useLanguage } from "@/components/language-provider"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <FadeIn direction="left" duration={0.7}>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    {t("home.hero.title")}
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">{t("home.hero.subtitle")}</p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/products">
                    <Button size="lg" className="group">
                      {t("home.hero.browseProducts")}
                      <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" size="lg">
                      {t("home.hero.contactUs")}
                    </Button>
                  </Link>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right" duration={0.7} delay={0.2}>
              <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                <Image
                  src="/images/hero-image.png"
                  width={550}
                  height={550}
                  alt="Printing Services"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last shadow-lg"
                />
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <FadeIn>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  {t("home.services.title")}
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("home.services.subtitle")}
                </p>
              </div>
            </div>
          </FadeIn>

          <StaggerChildren
            className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4"
            delay={0.2}
          >
            <StaggerItem>
              <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400 }}>
                <Card className="relative overflow-hidden rounded-lg border bg-background p-2 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                    <motion.div whileHover={{ rotate: 5, scale: 1.1 }} transition={{ type: "spring", stiffness: 400 }}>
                      <Printer className="h-12 w-12 text-primary mb-4" />
                    </motion.div>
                    <h3 className="text-xl font-bold">{t("home.services.digitalPrinting")}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{t("home.services.digitalPrinting.desc")}</p>
                    <Link
                      href="/services/digital-printing"
                      className="mt-4 text-primary hover:underline text-sm group flex items-center"
                    >
                      {t("home.services.learnMore")}
                      <ChevronRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400 }}>
                <Card className="relative overflow-hidden rounded-lg border bg-background p-2 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                    <motion.div whileHover={{ rotate: 5, scale: 1.1 }} transition={{ type: "spring", stiffness: 400 }}>
                      <PenTool className="h-12 w-12 text-primary mb-4" />
                    </motion.div>
                    <h3 className="text-xl font-bold">{t("home.services.graphicDesign")}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{t("home.services.graphicDesign.desc")}</p>
                    <Link
                      href="/services/graphic-design"
                      className="mt-4 text-primary hover:underline text-sm group flex items-center"
                    >
                      {t("home.services.learnMore")}
                      <ChevronRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400 }}>
                <Card className="relative overflow-hidden rounded-lg border bg-background p-2 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                    <motion.div whileHover={{ rotate: 5, scale: 1.1 }} transition={{ type: "spring", stiffness: 400 }}>
                      <FileText className="h-12 w-12 text-primary mb-4" />
                    </motion.div>
                    <h3 className="text-xl font-bold">{t("home.services.businessCards")}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{t("home.services.businessCards.desc")}</p>
                    <Link
                      href="/products/business-cards"
                      className="mt-4 text-primary hover:underline text-sm group flex items-center"
                    >
                      {t("home.services.learnMore")}
                      <ChevronRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400 }}>
                <Card className="relative overflow-hidden rounded-lg border bg-background p-2 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                    <motion.div whileHover={{ rotate: 5, scale: 1.1 }} transition={{ type: "spring", stiffness: 400 }}>
                      <Package className="h-12 w-12 text-primary mb-4" />
                    </motion.div>
                    <h3 className="text-xl font-bold">{t("home.services.packaging")}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{t("home.services.packaging.desc")}</p>
                    <Link
                      href="/services/packaging"
                      className="mt-4 text-primary hover:underline text-sm group flex items-center"
                    >
                      {t("home.services.learnMore")}
                      <ChevronRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>
          </StaggerChildren>
        </div>
      </section>

      {/* Featured Products */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <FadeIn>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  {t("home.featuredProducts.title")}
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("home.featuredProducts.subtitle")}
                </p>
              </div>
            </div>
          </FadeIn>

          <StaggerChildren
            className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3"
            delay={0.2}
          >
            {featuredProducts.map((product) => (
              <StaggerItem key={product.id}>
                <Link href={`/products/${product.id}`}>
                  <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400 }}>
                    <Card className="overflow-hidden rounded-lg border bg-background transition-all duration-300 hover:shadow-lg">
                      <motion.div
                        className="aspect-square relative"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Image
                          src={product.image || "/placeholder.svg?height=300&width=300"}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform"
                        />
                      </motion.div>
                      <CardContent className="p-4">
                        <h3 className="text-lg font-bold">{product.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{product.shortDescription}</p>
                        <div className="flex items-center justify-between mt-4">
                          <span className="font-bold text-primary">Rp {product.price.toLocaleString()}</span>
                          <Button size="sm" variant="outline" className="group">
                            {t("home.featuredProducts.viewDetails")}
                            <ChevronRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <FadeIn delay={0.4}>
            <div className="flex justify-center mt-8">
              <Link href="/products">
                <Button variant="outline" size="lg" className="group">
                  {t("home.featuredProducts.viewAll")}
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <FadeIn>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  {t("home.whyChooseUs.title")}
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("home.whyChooseUs.subtitle")}
                </p>
              </div>
            </div>
          </FadeIn>

          <StaggerChildren className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3" delay={0.2}>
            <StaggerItem>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="flex flex-col items-center space-y-2 text-center"
              >
                <motion.div
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(var(--primary), 0.2)" }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-primary"
                  >
                    <path d="M12 2v4" />
                    <path d="M12 18v4" />
                    <path d="m4.93 4.93 2.83 2.83" />
                    <path d="m16.24 16.24 2.83 2.83" />
                    <path d="M2 12h4" />
                    <path d="M18 12h4" />
                    <path d="m4.93 19.07 2.83-2.83" />
                    <path d="m16.24 7.76 2.83-2.83" />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-bold">{t("home.whyChooseUs.fastTurnaround")}</h3>
                <p className="text-sm text-muted-foreground">{t("home.whyChooseUs.fastTurnaround.desc")}</p>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="flex flex-col items-center space-y-2 text-center"
              >
                <motion.div
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(var(--primary), 0.2)" }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-primary"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-bold">{t("home.whyChooseUs.qualityMaterials")}</h3>
                <p className="text-sm text-muted-foreground">{t("home.whyChooseUs.qualityMaterials.desc")}</p>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="flex flex-col items-center space-y-2 text-center"
              >
                <motion.div
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(var(--primary), 0.2)" }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-primary"
                  >
                    <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                    <path d="M13 5v2" />
                    <path d="M13 17v2" />
                    <path d="M13 11v2" />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-bold">{t("home.whyChooseUs.expertSupport")}</h3>
                <p className="text-sm text-muted-foreground">{t("home.whyChooseUs.expertSupport.desc")}</p>
              </motion.div>
            </StaggerItem>
          </StaggerChildren>
        </div>
      </section>
    </div>
  )
}

