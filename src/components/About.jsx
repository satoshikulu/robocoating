import './About.css'

function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text fade-in">
            <h2>Hakkımızda</h2>
            <p className="lead">
              20 yılı aşkın deneyimimizle endüstriyel kaplama sektöründe öncü çözümler sunuyoruz.
            </p>
            <p>
              Robocoating olarak, robot teknolojisi ve uzman ekibimizle birleşerek müşterilerimize 
              en yüksek kaliteli kaplama hizmetlerini sağlamaktayız. Sürekli gelişim ve yenilikçilik 
              anlayışımızla sektörün öncü firmalarından biri haline geldik.
            </p>
            <p>
              Müşteri memnuniyetini ön planda tutarak, her projede en iyi sonuçları elde etmek için 
              çalışıyoruz. Modern tesislerimiz ve son teknoloji ekipmanlarımızla hizmet veriyoruz.
            </p>
            
            <div className="features">
              <div className="feature-item">
                <span className="check">✓</span>
                <div>
                  <h4>ISO 9001 Sertifikalı</h4>
                  <p>Kalite yönetim sistemi</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="check">✓</span>
                <div>
                  <h4>Çevre Dostu</h4>
                  <p>Sürdürülebilir üretim</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="check">✓</span>
                <div>
                  <h4>Hızlı Teslimat</h4>
                  <p>Zamanında teslim garantisi</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="check">✓</span>
                <div>
                  <h4>Uzman Ekip</h4>
                  <p>50+ profesyonel çalışan</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-image scale-in">
            <div className="image-box">
              <div className="icon">🏭</div>
              <p>Modern Tesislerimiz</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
