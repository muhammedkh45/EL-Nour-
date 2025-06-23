import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

const translations = {
  en: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    products: 'Products',
    gallery: 'Gallery',
    contact: 'Contact',
    company: 'EL-Nour Paints',
    aboutTitle: 'About Us',
    aboutText1: 'El-Nour (El-Jundy Group) has a rich history in the painting industry, specializing in metallic paints, primers, and lacquer finishes. Our mission is to deliver exceptional quality and innovative solutions for every client, with a commitment to sustainability and customer satisfaction.',
    aboutText2: 'We value craftsmanship, integrity, and long-term relationships with our clients and partners.',
    servicesTitle: 'Our Services',
    metallic: 'Metallic Coating',
    metallicDesc: 'Advanced metallic finishes for industrial and decorative applications.',
    primers: 'Primers',
    primersDesc: 'High-performance primers for superior adhesion and protection.',
    lacquer: 'Lacquer',
    lacquerDesc: 'Glossy, durable lacquer finishes for a premium look and feel.',
    productsTitle: 'Our Products',
    primerA: 'Primer Type A',
    primerADesc: 'A versatile primer for metal surfaces, ensuring long-lasting protection and adhesion.',
    lacquerB: 'Lacquer Type B',
    lacquerBDesc: 'A high-gloss, durable lacquer for a premium metallic finish.',
    galleryTitle: 'Gallery',
    contactTitle: 'Contact Us',
    contactDesc: 'For inquiries, quotes, or more information, reach us at:',
    facebook: 'Facebook',
    instagram: 'Instagram',
    linkedin: 'LinkedIn',
    getQuote: 'Get a Quote',
    viewServices: 'View Services',
    heroTitle: 'Welcome to El-Nour',
    heroDesc: 'Specialists in metallic paints, primer, and lacquer (lakai). Professional finishes for every surface.',
    copyright: 'All rights reserved.'
  },
  ar: {
    home: 'الرئيسية',
    about: 'من نحن',
    services: 'الخدمات',
    products: 'المنتجات',
    gallery: 'المعرض',
    contact: 'اتصل بنا',
    company: 'النور للدهانات',
    aboutTitle: 'من نحن',
    aboutText1: 'النور (مجموعة الجندي) لديها تاريخ عريق في صناعة الدهانات، متخصصة في الدهانات المعدنية والبرايمر واللكر. مهمتنا تقديم جودة استثنائية وحلول مبتكرة لكل عميل، مع الالتزام بالاستدامة ورضا العملاء.',
    aboutText2: 'نحن نقدر الحرفية والنزاهة والعلاقات طويلة الأمد مع عملائنا وشركائنا.',
    servicesTitle: 'خدماتنا',
    metallic: 'الطلاء المعدني',
    metallicDesc: 'تشطيبات معدنية متقدمة للتطبيقات الصناعية والزخرفية.',
    primers: 'البرايمر',
    primersDesc: 'برايمر عالي الأداء لضمان الالتصاق والحماية.',
    lacquer: 'اللاكيهات',
    lacquerDesc: 'تشطيبات لكر لامعة ومتينة لمظهر فاخر.',
    productsTitle: 'منتجاتنا',
    primerA: 'برايمر نوع A',
    primerADesc: 'برايمر متعدد الاستخدامات للأسطح المعدنية لضمان حماية والتصاق طويل الأمد.',
    lacquerB: 'لاكيه نوع B',
    lacquerBDesc: 'لاكيه عالي اللمعان ومتين لتشطيب معدني فاخر.',
    galleryTitle: 'المعرض',
    contactTitle: 'اتصل بنا',
    contactDesc: 'للاستفسارات أو عروض الأسعار أو مزيد من المعلومات، تواصل معنا عبر:',
    facebook: ' فيسبوك',
    instagram: 'انستجرام',
    linkedin: 'لينكدإن',
    getQuote: 'احصل على عرض سعر',
    viewServices: 'عرض الخدمات',
    heroTitle: 'مرحبًا بكم في النور',
    heroDesc: 'متخصصون في الدهانات المعدنية والبرايمر واللاكيهات. تشطيبات احترافية لكل سطح.',
    copyright: 'جميع الحقوق محفوظة.'
  }
};

