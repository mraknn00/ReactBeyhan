import { Link } from "react-router-dom";
import "./franchise.scss"

const Franchise =  () =>{

    return(

        <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
        <div className="wrapper wrapper--w680">
            <div className="card card-4">
                <div className="card-body">
                    <h2 className="franchiselogo"><Link to="AnaSayfa"></Link></h2>
                    <form method="POST">
                        <div className="row row-space">
                            <div className="col-2">
                                <div className="input-group">
                                    <label className="label">Adınız</label>
                                    <input className="input--style-4" type="text" name="ad" required oninvalid="this.setCustomValidity('Lütfen Adınızı Giriniz')" ></input>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="input-group">
                                    <label className="label">Soyadınız</label>
                                    <input className="input--style-4" type="text" name="soyad" required oninvalid="this.setCustomValidity('Lütfen Soyadınızı Giriniz')"></input>
                                </div>
                            </div>
                        </div>
                        <div className="row row-space">
                            <div className="col-2">
                                <div className="input-group">
                                    <label className="label">Telefon Numaranız</label>
                                    <div className="input-group-icon">
                                        <input className="input--style-4 js-datepicker" type="tel" name="telefon" required oninvalid="this.setCustomValidity('Lütfen Telefon Numaranızı Giriniz')"oninput="this.setCustomValidity('')"></input>
                                        <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                                    </div>

                                </div>
                            </div>
                            <div className="col-2">
                                <div className="input-group">
                                    <label className="label">E-Posta Adresiniz</label>
                                    <div className="input-group-icon">
                                        <input className="input--style-4 js-datepicker" type="email" name="email" placeholder="info@beyhanbilgi.com" required oninvalid="this.setCustomValidity('Lütfen (info@beyhanyazili.com) Formatında Girin)"oninput="this.setCustomValidity('')"></input>
                                        <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="row row-space">
                            <div className="col-2">
                                <div className="input-group">
                                    <label className="label">Doğum Tarihiniz</label>
                                    <div className="input-group-icon">
                                        <input className="input--style-4 js-datepicker" type="date" name="dogumtarihi"  required oninvalid="this.setCustomValidity('Lütfen Doğum Tarihinizi Giriniz')"oninput="this.setCustomValidity('')"></input>
                                        <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                                    </div>

                                </div>
                            </div>
                            <div className="col-2">
                                <div className="input-group">
                                     <label className="label">Bayilik Talep Edilen Şehir</label>
                                     <input className="input--style-4" type="text" name="vergino"></input>
                                     <div className="rs-select2 js-select-simple select--no-search">
                                <div className="select-dropdown"></div>
                            </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="row row-space">
                            <div className="col-2">
                                <div className="input-group">
                                    <label className="label">Vergi Dairesi</label>
                                    <input className="input--style-4" type="text" name="vergidairesi"   required  oninvalid="this.setCustomValidity('Lütfen Bu Alanı Doldurunuz')"oninput="this.setCustomValidity('')"></input>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="input-group">
                                    <label className="label">Vergi Numarası</label>
                                    <input className="input--style-4" type="text" name="vergino" maxlength="10" required oninvalid="this.setCustomValidity('Lütfen Bu Alanı Doldurunuz')"oninput="this.setCustomValidity('')" ></input>
                                </div>
                            </div>
                            <div className="row row-space">
                                <div className="col-2">
                                <div className="input-group">
                                    <label className="label">Şirket Ünvanı</label>
                                    <input className="input--style-4" type="text" name="sirketunvanı"  required oninvalid="this.setCustomValidity('Lütfen Bu Alanı Doldurunuz')"oninput="this.setCustomValidity('')"></input>
                                </div>
                            </div>
                               <div className="col-2">
                                  <div className="input-group">
                                    <label className="label">İnternet Satışı Yapıyor Musunuz?</label>
                                    <div className="p-t-10">
                                        <label className="radio-container m-r-45">Evet
                                            <input type="radio" checked="checked" name="gender"></input>
                                            <span className="checkmark"></span>
                                        </label>
                                        <label className="radio-container">Hayır
                                            <input type="radio" name="gender"></input>
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                  </div>
                                </div>
                            </div>
                        </div>

                        <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"  required oninvalid="this.setCustomValidity('Lütfen Aydınlatma Metnini İşaretleyiniz.')"oninput="this.setCustomValidity('')"></input>
                        <label className="form-check-label" for="flexCheckChecked"><b style={{ color: "blue" }}> Aydınlatma Metnini </b><span>Okudum</span></label>
                        </div>
                                <br/>
                        <div className="p-t-15">
                      
                         &nbsp;&nbsp;&nbsp;  <button className="btn btn--radius-2 btn--blue" type="submit" style={{ color: "white" }}>Başvuruyu Gönder</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </div>
    )


} 
export default Franchise