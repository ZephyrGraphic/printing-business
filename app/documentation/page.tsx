"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useLanguage } from "@/components/language-provider"
import { FadeIn } from "@/components/animations/fade-in"

export default function DocumentationPage() {
  const { language } = useLanguage()
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="container px-4 py-8 md:py-12 max-w-6xl">
      <FadeIn>
        <div className="mb-8">
          <h1 className="text-3xl font-bold">{language === "id" ? "Dokumentasi Website" : "Website Documentation"}</h1>
          <p className="text-muted-foreground mt-2">
            {language === "id"
              ? "Panduan lengkap untuk menggunakan website Sakinah Grafika"
              : "Comprehensive guide for using the Sakinah Grafika website"}
          </p>
        </div>
      </FadeIn>

      <div className="grid md:grid-cols-[250px_1fr] gap-8">
        {/* Sidebar Navigation */}
        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <nav className="space-y-2">
                <button
                  className={`block p-2 rounded-md w-full text-left ${activeTab === "overview" ? "bg-muted" : "hover:bg-muted/50"}`}
                  onClick={() => setActiveTab("overview")}
                >
                  {language === "id" ? "Gambaran Umum" : "Overview"}
                </button>
                <button
                  className={`block p-2 rounded-md w-full text-left ${activeTab === "customer-guide" ? "bg-muted" : "hover:bg-muted/50"}`}
                  onClick={() => setActiveTab("customer-guide")}
                >
                  {language === "id" ? "Panduan Pelanggan" : "Customer Guide"}
                </button>
                <button
                  className={`block p-2 rounded-md w-full text-left ${activeTab === "features" ? "bg-muted" : "hover:bg-muted/50"}`}
                  onClick={() => setActiveTab("features")}
                >
                  {language === "id" ? "Fitur Website" : "Website Features"}
                </button>
                <button
                  className={`block p-2 rounded-md w-full text-left ${activeTab === "multilingual" ? "bg-muted" : "hover:bg-muted/50"}`}
                  onClick={() => setActiveTab("multilingual")}
                >
                  {language === "id" ? "Dukungan Multibahasa" : "Multilingual Support"}
                </button>
                <button
                  className={`block p-2 rounded-md w-full text-left ${activeTab === "faq" ? "bg-muted" : "hover:bg-muted/50"}`}
                  onClick={() => setActiveTab("faq")}
                >
                  {language === "id" ? "FAQ" : "FAQ"}
                </button>
              </nav>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">
                {language === "id" ? "Butuh bantuan lebih lanjut?" : "Need further assistance?"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                {language === "id"
                  ? "Hubungi tim dukungan kami untuk bantuan lebih lanjut"
                  : "Contact our support team for further assistance"}
              </p>
              <Link href="/contact" className="text-sm text-primary hover:underline">
                {language === "id" ? "Hubungi Kami" : "Contact Us"}
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-5 mb-8">
              <TabsTrigger value="overview" onClick={() => setActiveTab("overview")}>
                {language === "id" ? "Gambaran Umum" : "Overview"}
              </TabsTrigger>
              <TabsTrigger value="customer-guide" onClick={() => setActiveTab("customer-guide")}>
                {language === "id" ? "Panduan Pelanggan" : "Customer Guide"}
              </TabsTrigger>
              <TabsTrigger value="features" onClick={() => setActiveTab("features")}>
                {language === "id" ? "Fitur Website" : "Website Features"}
              </TabsTrigger>
              <TabsTrigger value="multilingual" onClick={() => setActiveTab("multilingual")}>
                {language === "id" ? "Multibahasa" : "Multilingual"}
              </TabsTrigger>
              <TabsTrigger value="faq" onClick={() => setActiveTab("faq")}>
                {language === "id" ? "FAQ" : "FAQ"}
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>{language === "id" ? "Tentang Sakinah Grafika" : "About Sakinah Grafika"}</CardTitle>
                  <CardDescription>
                    {language === "id"
                      ? "Penyedia layanan cetak dan desain profesional"
                      : "Professional printing and design service provider"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    {language === "id"
                      ? "Sakinah Grafika adalah penyedia layanan cetak dan desain profesional yang berlokasi di Jakarta, Indonesia. Kami menawarkan berbagai layanan cetak dan desain untuk kebutuhan bisnis dan pribadi Anda."
                      : "Sakinah Grafika is a professional printing and design service provider located in Jakarta, Indonesia. We offer a wide range of printing and design services for your business and personal needs."}
                  </p>
                  <div className="aspect-video relative rounded-lg overflow-hidden">
                    <Image src="/images/hero-image.png" alt="Sakinah Grafika" fill className="object-cover" />
                  </div>
                  <h3 className="text-lg font-medium mt-4">{language === "id" ? "Visi & Misi" : "Vision & Mission"}</h3>
                  <p>
                    {language === "id"
                      ? "Visi kami adalah menjadi penyedia layanan cetak dan desain terkemuka di Indonesia, dikenal karena kualitas, inovasi, dan layanan pelanggan yang luar biasa. Misi kami adalah menyediakan solusi cetak dan desain berkualitas tinggi yang membantu klien kami berkomunikasi secara efektif dan meningkatkan merek mereka."
                      : "Our vision is to be a leading printing and design service provider in Indonesia, known for quality, innovation, and exceptional customer service. Our mission is to provide high-quality printing and design solutions that help our clients communicate effectively and enhance their brands."}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{language === "id" ? "Layanan Kami" : "Our Services"}</CardTitle>
                  <CardDescription>
                    {language === "id"
                      ? "Berbagai layanan cetak dan desain untuk kebutuhan Anda"
                      : "Various printing and design services for your needs"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h3 className="font-medium">{language === "id" ? "Layanan Cetak" : "Printing Services"}</h3>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>{language === "id" ? "Cetak Digital" : "Digital Printing"}</li>
                        <li>{language === "id" ? "Cetak Offset" : "Offset Printing"}</li>
                        <li>{language === "id" ? "Cetak Format Besar" : "Large Format Printing"}</li>
                        <li>{language === "id" ? "Kartu Nama" : "Business Cards"}</li>
                        <li>{language === "id" ? "Brosur & Flyer" : "Brochures & Flyers"}</li>
                        <li>{language === "id" ? "Spanduk & Papan Nama" : "Banners & Signage"}</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium">{language === "id" ? "Layanan Desain" : "Design Services"}</h3>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>{language === "id" ? "Desain Grafis" : "Graphic Design"}</li>
                        <li>{language === "id" ? "Desain Logo" : "Logo Design"}</li>
                        <li>{language === "id" ? "Desain Kemasan" : "Packaging Design"}</li>
                        <li>{language === "id" ? "Desain Materi Pemasaran" : "Marketing Materials Design"}</li>
                        <li>{language === "id" ? "Desain Undangan Pernikahan" : "Wedding Invitation Design"}</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    {language === "id"
                      ? "Untuk informasi lebih lanjut tentang layanan kami, silakan kunjungi halaman Layanan."
                      : "For more information about our services, please visit the Services page."}
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Customer Guide Tab */}
            <TabsContent value="customer-guide" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>
                    {language === "id" ? "Cara Menjelajahi Website" : "How to Navigate the Website"}
                  </CardTitle>
                  <CardDescription>
                    {language === "id"
                      ? "Panduan untuk menjelajahi website Sakinah Grafika"
                      : "Guide to navigating the Sakinah Grafika website"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-medium">{language === "id" ? "Halaman Beranda" : "Home Page"}</h3>
                      <p className="text-sm text-muted-foreground">
                        {language === "id"
                          ? "Halaman beranda menampilkan gambaran umum tentang layanan kami, produk unggulan, dan informasi tentang mengapa memilih kami. Anda dapat mengakses halaman lain melalui menu navigasi di bagian atas halaman."
                          : "The home page displays an overview of our services, featured products, and information about why choose us. You can access other pages through the navigation menu at the top of the page."}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium">{language === "id" ? "Halaman Produk" : "Products Page"}</h3>
                      <p className="text-sm text-muted-foreground">
                        {language === "id"
                          ? "Halaman produk menampilkan semua produk yang kami tawarkan. Anda dapat memfilter produk berdasarkan kategori dan rentang harga. Klik pada produk untuk melihat detail lebih lanjut."
                          : "The products page displays all products we offer. You can filter products by category and price range. Click on a product to see more details."}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium">{language === "id" ? "Halaman Layanan" : "Services Page"}</h3>
                      <p className="text-sm text-muted-foreground">
                        {language === "id"
                          ? "Halaman layanan menampilkan semua layanan yang kami tawarkan. Klik pada layanan untuk melihat detail lebih lanjut dan paket harga."
                          : "The services page displays all services we offer. Click on a service to see more details and pricing packages."}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium">{language === "id" ? "Halaman Kontak" : "Contact Page"}</h3>
                      <p className="text-sm text-muted-foreground">
                        {language === "id"
                          ? "Halaman kontak berisi formulir kontak dan informasi kontak kami. Anda dapat mengirim pesan kepada kami melalui formulir kontak atau menghubungi kami langsung melalui telepon atau email."
                          : "The contact page contains our contact form and contact information. You can send us a message through the contact form or contact us directly via phone or email."}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{language === "id" ? "Cara Memesan" : "How to Order"}</CardTitle>
                  <CardDescription>
                    {language === "id"
                      ? "Panduan langkah demi langkah untuk memesan produk atau layanan"
                      : "Step-by-step guide to ordering products or services"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border bg-muted">
                        <span className="text-sm">1</span>
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-medium">
                          {language === "id" ? "Pilih Produk atau Layanan" : "Choose a Product or Service"}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {language === "id"
                            ? "Jelajahi produk atau layanan kami dan pilih yang sesuai dengan kebutuhan Anda."
                            : "Browse our products or services and select the one that suits your needs."}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border bg-muted">
                        <span className="text-sm">2</span>
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-medium">
                          {language === "id" ? "Pilih Opsi dan Jumlah" : "Select Options and Quantity"}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {language === "id"
                            ? "Pilih opsi yang tersedia (seperti ukuran, kertas, finishing) dan tentukan jumlah yang Anda butuhkan."
                            : "Select available options (such as size, paper, finishing) and specify the quantity you need."}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border bg-muted">
                        <span className="text-sm">3</span>
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-medium">
                          {language === "id" ? "Pesan via WhatsApp" : "Order via WhatsApp"}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {language === "id"
                            ? "Klik tombol 'Pesan via WhatsApp' untuk mengirim detail pesanan Anda kepada kami melalui WhatsApp."
                            : "Click the 'Order via WhatsApp' button to send your order details to us via WhatsApp."}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border bg-muted">
                        <span className="text-sm">4</span>
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-medium">
                          {language === "id" ? "Konfirmasi dan Pembayaran" : "Confirmation and Payment"}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {language === "id"
                            ? "Tim kami akan menghubungi Anda untuk mengonfirmasi pesanan dan memberikan instruksi pembayaran."
                            : "Our team will contact you to confirm your order and provide payment instructions."}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border bg-muted">
                        <span className="text-sm">5</span>
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-medium">
                          {language === "id" ? "Produksi dan Pengiriman" : "Production and Delivery"}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {language === "id"
                            ? "Setelah pembayaran dikonfirmasi, kami akan memproses pesanan Anda dan mengirimkannya sesuai dengan waktu produksi yang ditentukan."
                            : "After payment is confirmed, we will process your order and deliver it according to the specified production time."}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Features Tab */}
            <TabsContent value="features" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>{language === "id" ? "Fitur Website" : "Website Features"}</CardTitle>
                  <CardDescription>
                    {language === "id"
                      ? "Fitur-fitur utama website Sakinah Grafika"
                      : "Key features of the Sakinah Grafika website"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <h3 className="font-medium">{language === "id" ? "Katalog Produk" : "Product Catalog"}</h3>
                      <p className="text-sm text-muted-foreground">
                        {language === "id"
                          ? "Jelajahi berbagai produk cetak kami yang diorganisir berdasarkan kategori. Setiap produk memiliki deskripsi detail, opsi, dan harga."
                          : "Browse our various print products organized by categories. Each product has detailed descriptions, options, and pricing."}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium">{language === "id" ? "Daftar Layanan" : "Services Listing"}</h3>
                      <p className="text-sm text-muted-foreground">
                        {language === "id"
                          ? "Lihat semua layanan cetak dan desain yang kami tawarkan, lengkap dengan deskripsi, fitur, dan paket harga."
                          : "View all printing and design services we offer, complete with descriptions, features, and pricing packages."}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium">
                        {language === "id" ? "Pemesanan via WhatsApp" : "WhatsApp Ordering"}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {language === "id"
                          ? "Pesan produk atau layanan dengan mudah melalui WhatsApp. Sistem kami akan secara otomatis menyusun pesan dengan detail pesanan Anda."
                          : "Order products or services easily via WhatsApp. Our system will automatically compose a message with your order details."}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium">
                        {language === "id" ? "Dukungan Multibahasa" : "Multilingual Support"}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {language === "id"
                          ? "Website tersedia dalam bahasa Indonesia dan Inggris. Anda dapat beralih bahasa dengan mudah menggunakan tombol bahasa di header."
                          : "The website is available in Indonesian and English. You can switch languages easily using the language toggle in the header."}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium">{language === "id" ? "Mode Gelap/Terang" : "Dark/Light Mode"}</h3>
                      <p className="text-sm text-muted-foreground">
                        {language === "id"
                          ? "Pilih antara mode gelap dan terang sesuai preferensi Anda untuk pengalaman browsing yang nyaman."
                          : "Choose between dark and light modes according to your preference for a comfortable browsing experience."}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium">{language === "id" ? "Formulir Kontak" : "Contact Form"}</h3>
                      <p className="text-sm text-muted-foreground">
                        {language === "id"
                          ? "Hubungi kami dengan mudah melalui formulir kontak yang akan mengirimkan pesan Anda melalui WhatsApp."
                          : "Contact us easily through the contact form that will send your message via WhatsApp."}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium">{language === "id" ? "Desain Responsif" : "Responsive Design"}</h3>
                      <p className="text-sm text-muted-foreground">
                        {language === "id"
                          ? "Website dioptimalkan untuk semua perangkat, termasuk desktop, tablet, dan ponsel."
                          : "The website is optimized for all devices, including desktop, tablet, and mobile."}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium">
                        {language === "id" ? "Animasi Interaktif" : "Interactive Animations"}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {language === "id"
                          ? "Nikmati pengalaman browsing yang menarik dengan animasi halus dan interaktif di seluruh website."
                          : "Enjoy an engaging browsing experience with smooth and interactive animations throughout the website."}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Multilingual Tab */}
            <TabsContent value="multilingual" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>{language === "id" ? "Dukungan Multibahasa" : "Multilingual Support"}</CardTitle>
                  <CardDescription>
                    {language === "id"
                      ? "Cara menggunakan fitur multibahasa website"
                      : "How to use the website's multilingual features"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-medium">{language === "id" ? "Beralih Bahasa" : "Switching Languages"}</h3>
                      <p className="text-sm text-muted-foreground">
                        {language === "id"
                          ? "Anda dapat beralih antara bahasa Indonesia dan Inggris dengan mengklik tombol bahasa (ikon globe) di header website. Preferensi bahasa Anda akan disimpan untuk kunjungan berikutnya."
                          : "You can switch between Indonesian and English by clicking the language toggle (globe icon) in the website header. Your language preference will be saved for future visits."}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium">
                        {language === "id" ? "Konten yang Diterjemahkan" : "Translated Content"}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {language === "id"
                          ? "Semua konten website, termasuk produk, layanan, deskripsi, dan informasi lainnya tersedia dalam bahasa Indonesia dan Inggris. Ini memastikan pengalaman yang lancar bagi pengguna dari kedua bahasa."
                          : "All website content, including products, services, descriptions, and other information is available in both Indonesian and English. This ensures a seamless experience for users of both languages."}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium">
                        {language === "id" ? "Pemesanan dalam Bahasa Pilihan" : "Ordering in Your Preferred Language"}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {language === "id"
                          ? "Saat Anda memesan produk atau layanan, pesan WhatsApp akan dibuat dalam bahasa yang saat ini Anda gunakan di website. Ini memastikan komunikasi yang jelas dengan tim kami."
                          : "When you order products or services, the WhatsApp message will be created in the language you are currently using on the website. This ensures clear communication with our team."}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* FAQ Tab */}
            <TabsContent value="faq" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>
                    {language === "id" ? "Pertanyaan yang Sering Diajukan" : "Frequently Asked Questions"}
                  </CardTitle>
                  <CardDescription>
                    {language === "id"
                      ? "Jawaban untuk pertanyaan umum tentang layanan dan website kami"
                      : "Answers to common questions about our services and website"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        {language === "id"
                          ? "Bagaimana cara memesan produk atau layanan?"
                          : "How do I order products or services?"}
                      </AccordionTrigger>
                      <AccordionContent>
                        {language === "id"
                          ? "Untuk memesan produk atau layanan, pilih produk atau layanan yang Anda inginkan, pilih opsi yang tersedia, dan klik tombol 'Pesan via WhatsApp'. Ini akan membuka WhatsApp dengan pesan yang sudah diisi dengan detail pesanan Anda. Tim kami akan menghubungi Anda untuk mengonfirmasi pesanan dan memberikan instruksi pembayaran."
                          : "To order products or services, select the product or service you want, choose the available options, and click the 'Order via WhatsApp' button. This will open WhatsApp with a pre-filled message containing your order details. Our team will contact you to confirm your order and provide payment instructions."}
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>
                        {language === "id"
                          ? "Metode pembayaran apa yang tersedia?"
                          : "What payment methods are available?"}
                      </AccordionTrigger>
                      <AccordionContent>
                        {language === "id"
                          ? "Kami menerima pembayaran melalui transfer bank, e-wallet (seperti GoPay, OVO, Dana), dan kartu kredit/debit. Detail pembayaran akan diberikan setelah pesanan Anda dikonfirmasi."
                          : "We accept payments via bank transfer, e-wallets (such as GoPay, OVO, Dana), and credit/debit cards. Payment details will be provided after your order is confirmed."}
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>
                        {language === "id"
                          ? "Berapa lama waktu produksi untuk pesanan saya?"
                          : "How long is the production time for my order?"}
                      </AccordionTrigger>
                      <AccordionContent>
                        {language === "id"
                          ? "Waktu produksi bervariasi tergantung pada jenis produk atau layanan, jumlah, dan kompleksitas. Waktu produksi untuk setiap produk ditampilkan di halaman detail produk. Secara umum, waktu produksi berkisar antara 2-10 hari kerja."
                          : "Production time varies depending on the type of product or service, quantity, and complexity. The production time for each product is displayed on the product detail page. Generally, production time ranges from 2-10 business days."}
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>
                        {language === "id"
                          ? "Apakah Anda menawarkan layanan pengiriman?"
                          : "Do you offer delivery services?"}
                      </AccordionTrigger>
                      <AccordionContent>
                        {language === "id"
                          ? "Ya, kami menawarkan layanan pengiriman ke seluruh Indonesia. Biaya pengiriman dihitung berdasarkan berat pesanan dan lokasi pengiriman. Kami juga menawarkan opsi pengambilan gratis di toko kami."
                          : "Yes, we offer delivery services throughout Indonesia. Shipping costs are calculated based on the weight of the order and the delivery location. We also offer a free pickup option at our store."}
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                      <AccordionTrigger>
                        {language === "id"
                          ? "Bagaimana jika saya tidak puas dengan pesanan saya?"
                          : "What if I'm not satisfied with my order?"}
                      </AccordionTrigger>
                      <AccordionContent>
                        {language === "id"
                          ? "Kepuasan pelanggan adalah prioritas kami. Jika Anda tidak puas dengan pesanan Anda, silakan hubungi kami dalam waktu 7 hari setelah menerima pesanan. Kami akan bekerja sama dengan Anda untuk menyelesaikan masalah, baik melalui penggantian atau pengembalian dana."
                          : "Customer satisfaction is our priority. If you are not satisfied with your order, please contact us within 7 days of receiving your order. We will work with you to resolve the issue, either through replacement or refund."}
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                      <AccordionTrigger>
                        {language === "id" ? "Apakah Anda menawarkan desain kustom?" : "Do you offer custom designs?"}
                      </AccordionTrigger>
                      <AccordionContent>
                        {language === "id"
                          ? "Ya, kami menawarkan layanan desain kustom untuk semua produk kami. Tim desainer profesional kami akan bekerja sama dengan Anda untuk membuat desain yang sesuai dengan kebutuhan dan preferensi Anda. Anda dapat memesan layanan desain kustom melalui halaman Layanan."
                          : "Yes, we offer custom design services for all our products. Our team of professional designers will work with you to create designs that match your needs and preferences. You can order custom design services through the Services page."}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

