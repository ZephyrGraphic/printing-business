"use client"

import type React from "react"
import { useState } from "react"
import { Mail, MapPin, Phone } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { formatWhatsAppLink } from "@/lib/utils"
import { useLanguage } from "@/components/language-provider"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"

export default function ContactPage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Format message for WhatsApp
    const message = `*Contact Form Submission*

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}

Message:
${formData.message}`

    // Open WhatsApp with pre-filled message
    window.open(formatWhatsAppLink(message), "_blank")
  }

  return (
    <div className="container px-4 py-8 md:py-12">
      <FadeIn>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">{t("contact.title")}</h1>
            <p className="text-muted-foreground mt-1">{t("contact.subtitle")}</p>
          </div>
        </div>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-8">
        <FadeIn direction="left">
          <Card>
            <CardHeader>
              <CardTitle>{t("contact.form.title")}</CardTitle>
              <CardDescription>{t("contact.form.description")}</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t("contact.form.name")}</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder={t("contact.form.name")}
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t("contact.form.email")}</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder={t("contact.form.email")}
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">{t("contact.form.phone")}</Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder={t("contact.form.phone")}
                    value={formData.phone}
                    onChange={handleChange}
                    className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">{t("contact.form.subject")}</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder={t("contact.form.subject")}
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">{t("contact.form.message")}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder={t("contact.form.message")}
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button type="submit" className="w-full">
                    {t("contact.form.submit")}
                  </Button>
                </motion.div>
              </form>
            </CardContent>
          </Card>
        </FadeIn>

        <div className="space-y-6">
          <StaggerChildren delay={0.1}>
            <StaggerItem>
              <Card>
                <CardHeader>
                  <CardTitle>{t("contact.info.title")}</CardTitle>
                  <CardDescription>{t("contact.info.description")}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <motion.div
                    className="flex items-start gap-4"
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium">{t("contact.info.address")}</h3>
                      <p className="text-sm text-muted-foreground">
                        <a
                          href="https://maps.app.goo.gl/6yBkkELve4d2e8t6A"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          Jl. Arwana (BLOK H21), Perum Sakura Gardenia
                        </a>
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex items-start gap-4"
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium">{t("contact.info.phone")}</h3>
                      <p className="text-sm text-muted-foreground">
                        <a href="tel:+6281563104864" className="hover:underline">
                          +62 815 6310 4864
                        </a>
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex items-start gap-4"
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium">{t("contact.info.email")}</h3>
                      <p className="text-sm text-muted-foreground">info@sakinahgrafika.com</p>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card>
                <CardHeader>
                  <CardTitle>{t("contact.hours.title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <motion.div
                      className="flex justify-between"
                      whileHover={{ x: 3 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </motion.div>
                    <motion.div
                      className="flex justify-between"
                      whileHover={{ x: 3 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <span>Saturday</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </motion.div>
                    <motion.div
                      className="flex justify-between"
                      whileHover={{ x: 3 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <span>Sunday</span>
                      <span>Closed</span>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card>
                <CardHeader>
                  <CardTitle>{t("contact.quote.title")}</CardTitle>
                  <CardDescription>{t("contact.quote.description")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{t("contact.quote.text")}</p>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button className="w-full" variant="outline" asChild>
                      <a href="https://wa.me/+6281563104864">{t("contact.quote.call")}</a>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerChildren>
        </div>
      </div>
    </div>
  )
}

