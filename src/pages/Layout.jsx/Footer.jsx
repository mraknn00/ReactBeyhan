import { Link } from "react-router-dom"
import "./footer.scss"
import { useLocation } from "react-router-dom"

const Footer =() =>{

const {pathname } = useLocation();
if (pathname === "/Xena") 
return null;

    return(

        <footer id="footer">
        <div className="footer-top">
            <div className="container">
                <div className="row">

                    <div className="col-lg-3 col-md-6 footer-links">
                        <h4>Bağlantılar</h4>
                        <ul>
                            <li><i className="bx bx-chevron-right"></i><Link to="AnaSayfa">Ana Sayfa</Link></li>
                            <li><i className="bx bx-chevron-right"></i><Link to="Hakkımızda">Hakkımızda</Link></li>
                            <li><i className="bx bx-chevron-right"></i><Link to="Destek">Destek</Link></li>
                            <li><i className="bx bx-chevron-right"></i> <Link to="Xena">Xena</Link></li>
                            <li><i className="bx bx-chevron-right"></i><Link to="iletisim">İletişim</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 footer-links">
                        <h4>Hizmetlerimiz</h4>
                        <ul>
                            <li><i className="bx bx-chevron-right"></i> <Link to="Xena">Xena</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 footer-contact">
                        <h4>İletişim</h4>
                        <p>Erzene Mah. , Ege Üniversitesi Kampüsü Egeteknopark, Ankara Cd. No:172/67, 35100 Bornova/İzmir</p>
                        <p>Telefon:&nbsp;&nbsp;<a href="tel:08507567457" className="footcolor">0 850 756 745</a></p>
                        <p>E-Mail : &nbsp;&nbsp;<a href="mailto:info@beyhanbilgi.com" className="footcolor">info@beyhanbilgi.com</a></p>
      

                    </div>

                    <div className="col-lg-3 col-md-6 footer-info">
                        <h3>Beyhan Hakkında</h3>
                        <p>
                            Gücümüzü aldığımız Türk ekonomisine güç katmayı hedef alırız.
                            Müşterilerimiz için değer yaratmak, beklentilerine kalite ve istikrarla karşılık vermek ilk önceliğimizdir.
                        </p>
                        <div className="social-links mt-3">
                            <a href="https://twitter.com/beyhanyazilim?t=Z-oKlR0QCrxokEDvGf_TkQ&s=08" className="twitter"><i className="bx bxl-twitter"></i></a>
                            <a href="https://www.instagram.com/beyhanyazilim/" className="instagram"><i className="bx bxl-instagram"></i></a>
                            <a href="https://www.linkedin.com/company/beyhanyaz%C4%B1l%C4%B1m/about/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div className="container">
            <div className="copyright">
                &copy; Copyright <strong><span >BeyhanYazılım</span></strong>. All Rights Reserved
            </div>
        </div>
    </footer>

    )

}
export default Footer