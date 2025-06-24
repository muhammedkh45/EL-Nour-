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
    aboutText1: 'El-Nour Paints has a solid history in the manufacturing of specialized coatings for metal structures, road marking paints, curb paints, flexographic printing inks, and all types of paint thinners, in addition to various ink solvents. We are committed to delivering the highest standards of quality and innovative solutions that meet the needs of every client, with a continuous focus on sustainability and customer satisfaction.',
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
    heroTitle: 'Welcome to EL-Nour',
    heroDesc: 'Specialists in metallic paints, primers, and metallic lacquers. Professional finishes for every surface and every client.',
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
    aboutText1: 'تتمتع شركة النور للدهانات بتاريخ راسخ في مجال تصنيع الدهانات المتخصصة للمنشآت المعدنية، ودهانات تخطيط الطرق، ودهانات البلدورات، وصناعة أحبار الطباعة، وجميع أنواع الثنر الخاصة بالبويات، بالإضافة إلى كافة مذيبات الأحبار. نلتزم بتقديم أعلى مستويات الجودة والحلول المبتكرة التي تلبي احتياجات كل عميل، مع الحرص الدائم على الاستدامة ورضا العملاء.',
    aboutText2: 'نحن نقدر الحرفية والنزاهة والعلاقات طويلة الأمد مع عملائنا وشركائنا.',
    servicesTitle: 'خدماتنا',
    metallic: 'الطلاء المعدني',
    metallicDesc: 'تشطيبات معدنية متقدمة للتطبيقات الصناعية والزخرفية.',
    primers: 'البرايمر',
    primersDesc: 'برايمر عالي الأداء لضمان الالتصاق والحماية.',
    lacquer: 'اللاكيهات',
    lacquerDesc: 'تشطيبات لاكيهات لامعة ومتينة لمظهر فاخر.',
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
    heroDesc: ' متخصصون في الدهانات المعدنية والبرايمر واللاكيهات المعدنية. تشطيبات احترافية لكل سطح و كل عميل.',
    copyright: 'جميع الحقوق محفوظة.'
  }
};

