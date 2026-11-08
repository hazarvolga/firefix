export interface ServiceItem {
  id: string;
  title: string;
  category: 'ruhsat' | 'proje' | 'kurulum' | 'bakim';
  shortDesc: string;
  fullDesc: string;
  image?: string;
  features: string[];
  regulationRef: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'ruhsat' | 'yonetmelik' | 'ekipman' | 'surec';
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  readTime: string;
  date: string;
  category: string;
  content: string[];
}

export interface CityCoverage {
  city: string;
  region: string;
  activeProjects: number;
  avgResponseDays: string;
  isMainHub?: boolean;
}

export const FIREFIX_CONTACT = {
  phonePrimary: '0536 217 65 35',
  phoneFormatted: '0 536 217 65 35',
  phoneSecondary: '0929 242 68 68',
  email: 'info@firefix.com.tr',
  address: 'Sakarya Merkez, Marmara Bölgesi Operasyon Merkezi',
  workingHours: '7/24 Kesintisiz Mühendislik ve Keşif Hizmeti',
  whatsappNumber: '905362176535',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'is-yeri-ruhsati',
    title: 'İş Yeri Açma ve Çalışma Ruhsatı Danışmanlığı',
    category: 'ruhsat',
    shortDesc: 'İş yerinizin faaliyet alanına uygun İtfaiye Uygunluk Raporu ve ruhsat sürecinin eksiksiz hızlandırılması.',
    fullDesc: 'İş yeri açılışında en kritik bürokratik aşama olan İtfaiye Uygunluk Raporu alınması sürecinde, işletmenizi yasal risklerden ve zaman kayıplarından koruyoruz. Faaliyet alanınıza özel mevzuat gerekliliklerini önceden belirleyip denetim öncesi tüm eksikleri gideriyoruz.',
    image: '/images/firefix_service_inspection.jpg',
    features: [
      'Faaliyet koluna özel yasal risk ve mevzuat analizi',
      'İtfaiye Uygunluk Raporu dosya hazırlığı ve başvuru takibi',
      'Belediye ve İtfaiye Daire Başkanlığı denetim refakati',
      'Ceza ve ruhsat reddi risklerinin %100 sıfırlanması'
    ],
    regulationRef: 'Binaların Yangından Korunması Hakkında Yönetmelik Madde 6'
  },
  {
    id: 'itfaiye-uygunluk-raporu',
    title: 'İtfaiye Uygunluk Raporu Ön Denetimi',
    category: 'ruhsat',
    shortDesc: 'Resmi itfaiye denetçileri gelmeden önce mekânınızın yerinde mimari ve teknik kontrolü.',
    fullDesc: 'İtfaiye ekiplerinin resmi denetimi öncesinde sahanızda detaylı keşif gerçekleştiriyoruz. Acil çıkış kapı genişliklerinden kaçış mesafelerine, yangın tüpü tiplerinden elektrik panolarına kadar tüm detayları raporluyoruz.',
    features: [
      'Saha içi mimari kaçış ve tahliye mesafeleri kontrolü',
      'Yangın kapısı, panik bar ve yönlendirme levha denetimi',
      'Yangın tüpü dolum, basınç ve SKT kontrolleri',
      'Denetim Öncesi Detaylı Eksiklik ve Çözüm Raporu'
    ],
    regulationRef: 'BYKHY Madde 138 & 142 (Resmi Denetim Standardı)'
  },
  {
    id: 'tahliye-kacis-projesi',
    title: 'Tahliye ve Kaçış Yolları Projelendirmesi',
    category: 'proje',
    shortDesc: 'Kat planlarına uygun, acil durum kaçış merdivenleri, yönlendirme ve acil durum tahliye projeleri.',
    fullDesc: 'Mekanınızın mimari projesi üzerinde yangın yönetmeliği standartlarına tam uyumlu acil durum tahliye planları ve kaçış yönlendirme şemaları çiziyoruz. İtfaiye onay süreçlerine doğrudan uyumludur.',
    image: '/images/firefix_service_engineering.jpg',
    features: [
      'AutoCAD ortamında ölçekli acil durum tahliye krokileri',
      'Kaçış merdiveni ve koridor genişlik hesabı (BYKHY)',
      'Fotolümen (karanlıkta parlayan) yönlendirme yerleşim projesi',
      'İtfaiye Daire Başkanlığı Onaylı Proje Dosyası'
    ],
    regulationRef: 'BYKHY Kısım 3 - Kaçış Yolları ve Kaçış Merdivenleri'
  },
  {
    id: 'sondurme-algilama-projesi',
    title: 'Otomatik Söndürme ve Algılama Sistemleri Projesi',
    category: 'proje',
    shortDesc: 'Sprinkler, duman dedektörleri, gazlı söndürme ve yangın dolapları teknik çizimi.',
    fullDesc: 'Endüstriyel tesisler, depolar, oteller ve yüksek binalar için hidrolik sprinkler hesabı, duman dedektör alanı kapsama hesabı ve otomatik yangın ihbar sistemi projelendirmesi.',
    features: [
      'Otomatik Sprinkler (Yağmurlama) Sistem Çizimi',
      'FM200 / Novec 1230 Gazlı Söndürme Sistem Tasarımı',
      'Adresli Duman ve Isı Algılama Dedektör Yerleşimi',
      'Yangın Hidrant ve İç Yangın Dolabı Tesisat Projesi'
    ],
    regulationRef: 'TS EN 12845 & BYKHY Kısım 7'
  },
  {
    id: 'saha-ekipman-kurulumu',
    title: 'Anahtar Teslim Yangın Ekipmanları Tedariği ve Montajı',
    category: 'kurulum',
    shortDesc: 'TSE onaylı yangın tüpleri, yangın dolapları, acil aydınlatmalar ve söndürme ekipmanları.',
    fullDesc: 'İşletmenizin tehlike sınıfına (Az, Tehlikeli, Çok Tehlikeli) uygun tip ve kg kapasitelerinde TSE belgeli yangın söndürme tüpleri, yangın dolapları ve acil durum aydınlatma armatürlerinin yerinde montajı.',
    image: '/images/firefix_service_equipment.jpg',
    features: [
      '6kg KKT, CO2 ve Köpüklü TSE belgeli Yangın Tüpleri',
      'Elektrik kesintisinde 3 saat süreli Acil Aydınlatmalar',
      'Sertifikalı Panik Bar yangın kapıları ve kilitleri',
      'Gürültülü alanlar için Flaşörlü Yangın İhbar Sirenleri'
    ],
    regulationRef: 'TS EN 3-7 & TS EN 1838 Aydinlatma Standardı'
  },
  {
    id: 'periyodik-bakim-test',
    title: 'Yıllık Periyodik Bakım ve Test Hizmetleri',
    category: 'bakim',
    shortDesc: 'Yangın tesisatı, pompa daireleri, tüp dolumları ve algılama panosu periyodik testleri.',
    fullDesc: 'Yasal olarak yılda en az 1 defa yapılması zorunlu olan yangın güvenlik tesisatlarının periyodik kontrolü, hydrotestleri ve yetkili mühendis onaylı periyodik kontrol raporlarının düzenlenmesi.',
    features: [
      'Yangın pompası debi ve basınç testleri',
      'Sprinkler ve yangın dolabı hidrostatik testleri',
      'Dedektör ve panoların simülasyon testleri',
      'Resmi Denetim Geçerlilik Onay Raporu'
    ],
    regulationRef: 'BYKHY Madde 99 & İş Ekipmanları Kullanımında Sağlık ve Güvenlik Yönetmeliği'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'İş yeri açmak için itfaiye raporu almak zorunlu mu?',
    answer: 'Evet, zorunludur. İş Yeri Açma ve Çalışma Ruhsatı alabilmek için ilgili belediyeler ve yönetmelikler gereği binanın veya iş yerinin yangın güvenliği standartlarına uygun olması ve yetkili İtfaiye Daire Başkanlığı\'ndan onaylı İtfaiye Uygunluk Raporu alınması yasal zorunluluktur.',
    category: 'ruhsat'
  },
  {
    id: 'faq-2',
    question: 'İtfaiye uygunluk raporu hangi işletmeler için gereklidir?',
    answer: 'Kafe, restoran, otel, kreş, dershane, fırın, imalathane, fabrika, depo, lojistik merkezi, güzellik salonu, klinik, oto yıkama ve kat mülkiyetine tabi belirli m² üzerindeki tüm ticari alanlar için zorunludur.',
    category: 'ruhsat'
  },
  {
    id: 'faq-3',
    question: 'FireFix danışmanlık süreci ortalama kaç gün sürer?',
    answer: 'Mekânınızın metrekaresine ve mevcut durumuna bağlı olarak; keşif ve eksik tespiti 24 saat içinde yapılır. Eksiklerin tamamlanması ve itfaiye onay raporunun çıkması ortalama 7 ila 14 iş günü içerisinde tamamlanmaktadır.',
    category: 'surec'
  },
  {
    id: 'faq-4',
    question: 'Saha yangın ekipmanlarını ve tüpleri siz tedarik ediyor musunuz?',
    answer: 'Kesinlikle! FireFix sadece kağıt üstünde danışmanlık vermez. TSE belgeli yangın söndürme tüpleri, yangın dolapları, yönlendirme levhaları ve acil aydınlatma armatürlerinin satışını, montajını ve anahtar teslim kurulumunu sağlar.',
    category: 'ekipman'
  },
  {
    id: 'faq-5',
    question: 'Yangın kapısı ve acil çıkış ölçüleri ne olmalıdır?',
    answer: 'Yönetmeliğe göre kullanıcı sayısı 50 kişiyi aşan mekanlarda en az 2 acil çıkış kapısı bulunmalı ve kapılar dışa doğru açılan, panik barlı, duman sızdırmaz conta sistemine sahip en az 90cm net genişlikte olmalıdır.',
    category: 'yonetmelik'
  },
  {
    id: 'faq-6',
    question: 'Hangi illerde aktif yangın ruhsatı danışmanlığı veriyorsunuz?',
    answer: 'Merkezimiz Sakarya olmak üzere; Kocaeli, Düzce, Bolu, İstanbul (Anadolu & Avrupa), Bursa, Yalova ve Bilecik illerinde aktif saha ekiplerimiz ve uzman mühendis kadromuzla kesintisiz hizmet sunuyoruz.',
    category: 'surec'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'İş Yeriniz Yangın Yönetmeliğine Uygun mu? Zorunlu Kriterler Nelerdir?',
    summary: 'Acil çıkış kapılarından aydınlatmalara, duman dedektörlerinden yangın tüplerinin yerleşimine kadar yeni veya mevcut iş yerinizde yönetmeliğin aradığı yasal zorunluluklar listesi.',
    readTime: '4 dk',
    date: '04 Kasım 2026',
    category: 'Mevzuat & Rehber',
    content: [
      'Türkiye Binaların Yangından Korunması Hakkında Yönetmelik gereği ticari işletmelerin açılış yapabilmesi için sıfır toleranslı yangın güvenlik standartlarını karşılaması gerekir.',
      'İtfaiye denetçilerinin en çok dikkat ettiği 5 temel unsur: 1) Kaçış yollarının açık ve engelsiz olması, 2) Yangın kapılarının panik barlı ve dışa açılır olması, 3) Yangın tüplerinin kapı yanlarına 90cm-120cm yüksekliğe asılması, 4) Acil aydınlatmaların elektrik kesintisinde yanması, 5) Yanıcı materyal barındıran alanlarda sprinkler/algılama sistemleri.',
      'FireFix keşif mühendisleri mekanınızda tek tek bu kriterleri denetleyerek ilk denetimde %100 onay almanızı sağlar.'
    ]
  },
  {
    id: 'blog-2',
    title: 'İş Yeri Açma ve Çalışma Ruhsatı Alırken En Sık Yapılan 5 Hata',
    summary: 'İş yeri açılış sürecinde acemi çözümler veya yönetmelik bilgisi eksikliği nedeniyle yapılan hatalar büyük maliyetlere ve ruhsat reddine yol açar.',
    readTime: '5 dk',
    date: '28 Ekim 2026',
    category: 'Ruhsat İpuçları',
    content: [
      'Ruhsat sürecinde zaman ve para kaybına sebep olan 1. Hata: Yangın kapısını yanlış yöne açılır yaptırmak veya panik bar koymamak.',
      '2. Hata: Standart dışı, son kullanma tarihi geçmiş veya sertifikasız yangın tüpleri tedarik etmek.',
      '3. Hata: Projesiz tadilat yaparak kaçış koridorlarını kapatmak veya daraltmak.',
      '4. Hata: İtfaiye müracaatını eksik evrak ve mimari kroki olmadan aceleyle yapmak.',
      '5. Hata: Elektrik iç tesisat uygunluk ve topraklama ölçüm raporlarını unutmak.'
    ]
  },
  {
    id: 'blog-3',
    title: 'Projeden Sahaya: Anahtar Teslim Yangın Güvenliği Neden Önemlidir?',
    summary: 'Mimari projelendirmeden saha ekipmanlarının tedariğine ve nihai ruhsat onayına kadar tüm adımları tek elden yönetmenin işletmelere sağladığı zaman ve bütçe avantajları.',
    readTime: '3 dk',
    date: '15 Ekim 2026',
    category: 'Mühendislik Solutions',
    content: [
      'Ayrı ayrı danışman, mimar ve tüp tedarikçisi ile çalışmak iletişim kopukluğuna ve bütçe aşımına yol açar.',
      'FireFix anahtar teslim yaklaşımıyla projenizi çizer, eksik ekipmanı getirip kurar ve itfaiye denetiminde resmi yetkililere refakat ederek ruhsatı teslim eder.'
    ]
  }
];