function Navbar({ lang, setLang }: { lang: 'en' | 'ar', setLang: (l: 'en' | 'ar') => void }) {
  return (
    <nav className="flex items-center justify-between px-6" style={{ height: '60px' }}>
      <div className="flex flex-row items-center gap-2">
        <img src="/Logo.png" alt="EL-NOUR" className="navbar-logo" />
        {/* <span className="text-yellow-400 font-bold text-xl">{translations[lang].company}</span> */}
      </div>
      <div className={`flex flex-row items-center ${lang === 'ar' ? 'gap-6' : 'gap-4'}`}> 
        <Link to="/" className="hover:text-yellow-400 transition">{translations[lang].home}</Link>
        <Link to="/about" className="hover:text-yellow-400 transition">{translations[lang].about}</Link>
        <Link to="/services" className="hover:text-yellow-400 transition">{translations[lang].services}</Link>
        <Link to="/products" className="hover:text-yellow-400 transition">{translations[lang].products}</Link>
        <Link to="/gallery" className="hover:text-yellow-400 transition">{translations[lang].gallery}</Link>
        <Link to="/contact" className="hover:text-yellow-400 transition">{translations[lang].contact}</Link>
        <button
          className="ml-4 px-3 py-1 rounded bg-yellow-400 text-gray-900 font-semibold hover:bg-yellow-300 transition"
          onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
        >
          {lang === 'en' ? 'AR' : 'EN'}
        </button>
      </div>
    </nav>
  );
}

function Footer({ lang }: { lang: 'en' | 'ar' }) {
  return (
    <footer className="bg-gray-900 bg-opacity-90 text-gray-300 py-6 mt-12 text-center text-sm">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto px-4 gap-2 md:gap-0">
        <div className="mb-2 md:mb-0">&copy; {new Date().getFullYear()} {translations[lang].company} .{translations[lang].copyright}</div>
        <div className={`mb-2 md:mb-0 flex ${lang === 'ar' ? 'flex-row-reverse gap-4' : 'space-x-4'}`.trim()}>
          <a href="#" className="hover:text-yellow-400 transition">{translations[lang].facebook}</a>
          <a href="#" className="hover:text-yellow-400 transition">{translations[lang].instagram}</a>
          <a href="#" className="hover:text-yellow-400 transition">{translations[lang].linkedin}</a>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-4 text-yellow-300 text-lg" dir="ltr">
          <a href="tel:+201027625357" className="hover:underline">+20 102 762 5357</a>
          <a href="tel:+201223313905" className="hover:underline">+20 122 331 3905</a>
          <a href="tel:+201095488613" className="hover:underline">+20 109 548 8613</a>
        </div>
      </div>
    </footer>
  );
}

function Home({ lang }: { lang: 'en' | 'ar' }) {
  return (
    <main className="p-8 flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-yellow-300 drop-shadow-lg">{translations[lang].heroTitle}</h1>
      <p className="text-lg md:text-2xl max-w-2xl text-center mb-8 text-gray-200">{translations[lang].heroDesc}</p>
      <div className={`flex ${lang === 'ar' ? 'gap-6' : 'gap-4'}`}>
        <Link to="/contact" className="bg-yellow-400 text-gray-900 font-semibold px-6 py-2 rounded shadow hover:bg-yellow-300 transition">{translations[lang].getQuote}</Link>
        <Link to="/services" className="bg-transparent border border-yellow-400 text-yellow-400 font-semibold px-6 py-2 rounded hover:bg-yellow-400 hover:text-gray-900 transition">{translations[lang].viewServices}</Link>
      </div>
    </main>
  );
}

function About({ lang }: { lang: 'en' | 'ar' }) {
  return (
    <section className="max-w-3xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-4 text-yellow-300">{translations[lang].aboutTitle}</h2>
      <p className="text-lg text-gray-200 mb-2">{translations[lang].aboutText1}</p>
      <p className="text-gray-400">{translations[lang].aboutText2}</p>
    </section>
  );
}

