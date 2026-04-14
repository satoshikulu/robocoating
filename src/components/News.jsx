import { useEffect, useRef } from 'react'
import './News.css'
import haberlerImage from '../assets/haberler.jpeg'
import aydOtomotivImage from '../assets/aydotomotiv.jpeg'
import paintExpoImage from '../assets/paintexpo2022.png'
import paintExpo2015Image from '../assets/PaintExpo2015.jpeg'

function News({ setCurrentSection }) {
  const newsRef = useRef(null)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const items = newsRef.current?.querySelectorAll('.news-article, .news-sidebar-item')
    items?.forEach((item, index) => {
      item.classList.add('scroll-fade-in', `stagger-${(index % 6) + 1}`)
      observer.observe(item)
    })

    return () => observer.disconnect()
  }, [])

  const allNews = [
    {
      id: 0,
      title: "Robocoating Türkiye'nin İlk 12 Eksen Boyama Robotunu Kurdu",
      date: "05.10.2024",
      image: haberlerImage,
      imageAlt: "Robocoating 12 Eksen Boyama Robotu",
      caption: "Türkiye'nin ilk 12 eksen boyama robotu kurulumu",
      tags: ['Robotik Boyama', '12 Eksen', 'SMS İşmakineleri', 'Türkiye İlk'],
      content: [
        "Robocoating, Türkiye'nin sanayi devrimine öncülük ediyor! Ülkemizin ilk 12 eksen boya robotunu başarıyla kurarak sektörde bir ilke imza attık. Bu yenilikçi teknoloji, SMS İşmakineleri'nin üretim süreçlerinde devrim yaratacak.",
        "12 eksenli boya robotumuz, üstün hassasiyeti ve esnekliğiyle yüksek kaliteli kaplama sonuçları sağlarken, üretim verimliliğini de maksimum seviyeye çıkarıyor. SMS İşmakineleri'nin iş makineleri üretiminde kullanılacak bu robot, sektördeki standartları yeniden belirleyecek.",
        "Robocoating Genel Müdürü Selim Şahin, 'Türkiye'nin ilk 12 eksen boya robotunu kurmanın gururunu yaşıyoruz. Bu teknolojinin, iş makineleri üretiminde önemli bir fark yaratacağına inanıyoruz,' dedi.",
        "Bu adım, Robocoating'in yenilikçilik ve mühendislik mükemmeliyeti konusundaki kararlılığını ve sanayiye olan katkısını bir kez daha ortaya koyuyor."
      ]
    },
    {
      id: 1,
      title: "Ayd Otomotiv Robocoating'e Büyük Güven",
      date: "09.08.2024",
      image: aydOtomotivImage,
      imageAlt: "Ayd Otomotiv Robocoating İş Birliği",
      caption: "Ayd Otomotiv'in Robocoating teknolojisine duyduğu güven",
      tags: ['Ayd Otomotiv', 'Otomotiv', 'Robotik Boyama', 'İş Birliği'],
      content: [
        "Ayd Otomotiv'den Robocoating'e Büyük Güven: Robotlu Fren Diski Boyama Hattı Kuruldu!",
        "Sektöründe lider konumda olan Ayd Otomotiv, robotlu boyama hattı yatırımı için Robocoating'i seçti! Robocoating'in uzmanlığıyla kurulan yeni robotlu fren diski boyama hattı, otomotiv endüstrisinde yüksek kalite ve verimliliği yeni bir seviyeye taşıyor.",
        "Robocoating'in sunduğu ileri teknolojili robot sistemleri, fren disklerinin hassas ve kusursuz bir şekilde boyanmasını sağlıyor. Bu yenilikçi sistem, üretim süreçlerinde mükemmel sonuçlar elde ederken, aynı zamanda üretim hızını ve kalite standartlarını artırıyor.",
        "Ayd Otomotiv Genel Müdürü Halil Aydın, 'Robocoating'in sunduğu robot teknolojisi, fren diski boyama hattımızda büyük bir fark yaratacak. Kalite ve verimlilik konusundaki hedeflerimize ulaşmamızda Robocoating'in katkısı çok değerli,' dedi.",
        "Robocoating Genel Müdürü Selim Şahin ise, 'Ayd Otomotiv'in bu prestijli projesinde yer almak bizim için büyük bir onur. Teknolojimizin, sektördeki standartları yükselteceğine ve mükemmel sonuçlar sağlayacağına inanıyoruz,' şeklinde konuştu.",
        "Bu önemli iş birliği, Robocoating'in endüstrideki liderliğini ve mühendislik mükemmeliyetini bir kez daha gözler önüne seriyor."
      ]
    },
    {
      id: 2,
      title: "PaintExpo 2022 Robocoating",
      date: "05.08.2024",
      image: paintExpoImage,
      imageAlt: "PaintExpo 2022 Robocoating Fuarı",
      caption: "Robocoating PaintExpo 2022 Fuarı'nda",
      tags: ['PaintExpo', 'Fuar', 'Yüzey İşleme', 'Otomatik Boya'],
      content: [
        "Robocoating® Firması, 21-24 Haziran 2022 tarihleri arasında gerçekleştirilecek olan PaintExpo Fuarı'na katılıyor. Yüzey işleme teknolojileri alanında uzmanlaşmış olan firma, ziyaretçilere son derece gelişmiş bir otomatik boya kaplama çözümü sunuyor.",
        "PaintExpo Fuarı, boya kaplama ve yüzey işleme teknolojileri alanında dünya çapında bir etkinlik olarak bilinmektedir. Her yıl binlerce ziyaretçi, sektörün en son yeniliklerini keşfetmek ve işbirliği yapmak için bu fuarda bir araya gelir.",
        "Robocoating Firması, bu yılki PaintExpo Fuarı'nda, son teknolojiye sahip otomatik boya kaplama çözümünü sergileyecek. Bu sistem, müşterilerin ihtiyaçlarına göre özelleştirilebilir ve yüksek kaliteli sonuçlar sağlar.",
        "Firmanın CEO'su, fuara katılmaktan büyük heyecan duyduklarını ve ziyaretçilere, sektördeki en yenilikçi ve ileri teknolojiye sahip ürünleri sunmayı hedeflediklerini belirtti.",
        "Robocoating® Firması, PaintExpo Fuarı'na katılımıyla, yüzey işleme teknolojilerindeki liderliğini bir kez daha kanıtlamayı amaçlıyor. Fuarda, firma yetkilileriyle bir araya gelerek, ürünler hakkında detaylı bilgi alabilirsiniz."
      ]
    },
    {
      id: 3,
      title: "PaintExpo 2015",
      date: "09.08.2024",
      image: paintExpo2015Image,
      imageAlt: "PaintExpo 2015 Robocoating Fuarı",
      caption: "Robocoating PaintExpo 2015 Fuarı'nda",
      tags: ['PaintExpo', 'Fuar', 'Endüstriyel Boyama', 'Kaplama'],
      content: [
        "Robocoating® firması olarak 2015 yılında düzenlenen PaintExpo fuarına katıldık ve başarılı bir şekilde tamamladık. Bu fuar, endüstriyel boyama ve kaplama teknolojilerinin önde gelen uluslararası fuarlarından biridir ve her yıl düzenlenir.",
        "Robocoating® olarak, yüzey kaplama sektöründe faaliyet gösteriyoruz ve bu alanda son teknolojilere sahip çözümler sunuyoruz. PaintExpo 2015 fuarında, müşterilerimize en son teknolojileri sunmanın yanı sıra, sektördeki son trendleri ve gelişmeleri de takip ettik.",
        "Fuarda, müşterilerimize özellikle otomotiv, havacılık ve endüstriyel sektörlerde kullanılan kaplama çözümlerimizi tanıttık. Ayrıca, yüzey hazırlığından boya uygulamasına kadar her aşamada kullanılan otomatik sistemlerimiz hakkında bilgi verdik.",
        "Robocoating® olarak, müşterilerimize daha yüksek kalitede, daha verimli ve daha ekonomik çözümler sunmaya devam edeceğiz. PaintExpo 2015 fuarı bizim için başarılı bir etkinlik oldu ve bu alandaki liderliğimizi sürdürmemize yardımcı oldu."
      ]
    }
  ]

  const sidebarNews = [
    { title: "Cezayir Otomotiv Devi Bizi Tercih Etti", date: "09.08.2024 10:24" },
    { title: "Paint Expo 2013 İstanbul", date: "09.08.2024 10:16" },
    { title: "Paint Expo 2014 Almanya", date: "09.08.2024 10:15" },
    { title: "Xylexpo 2014 İtalya", date: "09.08.2024 10:15" },
    { title: "Drema 2014 Polonya", date: "09.08.2024 10:14" },
    { title: "Kazakistan İhracatımız Gerçekleşti", date: "09.08.2024 10:14" },
    { title: "Faber-Franke Robocoating Teknolojisini Tercih Etti", date: "09.08.2024 10:11" },
    { title: "Robotik Boya Makinaları Ligna 2015 Almanya", date: "09.08.2024 10:10" },
    { title: "Paint Surface Sektörel Dergi", date: "09.08.2024 10:10" },
    { title: "Robocoating Image MATCH 3D pro", date: "05.08.2024 19:22" }
  ]

  return (
    <section className="news-section" ref={newsRef}>
      <div className="container">
        {/* Back to Home Button */}
        <div className="back-to-home">
          <button onClick={() => setCurrentSection('home')} className="btn-back-home">
            <span className="back-icon icon-home"></span>
            <span>Ana Sayfa</span>
          </button>
        </div>

        <div className="section-header scroll-fade-in">
          <h2>Haberler</h2>
          <p className="section-subtitle">Robocoating'den son gelişmeler ve sektör haberleri</p>
        </div>

        {/* All News Articles */}
        <div className="news-content-wrapper">
          {allNews.map((news) => (
            <article key={news.id} className="news-article scroll-fade-in">
              <div className="article-header">
                <h1 className="article-title">{news.title}</h1>
                <div className="article-date">
                  <span className="date-icon">📅</span>
                  <span>{news.date}</span>
                </div>
              </div>

              <div className="article-content">
                <div className="article-image-container">
                  <img src={news.image} alt={news.imageAlt} className="article-image" />
                  <div className="image-caption">
                    <span className="caption-icon">📷</span>
                    <span>{news.caption}</span>
                  </div>
                </div>
                <div className="article-text">
                  {news.content.map((paragraph, index) => (
                    <p key={index} className="article-paragraph">{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="article-footer">
                <div className="article-tags">
                  {news.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="article-share">
                  <span className="share-label">Paylaş:</span>
                  <button className="share-btn">📧</button>
                  <button className="share-btn">💬</button>
                  <button className="share-btn">📱</button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Other News Sidebar */}
        <aside className="news-sidebar-full scroll-fade-in">
          <h3 className="sidebar-title">Diğer Haberler</h3>
          <div className="sidebar-list">
            {sidebarNews.map((item, index) => (
              <div key={index} className="news-sidebar-item">
                <div className="sidebar-item-date">{item.date}</div>
                <h4 className="sidebar-item-title">{item.title}</h4>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  )
}

export default News
