export interface SubService {
  slug: string;
  categorySlug: 'ruhsat-ve-mevzuat-danismanligi' | 'yangin-guvenlik-projelendirme' | 'kurulum-ve-uygulama';
  categoryTitle: string;
  title: string;
  metaTitle: string;
  metaDesc: string;
  shortDesc: string;
  directAnswerText: string;
  targetAudience: string[];
  processSteps: string[];
  requiredDocuments: string[];
  regulationRef: string;
  costFactors: string[];
  specificFaqs: { question: string; answer: string }[];
  image?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface LongBlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDesc: string;
  summary: string;
  readTime: string;
  date: string;
  author: string;
  authorTitle: string;
  category: string;
  contentHeadings: {
    heading: string;
    paragraphs: string[];
  }[];
  keyTakeaways: string[];
  relatedServices: { title: string; slug: string }[];
}

export interface SectorInfo {
  slug: string;
  title: string;
  shortDesc: string;
  riskClass: 'Az Tehlikeli' | 'Tehlikeli' | 'Çok Tehlikeli';
  criticalRequirements: string[];
  commonMistakes: string[];
}

export const FIREFIX_NAP = {
  name: 'FireFix Mühendislik & Yangın Güvenlik Danışmanlığı',
  phone: '0536 217 65 35',
  phoneFormatted: '0 536 217 65 35',
  phoneHref: 'tel:+905362176535',
  whatsappUrl: 'https://wa.me/905362176535?text=Merhaba,%20yang%C4%B1n%20ruhsat%C4%B1%20ve%20itfaiye%20uygunluk%20raporu%20i%C3%A7in%20bilgi%20almak%20istiyorum.',
  email: 'info@firefix.com.tr',
  address: 'Sakarya Teknokent / Merkez Mah. Üniversite Cad. No:45/B, Serdivan / Sakarya',
  workingHours: 'Pazartesi - Cumartesi: 08:30 - 18:30 (Acil İtfaiye Destek Hattı 7/24)',
  googleMapsUrl: 'https://maps.google.com/?q=Serdivan+Sakarya',
};

export const PROCESS_STEPS = [
  {
    stepNumber: 1,
    title: 'Yerinde Saha Keşfi & Mevcut Durum Analizi',
    shortDesc: 'Sakarya ve çevre illerdeki uzman mühendis kadromuz 24 saat içinde mekânınızda mimari kaçış mesafelerini, tüp konumlarını ve tesisatı yerinde inceler.',
    details: 'Resmi itfaiye denetçisi bakış açısıyla yapılan yerinde keşif sırasında mekânın kaçış koridorları, kapı yönleri, elektrik panoları ve havalandırma hatları kontrol edilir.'
  },
  {
    stepNumber: 2,
    title: 'Eksik Tespiti & Mevzuat Risk Raporu',
    shortDesc: 'Binaların Yangından Korunması Hakkında Yönetmelik (BYKHY) uyarınca işletmenizin eksikliklerini ve çözüm önerilerini içeren detaylı rapor hazırlanır.',
    details: 'İşletmenizin faaliyet alanına özel risk sınıfı belirlenerek (Az, Tehlikeli, Çok Tehlikeli) ceza ve ruhsat reddi riskleri tamamen ortadan kaldırılır.'
  },
  {
    stepNumber: 3,
    title: 'Teknik Projelendirme & Çizim (AutoCAD)',
    shortDesc: 'Kat planlarına uygun acil durum tahliye krokileri, duman algılama dedektör yerleşimi ve otomatik sprinkler tesisat projeleri çizilir.',
    details: 'Hazırlanan projeler İtfaiye Daire Başkanlığı standartlarına %100 uyumlu dosya formatında resmi onay sürecine hazır hale getirilir.'
  },
  {
    stepNumber: 4,
    title: 'Saha Ekipman Tedariği & TSE Standartlarında Montaj',
    shortDesc: 'TSE belgeli 6kg KKT ve CO2 yangın tüpleri, panik barlı yangın kapıları, fotolümen acil çıkış levhaları anahtar teslim monte edilir.',
    details: 'Ürünlerin TSE belgeleri, basınç hydrotest sertifikaları ve montaj uygunluk belgeleri itfaiye başvuru dosyasına eklenir.'
  },
  {
    stepNumber: 5,
    title: 'İtfaiye Başvurusu & Denetim Refakati (Resmi Ruhsat Onayı)',
    shortDesc: 'Resmi denetim gününde mühendislerimiz yetkili itfaiye denetçilerine sahada refakat ederek İtfaiye Uygunluk Raporu\'nu teslim alıp tarafınıza sunar.',
    details: 'Tüm evrak takibi ve resmi merci yazışmaları FireFix mühendislik kadrosu tarafından sıfır bürokratik yük ile yürütülür.'
  }
];

