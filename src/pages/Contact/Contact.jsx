import "./contact.scss"

const Contact =() =>{

    return(
      <>
          <section id="breadcrumbs" className="breadcrumbs">
      <div className="container">

        <ol>
          <li><a href="~/Home/Index">Ana Sayfa</a></li>
          <li>İletişim</li>
        </ol>
        <h2>İletişim</h2>

      </div>
    </section>
        <section id="contact" className="contact">
        <div className="container">
  
          <div className="row">
            <div className="col-lg-6">
              <div className="info-box mb-4">
                <i className="bx bx-map"></i>
                <h3><b>Adres</b></h3>
                <p><b>Erzene, Ege Üniversitesi Kampüsü, Ankara Cd. No:172/67, 35100 Bornova/İzmir</b></p>
              </div>
            </div>
  
            <div className="col-lg-3 col-md-6">
              <div className="info-box  mb-4">
                <i className="bx bx-envelope"></i>
                <h3><b>E-Mail</b></h3>
                <p><b><a href="mailto:info@beyhanbilgi.com" mystyle="color:  black">info@beyhanbilgi.com</a></b></p>
              </div>
            </div>
  
            <div className="col-lg-3 col-md-6">
              <div className="info-box  mb-4">
                <i className="bx bx-phone-call"></i>
                <h3><b>Telefon</b></h3>
               <p><b><a href="tel:08507567457" mystyle="color:  black">0 850 756 745</a></b></p>
              </div>
            </div>
  
          </div>
  
          <div className="row">
          <div className="col-lg-6">
            <iframe class="mb-4 mb-lg-0 ıframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3124.320785060451!2d27.2320297!3d38.45715489999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b97d083563e1c5%3A0x837c41b98086e4f9!2sBeyhan%20Bilgi%20Teknolojileri%20Yaz%C4%B1l%C4%B1m%20Pazarlama%20Ltd.%20%C5%9Eti.!5e0!3m2!1str!2str!4v1653292102604!5m2!1str!2str"></iframe>
          </div>
          
          <div className="col-lg-6">
              <form action="https://formspree.io/f/mvollvnq" method="post">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input type="text" name="name" className="form-control" id="name" placeholder="İsim Ve Soyisim" required oninvalid="this.setCustomValidity('Lütfen Adınızı / Soyadınızı Giriniz')" oninput="this.setCustomValidity('')"></input>
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input type="email" className="form-control" name="email" id="email" placeholder="E-Posta" required oninvalid="this.setCustomValidity('Lütfen Mailinizi Giriniz')" oninput="this.setCustomValidity('')"></input>
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input type="text" className="form-control" name="subject" id="subject" placeholder="Konu" required oninvalid="this.setCustomValidity('Lütfen Konunuzu Giriniz')" oninput="this.setCustomValidity('')"></input>
                </div>
                <div className="form-group mt-3">
                  <textarea className="form-control" name="message" rows="5" placeholder="Mesajınız" required oninvalid="this.setCustomValidity('Lütfen Mesajınızı Giriniz')" oninput="this.setCustomValidity('')"></textarea>
                </div>
                <br />
                <div className="text-center"><button type="submit"  className="bottonn">Gönder</button></div>
              </form>
            </div>
  
            <div className="col-lg-6 ">
         
            </div>
  
            
          </div>
  
        </div>
      </section>
      
      </>
    )


}
export default Contact