"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/language-provider"
import { services } from "@/lib/data"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"

export default function ServicesPage() {
  const { t, language, getLocalizedServiceData } = useLanguage()

  return (
    <div className="container px-4 py-8 md:py-12">
      <FadeIn>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">{t("services.title")}</h1>
            <p className="text-muted-foreground mt-1">{t("services.subtitle")}</p>
          </div>
        </div>
      </FadeIn>

      <StaggerChildren className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <StaggerItem key={service.id}>
            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400 }}>
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="aspect-video relative">
                  <Image
                    src={service.image || "/placeholder.svg?height=300&width=500"}
                    alt={getLocalizedServiceData(service.id, "name")}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <Badge variant="secondary" className="bg-primary text-primary-foreground">
                      {language === "id"
                        ? `Mulai dari Rp ${service.pricing.startingPrice.toLocaleString()}`
                        : `From Rp ${service.pricing.startingPrice.toLocaleString()}`}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6 flex-grow">
                  <h2 className="text-xl font-bold mb-2">{getLocalizedServiceData(service.id, "name")}</h2>
                  <p className="text-muted-foreground">{getLocalizedServiceData(service.id, "description")}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Link href={`/services/${service.id}`} className="w-full">
                    <Button className="w-full group">
                      {t("home.services.learnMore")}
                      <motion.div
                        className="ml-2"
                        whileHover={{ x: 3 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </motion.div>
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </div>
  )
}