export const COVERAGE_CITIES: CityCoverage[] = [
  { city: 'Sakarya', region: 'Genel Merkez / Ana Hub', activeProjects: 180, avgResponseDays: 'Aynı Gün Keşif', isMainHub: true },
  { city: 'Kocaeli (İzmit / Gebze)', region: 'Marmara Sanayi Bölgesi', activeProjects: 145, avgResponseDays: '24 Saat İçinde', isMainHub: false },
  { city: 'Düzce', region: 'Batı Karadeniz Operasyonu', activeProjects: 42, avgResponseDays: '24 Saat İçinde', isMainHub: false },
  { city: 'Bolu', region: 'Sanayi ve Turizm Bölgesi', activeProjects: 28, avgResponseDays: '24-48 Saat', isMainHub: false },
  { city: 'İstanbul (Anadolu / Avrupa)', region: 'Metropol Ticaret Bölgeleri', activeProjects: 110, avgResponseDays: '24 Saat İçinde', isMainHub: false },
  { city: 'Bursa', region: 'Otomotiv & Tekstil Sanayii', activeProjects: 65, avgResponseDays: '24-48 Saat', isMainHub: false },
  { city: 'Yalova & Bilecik', region: 'Bölgesel Sanayi Hatları', activeProjects: 35, avgResponseDays: '48 Saat İçinde', isMainHub: false },
];

export const CHECKLIST_ITEMS = [
  'Kaçış koridorları ve acil durum kapıları engelsiz mi?',
  'Yangın kapıları dışa doğru açılıyor ve panik bar mekanizması var mı?',
  'Yangın söndürme tüpleri TSE belgeli, basınçlı ve son 1 yıl içinde kontrol edildi mi?',
  'Her 250m² alan için en az 1 adet 6kg KKT yangın tüpü mevcut mu?',
  'Acil durum yönlendirme levhaları (EXIT / ÇIKIŞ) fotolümenli veya şebekeden bağımsız bataryalı mı?',
  'Acil aydınlatma armatürleri elektrik kesintisinde en az 90-180 dakika yanıyor mu?',
  'Elektrik iç tesisat denetim ve topraklama ölçüm raporları yetkili mühendis onaylı mı?',
  'Mutfak ve baca sistemlerinde otomatik gaz kesme selenoid vanası mevcut mu?',
  'Duman veya ısı algılama dedektörleri oda ve koridor tavanlarına yerleştirildi mi?',
  'İş yerinin güncel mimari vaziyet ve acil durum tahliye krokisi hazır mı?'
];
