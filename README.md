# Robocoating - Professional Endüstriyel Kaplama Web Sitesi

Modern, responsive React web uygulaması - Profesyonel endüstriyel tasarım ile.

## 🚀 Özellikler

- ⚡ **Vite** ile hızlı geliştirme
- 🎨 **Profesyonel Endüstriyel Tasarım** - Modern ve şık görünüm
- 🎯 **Gelişmiş UI/UX** - Kullanıcı deneyimi optimize edilmiş
- 📱 **Fully Responsive** - Tüm cihazlarda mükemmel görünüm
- 🔄 **State Management** ile dinamik içerik
- ✨ **CSS Animations** - Smooth geçişler ve animasyonlar
- 🌍 **Çoklu sayfa** desteği
- 🎨 **Industrial Color Scheme** - Profesyonel kırmızı-gri tema
- 💼 **Trust Elements** - Sertifika ve istatistikler
- 🚀 **Performance Optimized** - Hızlı yükleme

## 📦 Kurulum

### Gereksinimler

- Node.js (v16 veya üzeri)
- npm veya yarn

### Adımlar

1. Proje dizinine gidin:
```bash
cd robocoating-react
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

4. Tarayıcınızda açın:
```
http://localhost:3000
```

## 🛠️ Kullanılabilir Scriptler

```bash
# Geliştirme sunucusunu başlat
npm run dev

# Production için build al
npm run build

# Build önizleme
npm run preview

# Lint kontrolü
npm run lint
```

## 📁 Proje Yapısı

```
robocoating-react/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Üst navigasyon
│   │   ├── Header.css
│   │   ├── Hero.jsx            # Ana sayfa hero bölümü
│   │   ├── Hero.css
│   │   ├── Services.jsx        # Hizmetler bölümü
│   │   ├── Services.css
│   │   ├── About.jsx           # Hakkımızda bölümü
│   │   ├── About.css
│   │   ├── Contact.jsx         # İletişim formu
│   │   ├── Contact.css
│   │   ├── Footer.jsx          # Alt bilgi
│   │   └── Footer.css
│   ├── App.jsx                 # Ana uygulama
│   ├── App.css
│   ├── index.css               # Global stiller
│   └── main.jsx                # Giriş noktası
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Bileşenler

### Header
- Responsive navigasyon menüsü
- Mobil hamburger menü
- Aktif sayfa göstergesi

### Hero
- Etkileyici ana sayfa bölümü
- Animasyonlu istatistikler
- Call-to-action butonları

### Services
- 6 farklı hizmet kartı
- Hover animasyonları
- Responsive grid yapısı

### About
- Firma hakkında bilgi
- Özellikler ve başarılar
- Modern tasarım

### Contact
- İletişim formu
- İletişim bilgileri
- Form validasyonu

### Footer
- Sosyal medya bağlantıları
- Hızlı erişim linkleri
- Responsive layout

## 🎯 Özelleştirme

### Renkleri Değiştirme

`src/index.css` dosyasındaki CSS değişkenlerini düzenleyin:

```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #1e40af;
  --accent-color: #f59e0b;
  /* ... diğer renkler */
}
```

### İçerikleri Güncelleme

Her bileşen dosyasını (.jsx) düzenleyerek içerikleri değiştirebilirsiniz:

- `src/components/Hero.jsx` - Ana sayfa içeriği
- `src/components/Services.jsx` - Hizmet listesi
- `src/components/About.jsx` - Hakkımızda bilgileri
- `src/components/Contact.jsx` - İletişim bilgileri

### Yeni Bileşen Ekleme

1. `src/components/` klasöründe yeni dosya oluşturun
2. Bileşeninizi yazın
3. `App.jsx`'e import edin ve kullanın

## 📱 Responsive Tasarım

Site tamamen responsive'tir ve şu cihazlarda test edilmiştir:
- 📱 Mobil (320px - 768px)
- 📱 Tablet (768px - 1024px)
- 💻 Desktop (1024px+)

## 🚀 Production

Production için build aldığınızda, `dist` klasöründe optimize edilmiş dosyalar oluşturulur:

```bash
npm run build
```

Bu dosyaları herhangi bir statik hosting servisinde yayınlayabilirsiniz:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Firebase Hosting

## 📝 Lisans

Bu proje özel kullanım içindir.

## 💬 Destek

Sorularınız için:
- 📧 Email: info@robocoating.com
- 📱 Telefon: +90 (212) 555 55 55

## 🙏 Teşekkürler

Bu proje, orijinal Robocoating sitesinden ilham alınarak geliştirilmiştir.

---

**Robocoating** - Endüstriyel Kaplama Çözümleri
