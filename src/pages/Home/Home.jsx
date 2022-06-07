import "./home.scss"
const Home  = () => {

    return(

        <><section id="hero">
            <div className="hero-container">
                <div id="heroCarousel" data-bs-interval="15000" className="carousel slide carousel-fade" data-bs-ride="carousel">

                    <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>

                    <div className="carousel-inner" role="listbox">



                        <div className="carousel-item active herofotoiki">
                            <div className="carousel-container">
                                <video playsInline="playsInline" autoPlay="autoPlay" muted="muted" loop="loop">

                                </video>
                                <div className="carousel-content">
                                </div>
                            </div>
                        </div>


                        <div className="carousel-item herofotobir">
                            <div className="carousel-container">
                                <div className="carousel-content">
                                </div>
                            </div>
                        </div>



                        <div className="carousel-item herofotoiki">
                            <div className="carousel-container">
                                <div className="carousel-content">
                                </div>
                            </div>
                        </div>


                        <div className="carousel-item herofotouc">
                            <div className="carousel-container">
                            </div>
                        </div>

                    </div>


                </div>

                <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
                </a>

                <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
                </a>

            </div>

        </section><section id="featured" className="featured">
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
            </section> </>

    )

}
export default Home