export const SUB_SERVICES_DATA: SubService[] = [
  {
    slug: 'is-yeri-acma-ve-calisma-ruhsati',
    categorySlug: 'ruhsat-ve-mevzuat-danismanligi',
    categoryTitle: 'Ruhsat ve Mevzuat Danışmanlığı',
    title: 'İş Yeri Açma ve Çalışma Ruhsatı Danışmanlığı',
    metaTitle: 'İş Yeri Açma ve Çalışma Ruhsatı Danışmanlığı Sakarya | FireFix',
    metaDesc: 'Sakarya ve Marmara Bölgesi\'nde iş yeri açma ruhsatı sürecinde İtfaiye Uygunluk Raporu alımı, dosya takibi ve mevzuat danışmanlığı.',
    shortDesc: 'İş yeri açılışında en kritik yasal aşama olan İtfaiye Uygunluk Raporu ve çalışma ruhsatı sürecinin anahtar teslim hızlandırılması.',
    directAnswerText: 'İş Yeri Açma ve Çalışma Ruhsatı Danışmanlığı; ticari işletmelerin belediyelerden ve yetkili idarelerden ruhsat alabilmesi için zorunlu olan İtfaiye Uygunluk Raporu\'nun eksiksiz hazırlanmasını sağlayan profesyonel mühendislik hizmetidir. FireFix, Sakarya merkezli uzman kadrosuyla mekân keşfinden evrak takibine ve resmi onay aşamasına kadar tüm bürokrasiyi yönetir.',
    targetAudience: [
      'Yeni açılacak kafe, restoran, lokanta ve fırınlar',
      'İmalathane, fabrika, sanayi tesisleri ve depolar',
      'Otel, pansiyon, öğrenci yurtları ve konaklama alanları',
      'Kreş, anaokulu, özel kurs merkezleri ve eğitim kurumları',
      'Ofisler, iş merkezleri, tıp merkezleri ve klinikler',
      'Ticari dükkanlar, mağazalar ve pasaj içi işletmeler'
    ],
    processSteps: [
      'Mekânda yerinde mimari ve yangın güvenlik keşfi yapılması',
      'Binaların Yangından Korunması Hakkında Yönetmelik eksiklik tespiti',
      'TSE standartlarına uygun ekipman ve kapı eksikliklerinin giderilmesi',
      'İtfaiye Daire Başkanlığı müracaat dosyasının hazırlanması',
      'Resmi itfaiye denetiminde yetkili mühendis refakati ve rapor alımı'
    ],
    requiredDocuments: [
      'İş yerinin güncel tapu veya kira kontratı fotokopisi',
      'İş yeri sahibinin veya şirket yetkilisinin kimlik/imza sirküleri',
      'Varsa onaylı mimari proje veya acil durum tahliye krokisi',
      'Elektrik iç tesisat kontrol ve topraklama ölçüm raporu',
      'TSE belgeli yangın tüpleri fatura ve garanti belgeleri'
    ],
    regulationRef: 'Binaların Yangından Korunması Hakkında Yönetmelik Madde 6 & İş Yeri Açma ve Çalışma Ruhsatlarına İlişkin Yönetmelik',
    costFactors: [
      'İşletmenin toplam kullanım alanı (m²)',
      'Faaliyet kolunun tehlike sınıfı (Az, Tehlikeli, Çok Tehlikeli)',
      'Mevcut binada yangın merdiveni ve acil çıkış kapısı bulunma durumu',
      'Otomatik sprinkler ve duman algılama tesisat ihtiyacı'
    ],
    specificFaqs: [
      {
        question: 'İş yeri açma ruhsatı almak için itfaiye raporu kesinlikle şart mıdır?',
        answer: 'Evet, Türkiye\'de belediye sınırları içerisindeki hemen hemen tüm ticari işletmeler için İş Yeri Açma ve Çalışma Ruhsatı verilmeden önce yetkili İtfaiye Daire Başkanlığı\'ndan olumlu İtfaiye Uygunluk Raporu alınması yasal zorunluluktur.'
      },
      {
        question: 'Ruhsat başvurusunun reddedilmemesi için ne yapmalıyım?',
        answer: 'Resmi başvuru yapılmadan önce FireFix uzman mühendisleri tarafından yerinde ön keşif yapılması, tespit edilen yangın kapısı, yönlendirme levhası ve tüp eksiklerinin giderilmesi reddedilme riskini %100 ortadan kaldırır.'
      }
    ],
    image: '/src/assets/images/firefix_service_inspection_1794114479347.jpg'
  },
  {
    slug: 'itfaiye-uygunluk-raporu',
    categorySlug: 'ruhsat-ve-mevzuat-danismanligi',
    categoryTitle: 'Ruhsat ve Mevzuat Danışmanlığı',
    title: 'İtfaiye Uygunluk Raporu Ön Denetimi',
    metaTitle: 'İtfaiye Uygunluk Raporu Alımı ve Ön Denetim Sakarya | FireFix',
    metaDesc: 'Resmi itfaiye denetçileri gelmeden önce mekânınızın yangın kapısı, acil çıkışlar ve ekipmanlar açısından sıfır hatayla hazırlanması.',
    shortDesc: 'Resmi itfaiye müdürlüğü denetimi öncesinde sahanızda detaylı keşif gerçekleştirilerek tüm bürokratik engellerin sıfırlanması.',
    directAnswerText: 'İtfaiye Uygunluk Raporu; bir binanın veya ticari alanın yangın mevzuatına uygun olduğunu belgeleyen resmi rapordur. FireFix ön denetim hizmeti, resmi ekipler işletmenize gelmeden önce mekânı baştan sona denetleyerek ilk denetimde %100 onay almanızı garanti eder.',
    targetAudience: [
      'Ruhsat yenileme veya devir işlemi yapacak işletmeler',
      'İtfaiye denetiminde daha önce eksik bulup süre verilen mekanlar',
      'Çalışma ruhsatı aşamasında ceza almaktan çekinen yatırımcılar'
    ],
    processSteps: [
      'Mimari tahliye koridor genişliklerinin ve kapı yönlerinin ölçülmesi',
      'Panik bar ve duman sızdırmaz conta kontrolleri',
      'Yangın tüplerinin kg, tip, basınç ve SKT doğrulaması',
      'Acil durum aydınlatmalarının 3 saatlik batarya testi'
    ],
    requiredDocuments: [
      'Mevcut elektrik tesisat uygunluk raporu',
      'Yangın tüpleri periyodik bakım belgeleri',
      'Acil durum tahliye krokisi'
    ],
    regulationRef: 'BYKHY Madde 138 & 142 (Resmi İtfaiye Muayene Standartları)',
    costFactors: ['İş yeri metrekaresi', 'Eksik tespit edilen ekipman sayısı'],
    specificFaqs: [
      {
        question: 'İtfaiye raporu kaç yıl geçerlidir?',
        answer: 'Faaliyet konusu, bina mimarisi veya işletme sahibi değişmediği sürece alınan rapor geçerliliğini korur. Ancak yangın tüplerinin her yıl periyodik kontrolü zorunludur.'
      }
    ]
  },
  {
    slug: 'mevzuat-ve-risk-analizi',
    categorySlug: 'ruhsat-ve-mevzuat-danismanligi',
    categoryTitle: 'Ruhsat ve Mevzuat Danışmanlığı',
    title: 'Mevzuat ve Yangın Risk Analizi',
    metaTitle: 'Yangın Risk Analizi ve Mevzuat Danışmanlığı | FireFix Sakarya',
    metaDesc: 'Endüstriyel tesisler, fabrikalar ve depolar için yasal risk analizi, yangın yükü hesabı ve mevzuat danışmanlığı.',
    shortDesc: 'Tesisinizin yangın yükünün, yasal risklerinin ve muhtemel ceza nedenlerinin önceden raporlanarak bütçe tasarrufu sağlanması.',
    directAnswerText: 'Mevzuat ve Yangın Risk Analizi; yüksek tehlike sınıfındaki fabrika, depo ve ticari binaların yangın risklerini nicel yöntemlerle hesaplayan mühendislik incelemesidir.',
    targetAudience: ['Fabrikalar', 'Lojistik Depoları', 'Endüstriyel Tesisler'],
    processSteps: ['Yangın yükü hesabı', 'Kaçış mesafesi kontrolü', 'Yasal risk raporu teslimi'],
    requiredDocuments: ['Kat planı', 'Üretim/Depolama hammadde listesi'],
    regulationRef: 'BYKHY Kısım 2 - Binaların Tehlike Sınıflandırılması',
    costFactors: ['Tesis m² alanı', 'Yanıcı madde hacmi'],
    specificFaqs: [
      {
        question: 'Risk analizi yaptırmak zorunlu mu?',
        answer: 'Çok tehlikeli sınıftaki tesisler ve endüstriyel depolar için iş sağlığı güvenliği ile yangın mevzuatı kapsamında zorunludur.'
      }
    ]
  },
  {
    slug: 'tahliye-ve-kacis-projeleri',
    categorySlug: 'yangin-guvenlik-projelendirme',
    categoryTitle: 'Yangın Güvenlik Projelendirmesi',
    title: 'Tahliye ve Kaçış Yolları Projelendirmesi',
    metaTitle: 'Tahliye ve Kaçış Yolları Projelendirmesi Sakarya | FireFix',
    metaDesc: 'AutoCAD ortamında ölçekli acil durum tahliye krokileri, kaçış merdiveni hesapları ve yönlendirme yerleşim çizimleri.',
    shortDesc: 'Kat planlarınıza uygun acil durum kaçış yolları, panik barlı yangın kapıları ve yönlendirme krokilerinin çizimi.',
    directAnswerText: 'Tahliye ve Kaçış Yolları Projelendirmesi; yangın veya acil durumlarda bina sakinlerinin en kısa ve güvenli yoldan binayı terk edebilmesini sağlayan mimari çizim ve hesaplama sürecidir.',
    targetAudience: ['Çok katlı binalar', 'Okullar', 'Oteller', 'Plazalar', 'Restoranlar'],
    processSteps: ['Mimari rölöve ve saha ölçümü', 'Kaçış genişlik hesabı (BYKHY)', 'AutoCAD çizimi ve onay'],
    requiredDocuments: ['Mevcut bina mimari DWG veya PDF projesi'],
    regulationRef: 'BYKHY Kısım 3 - Kaçış Yolları ve Kaçış Merdivenleri',
    costFactors: ['Kat sayısı', 'Bina kullanım alanı (m²)'],
    specificFaqs: [
      {
        question: 'Tahliye krokisi her kata asılmalı mıdır?',
        answer: 'Evet, yönetmeliğe göre kat sirkülasyon alanlarına, asansör yanlarına ve acil çıkış kapılarına yakın yerlere asılması zorunludur.'
      }
    ],
    image: '/src/assets/images/firefix_service_engineering_1794114479888.jpg'
  },
  {
    slug: 'sondurme-ve-algilama-sistemleri-projesi',
    categorySlug: 'yangin-guvenlik-projelendirme',
    categoryTitle: 'Yangın Güvenlik Projelendirmesi',
    title: 'Söndürme ve Algılama Sistemleri Projesi',
    metaTitle: 'Sprinkler ve Yangın Algılama Tesisat Projesi | FireFix',
    metaDesc: 'Otomatik sprinkler (yağmurlama), duman dedektörü, gazlı söndürme ve yangın dolabı mekanik & elektrik çizimleri.',
    shortDesc: 'Mekanınızın risk sınıfına özel hidrolik sprinkler hesabı, duman dedektörü kapsama alanı ve söndürme tesisat çizimi.',
    directAnswerText: 'Söndürme ve Algılama Sistemleri Projesi; yangını başlangıç anında tespit edip otomatik olarak müdahale eden mekanik ve elektronik tesisat çizimleridir.',
    targetAudience: ['Büyük ticari alanlar', 'Depolar', 'Yüksek binalar'],
    processSteps: ['Hidrolik akış hesabı', 'Dedektör yarıçap kapsama çizimi', 'Mekanik proje onayı'],
    requiredDocuments: ['Mimari CAD dosyaları'],
    regulationRef: 'TS EN 12845 & BYKHY Kısım 7',
    costFactors: ['Tesisat boru metre metrajı', 'Sprinkler başlık sayısı'],
    specificFaqs: [
      {
        question: 'Hangi alanlarda sprinkler sistemi zorunludur?',
        answer: 'Toplam kapalı alanı 2000 m²\'yi aşan ticari alanlarda ve 5 kattan yüksek binalarda sprinkler söndürme sistemi zorunludur.'
      }
    ]
  },
  {
    slug: 'itfaiye-onay-proje-dosyasi',
    categorySlug: 'yangin-guvenlik-projelendirme',
    categoryTitle: 'Yangın Güvenlik Projelendirmesi',
    title: 'İtfaiye Onay Proje Dosyası Hazırlığı',
    metaTitle: 'İtfaiye Onay Proje Dosyası Hazırlığı Sakarya | FireFix',
    metaDesc: 'İlgili İtfaiye Daire Başkanlığı standartlarına eksiksiz uyumlu onay projesi dosya hazırlığı ve başvuru süreci.',
    shortDesc: 'Tüm çizimlerin ve hesap raporlarının itfaiye standartlarında ciltlenip resmi müracaata hazır hale getirilmesi.',
    directAnswerText: 'İtfaiye Onay Proje Dosyası; çizilen mimari ve mekanik yangın projelerinin itfaiye daire başkanlığı formatında onaylanmasını sağlayan evrak bütünüdür.',
    targetAudience: ['Mimar ve mühendisler', 'İnşaat yüklenicileri', 'İşletme sahipleri'],
    processSteps: ['Proje kontrolleri', 'Rapor ciltleme', 'İtfaiye onay takibi'],
    requiredDocuments: ['Çizilmiş yangın tesisat projeleri', 'İmza sirküleri'],
    regulationRef: 'İtfaiye Daire Başkanlığı Proje Onay Yönetmeliği',
    costFactors: ['Proje kapsamı'],
    specificFaqs: [
      {
        question: 'Proje onayı kaç günde çıkar?',
        answer: 'Evrakların eksiksiz tesliminden itibaren ortalama 3-7 iş günü içerisinde onaylanır.'
      }
    ]
  },
  {
    slug: 'yangin-sondurme-tupleri-ve-ekipmanlari',
    categorySlug: 'kurulum-ve-uygulama',
    categoryTitle: 'Kurulum ve Saha Uygulama',
    title: 'Yangın Söndürme Tüpleri ve Ekipmanları Tedariği',
    metaTitle: 'TSE Belgeli Yangın Söndürme Tüpleri ve Montajı Sakarya | FireFix',
    metaDesc: 'TSE belgeli 6kg KKT, CO2, köpüklü yangın tüpleri tedariği, duvar askı montajı ve hydrotest dolum hizmetleri.',
    shortDesc: 'İşletmenizin tehlike sınıfına uygun TSE onaylı yangın tüpleri, yangın dolapları ve aparatlarının montajı.',
    directAnswerText: 'TSE Belgeli Yangın Söndürme Tüpleri Tedariği; mekanınızın metrekaresine göre zorunlu tutulan söndürme tüplerinin yönetmelikte belirtilen askı yüksekliklerine monte edilmesi hizmetidir.',
    targetAudience: ['Tüm ticari dükkan ve tesisler'],
    processSteps: ['Risk sınıfına göre tüp tipi belirleme', 'Duvar montajı (90cm-120cm)', 'Sertifika teslimi'],
    requiredDocuments: ['Fatura ve TSE garanti belgesi'],
    regulationRef: 'TS EN 3-7 Standardı & BYKHY Madde 99',
    costFactors: ['Tüp kg kapasitesi', 'Tüp adedi'],
    specificFaqs: [
      {
        question: 'Yangın tüpleri kaç metre arayla konulmalıdır?',
        answer: 'Düşük tehlike sınıfında her 250 m² için 1 adet 6kg KKT tüp bulunur ve tüpler arası mesafe 25 metreyi aşamaz.'
      }
    ],
    image: '/src/assets/images/firefix_service_equipment_1794114479091.jpg'
  },
  {
    slug: 'acil-cikis-ve-yonlendirme-levhalari',
    categorySlug: 'kurulum-ve-uygulama',
    categoryTitle: 'Kurulum ve Saha Uygulama',
    title: 'Acil Çıkış ve Yönlendirme Levhaları',
    metaTitle: 'Fotolümen ve Bataryalı Acil Çıkış Yönlendirme Levhaları | FireFix',
    metaDesc: 'Fotolümenli karanlıkta parlayan ÇIKIŞ/EXIT levhaları ve 3 saat bataryalı acil durum aydınlatma armatürleri.',
    shortDesc: 'Elektrik kesintisinde dahi çalışan şebekeden bağımsız acil yönlendirme ve aydınlatma armatürlerinin montajı.',
    directAnswerText: 'Acil Çıkış ve Yönlendirme Levhaları; yangın anında duman veya elektrik kesintisi altında kaçış yolunu gösteren ışıklı ve fotolümenli tabelalardır.',
    targetAudience: ['İş merkezleri', 'AVM\'ler', 'Fabrikalar', 'Eğitim binaları'],
    processSteps: ['Kaçış aksı tespiti', 'Armatür montajı', 'Batarya testi'],
    requiredDocuments: ['Armatür CE ve ISO sertifikaları'],
    regulationRef: 'TS EN 1838 Acil Aydınlatma Standardı',
    costFactors: ['Armatür sayısı', 'Fotolümen kalitesi'],
    specificFaqs: [
      {
        question: 'Acil aydınlatmalar elektrik kesilince kaç saat yanmalıdır?',
        answer: 'Yönetmeliğe göre en az 90 ila 180 dakika boyunca kesintisiz aydınlatma sağlamalıdır.'
      }
    ]
  },
  {
    slug: 'algilama-ve-uyari-sistemleri',
    categorySlug: 'kurulum-ve-uygulama',
    categoryTitle: 'Kurulum ve Saha Uygulama',
    title: 'Temel Algılama ve Uyarı Sistemleri Kurulumu',
    metaTitle: 'Duman Dedektörü ve Yangın İhbar İkaz Sistemleri | FireFix Sakarya',
    metaDesc: 'Adresli duman dedektörleri, butonlar, sirenler ve yangın ihbar santrallerinin montaj ve devreye alma hizmetleri.',
    shortDesc: 'Duman ve ısıyı anında algılayan akıllı dedektörler ile flaşörlü sirenlerin montajı.',
    directAnswerText: 'Temel Algılama ve Uyarı Sistemleri; yangın durumunda dumanı hissederek sesli ve görsel alarm veren elektronik güvenlik tesisatıdır.',
    targetAudience: ['Plazalar', 'Oteller', 'Hastaneler', 'Büyük mağazalar'],
    processSteps: ['Dedektör yerleşimi', 'Kablolama ve santral bağlantısı', 'Test ve kabul'],
    requiredDocuments: ['Test uygunluk raporu'],
    regulationRef: 'BYKHY Madde 75 & TS EN 54',
    costFactors: ['Dedektör sayısı', 'Hat uzunluğu'],
    specificFaqs: [
      {
        question: 'Mutfaklarda duman dedektörü kullanılır mı?',
        answer: 'Mutfak gibi buharlı alanlarda yanlış alarmı önlemek için duman dedektörü yerine sıcaklık artış (ısı) dedektörleri tercih edilir.'
      }
    ]
  }
];

