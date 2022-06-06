import { Link } from "react-router-dom";
import "./layout.scss";
import { useLocation } from "react-router-dom";

const Layout = () => {
  const { pathname } = useLocation();
  if (pathname === "/Xena") return null;

  return (
    <>
      <section id="topbar" className="d-flex align-items-center">
        <div className="container d-flex justify-content-center justify-content-md-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-phone d-flex align-items-center ms-4">
              <span>
                <a href="tel:08507567457">0 850 756 74 57</a>
              </span>
            </i>
          </div>

          <div className="contact-info d-flex justify-content-end  align-items-center ">
            <i className="bi bi-box-arrow-in-right d-flex align-items-center ms-4">
              <Link to="GirişYap">
                <br></br>Giriş Yap
              </Link>
            </i>
          </div>
        </div>
      </section>
      <header id="header" className="d-flex align-items-center">
        <div className="container d-flex justify-content-between align-items-center ">
          <div className="logoo"></div>

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <Link
                  to="AnaSayfa"
                  className={pathname === "/AnaSayfa" && "active"}
                >
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link
                  to="Hakkimizda"
                  className={pathname === "/Hakkimizda" && "active"}
                >
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link
                  to="Destek"
                  className={pathname === "/Destek" && "active"}
                >
                  Destek
                </Link>
              </li>
              <li>
                <Link to="Xena" className={pathname === "/Xena" && "active"}>
                  Xena
                </Link>
              </li>

              <li>
                <Link to="iletisim" className={pathname === "/iletisim" && "active"}>İletişim</Link>
              </li>
              <li>
                <button style={{ color: "white" }}>
                  <Link to="BayiBasvuru" className={pathname === "/BayiBasvuru" && "active"}>Bayi Başvurusu</Link>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Layout;
