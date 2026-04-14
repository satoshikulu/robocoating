import './Catalog.css'
import paintrobot from '../assets/paintrobot.png'

function Catalog({ setCurrentSection }) {
  const catalogImages = [
    {
      title: 'Robot Boyama Sistemi',
      description: '6 eksenli endüstriyel robot ile hassas boyama uygulamaları',
      image: 'https://images.unsplash.com/photo-1731781911606-2386b4865bda?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Otomatik Boyama Hattı',
      description: 'Tam otomatik boyama üretim hattı',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&q=80'
    },
    {
      title: 'Endüstriyel Kaplama',
      description: 'Profesyonel endüstriyel kaplama çözümleri',
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&h=600&fit=crop&q=80'
    },
    {
      title: 'Yüzey Hazırlık Teknolojisi',
      description: 'İleri teknoloji yüzey hazırlık sistemleri',
      image: paintrobot
    },
    {
      title: 'Kalite Kontrol Sistemleri',
      description: 'Otomatik kalite kontrol ve test ekipmanları',
      image: 'https://plus.unsplash.com/premium_photo-1667509322957-9c4649741ee3?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Otomasyon Çözümleri',
      description: 'Endüstri 4.0 tam entegre otomasyon sistemleri',
      image: 'https://plus.unsplash.com/premium_photo-1764691314995-1f969f5be043?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ]

  return (
    <section className="catalog">
      <div className="container">
        {/* Back to Home Button */}
        <div className="back-to-home">
          <button onClick={() => setCurrentSection('home')} className="btn-back-home">
            <span className="back-icon icon-home"></span>
            <span>Ana Sayfa</span>
          </button>
        </div>

        <div className="section-header fade-in">
          <h2>KATALOG</h2>
          <p className="section-subtitle">Endüstriyel robot boyama ve kaplama teknolojilerimiz</p>
        </div>

        {/* Catalog Grid */}
        <div className="catalog-grid">
          {catalogImages.map((item, index) => (
            <div key={index} className={`catalog-card fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="catalog-image-wrapper">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="catalog-image"
                  loading="lazy"
                />
                <div className="catalog-overlay">
                  <div className="catalog-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="catalog-cta scale-in">
          <h3>Projeleriniz için bizimle iletişime geçin</h3>
          <p>Size özel çözümler sunmak için hazırız</p>
          <button 
            className="btn-contact"
            onClick={() => setCurrentSection('contact')}
          >
            <span>İletişime Geç</span>
            <span className="btn-arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Catalog
