// This file contains static data for the website
// In a real application, this would be fetched from an API or CMS

export interface Product {
  id: string
  name: string
  nameId?: string // Indonesian name
  price: number
  shortDescription: string
  shortDescriptionId?: string // Indonesian short description
  description?: string
  descriptionId?: string // Indonesian description
  image?: string
  category: string
  options?: {
    name: string
    nameId?: string // Indonesian name
    values: string[]
    valuesId?: string[] // Indonesian values
  }[]
  specifications?: {
    material?: string
    materialId?: string // Indonesian material
    size?: string
    sizeId?: string // Indonesian size
    finish?: string
    finishId?: string // Indonesian finish
    productionTime?: string
    productionTimeId?: string // Indonesian production time
  }
}

export interface Category {
  id: string
  name: string
  nameId: string // Indonesian name
  description: string
  descriptionId: string // Indonesian description
  image?: string
}

// Update the Service interface to include pricing information
export interface Service {
  id: string
  name: string
  nameId: string // Indonesian name
  description: string
  descriptionId: string // Indonesian description
  longDescription?: string
  longDescriptionId?: string // Indonesian long description
  image?: string
  features?: string[]
  featuresId?: string[] // Indonesian features
  pricing: {
    startingPrice: number
    unit?: string
    unitId?: string
    packages?: {
      name: string
      nameId: string
      price: number
      description: string
      descriptionId: string
    }[]
  }
}

export const categories: Category[] = [
  {
    id: "business-cards",
    name: "Business Cards",
    nameId: "Kartu Nama",
    description: "Professional business cards for making a lasting impression",
    descriptionId: "Kartu nama profesional untuk memberikan kesan yang berkesan",
    image: "/images/business-cards.png",
  },
  {
    id: "flyers",
    name: "Flyers & Brochures",
    nameId: "Flyer & Brosur",
    description: "Promotional materials to spread your message",
    descriptionId: "Materi promosi untuk menyebarkan pesan Anda",
    image: "/images/flyers.png",
  },
  {
    id: "banners",
    name: "Banners & Signage",
    nameId: "Spanduk & Papan Nama",
    description: "Large format printing for maximum visibility",
    descriptionId: "Cetak format besar untuk visibilitas maksimal",
    image: "/images/banners.png",
  },
  {
    id: "stationery",
    name: "Stationery",
    nameId: "Alat Tulis",
    description: "Professional letterheads, envelopes, and more",
    descriptionId: "Kop surat profesional, amplop, dan lainnya",
    image: "/images/stationery.png",
  },
  {
    id: "packaging",
    name: "Packaging",
    nameId: "Kemasan",
    description: "Custom packaging solutions for your products",
    descriptionId: "Solusi kemasan kustom untuk produk Anda",
    image: "/images/packaging.png",
  },
  {
    id: "promotional",
    name: "Promotional Items",
    nameId: "Barang Promosi",
    description: "Branded merchandise and promotional products",
    descriptionId: "Merchandise bermerek dan produk promosi",
    image: "/images/promotional.png",
  },
  {
    id: "wedding-invitations",
    name: "Wedding Invitations",
    nameId: "Undangan Pernikahan",
    description: "Beautiful custom wedding invitations and stationery",
    descriptionId: "Undangan pernikahan kustom yang indah dan alat tulis",
    image: "/images/wedding-invitation.png",
  },
]

