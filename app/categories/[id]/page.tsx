"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"
import { products, categories } from "@/lib/data"
import { useParams } from "next/navigation"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"

export default function CategoryPage() {
  const { t, language, getLocalizedCategoryName, getLocalizedProductData } = useLanguage()
  const params = useParams()
  const categoryId = params.id as string

  // Find the category by ID
  const category = categories.find((c) => c.id === categoryId)

  // Filter products by category
  const categoryProducts = products.filter((product) => product.category === categoryId)

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

      <FadeIn>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">
              {category ? (language === "id" ? category.nameId : category.name) : ""}
            </h1>
            <p className="text-muted-foreground mt-1">
              {category ? (language === "id" ? category.descriptionId : category.description) : ""}
            </p>
          </div>
        </div>
      </FadeIn>

      <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categoryProducts.map((product) => (
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
                      alt={getLocalizedProductData(product.id, "name")}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold">{getLocalizedProductData(product.id, "name")}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {getLocalizedProductData(product.id, "shortDescription")}
                    </p>
                    <div className="flex items-center justify-between mt-4">
                      <span className="font-bold text-primary">Rp {product.price.toLocaleString()}</span>
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

      {categoryProducts.length === 0 && (
        <motion.div
          className="text-center py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-muted-foreground">
            {language === "id"
              ? "Tidak ada produk yang ditemukan dalam kategori ini."
              : "No products found in this category."}
          </p>
          <Link href="/products" className="mt-4 inline-block">
            <Button variant="outline">{t("product.backToProducts")}</Button>
          </Link>
        </motion.div>
      )}
    </div>
  )
}

