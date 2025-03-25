"use client"

import { useLanguage } from "@/components/language-provider"

export default function TermsOfServicePage() {
  const { language } = useLanguage()

  return (
    <div className="container px-4 py-8 md:py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">{language === "id" ? "Ketentuan Layanan" : "Terms of Service"}</h1>

      <div className="prose dark:prose-invert max-w-none">
        {language === "id" ? (
          <>
            <p>Terakhir diperbarui: 1 Juni 2024</p>

            <p>
              Silakan baca Ketentuan Layanan ini dengan seksama sebelum menggunakan situs web sakinahgrafika.com yang
              dioperasikan oleh Sakinah Grafika.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-3">Ketentuan Penggunaan</h2>

            <p>
              Dengan mengakses situs web ini, Anda setuju untuk terikat oleh Ketentuan Layanan ini, semua hukum dan
              peraturan yang berlaku, dan setuju bahwa Anda bertanggung jawab untuk mematuhi hukum lokal yang berlaku.
              Jika Anda tidak setuju dengan salah satu ketentuan ini, Anda dilarang menggunakan atau mengakses situs
              ini.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-3">Pesanan dan Pembayaran</h2>

            <p>
              Saat Anda melakukan pemesanan melalui situs web kami, Anda menyatakan bahwa Anda berusia minimal 18 tahun
              dan bahwa informasi yang Anda berikan kepada kami adalah akurat dan lengkap. Kami berhak menolak pesanan
              apa pun yang Anda tempatkan dengan kami.
            </p>

            <p>
              Pembayaran harus dilakukan sesuai dengan ketentuan yang ditetapkan pada saat pemesanan. Harga yang
              ditampilkan di situs web kami adalah dalam Rupiah Indonesia (IDR) dan termasuk pajak yang berlaku.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-3">Pengiriman dan Pengembalian</h2>

            <p>
              Kami akan berusaha untuk mengirimkan pesanan Anda dalam jangka waktu yang ditentukan pada saat pemesanan.
              Namun, waktu pengiriman hanya perkiraan dan tidak dijamin.
            </p>

            <p>
              Jika Anda tidak puas dengan produk yang Anda terima, silakan hubungi kami dalam waktu 7 hari setelah
              penerimaan untuk mendiskusikan pengembalian atau penggantian. Pengembalian dana atau penggantian akan
              diberikan atas kebijaksanaan kami.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-3">Hak Kekayaan Intelektual</h2>

            <p>
              Semua konten yang termasuk dalam atau tersedia melalui situs web kami, termasuk tetapi tidak terbatas pada
              teks, grafik, logo, ikon, gambar, klip audio, unduhan digital, dan kompilasi data, adalah milik Sakinah
              Grafika atau pemberi lisensinya dan dilindungi oleh hukum hak cipta internasional.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-3">Perubahan Ketentuan</h2>

            <p>
              Kami berhak, atas kebijakan kami sendiri, untuk mengubah atau mengganti Ketentuan ini kapan saja. Jika
              revisi bersifat material, kami akan memberikan pemberitahuan setidaknya 30 hari sebelum ketentuan baru
              berlaku.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-3">Hubungi Kami</h2>

            <p>Jika Anda memiliki pertanyaan tentang Ketentuan Layanan ini, silakan hubungi kami:</p>

            <ul className="list-disc pl-6 my-3">
              <li>Melalui email: info@sakinahgrafika.com</li>
              <li>Melalui nomor telepon: +62 815 6310 4864</li>
            </ul>
          </>
        ) : (
          <>
            <p>Last updated: June 1, 2024</p>

            <p>
              Please read these Terms of Service carefully before using the sakinahgrafika.com website operated by
              Sakinah Grafika.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-3">Terms of Use</h2>

            <p>
              By accessing this website, you agree to be bound by these Terms of Service, all applicable laws and
              regulations, and agree that you are responsible for compliance with any applicable local laws. If you do
              not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-3">Orders and Payment</h2>

            <p>
              When you place an order through our website, you represent that you are at least 18 years old and that the
              information you provide to us is accurate and complete. We reserve the right to refuse any order you place
              with us.
            </p>

            <p>
              Payment must be made according to the terms set out at the time of ordering. Prices displayed on our
              website are in Indonesian Rupiah (IDR) and include applicable taxes.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-3">Shipping and Returns</h2>

            <p>
              We will endeavor to deliver your order within the timeframe specified at the time of ordering. However,
              delivery times are estimates only and are not guaranteed.
            </p>

            <p>
              If you are not satisfied with the product you receive, please contact us within 7 days of receipt to
              discuss a return or replacement. Refunds or replacements will be provided at our discretion.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-3">Intellectual Property</h2>

            <p>
              All content included in or made available through our website, including but not limited to text,
              graphics, logos, icons, images, audio clips, digital downloads, and data compilations, is the property of
              Sakinah Grafika or its licensors and is protected by international copyright laws.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-3">Changes to Terms</h2>

            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision
              is material, we will provide at least 30 days' notice prior to any new terms taking effect.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-3">Contact Us</h2>

            <p>If you have any questions about these Terms of Service, please contact us:</p>

            <ul className="list-disc pl-6 my-3">
              <li>By email: info@sakinahgrafika.com</li>
              <li>By phone number: +62 815 6310 4864</li>
            </ul>
          </>
        )}
      </div>
    </div>
  )
}