export const products: Product[] = [
  {
    id: "business-card-standard",
    name: "Standard Business Cards",
    nameId: "Kartu Nama Standar",
    price: 150000,
    shortDescription: "Professional business cards printed on premium cardstock",
    shortDescriptionId: "Kartu nama profesional dicetak pada karton premium",
    description:
      "Make a lasting impression with our premium standard business cards. Printed on high-quality 350gsm cardstock with a smooth matte or glossy finish. Perfect for networking events, client meetings, and everyday business use.",
    descriptionId:
      "Berikan kesan yang berkesan dengan kartu nama standar premium kami. Dicetak pada karton 350gsm berkualitas tinggi dengan finishing matte atau glossy yang halus. Sempurna untuk acara networking, pertemuan klien, dan penggunaan bisnis sehari-hari.",
    image: "/images/business-cards.png",
    category: "business-cards",
    options: [
      {
        name: "Size",
        nameId: "Ukuran",
        values: ["Standard (90x55mm)", "Square (65x65mm)", "Mini (70x28mm)"],
        valuesId: ["Standar (90x55mm)", "Persegi (65x65mm)", "Mini (70x28mm)"],
      },
      {
        name: "Paper",
        nameId: "Kertas",
        values: ["Premium Matte", "Glossy", "Textured"],
        valuesId: ["Matte Premium", "Glossy", "Bertekstur"],
      },
      {
        name: "Quantity",
        nameId: "Jumlah",
        values: ["100", "250", "500", "1000"],
      },
    ],
    specifications: {
      material: "350gsm premium cardstock",
      materialId: "Karton premium 350gsm",
      size: "90x55mm (standard)",
      sizeId: "90x55mm (standar)",
      finish: "Matte or glossy",
      finishId: "Matte atau glossy",
      productionTime: "2-3 business days",
      productionTimeId: "2-3 hari kerja",
    },
  },
  {
    id: "flyer-a5",
    name: "A5 Flyers",
    nameId: "Flyer A5",
    price: 250000,
    shortDescription: "Vibrant A5 flyers for promotions and events",
    shortDescriptionId: "Flyer A5 berwarna cerah untuk promosi dan acara",
    image: "/images/flyers.png",
    category: "flyers",
    options: [
      {
        name: "Paper",
        nameId: "Kertas",
        values: ["150gsm Gloss", "170gsm Matte", "250gsm Premium"],
        valuesId: ["Glossy 150gsm", "Matte 170gsm", "Premium 250gsm"],
      },
      {
        name: "Sides",
        nameId: "Sisi",
        values: ["Single-sided", "Double-sided"],
        valuesId: ["Satu sisi", "Dua sisi"],
      },
      {
        name: "Quantity",
        nameId: "Jumlah",
        values: ["100", "250", "500", "1000"],
      },
    ],
  },
  {
    id: "banner-outdoor",
    name: "Outdoor Vinyl Banner",
    nameId: "Spanduk Vinyl Outdoor",
    price: 450000,
    shortDescription: "Weather-resistant vinyl banners for outdoor advertising",
    shortDescriptionId: "Spanduk vinyl tahan cuaca untuk iklan luar ruangan",
    image: "/images/banners.png",
    category: "banners",
    options: [
      {
        name: "Size",
        nameId: "Ukuran",
        values: ["2x1m", "3x1m", "4x1m", "Custom"],
        valuesId: ["2x1m", "3x1m", "4x1m", "Kustom"],
      },
      {
        name: "Finishing",
        nameId: "Finishing",
        values: ["Hemmed Edges", "Grommets", "Pole Pockets"],
        valuesId: ["Tepi Jahitan", "Lubang Grommet", "Kantong Tiang"],
      },
    ],
  },
  {
    id: "letterhead",
    name: "Corporate Letterheads",
    nameId: "Kop Surat Perusahaan",
    price: 200000,
    shortDescription: "Professional letterheads for business correspondence",
    shortDescriptionId: "Kop surat profesional untuk korespondensi bisnis",
    image: "/images/stationery.png",
    category: "stationery",
    options: [
      {
        name: "Paper",
        nameId: "Kertas",
        values: ["100gsm Premium", "120gsm Textured"],
        valuesId: ["Premium 100gsm", "Bertekstur 120gsm"],
      },
      {
        name: "Quantity",
        nameId: "Jumlah",
        values: ["100", "250", "500"],
      },
    ],
  },
  {
    id: "brochure-trifold",
    name: "Tri-fold Brochures",
    nameId: "Brosur Lipat Tiga",
    price: 350000,
    shortDescription: "Informative tri-fold brochures for product or service information",
    shortDescriptionId: "Brosur lipat tiga informatif untuk informasi produk atau layanan",
    image: "/images/flyers.png",
    category: "flyers",
    options: [
      {
        name: "Size",
        nameId: "Ukuran",
        values: ["A4 (folded to A5)", "DL", "Custom"],
        valuesId: ["A4 (dilipat menjadi A5)", "DL", "Kustom"],
      },
      {
        name: "Paper",
        nameId: "Kertas",
        values: ["150gsm Gloss", "170gsm Matte", "250gsm Premium"],
        valuesId: ["Glossy 150gsm", "Matte 170gsm", "Premium 250gsm"],
      },
      {
        name: "Quantity",
        nameId: "Jumlah",
        values: ["100", "250", "500", "1000"],
      },
    ],
  },
  {
    id: "product-labels",
    name: "Product Labels",
    nameId: "Label Produk",
    price: 180000,
    shortDescription: "Custom labels for product packaging and branding",
    shortDescriptionId: "Label kustom untuk kemasan produk dan branding",
    image: "/images/packaging.png",
    category: "packaging",
    options: [
      {
        name: "Material",
        nameId: "Material",
        values: ["Paper", "Vinyl", "Clear", "Metallic"],
        valuesId: ["Kertas", "Vinyl", "Bening", "Metalik"],
      },
      {
        name: "Shape",
        nameId: "Bentuk",
        values: ["Rectangle", "Square", "Circle", "Custom"],
        valuesId: ["Persegi Panjang", "Persegi", "Lingkaran", "Kustom"],
      },
      {
        name: "Quantity",
        nameId: "Jumlah",
        values: ["100", "250", "500", "1000"],
      },
    ],
  },
  {
    id: "wedding-invitation-standard",
    name: "Standard Wedding Invitation",
    nameId: "Undangan Pernikahan Standar",
    price: 2500000,
    shortDescription: "Beautiful wedding invitations with custom design",
    shortDescriptionId: "Undangan pernikahan indah dengan desain kustom",
    description:
      "Make your special day even more memorable with our custom designed wedding invitations. Choose from a variety of elegant designs, premium papers, and finishing options to create invitations that reflect your personal style.",
    descriptionId:
      "Jadikan hari spesial Anda lebih berkesan dengan undangan pernikahan desain kustom kami. Pilih dari berbagai desain elegan, kertas premium, dan pilihan finishing untuk membuat undangan yang mencerminkan gaya pribadi Anda.",
    image: "/images/wedding-invitation.png",
    category: "wedding-invitations",
    options: [
      {
        name: "Style",
        nameId: "Gaya",
        values: ["Classic", "Modern", "Rustic", "Floral", "Minimalist"],
        valuesId: ["Klasik", "Modern", "Rustic", "Floral", "Minimalis"],
      },
      {
        name: "Paper",
        nameId: "Kertas",
        values: ["Premium Matte", "Textured", "Pearl", "Recycled"],
        valuesId: ["Matte Premium", "Bertekstur", "Mutiara", "Daur Ulang"],
      },
      {
        name: "Quantity",
        nameId: "Jumlah",
        values: ["50", "100", "150", "200", "250"],
      },
    ],
    specifications: {
      material: "Premium cardstock",
      materialId: "Karton premium",
      size: "5x7 inches (standard)",
      sizeId: "5x7 inci (standar)",
      finish: "Various options available",
      finishId: "Berbagai pilihan tersedia",
      productionTime: "7-10 business days",
      productionTimeId: "7-10 hari kerja",
    },
  },
  {
    id: "promotional-tshirts",
    name: "Custom Printed T-Shirts",
    nameId: "Kaos Cetak Kustom",
    price: 120000,
    shortDescription: "High-quality custom printed t-shirts for events or promotions",
    shortDescriptionId: "Kaos cetak kustom berkualitas tinggi untuk acara atau promosi",
    image: "/images/promotional.png",
    category: "promotional",
    options: [
      {
        name: "Size",
        nameId: "Ukuran",
        values: ["S", "M", "L", "XL", "XXL"],
      },
      {
        name: "Color",
        nameId: "Warna",
        values: ["White", "Black", "Navy", "Red", "Custom"],
        valuesId: ["Putih", "Hitam", "Navy", "Merah", "Kustom"],
      },
      {
        name: "Quantity",
        nameId: "Jumlah",
        values: ["10", "25", "50", "100", "250"],
      },
    ],
  },
]

