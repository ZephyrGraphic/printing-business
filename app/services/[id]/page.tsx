"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"
import { services } from "@/lib/data"
import { formatWhatsAppLink } from "@/lib/utils"
import { useParams } from "next/navigation"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"

export default function ServicePage() {
  const { t, language, getLocalizedServiceData, getLocalizedServiceFeatures } = useLanguage()
  const params = useParams()
  const serviceId = params.id as string

  // Find the service by ID
  const service = services.find((s) => s.id === serviceId) || services[0]

  const handleContactWhatsApp = () => {
    const serviceName = getLocalizedServiceData(service.id, "name")

    const message =
      language === "id"
        ? `Halo, saya tertarik dengan layanan ${serviceName} Anda. Bisakah Anda memberikan informasi lebih lanjut?`
        : `Hello, I'm interested in your ${serviceName} service. Can you provide more information?`

    window.open(formatWhatsAppLink(message), "_blank")
  }

  return (
    <div className="container px-4 py-8 md:py-12">
      <FadeIn>
        <Link href="/services" className="inline-flex items-center text-sm font-medium text-primary mb-6 group">
          <motion.div whileHover={{ x: -3 }} transition={{ type: "spring", stiffness: 400 }}>
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:mr-3 transition-all" />
          </motion.div>
          {language === "id" ? "Kembali ke Layanan" : "Back to Services"}
        </Link>
      </FadeIn>

      <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
        <FadeIn direction="left">
          <div className="aspect-video relative overflow-hidden rounded-lg">
            <Image
              src={service.image || "/placeholder.svg?height=400&width=600"}
              alt={getLocalizedServiceData(service.id, "name")}
              fill
              className="object-cover"
            />
          </div>
        </FadeIn>

        <FadeIn direction="right" delay={0.2}>
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">{getLocalizedServiceData(service.id, "name")}</h1>
              <p className="text-xl font-semibold text-primary mt-2">
                {language === "id"
                  ? `Mulai dari Rp ${service.pricing.startingPrice.toLocaleString()} ${service.pricing.unitId || ""}`
                  : `Starting from Rp ${service.pricing.startingPrice.toLocaleString()} ${service.pricing.unit || ""}`}
              </p>
              <p className="text-muted-foreground mt-4">{getLocalizedServiceData(service.id, "description")}</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold">{language === "id" ? "Detail Layanan" : "Service Details"}</h2>
              <p className="text-muted-foreground">{getLocalizedServiceData(service.id, "longDescription")}</p>

              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                {getLocalizedServiceFeatures(service.id).map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button size="lg" onClick={handleContactWhatsApp}>
                {language === "id" ? "Minta Penawaran" : "Request a Quote"}
              </Button>
            </motion.div>
          </div>
        </FadeIn>
      </div>

      {/* Pricing Packages */}
      <div className="mt-16">
        <FadeIn>
          <h2 className="text-2xl font-bold mb-6">{language === "id" ? "Paket Harga" : "Pricing Packages"}</h2>
        </FadeIn>

        <StaggerChildren className="grid gap-6 md:grid-cols-3">
          {service.pricing.packages?.map((pkg, index) => (
            <StaggerItem key={index}>
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{language === "id" ? pkg.nameId : pkg.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-2xl font-bold text-primary mb-4">Rp {pkg.price.toLocaleString()}</p>
                  <p className="text-muted-foreground flex-grow">
                    {language === "id" ? pkg.descriptionId : pkg.description}
                  </p>
                  <motion.div className="mt-6" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      className="w-full"
                      onClick={() => {
                        const serviceName = getLocalizedServiceData(service.id, "name")
                        const packageName = language === "id" ? pkg.nameId : pkg.name

                        const message =
                          language === "id"
                            ? `Halo, saya tertarik dengan paket ${packageName} untuk layanan ${serviceName} Anda. Bisakah Anda memberikan informasi lebih lanjut?`
                            : `Hello, I'm interested in your ${packageName} package for ${serviceName} service. Can you provide more information?`

                        window.open(formatWhatsAppLink(message), "_blank")
                      }}
                    >
                      {language === "id" ? "Pilih Paket" : "Choose Package"}
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>

      <div className="mt-16">
        <FadeIn>
          <h2 className="text-2xl font-bold mb-6">
            {language === "id"
              ? `Mengapa Memilih Layanan ${getLocalizedServiceData(service.id, "name")} Kami`
              : `Why Choose Our ${getLocalizedServiceData(service.id, "name")} Service`}
          </h2>
        </FadeIn>

        <StaggerChildren className="grid gap-6 md:grid-cols-3">
          <StaggerItem>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">
                  {language === "id" ? "Material Berkualitas" : "Quality Materials"}
                </h3>
                <p className="text-muted-foreground">
                  {language === "id"
                    ? "Kami hanya menggunakan material premium untuk memastikan hasil berkualitas tinggi untuk proyek Anda."
                    : "We use only premium materials to ensure the highest quality results for your project."}
                </p>
              </CardContent>
            </Card>
          </StaggerItem>

          <StaggerItem>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">{language === "id" ? "Tim Ahli" : "Expert Team"}</h3>
                <p className="text-muted-foreground">
                  {language === "id"
                    ? "Tim profesional berpengalaman kami akan memastikan proyek Anda diselesaikan dengan standar tertinggi."
                    : "Our team of experienced professionals will ensure your project is completed to the highest standards."}
                </p>
              </CardContent>
            </Card>
          </StaggerItem>

          <StaggerItem>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">{language === "id" ? "Pengerjaan Cepat" : "Fast Turnaround"}</h3>
                <p className="text-muted-foreground">
                  {language === "id"
                    ? "Kami memahami pentingnya tenggat waktu dan akan bekerja untuk menyelesaikan proyek Anda tepat waktu."
                    : "We understand the importance of deadlines and will work to deliver your project on time."}
                </p>
              </CardContent>
            </Card>
          </StaggerItem>
        </StaggerChildren>
      </div>
    </div>
  )
}