export const ALL_FAQS: FAQ[] = [
  {
    id: 'faq-1',
    question: 'İş yeri açmak için itfaiye raporu almak zorunlu mu?',
    answer: 'Evet, zorunludur. İş Yeri Açma ve Çalışma Ruhsatı alabilmek için ilgili belediyeler, il özel idareleri ve yönetmelikler gereği binanın veya iş yerinin yangın güvenliği standartlarına uygun olması ve yetkili İtfaiye Daire Başkanlığı\'ndan onaylı İtfaiye Uygunluk Raporu alınması yasal bir zorunluluktur.',
    category: 'Ruhsat Süreci'
  },
  {
    id: 'faq-2',
    question: 'İtfaiye uygunluk raporu hangi işletmeler için gereklidir?',
    answer: 'Kafe, restoran, otel, kreş, dershane, fırın, imalathane, fabrika, depo, lojistik merkezi, güzellik salonu, klinik, oto yıkama ve kat mülkiyetine tabi belirli m² üzerindeki hemen hemen tüm ticari işletmeler için zorunludur.',
    category: 'Ruhsat Süreci'
  },
  {
    id: 'faq-3',
    question: 'FireFix danışmanlık süreci ortalama ne kadar sürer?',
    answer: 'Süreç; işletmenizin metrekaresine, faaliyet alanına ve mevcut mekanın yangın yönetmeliğine olan uygunluğuna bağlı olarak değişiklik gösterir. Projelendirme ve eksiklerin giderilmesi dahil süreç ortalama 1 ila 3 hafta içerisinde tamamlanabilmektedir.',
    category: 'Süreç & Zaman'
  },
  {
    id: 'faq-4',
    question: 'Yangın söndürme tüpleri ve ekipmanların tedariğini de sağlıyor musunuz?',
    answer: 'Kesinlikle! FireFix sadece kağıt üstünde danışmanlık vermez. TSE belgeli yangın söndürme tüpleri, yangın dolapları, yönlendirme levhaları ve acil aydınlatma armatürlerinin tedariğini, montajını ve anahtar teslim kurulumunu sağlar.',
    category: 'Ekipman & Montaj'
  },
  {
    id: 'faq-5',
    question: 'Mevcut iş yerinde hangi değişiklikler gerekebilir?',
    answer: 'İlk keşif sonrası belirlenir. En sık karşılaşılan değişiklikler: Acil çıkış yönlendirme tabelaları eklenmesi, yangın tüplerinin 90-120cm yüksekliğe asılması, duman algılama dedektörü takılması ve kaçış koridorlarının açık hale getirilmesidir.',
    category: 'Saha Denetimi'
  },
  {
    id: 'faq-6',
    question: 'Kiralık veya tadilattaki dükkanda süreç ne zaman başlamalıdır?',
    answer: 'Tadilat ve dekorasyon çalışmalarına başlamadan hemen önce mühendislerimize danışmanız önerilir. Yanlış kapı yönü veya dar koridor gibi hatalar sonradan yüksek kırım ve maliyet oluşturur.',
    category: 'Süreç & Zaman'
  },
  {
    id: 'faq-7',
    question: 'Yangın tesisatı projesi çizdirmek için mimari proje şart mıdır?',
    answer: 'Evet, binanın mevcut onaylı mimari projesi veya CAD/PDF çizimi gereklidir. Eğer elinizde proje yoksa FireFix ekipleri yerinde saha ölçümü alarak projenizi sıfırdan çizebilir.',
    category: 'Projelendirme'
  },
  {
    id: 'faq-8',
    question: 'Belediye ve itfaiye yazışmalarını, takibini siz mi yapıyorsunuz?',
    answer: 'Evet! İtfaiye Daire Başkanlığı başvurusundan evrak takibine, denetim günündeki saha refakatinden onaylı raporun teslimine kadar tüm süreci sizin adınıza yürütüyoruz.',
    category: 'Ruhsat Süreci'
  },
  {
    id: 'faq-9',
    question: 'FireFix süreç boyunca işletmemize nasıl destek sağlar?',
    answer: 'İlk ücretsiz keşif randevusundan itibaren tek muhatabınız uzman mühendisimiz olur. Eksik tespiti, teknik çizim, TSE ekipman temini ve itfaiye refakati tek elden anahtar teslim sunulur.',
    category: 'Hizmet Kapsamı'
  },
  {
    id: 'faq-10',
    question: 'Danışmanlık ve proje ücretleri nasıl belirlenmektedir?',
    answer: 'İşletmenizin kullanım alanına (m²), faaliyetin tehlike sınıfına ve gerekli tesisat ihtiyacına göre şeffaf fiyatlandırma yapılır. Ücretsiz ön keşif sonrası net ve sabit teklif sunulur.',
    category: 'Fiyatlandırma'
  }
];