// Update the services array with pricing information
export const services: Service[] = [
  {
    id: "digital-printing",
    name: "Digital Printing",
    nameId: "Cetak Digital",
    description: "High-quality digital printing for all your needs",
    descriptionId: "Cetak digital berkualitas tinggi untuk semua kebutuhan Anda",
    longDescription:
      "Our digital printing service offers exceptional quality and fast turnaround times. Whether you need business cards, flyers, brochures, or any other printed materials, our state-of-the-art digital printers can handle it all with precision and vibrant colors.",
    longDescriptionId:
      "Layanan cetak digital kami menawarkan kualitas luar biasa dan waktu pengerjaan yang cepat. Baik Anda membutuhkan kartu nama, flyer, brosur, atau materi cetak lainnya, printer digital canggih kami dapat menangani semuanya dengan presisi dan warna yang cerah.",
    image: "/images/digital-printing.png",
    features: [
      "High-resolution printing",
      "Quick turnaround times",
      "Vibrant, accurate colors",
      "Various paper options",
      "Small to medium print runs",
      "Cost-effective for short runs",
    ],
    featuresId: [
      "Cetak resolusi tinggi",
      "Waktu pengerjaan cepat",
      "Warna cerah dan akurat",
      "Berbagai pilihan kertas",
      "Cetak skala kecil hingga menengah",
      "Hemat biaya untuk jumlah sedikit",
    ],
    pricing: {
      startingPrice: 150000,
      unit: "per project",
      unitId: "per proyek",
      packages: [
        {
          name: "Basic Digital Printing",
          nameId: "Cetak Digital Dasar",
          price: 150000,
          description: "Standard digital printing for simple documents (up to 50 pages)",
          descriptionId: "Cetak digital standar untuk dokumen sederhana (hingga 50 halaman)",
        },
        {
          name: "Premium Digital Printing",
          nameId: "Cetak Digital Premium",
          price: 350000,
          description: "High-quality digital printing with premium paper options and finishing",
          descriptionId: "Cetak digital kualitas tinggi dengan pilihan kertas premium dan finishing",
        },
        {
          name: "Bulk Digital Printing",
          nameId: "Cetak Digital Massal",
          price: 750000,
          description: "Large volume printing with consistent quality (up to 500 pages)",
          descriptionId: "Cetak volume besar dengan kualitas konsisten (hingga 500 halaman)",
        },
      ],
    },
  },
  {
    id: "graphic-design",
    name: "Graphic Design",
    nameId: "Desain Grafis",
    description: "Professional design services for your brand",
    descriptionId: "Layanan desain profesional untuk brand Anda",
    longDescription:
      "Our team of experienced graphic designers can help bring your vision to life. From logo design to complete brand identity packages, we work closely with you to create designs that effectively communicate your message and enhance your brand.",
    longDescriptionId:
      "Tim desainer grafis berpengalaman kami dapat membantu mewujudkan visi Anda. Dari desain logo hingga paket identitas brand lengkap, kami bekerja sama dengan Anda untuk membuat desain yang efektif mengkomunikasikan pesan Anda dan meningkatkan brand Anda.",
    image: "/images/graphic-design.png",
    features: [
      "Logo design",
      "Brand identity development",
      "Marketing materials design",
      "Packaging design",
      "Social media graphics",
      "Unlimited revisions until you're satisfied",
    ],
    featuresId: [
      "Desain logo",
      "Pengembangan identitas brand",
      "Desain materi pemasaran",
      "Desain kemasan",
      "Grafis media sosial",
      "Revisi tak terbatas hingga Anda puas",
    ],
    pricing: {
      startingPrice: 500000,
      unit: "per design",
      unitId: "per desain",
      packages: [
        {
          name: "Logo Design",
          nameId: "Desain Logo",
          price: 1500000,
          description: "Professional logo design with up to 3 concepts and unlimited revisions",
          descriptionId: "Desain logo profesional dengan hingga 3 konsep dan revisi tak terbatas",
        },
        {
          name: "Brand Identity Package",
          nameId: "Paket Identitas Brand",
          price: 3500000,
          description: "Complete brand identity including logo, business cards, letterhead, and brand guidelines",
          descriptionId: "Identitas brand lengkap termasuk logo, kartu nama, kop surat, dan pedoman brand",
        },
        {
          name: "Marketing Materials Design",
          nameId: "Desain Materi Pemasaran",
          price: 750000,
          description: "Design for brochures, flyers, posters, and other marketing materials",
          descriptionId: "Desain untuk brosur, flyer, poster, dan materi pemasaran lainnya",
        },
      ],
    },
  },
  {
    id: "large-format",
    name: "Large Format Printing",
    nameId: "Cetak Format Besar",
    description: "Eye-catching banners, posters, and signage",
    descriptionId: "Spanduk, poster, dan papan nama yang menarik perhatian",
    longDescription:
      "Make a big impact with our large format printing services. From banners and posters to trade show displays and vehicle wraps, we can print on a variety of materials to suit your indoor or outdoor advertising needs.",
    longDescriptionId:
      "Buat dampak besar dengan layanan cetak format besar kami. Dari spanduk dan poster hingga display pameran dan wrapping kendaraan, kami dapat mencetak pada berbagai material untuk memenuhi kebutuhan iklan indoor atau outdoor Anda.",
    image: "/images/large-format.png",
    features: [
      "Banners and posters",
      "Trade show displays",
      "Vehicle wraps",
      "Window graphics",
      "Weather-resistant materials for outdoor use",
      "Custom sizes available",
    ],
    featuresId: [
      "Spanduk dan poster",
      "Display pameran",
      "Wrapping kendaraan",
      "Grafis jendela",
      "Material tahan cuaca untuk penggunaan outdoor",
      "Ukuran kustom tersedia",
    ],
    pricing: {
      startingPrice: 250000,
      unit: "per square meter",
      unitId: "per meter persegi",
      packages: [
        {
          name: "Standard Banner",
          nameId: "Spanduk Standar",
          price: 250000,
          description: "Vinyl banner printing (per square meter) with standard finishing",
          descriptionId: "Cetak spanduk vinyl (per meter persegi) dengan finishing standar",
        },
        {
          name: "Premium Outdoor Banner",
          nameId: "Spanduk Outdoor Premium",
          price: 450000,
          description: "Heavy-duty outdoor banner with reinforced edges and grommets (per square meter)",
          descriptionId: "Spanduk outdoor tahan lama dengan tepi diperkuat dan lubang (per meter persegi)",
        },
        {
          name: "Vehicle Wrap",
          nameId: "Wrapping Kendaraan",
          price: 3500000,
          description: "Full vehicle wrap with premium vinyl and professional installation (small vehicle)",
          descriptionId: "Wrapping kendaraan penuh dengan vinyl premium dan pemasangan profesional (kendaraan kecil)",
        },
      ],
    },
  },
  {
    id: "packaging",
    name: "Packaging Solutions",
    nameId: "Solusi Kemasan",
    description: "Custom packaging solutions for your products",
    descriptionId: "Solusi kemasan kustom untuk produk Anda",
    longDescription:
      "Create a memorable unboxing experience with our custom packaging solutions. We offer a range of options from simple product labels to complete custom packaging designs that protect your products and enhance your brand.",
    longDescriptionId:
      "Ciptakan pengalaman unboxing yang berkesan dengan solusi kemasan kustom kami. Kami menawarkan berbagai pilihan dari label produk sederhana hingga desain kemasan kustom lengkap yang melindungi produk Anda dan meningkatkan brand Anda.",
    image: "/images/packaging.png",
    features: [
      "Custom box designs",
      "Product labels and stickers",
      "Eco-friendly packaging options",
      "Protective packaging inserts",
      "Small to large production runs",
      "Prototype development",
    ],
    featuresId: [
      "Desain kotak kustom",
      "Label dan stiker produk",
      "Pilihan kemasan ramah lingkungan",
      "Sisipan kemasan pelindung",
      "Produksi skala kecil hingga besar",
      "Pengembangan prototipe",
    ],
    pricing: {
      startingPrice: 2000000,
      unit: "per design",
      unitId: "per desain",
      packages: [
        {
          name: "Product Labels",
          nameId: "Label Produk",
          price: 500000,
          description: "Custom product labels design and printing (100 pcs)",
          descriptionId: "Desain dan cetak label produk kustom (100 pcs)",
        },
        {
          name: "Custom Box Design",
          nameId: "Desain Kotak Kustom",
          price: 2000000,
          description: "Custom box design with structural engineering and prototype",
          descriptionId: "Desain kotak kustom dengan rekayasa struktural dan prototipe",
        },
        {
          name: "Complete Packaging Solution",
          nameId: "Solusi Kemasan Lengkap",
          price: 5000000,
          description: "Full packaging design including boxes, inserts, labels, and small production run",
          descriptionId: "Desain kemasan lengkap termasuk kotak, sisipan, label, dan produksi skala kecil",
        },
      ],
    },
  },
  {
    id: "offset-printing",
    name: "Offset Printing",
    nameId: "Cetak Offset",
    description: "Traditional printing for large volume projects",
    descriptionId: "Cetak tradisional untuk proyek volume besar",
    longDescription:
      "For larger print runs, our offset printing service offers exceptional quality and cost-effectiveness. Ideal for catalogs, magazines, books, and high-volume marketing materials where consistent quality is essential.",
    longDescriptionId:
      "Untuk cetak dalam jumlah besar, layanan cetak offset kami menawarkan kualitas luar biasa dan efektivitas biaya. Ideal untuk katalog, majalah, buku, dan materi pemasaran volume tinggi di mana kualitas yang konsisten sangat penting.",
    image: "/images/offset-printing.png",
    features: [
      "High-quality reproduction",
      "Cost-effective for large quantities",
      "Consistent color matching",
      "Various paper stocks available",
      "Special finishing options",
      "Pantone color matching",
    ],
    featuresId: [
      "Reproduksi kualitas tinggi",
      "Hemat biaya untuk jumlah besar",
      "Pencocokan warna yang konsisten",
      "Berbagai stok kertas tersedia",
      "Pilihan finishing khusus",
      "Pencocokan warna Pantone",
    ],
    pricing: {
      startingPrice: 3000000,
      unit: "per project",
      unitId: "per proyek",
      packages: [
        {
          name: "Standard Offset Printing",
          nameId: "Cetak Offset Standar",
          price: 3000000,
          description: "Offset printing for medium runs (1,000-5,000 pieces) with standard paper options",
          descriptionId: "Cetak offset untuk jumlah sedang (1.000-5.000 lembar) dengan pilihan kertas standar",
        },
        {
          name: "Premium Catalog Printing",
          nameId: "Cetak Katalog Premium",
          price: 7500000,
          description: "High-quality catalog printing with premium paper and binding (1,000 copies)",
          descriptionId: "Cetak katalog kualitas tinggi dengan kertas premium dan penjilidan (1.000 eksemplar)",
        },
        {
          name: "Book Publishing Package",
          nameId: "Paket Penerbitan Buku",
          price: 15000000,
          description: "Complete book printing service including layout, printing, and binding (500 copies)",
          descriptionId: "Layanan cetak buku lengkap termasuk tata letak, pencetakan, dan penjilidan (500 eksemplar)",
        },
      ],
    },
  },
  {
    id: "wedding-stationery",
    name: "Wedding Stationery",
    nameId: "Alat Tulis Pernikahan",
    description: "Complete wedding stationery packages",
    descriptionId: "Paket alat tulis pernikahan lengkap",
    longDescription:
      "From save-the-dates to thank you cards, we offer complete wedding stationery packages to make your special day perfect. Our designers work with you to create a cohesive look for all your wedding stationery needs.",
    longDescriptionId:
      "Dari save-the-dates hingga kartu ucapan terima kasih, kami menawarkan paket alat tulis pernikahan lengkap untuk membuat hari spesial Anda sempurna. Desainer kami bekerja dengan Anda untuk menciptakan tampilan yang kohesif untuk semua kebutuhan alat tulis pernikahan Anda.",
    image: "/images/wedding-invitation.png",
    features: ["Save-the-dates", "Wedding invitations", "RSVP cards", "Programs", "Menu cards", "Thank you cards"],
    featuresId: [
      "Save-the-dates",
      "Undangan pernikahan",
      "Kartu RSVP",
      "Program acara",
      "Kartu menu",
      "Kartu ucapan terima kasih",
    ],
    pricing: {
      startingPrice: 2500000,
      unit: "per package",
      unitId: "per paket",
      packages: [
        {
          name: "Essential Wedding Package",
          nameId: "Paket Pernikahan Esensial",
          price: 2500000,
          description: "Wedding invitations and envelopes for 100 guests with standard design",
          descriptionId: "Undangan pernikahan dan amplop untuk 100 tamu dengan desain standar",
        },
        {
          name: "Premium Wedding Package",
          nameId: "Paket Pernikahan Premium",
          price: 4500000,
          description:
            "Complete wedding stationery including invitations, RSVP cards, and thank you cards for 100 guests",
          descriptionId:
            "Alat tulis pernikahan lengkap termasuk undangan, kartu RSVP, dan kartu ucapan terima kasih untuk 100 tamu",
        },
        {
          name: "Luxury Wedding Collection",
          nameId: "Koleksi Pernikahan Mewah",
          price: 8500000,
          description:
            "Luxury wedding stationery with premium materials, custom design, and all stationery items for 150 guests",
          descriptionId:
            "Alat tulis pernikahan mewah dengan bahan premium, desain kustom, dan semua item alat tulis untuk 150 tamu",
        },
      ],
    },
  },
]

// Featured products for homepage
export const featuredProducts = [
  products.find((p) => p.id === "wedding-invitation-standard"),
  products.find((p) => p.id === "business-card-standard"),
  products.find((p) => p.id === "banner-outdoor"),
].filter(Boolean) as Product[]

// Related products for product detail page
export const relatedProducts = products.slice(2, 6)

