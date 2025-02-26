'use client';

import Navbar from "./components/Navbar";


export default function SkripsiOnline() {
  return (
    <div className="bg-gray-100 text-black min-h-screen flex flex-col w-full">
      {/* Navbar */}
      <Navbar />

      {/* Konten */}
      <div className="mt-16 w-full">
        <StickySection title="Bab 1 Pendahuluan" content="Bab ini berisi latar belakang penelitian, rumusan masalah, tujuan penelitian, manfaat penelitian, dan sistematika penulisan skripsi." />
        <StickySection title="Bab 2 Kajian Pustaka" content="Bab ini berisi landasan teori dan tinjauan pustaka yang digunakan sebagai referensi dalam penelitian. Sumber yang digunakan mencakup jurnal ilmiah, buku, serta penelitian terdahulu yang relevan. Kajian pustaka bertujuan untuk memahami konsep, teori, dan temuan sebelumnya yang berhubungan dengan topik penelitian. Selain itu, bab ini juga membandingkan berbagai teori dan pendekatan yang telah dikembangkan sebelumnya. Dengan adanya kajian pustaka yang kuat, penelitian ini memiliki dasar yang jelas dan dapat mendukung argumentasi dalam pembahasan. Bab ini juga mencakup kerangka pemikiran yang menjadi dasar analisis penelitian." />
        <StickySection title="Bab 3 Metodologi Penelitian" content="Bab ini menjelaskan metode penelitian yang digunakan dalam penelitian ini. Pendekatan penelitian ditentukan berdasarkan jenis data yang dianalisis, apakah kualitatif atau kuantitatif. Teknik pengumpulan data mencakup observasi, wawancara, kuesioner, atau studi literatur. Metode analisis data disesuaikan dengan tujuan penelitian untuk mendapatkan hasil yang valid dan reliabel. Selain itu, bab ini juga membahas instrumen penelitian yang digunakan serta prosedur pelaksanaannya. Validitas dan reliabilitas data diuji untuk memastikan keakuratan hasil penelitian. Penjelasan sistematis dalam bab ini membantu pembaca memahami bagaimana penelitian dilakukan secara ilmiah." />
        <StickySection title="Bab 4 Pembahasan" content="Bab ini membahas hasil penelitian yang diperoleh berdasarkan data yang telah dikumpulkan. Analisis dilakukan dengan pendekatan teoritis dan empiris untuk memastikan kesesuaian antara temuan dengan hipotesis awal. Data yang diolah dalam bab ini mencerminkan pola, tren, serta faktor-faktor yang mempengaruhi hasil akhir. Selain itu, perbandingan dengan penelitian terdahulu juga dilakukan untuk menilai relevansi dan kebaruan penelitian. Bab ini juga menjelaskan implikasi dari hasil yang diperoleh serta kemungkinan keterbatasan penelitian yang dapat menjadi bahan evaluasi untuk penelitian selanjutnya." />
        <StickySection title="Bab 5 Penutup" content="Bab ini menyajikan kesimpulan dari penelitian yang telah dilakukan, merangkum temuan utama, serta menjawab rumusan masalah yang diajukan. Selain itu, bab ini juga memberikan saran yang dapat menjadi bahan pertimbangan bagi penelitian selanjutnya atau pengembangan lebih lanjut dalam bidang yang relevan. Kesimpulan dibuat berdasarkan hasil analisis dan pembahasan pada bab sebelumnya. Saran yang diberikan diharapkan dapat membantu akademisi, praktisi, atau pihak terkait dalam menerapkan hasil penelitian ini secara optimal. Dengan demikian, penelitian ini dapat memberikan manfaat nyata dalam bidang yang diteliti." />
      </div>
    </div>
  );
}

/* 🔥 Komponen StickySection */
function StickySection({ title, content }) {
  return (
    <div className="mb-0 w-full"> 
      <div className="sticky top-14 bg-blue-500 text-white p-4 text-lg font-bold border-b border-gray-300 w-full z-10 shadow-md">
        {title}
      </div>
      <div className="p-6 text-gray-800 text-base leading-relaxed bg-white shadow-md rounded-md mx-2 mt-2">
        {content}
      </div>
    </div>
  );
}
