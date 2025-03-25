"use client"

import { useLanguage } from "@/components/language-provider"

export default function PrivacyPolicyPage() {
  const { language } = useLanguage()

  return (
    <div className="container px-4 py-8 md:py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">{language === "id" ? "Kebijakan Privasi" : "Privacy Policy"}</h1>

      <div className="prose dark:prose-invert max-w-none">
        {language === "id" ? (
          <>
            <p>Terakhir diperbarui: 1 Juni 2024</p>

            <p>
              Sakinah Grafika ("kami", "kita", atau "milik kami") mengoperasikan situs web sakinahgrafika.com
              (selanjutnya disebut sebagai "Layanan").
            </p>

            <p>
              Halaman ini memberi tahu Anda tentang kebijakan kami mengenai pengumpulan, penggunaan, dan pengungkapan
              data pribadi saat Anda menggunakan Layanan kami dan pilihan yang telah Anda kaitkan dengan data tersebut.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-3">Pengumpulan dan Penggunaan Informasi</h2>

            <p>
              Kami mengumpulkan beberapa jenis informasi untuk berbagai keperluan untuk menyediakan dan meningkatkan
              Layanan kami kepada Anda.
            </p>

            <h3 className="text-lg font-bold mt-4 mb-2">Jenis Data yang Dikumpulkan</h3>

            <h4 className="text-md font-bold mt-3 mb-1">Data Pribadi</h4>

            <p>
              Saat menggunakan Layanan kami, kami mungkin meminta Anda untuk memberikan kami informasi pengenal pribadi
              tertentu yang dapat digunakan untuk menghubungi atau mengidentifikasi Anda ("Data Pribadi"). Informasi
              pengenal pribadi dapat mencakup, tetapi tidak terbatas pada:
            </p>

            <ul className="list-disc pl-6 my-3">
              <li>Alamat email</li>
              <li>Nama depan dan nama belakang</li>
              <li>Nomor telepon</li>
              <li>Alamat, Negara, Provinsi, Kode Pos, Kota</li>
              <li>Cookies dan Data Penggunaan</li>
            </ul>

            <h2 className="text-xl font-bold mt-6 mb-3">Keamanan Data</h2>

            <p>
              Keamanan data Anda penting bagi kami, tetapi ingat bahwa tidak ada metode transmisi melalui Internet, atau
              metode penyimpanan elektronik yang 100% aman. Meskipun kami berusaha menggunakan cara yang dapat diterima
              secara komersial untuk melindungi Data Pribadi Anda, kami tidak dapat menjamin keamanan mutlaknya.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-3">Perubahan Kebijakan Privasi Ini</h2>

            <p>
              Kami dapat memperbarui Kebijakan Privasi kami dari waktu ke waktu. Kami akan memberi tahu Anda tentang
              perubahan apa pun dengan memposting Kebijakan Privasi baru di halaman ini.
            </p>

            <p>
              Anda disarankan untuk meninjau Kebijakan Privasi ini secara berkala untuk setiap perubahan. Perubahan pada
              Kebijakan Privasi ini berlaku ketika diposting di halaman ini.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-3">Hubungi Kami</h2>

            <p>Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, silakan hubungi kami:</p>

            <ul className="list-disc pl-6 my-3">
              <li>Melalui email: info@sakinahgrafika.com</li>
              <li>Melalui nomor telepon: +62 815 6310 4864</li>
            </ul>
          </>
        ) : (
          <>
            <p>Last updated: June 1, 2024</p>

            <p>
              Sakinah Grafika ("us", "we", or "our") operates the sakinahgrafika.com website (hereinafter referred to as
              the "Service").
            </p>

            <p>
              This page informs you of our policies regarding the collection, use, and disclosure of personal data when
              you use our Service and the choices you have associated with that data.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-3">Information Collection and Use</h2>

            <p>
              We collect several different types of information for various purposes to provide and improve our Service
              to you.
            </p>

            <h3 className="text-lg font-bold mt-4 mb-2">Types of Data Collected</h3>

            <h4 className="text-md font-bold mt-3 mb-1">Personal Data</h4>

            <p>
              While using our Service, we may ask you to provide us with certain personally identifiable information
              that can be used to contact or identify you ("Personal Data"). Personally identifiable information may
              include, but is not limited to:
            </p>

            <ul className="list-disc pl-6 my-3">
              <li>Email address</li>
              <li>First name and last name</li>
              <li>Phone number</li>
              <li>Address, Country, State, Province, ZIP/Postal code, City</li>
              <li>Cookies and Usage Data</li>
            </ul>

            <h2 className="text-xl font-bold mt-6 mb-3">Data Security</h2>

            <p>
              The security of your data is important to us but remember that no method of transmission over the Internet
              or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to
              protect your Personal Data, we cannot guarantee its absolute security.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-3">Changes to This Privacy Policy</h2>

            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page.
            </p>

            <p>
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy
              are effective when they are posted on this page.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-3">Contact Us</h2>

            <p>If you have any questions about this Privacy Policy, please contact us:</p>

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