export const LONG_BLOG_POSTS: LongBlogPost[] = [
  {
    slug: 'is-yeri-yangin-yonetmeligi-zorunlu-kriterler',
    title: 'İş Yeriniz Yangın Yönetmeliğine Uygun mu? Zorunlu Kriterler Nelerdir?',
    metaTitle: 'İş Yeri Yangın Yönetmeliği Zorunlu Kriterleri Rehberi | FireFix',
    metaDesc: 'Acil çıkış kapılarından aydınlatmalara, duman dedektörlerinden yangın tüplerine kadar iş yerinizde itfaiyenin aradığı yasal zorunluluklar.',
    summary: 'Acil çıkış kapılarından aydınlatmalara, duman dedektörlerinden yangın tüplerinin yerleşimine kadar yeni veya mevcut iş yerinizde yönetmeliğin aradığı yasal zorunluluklar listesi.',
    readTime: '6 dk',
    date: '04 Kasım 2026',
    author: 'Onur Mühendisoğlu',
    authorTitle: 'Kıdemli Yangın Güvenliği Uzmanı',
    category: 'Mevzuat & Rehber',
    keyTakeaways: [
      'Kaçış yolları hiçbir zaman kilitli veya eşyayla tıkalı olmamalıdır.',
      'Her 250 m² alan için en az 1 adet 6kg KKT TSE belgeli yangın tüpü zorunludur.',
      'Kullanıcı sayısı 50 kişiyi aşan mekanlarda çift acil durum çıkış kapısı şarttır.',
      'Acil aydınlatmalar şebeke elektriği kesilse dahi en az 90 dakika yanmalıdır.'
    ],
    relatedServices: [
      { title: 'İş Yeri Açma ve Çalışma Ruhsatı', slug: 'is-yeri-acma-ve-calisma-ruhsati' },
      { title: 'İtfaiye Uygunluk Raporu Ön Denetimi', slug: 'itfaiye-uygunluk-raporu' }
    ],
    contentHeadings: [
      {
        heading: '1. Giriş: Yangın Güvenliği Neden Sadece Ruhsat İçi Değil, Hayati Bir Zorunluluktur?',
        paragraphs: [
          'Türkiye\'de ticari faaliyet gösteren tüm işletmeler, Binaların Yangından Korunması Hakkında Yönetmelik (BYKHY) hükümlerine tabidir. Yeni bir dükkan açarken veya ruhsat yenilerken itfaiye denetçilerinin mekanınızda aradığı kriterler, yangın anında can ve mal kaybını sıfıra indirmeyi hedefler.',
          'Bürokratik süreçlerde en çok zaman kaybettiren unsur, denetim gününde tespit edilen teknik eksikliklerdir. Bu rehberde, bir işletmenin resmi denetimden ilk seferde geçebilmesi için taşıması gereken zorunlu kriterleri detaylandırıyoruz.'
        ]
      },
      {
        heading: '2. Acil Çıkış ve Tahliye Yolları Standartları',
        paragraphs: [
          'İtfaiye ekiplerinin ilk incelediği alan kaçış yollarıdır. Kaçış koridorlarının net genişliği en az 120 cm olmalı ve üzerinde hiçbir koli, dolap veya engel bulunmamalıdır.',
          'Yangın kapıları mutlaka dışa (kaçış yönüne) doğru açılmalı, üzerinde panik bar mekanizması bulunmalı ve duman sızdırmaz fitillerle donatılmalıdır. Kullanıcı sayısı 50 kişiyi aşan mekanlarda en az iki bağımsız acil çıkış bulunması yasal zorunluluktur.'
        ]
      },
      {
        heading: '3. Yangın Söndürme Tüpleri ve Yerleşim Yüksekliği',
        paragraphs: [
          'İş yerlerinde kullanılacak yangın söndürme tüpleri TSE belgeli olmalı ve basınç göstergeleri (manometre) sürekli yeşil alanda bulunmalıdır.',
          'Düşük tehlike sınıfındaki alanlarda her 250 m² taban alanı için en az 1 adet 6kg Kuru Kimyevi Tozlu (KKT) tüp bulundurulmalıdır. Tüpler kapı veya kaçış yollarına yakın, yerden 90 cm ile 120 cm yükseklikteki özel askı aparatlarına monte edilmelidir.'
        ]
      },
      {
        heading: '4. Acil Durum Aydınlatma ve Yönlendirme Levhaları',
        paragraphs: [
          'Yangın anında elektriklerin kesilmesi ihtimaline karşı, şebekeden bağımsız bataryalı veya fotolümenli (karanlıkta parlayan) ÇIKIŞ / EXIT levhaları yerleştirilmelidir.',
          'Acil durum armatürleri, elektrik kesintisi gerçekleştiğinde en az 90 ila 180 dakika boyunca kaçış yollarını yeterli lümen seviyesinde aydınlatabilmelidir.'
        ]
      }
    ]
  },
  {
    slug: 'is-yeri-ruhsati-en-sik-yapilan-5-hata',
    title: 'İş Yeri Açma ve Çalışma Ruhsatı Alırken En Sık Yapılan 5 Hata',
    metaTitle: 'İş Yeri Ruhsatı Alırken Yapılan 5 Büyük Hata | FireFix',
    metaDesc: 'İş yeri açılış sürecinde yanlış kapı yönü, belgesiz tüpler ve hatalı krokiler nedeniyle ruhsat reddi yaşamamanız için kritik ipuçları.',
    summary: 'İş yeri açılış sürecinde acemi çözümler veya yönetmelik bilgisi eksikliği nedeniyle yapılan hatalar büyük maliyetlere ve ruhsat reddine yol açar.',
    readTime: '5 dk',
    date: '28 Ekim 2026',
    author: 'Selin Karadeniz',
    authorTitle: 'Proje & Danışmanlık Mühendisi',
    category: 'Ruhsat İpuçları',
    keyTakeaways: [
      'Tadilat yapmadan önce yangın güvenlik uzmanına danışın.',
      'Sertifikasız ve faturasız yangın tüplerini kesinlikle satın almayın.',
      'Elektrik iç tesisat kontrol raporunu itfaiye gelmeden hazır edin.',
      'Resmi müracaat öncesi mutlaka yerinde ön keşif yaptırın.'
    ],
    relatedServices: [
      { title: 'İş Yeri Açma ve Çalışma Ruhsatı', slug: 'is-yeri-acma-ve-calisma-ruhsati' },
      { title: 'Tahliye ve Kaçış Yolları Projesi', slug: 'tahliye-ve-kacis-projeleri' }
    ],
    contentHeadings: [
      {
        heading: '1. Hata 1: Dekoru ve Tadilatı Bitirop En Son Yangın Önlemlerini Düşünmek',
        paragraphs: [
          'Pek çok işletme sahibi iç mimari dekorasyonu tamamladıktan sonra itfaiye müracaatı yapar. Ancak sonradan fark edilen yanlış kapı açılış yönü veya dar koridorlar, binlerce liralık kırım ve dekorasyon yıkımına yol açar.',
          'Çözüm: Tadilata başlamadan önce FireFix mühendisleri ile alanın vaziyet planı incelenmelidir.'
        ]
      },
      {
        heading: '2. Hata 2: Standarda Uymayan Ucuz veya Faturasız Yangın Tüpleri Almak',
        paragraphs: [
          'İtfaiye denetçileri tüplerin sadece varlığına değil, TSE damgasına, imalat tarihine ve yetkili dolum firması sertifikasına bakar. Faturasız tüpler doğrudan reddedilir.'
        ]
      },
      {
        heading: '3. Hata 3: Elektrik İç Tesisat Kontrol Raporunu Unutmak',
        paragraphs: [
          'Yangınların önemli bir kısmı elektrik kontağından çıkar. Bu nedenle itfaiye, yetkili elektrik mühendisinden onaylı topraklama ve iç tesisat denetim raporunu zorunlu evrak olarak ister.'
        ]
      }
    ]
  },
  {
    slug: 'anahtar-teslim-yangin-guvenligi-ve-ruhsat-danismanligi',
    title: 'Projeden Sahaya: Anahtar Teslim Yangın Güvenliği Neden Önemlidir?',
    metaTitle: 'Anahtar Teslim Yangın Güvenliği ve Ruhsat Danışmanlığı | FireFix',
    metaDesc: 'Mimari projelendirmeden saha ekipmanlarının tedariğine ve nihai ruhsat onayına kadar tüm adımları tek elden yönetmenin avantajları.',
    summary: 'Mimari projelendirmeden saha ekipmanlarının tedariğine ve nihai ruhsat onayına kadar tüm bürokratik ve teknik adımları tek elden yönetmenin işletmelere sağladığı zaman ve bütçe avantajları.',
    readTime: '4 dk',
    date: '15 Ekim 2026',
    author: 'Onur Mühendisoğlu',
    authorTitle: 'Kıdemli Yangın Güvenliği Uzmanı',
    category: 'Mühendislik Çözümleri',
    keyTakeaways: [
      'Ayrı ayrı hizmet sağlayıcılarla çalışmak iletişim kopukluğu yaratır.',
      'Tek elden danışmanlık bütçe aşımını ve gecikmeleri engeller.',
      'Resmi onay garantisi ile ceza ve ruhsat reddi riski ortadan kalkar.'
    ],
    relatedServices: [
      { title: 'İtfaiye Onay Proje Dosyası', slug: 'itfaiye-onay-proje-dosyasi' },
      { title: 'Yangın Söndürme Tüpleri Tedariği', slug: 'yangin-sondurme-tupleri-ve-ekipmanlari' }
    ],
    contentHeadings: [
      {
        heading: '1. Çoklu Tedarikçi Karmaşası İşletmenize Zaman Kaybettirir',
        paragraphs: [
          'Proje çizen mimar ayrı, tüp getiren tedarikçi ayrı, elektrik kontrolcüsü ayrı olduğunda sorumluluk karmaşası yaşanır. İtfaiye denetiminde bir hata çıktığında taraflar suçu birbirine atar.',
          'FireFix anahtar teslim modeliyle tüm süreci tek çatı altında üstlenir.'
        ]
      }
    ]
  }
];

