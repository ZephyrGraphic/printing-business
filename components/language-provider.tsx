"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { categories, products, services } from "@/lib/data"

type Language = "id" | "en"

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
  getLocalizedCategoryName: (categoryId: string) => string
  getLocalizedProductData: (productId: string, field: "name" | "shortDescription" | "description") => string
  getLocalizedProductOption: (productId: string, optionName: string) => { name: string; values: string[] }
  getLocalizedProductSpecification: (productId: string, specName: string) => string
  getLocalizedServiceData: (serviceId: string, field: "name" | "description" | "longDescription") => string
  getLocalizedServiceFeatures: (serviceId: string) => string[]
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("id")
  const [translations, setTranslations] = useState<Record<string, Record<string, string>>>({})

  useEffect(() => {
    // Load translations
    const loadTranslations = async () => {
      const translations = {
        // Navigation
        "nav.home": {
          en: "Home",
          id: "Beranda",
        },
        "nav.products": {
          en: "Products",
          id: "Produk",
        },
        "nav.services": {
          en: "Services",
          id: "Layanan",
        },
        "nav.about": {
          en: "About Us",
          id: "Tentang Kami",
        },
        "nav.contact": {
          en: "Contact",
          id: "Kontak",
        },
        "nav.getQuote": {
          en: "Get a Quote",
          id: "Dapatkan Penawaran",
        },
        "nav.documentation": {
          en: "Documentation",
          id: "Dokumentasi",
        },

        // Home page
        "home.hero.title": {
          en: "Professional Printing & Design Solutions",
          id: "Solusi Cetak & Desain Profesional",
        },
        "home.hero.subtitle": {
          en: "High-quality printing services for all your business and personal needs. Order online and get your prints delivered to your doorstep.",
          id: "Layanan cetak berkualitas tinggi untuk kebutuhan bisnis dan pribadi Anda. Pesan online dan dapatkan cetakan Anda diantar ke rumah.",
        },
        "home.hero.browseProducts": {
          en: "Browse Products",
          id: "Lihat Produk",
        },
        "home.hero.contactUs": {
          en: "Contact Us",
          id: "Hubungi Kami",
        },

        // Services section
        "home.services.title": {
          en: "Our Services",
          id: "Layanan Kami",
        },
        "home.services.subtitle": {
          en: "We offer a wide range of printing and design services to meet your needs",
          id: "Kami menawarkan berbagai layanan cetak dan desain untuk memenuhi kebutuhan Anda",
        },
        "home.services.digitalPrinting": {
          en: "Digital Printing",
          id: "Cetak Digital",
        },
        "home.services.digitalPrinting.desc": {
          en: "High-quality digital printing for all your needs",
          id: "Cetak digital berkualitas tinggi untuk semua kebutuhan Anda",
        },
        "home.services.graphicDesign": {
          en: "Graphic Design",
          id: "Desain Grafis",
        },
        "home.services.graphicDesign.desc": {
          en: "Professional design services for your brand",
          id: "Layanan desain profesional untuk brand Anda",
        },
        "home.services.businessCards": {
          en: "Business Cards",
          id: "Kartu Nama",
        },
        "home.services.businessCards.desc": {
          en: "Premium business cards that make an impression",
          id: "Kartu nama premium yang memberikan kesan mendalam",
        },
        "home.services.packaging": {
          en: "Packaging",
          id: "Kemasan",
        },
        "home.services.packaging.desc": {
          en: "Custom packaging solutions for your products",
          id: "Solusi kemasan kustom untuk produk Anda",
        },
        "home.services.learnMore": {
          en: "Learn more",
          id: "Pelajari lebih lanjut",
        },

        // Featured products section
        "home.featuredProducts.title": {
          en: "Featured Products",
          id: "Produk Unggulan",
        },
        "home.featuredProducts.subtitle": {
          en: "Check out our most popular printing products",
          id: "Lihat produk cetak terpopuler kami",
        },
        "home.featuredProducts.viewAll": {
          en: "View All Products",
          id: "Lihat Semua Produk",
        },
        "home.featuredProducts.viewDetails": {
          en: "View Details",
          id: "Lihat Detail",
        },

        // Why choose us section
        "home.whyChooseUs.title": {
          en: "Why Choose Us",
          id: "Mengapa Memilih Kami",
        },
        "home.whyChooseUs.subtitle": {
          en: "We're committed to providing the best printing services with quick turnaround times",
          id: "Kami berkomitmen untuk menyediakan layanan cetak terbaik dengan waktu pengerjaan yang cepat",
        },
        "home.whyChooseUs.fastTurnaround": {
          en: "Fast Turnaround",
          id: "Pengerjaan Cepat",
        },
        "home.whyChooseUs.fastTurnaround.desc": {
          en: "Get your prints quickly with our efficient production process",
          id: "Dapatkan cetakan Anda dengan cepat melalui proses produksi yang efisien",
        },
        "home.whyChooseUs.qualityMaterials": {
          en: "Quality Materials",
          id: "Material Berkualitas",
        },
        "home.whyChooseUs.qualityMaterials.desc": {
          en: "We use only premium materials for all our printing services",
          id: "Kami hanya menggunakan material premium untuk semua layanan cetak kami",
        },
        "home.whyChooseUs.expertSupport": {
          en: "Expert Support",
          id: "Dukungan Ahli",
        },
        "home.whyChooseUs.expertSupport.desc": {
          en: "Our team of experts is always ready to assist you",
          id: "Tim ahli kami selalu siap membantu Anda",
        },

        // Products page
        "products.title": {
          en: "Products",
          id: "Produk",
        },
        "products.subtitle": {
          en: "Browse our wide range of printing products",
          id: "Jelajahi berbagai produk cetak kami",
        },
        "products.search": {
          en: "Search products...",
          id: "Cari produk...",
        },
        "products.categories": {
          en: "Categories",
          id: "Kategori",
        },
        "products.allProducts": {
          en: "All Products",
          id: "Semua Produk",
        },
        "products.priceRange": {
          en: "Price Range",
          id: "Rentang Harga",
        },
        "products.min": {
          en: "Min",
          id: "Min",
        },
        "products.max": {
          en: "Max",
          id: "Maks",
        },
        "products.applyFilter": {
          en: "Apply Filter",
          id: "Terapkan Filter",
        },

        // Product detail page
        "product.backToProducts": {
          en: "Back to Products",
          id: "Kembali ke Produk",
        },
        "product.quantity": {
          en: "Quantity",
          id: "Jumlah",
        },
        "product.orderViaWhatsApp": {
          en: "Order via WhatsApp",
          id: "Pesan via WhatsApp",
        },
        "product.description": {
          en: "Description",
          id: "Deskripsi",
        },
        "product.specifications": {
          en: "Specifications",
          id: "Spesifikasi",
        },
        "product.shipping": {
          en: "Shipping",
          id: "Pengiriman",
        },
        "product.material": {
          en: "Material",
          id: "Material",
        },
        "product.size": {
          en: "Size",
          id: "Ukuran",
        },
        "product.finish": {
          en: "Finish",
          id: "Finishing",
        },
        "product.productionTime": {
          en: "Production Time",
          id: "Waktu Produksi",
        },
        "product.relatedProducts": {
          en: "Related Products",
          id: "Produk Terkait",
        },

        // Contact page
        "contact.title": {
          en: "Contact Us",
          id: "Hubungi Kami",
        },
        "contact.subtitle": {
          en: "Get in touch with our team for inquiries and quotes",
          id: "Hubungi tim kami untuk pertanyaan dan penawaran",
        },
        "contact.form.title": {
          en: "Send us a message",
          id: "Kirim pesan kepada kami",
        },
        "contact.form.description": {
          en: "Fill out the form below and we'll get back to you as soon as possible.",
          id: "Isi formulir di bawah ini dan kami akan menghubungi Anda secepatnya.",
        },
        "contact.form.name": {
          en: "Name",
          id: "Nama",
        },
        "contact.form.email": {
          en: "Email",
          id: "Email",
        },
        "contact.form.phone": {
          en: "Phone",
          id: "Telepon",
        },
        "contact.form.subject": {
          en: "Subject",
          id: "Subjek",
        },
        "contact.form.message": {
          en: "Message",
          id: "Pesan",
        },
        "contact.form.submit": {
          en: "Send Message via WhatsApp",
          id: "Kirim Pesan via WhatsApp",
        },
        "contact.info.title": {
          en: "Contact Information",
          id: "Informasi Kontak",
        },
        "contact.info.description": {
          en: "Reach out to us directly through any of these channels",
          id: "Hubungi kami langsung melalui salah satu saluran berikut",
        },
        "contact.info.address": {
          en: "Address",
          id: "Alamat",
        },
        "contact.info.phone": {
          en: "Phone",
          id: "Telepon",
        },
        "contact.info.email": {
          en: "Email",
          id: "Email",
        },
        "contact.hours.title": {
          en: "Business Hours",
          id: "Jam Kerja",
        },
        "contact.quote.title": {
          en: "Request a Quote",
          id: "Minta Penawaran",
        },
        "contact.quote.description": {
          en: "Need a custom quote for your project?",
          id: "Butuh penawaran khusus untuk proyek Anda?",
        },
        "contact.quote.text": {
          en: "For custom orders and bulk pricing, please contact us directly for a personalized quote.",
          id: "Untuk pesanan khusus dan harga grosir, silakan hubungi kami langsung untuk penawaran yang dipersonalisasi.",
        },
        "contact.quote.call": {
          en: "Call for a Quote",
          id: "Hubungi untuk Penawaran",
        },

        // Footer
        "footer.description": {
          en: "Professional printing and design services for all your business and personal needs.",
          id: "Layanan cetak dan desain profesional untuk semua kebutuhan bisnis dan pribadi Anda.",
        },
        "footer.products": {
          en: "Products",
          id: "Produk",
        },
        "footer.services": {
          en: "Services",
          id: "Layanan",
        },
        "footer.contact": {
          en: "Contact",
          id: "Kontak",
        },
        "footer.viewAll": {
          en: "View All",
          id: "Lihat Semua",
        },
        "footer.copyright": {
          en: "All rights reserved.",
          id: "Hak Cipta Dilindungi.",
        },
        "footer.privacyPolicy": {
          en: "Privacy Policy",
          id: "Kebijakan Privasi",
        },
        "footer.termsOfService": {
          en: "Terms of Service",
          id: "Ketentuan Layanan",
        },

        // About page
        "about.title": {
          en: "About Us",
          id: "Tentang Kami",
        },
        "about.subtitle": {
          en: "Learn more about Sakinah Grafika and our commitment to quality",
          id: "Pelajari lebih lanjut tentang Sakinah Grafika dan komitmen kami terhadap kualitas",
        },
        "about.ourStory.title": {
          en: "Our Story",
          id: "Cerita Kami",
        },
        "about.ourMission.title": {
          en: "Our Mission",
          id: "Misi Kami",
        },
        "about.ourValues.title": {
          en: "Our Values",
          id: "Nilai-Nilai Kami",
        },
        "about.ourTeam.title": {
          en: "Our Team",
          id: "Tim Kami",
        },

        // Services page
        "services.title": {
          en: "Our Services",
          id: "Layanan Kami",
        },
        "services.subtitle": {
          en: "Explore our comprehensive range of printing and design services",
          id: "Jelajahi berbagai layanan cetak dan desain kami yang komprehensif",
        },

        // Theme switcher
        "theme.light": {
          en: "Light",
          id: "Terang",
        },
        "theme.dark": {
          en: "Dark",
          id: "Gelap",
        },
        "theme.system": {
          en: "System",
          id: "Sistem",
        },

        // Categories
        "category.business-cards": {
          en: "Business Cards",
          id: "Kartu Nama",
        },
        "category.flyers": {
          en: "Flyers & Brochures",
          id: "Flyer & Brosur",
        },
        "category.banners": {
          en: "Banners & Signage",
          id: "Spanduk & Papan Nama",
        },
        "category.stationery": {
          en: "Stationery",
          id: "Alat Tulis",
        },
        "category.packaging": {
          en: "Packaging",
          id: "Kemasan",
        },
        "category.promotional": {
          en: "Promotional Items",
          id: "Barang Promosi",
        },
        "category.wedding-invitations": {
          en: "Wedding Invitations",
          id: "Undangan Pernikahan",
        },

        // Services
        "service.digitalPrinting": {
          en: "Digital Printing",
          id: "Cetak Digital",
        },
        "service.graphicDesign": {
          en: "Graphic Design",
          id: "Desain Grafis",
        },
        "service.largeFormat": {
          en: "Large Format Printing",
          id: "Cetak Format Besar",
        },
        "service.packaging": {
          en: "Packaging Solutions",
          id: "Solusi Kemasan",
        },
        "service.offsetPrinting": {
          en: "Offset Printing",
          id: "Cetak Offset",
        },
        "service.weddingStationery": {
          en: "Wedding Stationery",
          id: "Alat Tulis Pernikahan",
        },
      }

      setTranslations(translations)
    }

    loadTranslations()

    // Check if there's a saved language preference
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Translation function
  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`)
      return key
    }
    return translations[key][language] || key
  }

  // Get localized category name
  const getLocalizedCategoryName = (categoryId: string): string => {
    const category = categories.find((c) => c.id === categoryId)
    if (!category) return categoryId

    return language === "id" ? category.nameId : category.name
  }

  // Get localized product data
  const getLocalizedProductData = (productId: string, field: "name" | "shortDescription" | "description"): string => {
    const product = products.find((p) => p.id === productId)
    if (!product) return ""

    if (language === "id") {
      const idField = `${field}Id` as keyof typeof product
      return (product[idField] as string) || product[field] || ""
    }

    return product[field] || ""
  }

  // Get localized product option
  const getLocalizedProductOption = (productId: string, optionName: string): { name: string; values: string[] } => {
    const product = products.find((p) => p.id === productId)
    if (!product || !product.options) return { name: optionName, values: [] }

    const option = product.options.find((o) => o.name === optionName || o.nameId === optionName)
    if (!option) return { name: optionName, values: [] }

    if (language === "id") {
      return {
        name: option.nameId || option.name,
        values: option.valuesId || option.values,
      }
    }

    return {
      name: option.name,
      values: option.values,
    }
  }

  // Get localized product specification
  const getLocalizedProductSpecification = (productId: string, specName: string): string => {
    const product = products.find((p) => p.id === productId)
    if (!product || !product.specifications) return ""

    const spec = product.specifications[specName as keyof typeof product.specifications]
    if (!spec) return ""

    if (language === "id") {
      const idSpec = product.specifications[`${specName}Id` as keyof typeof product.specifications]
      return (idSpec as string) || (spec as string)
    }

    return spec as string
  }

  // Get localized service data
  const getLocalizedServiceData = (serviceId: string, field: "name" | "description" | "longDescription"): string => {
    const service = services.find((s) => s.id === serviceId)
    if (!service) return ""

    if (language === "id") {
      const idField = `${field}Id` as keyof typeof service
      return (service[idField] as string) || service[field] || ""
    }

    return service[field] || ""
  }

  // Get localized service features
  const getLocalizedServiceFeatures = (serviceId: string): string[] => {
    const service = services.find((s) => s.id === serviceId)
    if (!service || !service.features) return []

    if (language === "id" && service.featuresId) {
      return service.featuresId
    }

    return service.features
  }

  // Update language and save to localStorage
  const handleSetLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage)
    localStorage.setItem("language", newLanguage)
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: handleSetLanguage,
        t,
        getLocalizedCategoryName,
        getLocalizedProductData,
        getLocalizedProductOption,
        getLocalizedProductSpecification,
        getLocalizedServiceData,
        getLocalizedServiceFeatures,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