function Services({ lang }: { lang: 'en' | 'ar' }) {
  return (
    <section className="max-w-5xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-4 text-yellow-300">{translations[lang].servicesTitle}</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-gray-800 rounded-lg p-6 shadow hover:scale-105 transition">
          <div className="mb-2 text-yellow-400">[Icon]</div>
          <h3 className="font-semibold text-lg mb-1">{translations[lang].metallic}</h3>
          <p className="text-gray-300">{translations[lang].metallicDesc}</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 shadow hover:scale-105 transition">
          <div className="mb-2 text-yellow-400">[Icon]</div>
          <h3 className="font-semibold text-lg mb-1">{translations[lang].primers}</h3>
          <p className="text-gray-300">{translations[lang].primersDesc}</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 shadow hover:scale-105 transition">
          <div className="mb-2 text-yellow-400">[Icon]</div>
          <h3 className="font-semibold text-lg mb-1">{translations[lang].lacquer}</h3>
          <p className="text-gray-300">{translations[lang].lacquerDesc}</p>
        </div>
      </div>
    </section>
  );
}

function Products({ lang }: { lang: 'en' | 'ar' }) {
  return (
    <section className="max-w-5xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-4 text-yellow-300">{translations[lang].productsTitle}</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-800 rounded-lg p-6 shadow flex flex-col items-center">
          <div className="w-24 h-24 bg-gradient-to-br from-yellow-300 to-gray-400 rounded-full mb-4" />
          <h3 className="font-semibold text-lg mb-1">{translations[lang].primerA}</h3>
          <p className="text-gray-300 text-center">{translations[lang].primerADesc}</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 shadow flex flex-col items-center">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-900 to-gray-400 rounded-full mb-4" />
          <h3 className="font-semibold text-lg mb-1">{translations[lang].lacquerB}</h3>
          <p className="text-gray-300 text-center">{translations[lang].lacquerBDesc}</p>
        </div>
      </div>
    </section>
  );
}

function Gallery({ lang }: { lang: 'en' | 'ar' }) {
  return (
    <section className="max-w-5xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-4 text-yellow-300">{translations[lang].galleryTitle}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1,2,3,4,5,6,7,8].map((i) => (
          <div key={i} className="bg-gray-700 aspect-square rounded-lg flex items-center justify-center text-gray-400">Image {i}</div>
        ))}
      </div>
    </section>
  );
}

function Contact({ lang }: { lang: 'en' | 'ar' }) {
  return (
    <section className="max-w-3xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-4 text-yellow-300">{translations[lang].contactTitle}</h2>
      <div className="flex flex-col items-center gap-4 bg-gray-800 rounded-lg p-6 shadow">
        <div className="text-lg text-gray-200 mb-2">{translations[lang].contactDesc}</div>
        <div className="flex flex-col md:flex-row md:items-center gap-4 text-yellow-300 text-lg" dir="ltr">
          <a href="tel:+201027625357" className="hover:underline">+20 102 762 5357</a>
          <a href="tel:+201223313905" className="hover:underline">+20 122 331 3905</a>
          <a href="tel:+201095488613" className="hover:underline">+20 109 548 8613</a>
        </div>
        <div className={`flex mt-4 ${lang === 'ar' ? 'flex-row-reverse gap-4' : 'space-x-6'} `}>
          <a href="#" className="hover:text-yellow-400 transition">{translations[lang].facebook}</a>
          <a href="#" className="hover:text-yellow-400 transition">{translations[lang].instagram}</a>
          <a href="#" className="hover:text-yellow-400 transition">{translations[lang].linkedin}</a>
        </div>
      </div>
    </section>
  );
}

function App() {
  const [lang, setLang] = useState<'en' | 'ar'>('en');
  return (
    <div className={`min-h-screen flex flex-col bg-gradient-to-br from-blue-900 via-gray-900 to-yellow-600 text-white font-sans ${lang === 'ar' ? 'text-right' : ''}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <Navbar lang={lang} setLang={setLang} />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home lang={lang} />} />
          <Route path="/about" element={<About lang={lang} />} />
          <Route path="/services" element={<Services lang={lang} />} />
          <Route path="/products" element={<Products lang={lang} />} />
          <Route path="/gallery" element={<Gallery lang={lang} />} />
          <Route path="/contact" element={<Contact lang={lang} />} />
        </Routes>
      </div>
      <Footer lang={lang} />
    </div>
  );
}

export default App;
