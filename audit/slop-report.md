# FireFix — AI Slop & Sanat Yönetimi Denetim Raporu (`audit/slop-report.md`)

**Tarih:** 08 Kasım 2026  
**Durum:** Denetim Tamamlandı (Adım 1)  
**Hedef:** Jenerik SaaS / Yapay Zekâ slop görünümünü tamamen temizleyip, resmî ve disiplinli **"Teknik Pafta" (ISO 7010 & İsviçre Tipografisi)** sanat yönetimine geçiş yapmak.

---

## Bulgu Listesi (`dosya:satır — kalıp — ne yapılacak`)

### 1. Görsel & Stil Slop Bulguları

- `src/App.tsx:50` — `bg-slate-950 text-slate-100 selection:bg-orange-500` — Düz Kâğıt (`#F3F0E8`) zemin ve Mürekkep (`#141414`) metin renk sistemine dönüştürülecek, karanlık temalı alanlar yalnızca pafta kontrast blokları olarak kalacak.
- `src/index.css:1-15` — `@import "tailwindcss"` + jenerik font tanımları — Inter/Plus Jakarta/Outfit fontları kaldırılıp Archivo (Başlık), IBM Plex Sans (Gövde) ve IBM Plex Mono (Teknik Kodlar) fontları yüklenecek.
- `src/components/Navbar.tsx:42` — `w-2 h-2 rounded-full bg-emerald-400 animate-pulse` — Yanıp sönen neon nokta ve pill badges kaldırılacak; düz mono durum etiketi eklenecek.
- `src/components/Navbar.tsx:77` — `w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600` — Gradient logosu kaldırılacak; Güvenlik Kırmızısı (`#C1121F`) keskin amblem ile değiştirilecek.
- `src/components/Navbar.tsx:106` — `rounded-2xl bg-slate-950 border-slate-800 shadow-2xl` — Rounded yuvarlaklıklar 0px/2px yapılacak, gölgeler kaldırılıp 1px pafta çizgisi ile ayrılacak.
- `src/pages/HomePage.tsx:44` — `bg-gradient-to-tr from-orange-600/15 via-amber-500/10 to-transparent blur-3xl` — Arkada parlayan bulanık renk lekesi (blur blob) tamamen kaldırılacak.
- `src/pages/HomePage.tsx:89` — `bg-gradient-to-r from-orange-500 to-amber-600 shadow-orange-500/25` — Gradient ve glow gölgeler kaldırılacak; düz Güvenlik Kırmızısı (`#C1121F`) dikdörtgen buton yapılacak.
- `src/pages/HomePage.tsx:107-152` — `rounded-2xl p-6 shadow-2xl` — Jenerik kart yapısı kaldırılacak; gerçek teknik ölçekli AutoCAD pafta anteti (SVG) çizilecek (`FIREFIX MÜHENDİSLİK · TAHLİYE PLANI · ÖLÇEK 1:100`).
- `src/pages/HomePage.tsx:156-175` — `450+ Tamamlanan İtfaiye Ruhsatı` / `%100 İlk Denetimde Onay` — Uydurma metrik şeridi kaldırılıp somut karşılaştırma tablosu ile değiştirilecek.
- `src/pages/HomePage.tsx:193-300` — `bg-slate-900/80 rounded-2xl bento grid` — Bento grid 3'lü kartlar kaldırılacak; pafta çizgi ajandası şeklinde 1px dikey ayrılmış numaralı satır listesine (`01 — İş Yeri Açma ve Çalışma Ruhsatı →`) çevrilecek.
- `src/components/ComplianceCalculator.tsx:50` — `rounded-3xl shadow-2xl bg-gradient-to-r` — Gradient ve yuvarlaklıklar kaldırılacak; pafta teknik hesaplama matrisine dönüştürülecek.
- `src/components/AuditWizardModal.tsx:52` — `bg-black/80 backdrop-blur-sm rounded-2xl` — Glassmorphism ve yumuşak köşeler kaldırılacak; keskin kenarlı resmî pafta kontrol modali yapılacak.
- `src/components/QuoteModal.tsx:81` — `bg-slate-950 border-slate-800 rounded-2xl shadow-2xl` — Pafta formu düzenine geçilecek, keskin dikdörtgen alanlar kullanılacak.
- `src/components/Footer.tsx:157` — `rounded-3xl bg-gradient-to-r` — Footer bülten alanı düz kâğıt/mürekkep pafta anteti olarak yeniden düzenlenecek.
- `src/pages/AboutPage.tsx:46-60` — `rounded-3xl p-6 shadow-sm` — Yuvarlak kartlar kaldırılacak; teknik bilgi matrisi yapılacak.
- `src/pages/BlogListPage.tsx:49` — `Sparkles` emoji piktogramı — Tüm süs emojileri kaldırılacak, özgün ISO 7010 piktogramları kullanılacak.
- `src/pages/ContactPage.tsx:317` — `animate-bounce rounded-full` — Zıplayan animasyonlar kaldırılacak; statik konum harita paftası yapılacak.

### 2. Metin (Türkçe Slop) Bulguları

- `src/components/Navbar.tsx:46` — "Sakarya & Marmara Bölgesi Yangın Ruhsat Uzmanı" — "SAKARYA · YANGIN GÜVENLİĞİ VE RUHSAT MÜHENDİSLİĞİ OFİSİ"
- `src/pages/HomePage.tsx:183` — "Uçtan Uca Yangın Danışmanlık Çözümleri" — "MEVZUAT VE TEKNİK UYGULAMA METROLOJİSİ"
- `src/pages/HomePage.tsx:159` — "450+ Tamamlanan İtfaiye Ruhsatı" — Gerçek süreç verisi: "Projeden itfaiye onayına ortalama 1–3 hafta."
- `src/components/Footer.tsx:186` — "uçtan uca profesyonel mühendislik çözümleri" — "Binaların Yangından Korunması Hakkında Yönetmelik gereğince mühendislik projelendirmesi ve saha uygulaması."
- `src/pages/AboutPage.tsx:75` — "Sadece Evrak Takibi Değil, Tam Kapsamlı Mühendislik" — "Mevzuat Analizi, CAD Çizimi, Saha Uygulaması ve Resmi İtfaiye Başvurusu."

---

## Düzeltme Planı Özeti (Adım 3, 4, 5)

1. **Font Yüklemeleri:** `@fontsource/archivo` (Headings/Condensed), `@fontsource/ibm-plex-sans` (Body), `@fontsource/ibm-plex-mono` (Technical tags).
2. **Renk Paleti Değişimi:**
   - Kâğıt Zemin: `#F3F0E8`
   - Mürekkep Metin: `#141414`
   - Çizgi: `#141414` (%15 opaklık)
   - Güvenlik Kırmızısı: `#C1121F` (Sadece birincil CTA)
   - Kaçış Yeşili: `#1F7A4D` (Sadece onay durumları)
3. **Piktogram Seti:** 6-8 adet özel SVG piktogram (ISO 7010 geometrik çizim dilinde).
4. **Hero & Pafta Anteti:** Çizgisel kat planı SVG çizimi + canlı ölçek anteti.
5. **Karşılaştırma Tablosu:** "Kendiniz Uğraşırsanız" vs "FireFix Mühendislik ile".
6. **Hareket:** Tüm jenerik animasyonlar kaldırılarak yalnızca Hero pafta çizgisi çizilme efekti ve Adım onay zaman çizelgesi bırakılacak.

---
*Rapor Kullanıcı Onayına Sunulmuştur. Düzeltme Aşamasına Geçiliyor.*