export const SECTORS_DATA: SectorInfo[] = [
  {
    slug: 'kafe-restoran-firin',
    title: 'Kafe, Restoran & Fırın İşletmeleri',
    shortDesc: 'Endüstriyel mutfaklar, LPG/doğalgaz tesisatları, ocak başı davlumbaz söndürme ve baca kontrolleri.',
    riskClass: 'Tehlikeli',
    criticalRequirements: [
      'Davlumbaz içi otomatik gazlı söndürme sistemi',
      'Mutfak alanında solenoid vanalı otomatik gaz kesme dedektörü',
      'Ocak alanlarında 5kg CO2 söndürme tüpü',
      'Müşteri salonu için fotolümen acil durum çıkış levhaları'
    ],
    commonMistakes: [
      'Davlumbaz bacasını standart dışı malzemeden yaptırmak',
      'Gaz vanasının manuel erişilemez yere konulması'
    ]
  },
  {
    slug: 'fabrika-imalathane-depo',
    title: 'Fabrika, İmalathane & Lojistik Depolar',
    shortDesc: 'Yüksek yangın yüküne sahip sanayi alanları için sprinkler, hidrant hatları ve duman tahliye fanları.',
    riskClass: 'Çok Tehlikeli',
    criticalRequirements: [
      'Otomatik sprinkler (yağmurlama) söndürme hatları',
      'Sulu yangın dolabı tesisatı ve yedekli yangın pompası',
      'Çatı tipi mekanik duman tahliye kapakları',
      'Adresli yangın ihbar ve flaşörlü siren sistemi'
    ],
    commonMistakes: [
      'Raf aralıklarını yangın dolabı erişimini kapatacak şekilde dizmek',
      'Yangın pompası jeneratör bağlantısını unutmak'
    ]
  },
  {
    slug: 'otel-pansiyon-konaklama',
    title: 'Otel, Pansiyon & Yurt Binaları',
    shortDesc: 'Gece konaklamalı yüksek insan yoğunluğuna sahip binalarda kaçış merdivenleri ve sesli tahliye.',
    riskClass: 'Tehlikeli',
    criticalRequirements: [
      '90 dakika yangına dayanıklı panik barlı kaçış kapıları',
      'Her odada adresli duman dedektörü',
      'Sesli ve ışıklı acil anons ve tahliye sistemi',
      '3 saat kesintisiz acil durum koridor aydınlatması'
    ],
    commonMistakes: [
      'Yangın merdiveni kapılarını kilitli tutmak',
      'Dedektör üzerlerini müşteri tarafından kapatılmasına izin vermek'
    ]
  },
  {
    slug: 'okul-kres-kurs',
    title: 'Okul, Kreş & Özel Eğitim Kurumları',
    shortDesc: 'Milli Eğitim Bakanlığı (MEB) ve İtfaiye yönetmeliklerine uygun sıfır toleranslı tahliye önlemleri.',
    riskClass: 'Tehlikeli',
    criticalRequirements: [
      'Kreşlerde zemin veya 1. kat zorunluluğu',
      'Çift bağımsız yangın kaçış merdiveni',
      'Öğrencilerin takılmayacağı kaymaz kaçış basamakları',
      'Panik barlı dışa açılan koruma kapıları'
    ],
    commonMistakes: [
      'Kreş ve anaokulunu yüksek katlara kurmaya çalışmak',
      'Kaçış merdiveni basamak yüksekliğini standart dışı tutmak'
    ]
  },
  {
    slug: 'ofis-plaza-klinik',
    title: 'Ofis, Plaza & Sağlık Klinikleri',
    shortDesc: 'İş merkezleri, doktor muayenehaneleri ve tıp merkezleri için yasal ruhsat önlemleri.',
    riskClass: 'Az Tehlikeli',
    criticalRequirements: [
      'Kat koridorlarında 6kg KKT yangın tüpü',
      'Sistem odalarında CO2 veya gazlı söndürme',
      'Acil durum kaçış krokisi yerleşimi'
    ],
    commonMistakes: ['Sistem odalarında su bazlı söndürücü bulundurmak']
  },
  {
    slug: 'ticari-magaza-dukkan',
    title: 'Ticari Mağaza & Pasaj İçi Dükkanlar',
    shortDesc: 'Cadde dükkanları, giyim mağazaları ve pasaj alanları için hızlı itfaiye raporu çözümleri.',
    riskClass: 'Az Tehlikeli',
    criticalRequirements: [
      'Her 250 m² için 1 adet 6kg KKT yangın tüpü',
      'Fotolümen ÇIKIŞ yönlendirme tabelası',
      'Aydınlatma panosu yanında yangın tüpü'
    ],
    commonMistakes: ['Tüpleri tezgah altına saklamak veya dolaba kilitlemek']
  }
];

