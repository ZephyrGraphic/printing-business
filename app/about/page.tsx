"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <div className="container px-4 py-8 md:py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">{t("about.title")}</h1>
          <p className="text-muted-foreground mt-1">{t("about.subtitle")}</p>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:gap-12 items-center mb-16">
        <div>
          <Image
            src="/images/hero-image.png"
            alt="Sakinah Grafika Office"
            width={600}
            height={600}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">{t("about.ourStory.title")}</h2>
          <p className="text-muted-foreground">
            Sakinah Grafika was founded in 2010 with a vision to provide high-quality printing and design services to
            businesses and individuals in Jakarta. What started as a small printing shop has now grown into a
            full-service printing and design company with state-of-the-art equipment and a team of experienced
            professionals.
          </p>
          <p className="text-muted-foreground">
            Over the years, we have built a reputation for excellence, reliability, and customer satisfaction. We take
            pride in our work and are committed to delivering the best possible results for our clients.
          </p>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">{t("about.ourMission.title")}</h2>
        <Card>
          <CardContent className="p-6">
            <p className="text-muted-foreground">
              Our mission is to provide high-quality printing and design services that help our clients communicate
              their message effectively. We are committed to using the latest technology and sustainable practices to
              deliver exceptional results while minimizing our environmental impact.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">{t("about.ourValues.title")}</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Quality</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We are committed to delivering the highest quality products and services. We use premium materials and
                state-of-the-art equipment to ensure exceptional results.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Customer Service</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We believe in building long-term relationships with our clients. We listen to their needs, provide
                expert advice, and go above and beyond to ensure their satisfaction.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Innovation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We continuously invest in new technology and techniques to improve our services and offer innovative
                solutions to our clients.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">{t("about.ourTeam.title")}</h2>
        <div className="grid gap-6 md:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i}>
              <div className="aspect-square relative">
                <Image src={`/images/team-member-${i}.png`} alt={`Team Member ${i}`} fill className="object-cover" />
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold">Team Member {i}</h3>
                <p className="text-sm text-muted-foreground">Position</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

