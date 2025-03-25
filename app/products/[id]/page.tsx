"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check, Minus, Plus } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { products, relatedProducts } from "@/lib/data"
import { formatWhatsAppLink } from "@/lib/utils"
import { useLanguage } from "@/components/language-provider"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"

export default function ProductPage({ params }: { params: { id: string } }) {
  const { t, language, getLocalizedProductData, getLocalizedProductOption, getLocalizedProductSpecification } =
    useLanguage()
  const [quantity, setQuantity] = useState(1)
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({})
  const [activeTab, setActiveTab] = useState("description")

  // Find the product by ID
  const product = products.find((p) => p.id === params.id) || products[0]

  // Handle quantity changes
  const increaseQuantity = () => setQuantity(quantity + 1)
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1)

  // Handle option selection
  const handleOptionChange = (optionName: string, value: string) => {
    setSelectedOptions((prev) => {
      // If the same option value is clicked again, deselect it
      if (prev[optionName] === value) {
        const newOptions = { ...prev }
        delete newOptions[optionName]
        return newOptions
      } else {
        // Otherwise select the new option
        return {
          ...prev,
          [optionName]: value,
        }
      }
    })
  }

  // Generate WhatsApp order message
  const handleOrder = () => {
    const productName = getLocalizedProductData(product.id, "name")

    const optionsText = Object.entries(selectedOptions)
      .map(([key, value]) => {
        const localizedOption = getLocalizedProductOption(product.id, key)
        return `${localizedOption.name}: ${value}`
      })
      .join(", ")

    const message =
      language === "id"
        ? `Saya ingin memesan:

*${productName}*
Jumlah: ${quantity}
${
  optionsText
    ? `Opsi: ${optionsText}
`
    : ""
}
Harga: Rp ${(product.price * quantity).toLocaleString()}`
        : `I would like to order:

*${productName}*
Quantity: ${quantity}
${
  optionsText
    ? `Options: ${optionsText}
`
    : ""
}
Price: Rp ${(product.price * quantity).toLocaleString()}`

    window.open(formatWhatsAppLink(message), "_blank")
  }

  return (
    <div className="container px-4 py-8 md:py-12">
      <FadeIn>
        <Link href="/products" className="inline-flex items-center text-sm font-medium text-primary mb-6 group">
          <motion.div whileHover={{ x: -3 }} transition={{ type: "spring", stiffness: 400 }}>
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:mr-3 transition-all" />
          </motion.div>
          {t("product.backToProducts")}
        </Link>
      </FadeIn>

      <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
        {/* Product Images */}
        <FadeIn direction="left">
          <div className="space-y-4">
            <motion.div
              className="overflow-hidden rounded-lg border bg-background"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={product.image || "/placeholder.svg?height=600&width=600"}
                alt={getLocalizedProductData(product.id, "name")}
                width={600}
                height={600}
                className="aspect-square object-cover transition-transform hover:scale-105 duration-500"
              />
            </motion.div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  className="overflow-hidden rounded-lg border bg-background"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src={`/placeholder.svg?height=150&width=150&text=Image${i}`}
                    alt={`Product image ${i}`}
                    width={150}
                    height={150}
                    className="aspect-square object-cover transition-transform hover:scale-105 duration-500"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Product Details */}
        <FadeIn direction="right" delay={0.2}>
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">{getLocalizedProductData(product.id, "name")}</h1>
              <p className="text-2xl font-bold text-primary mt-2">Rp {product.price.toLocaleString()}</p>
            </div>

            <p className="text-muted-foreground">{getLocalizedProductData(product.id, "shortDescription")}</p>

            {/* Product Options */}
            {product.options && product.options.length > 0 && (
              <div className="space-y-4">
                {product.options.map((option) => {
                  const localizedOption = getLocalizedProductOption(product.id, option.name)

                  return (
                    <div key={option.name} className="space-y-2">
                      <h3 className="font-medium">{localizedOption.name}</h3>
                      <div className="flex flex-wrap gap-2">
                        {localizedOption.values.map((value, index) => (
                          <motion.div key={value} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button
                              variant={selectedOptions[option.name] === option.values[index] ? "default" : "outline"}
                              size="sm"
                              onClick={() => handleOptionChange(option.name, option.values[index])}
                              className="min-w-[80px]"
                              title={
                                language === "id"
                                  ? "Klik dua kali untuk membatalkan pilihan"
                                  : "Double-click to deselect"
                              }
                            >
                              {selectedOptions[option.name] === option.values[index] && (
                                <Check className="mr-2 h-4 w-4" />
                              )}
                              {value}
                            </Button>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            )}

            {/* Quantity Selector */}
            <div className="space-y-2">
              <h3 className="font-medium">{t("product.quantity")}</h3>
              <div className="flex items-center space-x-2">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Button variant="outline" size="icon" onClick={decreaseQuantity} disabled={quantity <= 1}>
                    <Minus className="h-4 w-4" />
                  </Button>
                </motion.div>
                <span className="w-12 text-center">{quantity}</span>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Button variant="outline" size="icon" onClick={increaseQuantity}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </motion.div>
              </div>
            </div>

            {/* Order Button */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button size="lg" className="w-full" onClick={handleOrder}>
                {t("product.orderViaWhatsApp")}
              </Button>
            </motion.div>

            {/* Product Tabs */}
            <Tabs defaultValue="description" className="mt-8">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">{t("product.description")}</TabsTrigger>
                <TabsTrigger value="specifications">{t("product.specifications")}</TabsTrigger>
                <TabsTrigger value="shipping">{t("product.shipping")}</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="pt-4">
                <div className="space-y-4">
                  <p>
                    {getLocalizedProductData(product.id, "description") ||
                      getLocalizedProductData(product.id, "shortDescription")}
                  </p>
                  <p>
                    {language === "id"
                      ? "Cetak berkualitas tinggi kami menjamin warna yang cerah dan detail yang tajam. Setiap produk diperiksa dengan teliti sebelum pengiriman untuk memastikan memenuhi standar kualitas kami."
                      : "Our high-quality printing ensures vibrant colors and sharp details. Each product is carefully inspected before shipping to ensure it meets our quality standards."}
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="specifications" className="pt-4">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="font-medium">{t("product.material")}</div>
                    <div>
                      {getLocalizedProductSpecification(product.id, "material") ||
                        (language === "id" ? "Kertas premium" : "Premium paper")}
                    </div>
                    <div className="font-medium">{t("product.size")}</div>
                    <div>
                      {getLocalizedProductSpecification(product.id, "size") ||
                        (language === "id" ? "Berbagai ukuran tersedia" : "Various sizes available")}
                    </div>
                    <div className="font-medium">{t("product.finish")}</div>
                    <div>
                      {getLocalizedProductSpecification(product.id, "finish") ||
                        (language === "id" ? "Matte atau glossy" : "Matte or glossy")}
                    </div>
                    <div className="font-medium">{t("product.productionTime")}</div>
                    <div>
                      {getLocalizedProductSpecification(product.id, "productionTime") ||
                        (language === "id" ? "2-3 hari kerja" : "2-3 business days")}
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="shipping" className="pt-4">
                <div className="space-y-4">
                  <p>
                    {language === "id"
                      ? "Kami menawarkan pilihan pengiriman berikut:"
                      : "We offer the following shipping options:"}
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      {language === "id"
                        ? "Pengiriman Standar (3-5 hari kerja)"
                        : "Standard Shipping (3-5 business days)"}
                    </li>
                    <li>
                      {language === "id"
                        ? "Pengiriman Express (1-2 hari kerja)"
                        : "Express Shipping (1-2 business days)"}
                    </li>
                    <li>{language === "id" ? "Pengambilan gratis di toko kami" : "Free pickup at our store"}</li>
                  </ul>
                  <p>
                    {language === "id"
                      ? "Biaya pengiriman dihitung berdasarkan lokasi Anda dan berat pesanan Anda."
                      : "Shipping costs are calculated based on your location and the weight of your order."}
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </FadeIn>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <FadeIn>
          <h2 className="text-2xl font-bold mb-6">{t("product.relatedProducts")}</h2>
        </FadeIn>
        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {relatedProducts.map((relProduct) => (
            <StaggerItem key={relProduct.id}>
              <Link href={`/products/${relProduct.id}`}>
                <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Card className="overflow-hidden rounded-lg border bg-background transition-all duration-300 hover:shadow-lg">
                    <motion.div
                      className="aspect-square relative"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Image
                        src={relProduct.image || "/placeholder.svg?height=300&width=300"}
                        alt={getLocalizedProductData(relProduct.id, "name")}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                    <CardContent className="p-4">
                      <h3 className="text-lg font-bold">{getLocalizedProductData(relProduct.id, "name")}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {getLocalizedProductData(relProduct.id, "shortDescription")}
                      </p>
                      <div className="flex items-center justify-between mt-4">
                        <span className="font-bold text-primary">Rp {relProduct.price.toLocaleString()}</span>
                        <Button size="sm" variant="outline" className="group">
                          {t("home.featuredProducts.viewDetails")}
                          <motion.span
                            className="ml-1 inline-block"
                            whileHover={{ x: 2 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            →
                          </motion.span>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </div>
  )
}