export const REGIONAL_SEO_DATA = {
  cityName: 'Sakarya',
  regionName: 'Marmara Bölgesi',
  heroIntro: 'Sakarya (Adapazarı, Serdivan, Erenler, Arifiye, Hendek, Akyazı, Sapanca, Karasu, Geyve) ve çevre Kocaeli, Düzce, Bolu, İstanbul, Bursa illerindeki tüm işletmelere 24 saat içinde yerinde keşif hizmeti sunuyoruz.',
  districts: [
    { name: 'Serdivan', activeProjects: 65, desc: 'Aşırı yoğun kafe, restoran, konaklama ve özel öğrenci yurtları yangın ruhsatı projeleri.' },
    { name: 'Adapazarı', activeProjects: 52, desc: 'Merkez ticari dükkanlar, çarşı içi işletmeler, sağlık merkezleri ve resmi kurumlar.' },
    { name: 'Erenler', activeProjects: 38, desc: 'Erenler Sanayi Sitesi, otomotiv servisleri ve imalathaneler.' },
    { name: 'Arifiye', activeProjects: 29, desc: '1. Organize Sanayi Bölgesi (OSB) fabrikaları ve lojistik depoları.' },
    { name: 'Hendek', activeProjects: 24, desc: '2. OSB büyük ölçekli sanayi tesisleri ve depolama alanları.' },
    { name: 'Akyazı', activeProjects: 18, desc: 'İmalathaneler, fırınlar ve ticari alanlar.' },
    { name: 'Sapanca', activeProjects: 22, desc: 'Bungalov tesisleri, oteller, restorantlar ve turizm alanları.' },
    { name: 'Karasu & Kocaali', activeProjects: 15, desc: 'Turistik tesisler, yazlık işletmeler ve ticari mağazalar.' }
  ],
  neighborCities: [
    { name: 'Kocaeli (İzmit / Gebze)', desc: 'Gebze OSB, İzmit Sanayi Tesisleri ve Liman Depoları.' },
    { name: 'Düzce', desc: 'Düzce OSB imalathaneleri ve ticari merkezler.' },
    { name: 'Bolu', desc: 'Turizm tesisleri, oteller ve gıda sanayii.' },
    { name: 'İstanbul (Anadolu / Avrupa)', desc: 'Ticaret plazaları, AVM içi mağazalar ve depolar.' },
    { name: 'Bursa & Yalova', desc: 'Otomotiv tedarikçileri, tekstil fabrikaları ve tersaneler.' }
  ]
};
