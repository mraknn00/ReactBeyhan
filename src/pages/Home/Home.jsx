import "./home.scss"

import { Carousel } from 'react-bootstrap';
const Home  = () => {
    return(

        <>
        
        <Carousel>  
             <Carousel.Item>
             <div className=" d-block w-100 herofotoiki"></div>
                 <Carousel.Caption>
                     </Carousel.Caption>
                             </Carousel.Item>
                             <Carousel.Item>
                             <div className=" d-block w-100 herofotouc"></div>
                                                      <Carousel.Caption>
                                                    </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                             <div className=" d-block w-100 herofotobir"></div>
                                                      <Carousel.Caption>
                                                    </Carousel.Caption>
                                    </Carousel.Item>
                            <Carousel.Item>
                            <div className=" d-block w-100 herofotodort"></div>
                    <Carousel.Caption>
              </Carousel.Caption>
         </Carousel.Item>
    </Carousel>


        
        
        
        
        <section id="featured" className="featured">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-4">
                            <div className="icon-box">
                               <p className="smartt"></p>
                                
                                    <p><b>"Dünya'nın en büyük şirketi ile ortak çalışıyoruz."</b></p>
                                    <p><b>"Kendi Pazarının Dünya Lideri Olan Smart Tecnologies'in Bayiliğini yapıyoruz"</b></p>
                                </div>
                        </div>
                        <div className="col-lg-4 mt-4 mt-lg-0">
                            <div className="icon-box">
                            <p className="ege"></p>
                                 
                                    <p><b>Türkiye'nin En İyi Üniversitesi ve Teknoparkı'ndan Destek Alıyoruz.</b></p>
                                </div>
                        </div>
                        <div className="col-lg-4 mt-4 mt-lg-0">
                            <div className="icon-box">
                            <p className="beyhan"></p>
                                    <p><b>Yazılım Mühendislerimiz, Bilgisayar Mühendisimiz ve 25 Yılı aşkın deneyimiz ile sizinleyiz.</b></p>
                                </div>
                        </div>
                    </div>

                </div>
            </section> 
        
      </>
    )

}
export default Home