function Navbar({ lang, setLang }: { lang: 'en' | 'ar', setLang: (l: 'en' | 'ar') => void }) {
  return (
    <nav className="flex items-center justify-between px-6" style={{ height: '60px' }}>
      <div className="flex flex-row items-center gap-2">
        <img src="/Logo.png" alt="EL-NOUR" className="navbar-logo" />
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
          <a href="https://www.facebook.com/elnourpaints" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">{translations[lang].facebook}</a>
          <a href="https://www.instagram.com/elnour.paints" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">{translations[lang].instagram}</a>
          <a href="https://www.linkedin.com/company/elnourpaints" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">{translations[lang].linkedin}</a>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-4 text-yellow-300 text-lg" dir="ltr">
          <a href="tel:+201027625357" className="hover:underline">+20 102 762 5357</a>
          <a href="tel:+201223313905" className="hover:underline">+20 122 331 3905</a>
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
        <Link to="/" className="bg-yellow-400 text-gray-900 font-semibold px-6 py-2 rounded shadow hover:bg-yellow-300 transition">{translations[lang].getQuote}</Link>
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
  const services = [
    {
      ar: 'الطلاء المعدني',
      en: 'Metallic Coating',
      desc: lang === 'ar'
        ? 'تشطيبات معدنية متقدمة للتطبيقات الصناعية والزخرفية.'
        : 'Advanced metallic finishes for industrial and decorative applications.',
    },
    {
      ar: 'البرايمر و اللاكيهات',
      en: 'Primers & Lacquer',
      desc: lang === 'ar'
        ? 'برايمر عالي الأداء لضمان الالتصاق والحماية.\nتشطيبات لاكيهات لامعة ومتينة لمظهر فاخر.'
        : 'High-performance primers for superior adhesion and protection.\nGlossy, durable lacquer finishes for a premium look and feel.',
    },
    {
      ar: 'الثنر',
      en: 'Thinners',
      desc: lang === 'ar'
        ? 'ثنر عالي الجودة لضبط قوام الدهانات، سرعة الجفاف، وسهولة التطبيق على مختلف الأسطح.'
        : 'High-quality thinners for optimal paint consistency, fast drying, and easy application on various surfaces.',
    },
    {
      ar: 'مذيبات الأحبار',
      en: 'Ink Solvents',
      desc: lang === 'ar'
        ? 'مذيبات أحبار متخصصة لتنظيف وصيانة معدات الطباعة وأنظمة الأحبار بكفاءة.'
        : 'Specialized ink solvents for efficient cleaning and maintenance of printing equipment and ink systems.',
    },
    {
      ar: 'بويات البلدورات',
      en: 'Curb Paints',
      desc: lang === 'ar'
        ? 'دهانات بلدورات متينة بألوان متعددة، مصممة لرؤية عالية وأداء طويل الأمد في البيئات الحضرية.'
        : 'Durable curb paints in multiple colors, designed for high visibility and long-lasting performance in urban environments.',
    },
    {
      ar: 'أحبار الطباعة',
      en: 'Printing Inks',
      desc: lang === 'ar'
        ? 'أحبار طباعة فلكسو عالية الجودة للشكائر المنسوجة والبولي إيثيلين/بولي بروبيلين، بألوان متنوعة وأداء ممتاز.'
        : 'High-quality flexographic printing inks for woven sacks and polyethylene/polypropylene, available in various colors and excellent performance.',
    },
  ];

  return (
    <section className="max-w-5xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-4 text-yellow-300">{translations[lang].servicesTitle}</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div key={idx} className="bg-gray-800 rounded-lg p-6 shadow hover:scale-105 transition">
            <div className="mb-2 text-yellow-400"></div>
            <h3 className="font-semibold text-lg mb-1">{service.ar} <span className="block text-sm text-yellow-300 font-normal">{service.en}</span></h3>
            <p className="text-gray-300" style={{ whiteSpace: 'pre-line' }}>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Products({ lang }: { lang: 'en' | 'ar' }) {
  const products = [
    {
      ar: 'بادئ صناعي سريع الجفاف (كل الألوان)',
      en: 'Fast-drying industrial primer (all colors)',
    },
    {
      ar: 'بادئ صناعي رصاصي برايمر',
      en: 'Grey industrial primer',
    },
    {
      ar: 'بادئ صناعي أحمر برايمر',
      en: 'Red industrial primer',
    },
    {
      ar: 'بادئ صناعي حسب طلب العميل (برايمر ألوان)',
      en: 'Custom-color primer (based on client request)',
    },
    {
      ar: 'لاكيه كل الألوان',
      en: 'Lacquer (all colors)',
    },
    {
      ar: 'بويات سريعة الجفاف (كل الألوان)',
      en: 'Fast-drying paints (all colors)',
    },
    {
      ar: 'بويات تخطيط الطرق (أصفر - أبيض)',
      en: 'Road marking paints (yellow - white)',
    },
    {
      ar: 'بويات بلدورات (أبيض - أسود - أخضر)',
      en: 'Curb paints (white - black - green)',
    },
    {
      ar: 'بويات طلاء الأسفلت الأسود (كل الألوان حسب طلب العميل - مائي أو زيتي)',
      en: 'Asphalt black paint (all colors on demand – water or oil-based)',
    },
    {
      ar: 'أحبار طباعة الفلكسو للشكائر المنسوجة',
      en: 'Flexographic printing inks for woven sacks',
    },
    {
      ar: 'أحبار طباعة الفلكسو للبولي إيثيلين / بولي بروبيلين',
      en: 'Flexographic printing inks for polyethylene / polypropylene',
    },
    {
      ar: 'مذيبات أحبار',
      en: 'Ink solvents',
    },
    {
      ar: 'الثنر بكل أنواعه',
      en: 'All types of thinner',
    },
    {
      ar: 'مذيبات البويات',
      en: 'Paint solvents',
    },
    {
      ar: 'ثنر التطهير للمعادن والكاوتش',
      en: 'Metal and rubber surface thinner',
    },
  ];

  return (
    <section className="max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-8 text-yellow-300">{translations[lang].productsTitle}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, idx) => (
          <div key={idx} className="bg-gray-800 rounded-xl p-6 shadow flex flex-col items-center text-center hover:scale-105 transition">
            <div className="font-bold text-lg text-yellow-200 mb-1">{product.ar}</div>
            <div className="text-gray-200 text-base">{product.en}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Gallery({ lang }: { lang: 'en' | 'ar' }) {
  const galleryImages = [
    {
      src: 'images1.png',
      ar: 'بويات بلدورات',
      en: 'Curb Paints',
    },
    {
      src: 'images.png',
      ar: 'بويات تخطيط الطرق',
      en: 'Road marking paints',
    },
    {
      src: 'ink2.png',
      ar: 'أحبار طباعة فلكسو',
      en: 'Flexographic printing inks',
    },
    {
      src: 'ink.png',
      ar: 'أحبار عالية الجودة',
      en: 'High-quality ink',
    },
    {
      src: 'Solvent-Paints-scaled.png',
      ar: 'مذيبات أحبار عالية الجودة ',
      en: 'High-quality ink solvents',
    },
    {
      src: 'primer (2).png',
      ar: 'برايمر صناعي حسب الطلب',
      en: 'Custom-color primer',
    },
  ];

  return (
    <section className="max-w-5xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-4 text-yellow-300">{translations[lang].galleryTitle}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {galleryImages.map((img, idx) => (
          <div key={idx} className="relative bg-gray-800 rounded-lg shadow p-2 flex items-center justify-center group overflow-hidden">
            <img src={`/${img.src}`} alt={`Gallery ${idx + 1}`} className="rounded-md object-cover w-full h-48 transition-transform duration-300 group-hover:scale-105" style={{maxHeight: '200px'}} />
            <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 text-center">
              <div className="text-yellow-300 font-bold mb-1">{img[lang]}</div>
              <div className="text-gray-200 text-sm">{lang === 'ar' ? img.en : img.ar}</div>
            </div>
          </div>
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
        </div>
        <a href="mailto:eljendypaint@gmail.com" className="text-yellow-300 hover:underline text-lg">eljendypaint@gmail.com</a>
        <div className={`flex mt-4 ${lang === 'ar' ? 'flex-row-reverse gap-4' : 'space-x-6'} `}>
          <a href="https://www.facebook.com/elnourpaints" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">{translations[lang].facebook}</a>
          <a href="https://www.instagram.com/elnour.paints" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">{translations[lang].instagram}</a>
          <a href="https://www.linkedin.com/company/elnourpaints" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">{translations[lang].linkedin}</a>
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
