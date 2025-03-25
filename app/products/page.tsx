"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Filter, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { products, categories } from "@/lib/data"
import { useLanguage } from "@/components/language-provider"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"

export default function ProductsPage() {
  const { t, language, getLocalizedCategoryName, getLocalizedProductData } = useLanguage()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<{ min: number | null; max: number | null }>({
    min: null,
    max: null,
  })
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  // Apply filters whenever filter criteria change
  useEffect(() => {
    let result = products

    // Apply search filter
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase()
      result = result.filter((product) => {
        const name = language === "id" && product.nameId ? product.nameId.toLowerCase() : product.name.toLowerCase()

        const description =
          language === "id" && product.shortDescriptionId
            ? product.shortDescriptionId.toLowerCase()
            : product.shortDescription.toLowerCase()

        return name.includes(searchLower) || description.includes(searchLower)
      })
    }

    // Apply category filter
    if (selectedCategories.length > 0) {
      result = result.filter((product) => selectedCategories.includes(product.category))
    }

    // Apply price range filter
    if (priceRange.min !== null) {
      result = result.filter((product) => product.price >= (priceRange.min || 0))
    }
    if (priceRange.max !== null) {
      result = result.filter((product) => product.price <= (priceRange.max || Number.POSITIVE_INFINITY))
    }

    setFilteredProducts(result)
  }, [searchTerm, selectedCategories, priceRange, language])

  // Handle category selection
  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategories((prev) => {
      if (prev.includes(categoryId)) {
        return prev.filter((id) => id !== categoryId)
      } else {
        return [...prev, categoryId]
      }
    })
  }

  // Handle price range input
  const handlePriceChange = (type: "min" | "max", value: string) => {
    const numValue = value === "" ? null : Number(value)
    setPriceRange((prev) => ({
      ...prev,
      [type]: numValue,
    }))
  }

  // Reset all filters
  const resetFilters = () => {
    setSearchTerm("")
    setSelectedCategories([])
    setPriceRange({ min: null, max: null })
  }

  return (
    <div className="container px-4 py-8 md:py-12">
      <FadeIn>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">{t("products.title")}</h1>
            <p className="text-muted-foreground mt-1">{t("products.subtitle")}</p>
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <Input
              placeholder={t("products.search")}
              className="max-w-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            {/* Mobile Filter Button */}
            <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Filter className="h-4 w-4" />
                  <span className="sr-only">Filter</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>{t("products.categories")}</SheetTitle>
                  <SheetDescription>
                    {language === "id"
                      ? "Filter produk berdasarkan kategori dan harga"
                      : "Filter products by category and price"}
                  </SheetDescription>
                </SheetHeader>

                <div className="py-4">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">{t("products.categories")}</h3>
                      <div className="space-y-2">
                        {categories.map((category) => (
                          <div key={category.id} className="flex items-center space-x-2">
                            <Checkbox
                              id={`mobile-category-${category.id}`}
                              checked={selectedCategories.includes(category.id)}
                              onCheckedChange={() => handleCategoryChange(category.id)}
                            />
                            <Label htmlFor={`mobile-category-${category.id}`}>
                              {language === "id" ? category.nameId : category.name}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">{t("products.priceRange")}</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <Label htmlFor="mobile-min-price">{t("products.min")}</Label>
                          <Input
                            id="mobile-min-price"
                            type="number"
                            placeholder={t("products.min")}
                            value={priceRange.min === null ? "" : priceRange.min}
                            onChange={(e) => handlePriceChange("min", e.target.value)}
                          />
                        </div>
                        <div className="space-y-1">
                          <Label htmlFor="mobile-max-price">{t("products.max")}</Label>
                          <Input
                            id="mobile-max-price"
                            type="number"
                            placeholder={t("products.max")}
                            value={priceRange.max === null ? "" : priceRange.max}
                            onChange={(e) => handlePriceChange("max", e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-6">
                    <Button onClick={resetFilters} variant="outline" className="flex-1">
                      {language === "id" ? "Reset" : "Reset"}
                    </Button>
                    <SheetClose asChild>
                      <Button className="flex-1">{language === "id" ? "Terapkan" : "Apply"}</Button>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </FadeIn>

      <div className="grid md:grid-cols-4 gap-8">
        {/* Categories Sidebar - Desktop */}
        <FadeIn direction="left" className="hidden md:block space-y-6">
          <div>
            <h2 className="font-medium mb-4">{t("products.categories")}</h2>
            <div className="space-y-2">
              <Button
                variant="ghost"
                className={`w-full justify-start font-normal ${selectedCategories.length === 0 ? "bg-muted" : ""}`}
                onClick={() => setSelectedCategories([])}
              >
                {t("products.allProducts")}
              </Button>
              {categories.map((category) => (
                <motion.div
                  key={category.id}
                  className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-muted"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Checkbox
                    id={`category-${category.id}`}
                    checked={selectedCategories.includes(category.id)}
                    onCheckedChange={() => handleCategoryChange(category.id)}
                  />
                  <Label htmlFor={`category-${category.id}`} className="flex-grow cursor-pointer">
                    {language === "id" ? category.nameId : category.name}
                  </Label>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-medium mb-4">{t("products.priceRange")}</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label htmlFor="min-price">{t("products.min")}</Label>
                <Input
                  id="min-price"
                  type="number"
                  placeholder={t("products.min")}
                  value={priceRange.min === null ? "" : priceRange.min}
                  onChange={(e) => handlePriceChange("min", e.target.value)}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="max-price">{t("products.max")}</Label>
                <Input
                  id="max-price"
                  type="number"
                  placeholder={t("products.max")}
                  value={priceRange.max === null ? "" : priceRange.max}
                  onChange={(e) => handlePriceChange("max", e.target.value)}
                />
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <Button variant="outline" className="flex-1" onClick={resetFilters}>
                {language === "id" ? "Reset" : "Reset"}
              </Button>
              <Button className="flex-1">{t("products.applyFilter")}</Button>
            </div>
          </div>
        </FadeIn>

        {/* Products Grid */}
        <div className="md:col-span-3">
          {/* Active filters display */}
          <AnimatePresence>
            {(selectedCategories.length > 0 || priceRange.min !== null || priceRange.max !== null || searchTerm) && (
              <motion.div
                className="mb-4 flex flex-wrap gap-2 items-center"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <span className="text-sm font-medium">{language === "id" ? "Filter Aktif:" : "Active Filters:"}</span>

                {searchTerm && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ type: "spring", stiffness: 500 }}
                  >
                    <Button
                      variant="secondary"
                      size="sm"
                      className="h-7 gap-1 text-xs"
                      onClick={() => setSearchTerm("")}
                    >
                      {language === "id" ? "Pencarian:" : "Search:"} {searchTerm}
                      <X className="h-3 w-3" />
                    </Button>
                  </motion.div>
                )}

                {selectedCategories.map((catId) => {
                  const category = categories.find((c) => c.id === catId)
                  return (
                    <motion.div
                      key={catId}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ type: "spring", stiffness: 500 }}
                    >
                      <Button
                        variant="secondary"
                        size="sm"
                        className="h-7 gap-1 text-xs"
                        onClick={() => handleCategoryChange(catId)}
                      >
                        {language === "id" ? category?.nameId : category?.name}
                        <X className="h-3 w-3" />
                      </Button>
                    </motion.div>
                  )
                })}

                {priceRange.min !== null && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ type: "spring", stiffness: 500 }}
                  >
                    <Button
                      variant="secondary"
                      size="sm"
                      className="h-7 gap-1 text-xs"
                      onClick={() => handlePriceChange("min", "")}
                    >
                      {language === "id" ? "Min:" : "Min:"} Rp {priceRange.min.toLocaleString()}
                      <X className="h-3 w-3" />
                    </Button>
                  </motion.div>
                )}

                {priceRange.max !== null && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ type: "spring", stiffness: 500 }}
                  >
                    <Button
                      variant="secondary"
                      size="sm"
                      className="h-7 gap-1 text-xs"
                      onClick={() => handlePriceChange("max", "")}
                    >
                      {language === "id" ? "Maks:" : "Max:"} Rp {priceRange.max.toLocaleString()}
                      <X className="h-3 w-3" />
                    </Button>
                  </motion.div>
                )}

                <Button variant="ghost" size="sm" className="h-7 text-xs ml-auto" onClick={resetFilters}>
                  {language === "id" ? "Hapus Semua" : "Clear All"}
                </Button>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence mode="wait">
            {filteredProducts.length > 0 ? (
              <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" key="products">
                {filteredProducts.map((product) => (
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
                              className="object-cover transition-transform"
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
            ) : (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                key="no-products"
              >
                <h3 className="text-lg font-medium">
                  {language === "id" ? "Tidak ada produk ditemukan" : "No products found"}
                </h3>
                <p className="text-muted-foreground mt-2">
                  {language === "id"
                    ? "Coba sesuaikan filter atau kata pencarian Anda"
                    : "Try adjusting your filters or search term"}
                </p>
                <Button variant="outline" className="mt-4" onClick={resetFilters}>
                  {language === "id" ? "Reset Filter" : "Reset Filters"}
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

