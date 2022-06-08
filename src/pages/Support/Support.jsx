import "./support.scss"
import { Link } from "react-router-dom";
const Support = () =>{

return(
<>
    <section id="breadcrumbs" className="breadcrumbs">
    <div className="container">

      <ol>
        <li><Link to="/AnaSayfa">Ana Sayfa</Link></li>
        <li>Destek</li>
      </ol>
      <h2>Destek</h2>

    </div>
  </section>

  <div className="row">
        <div className="col-xl-12 pa-0">
            <div className="faq-search-wrap bg-teal-light-3">
                <div className="container">
                    <h1 className="display-5 text-white mb-20">Size Nasıl Yardımcı Olabiliriz?</h1>
                    <div className="form-group w-100 mb-0">
                        <div className="input-group">
                            <input className="form-control form-control-lg filled-input bg-white" placeholder="Ara" type="text"></input>
                            <div className="input-group-append">
                                <span className="input-group-text"><span className="feather-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
      </div>
      <section className="main-content">
  <div className="container">
    <br></br>
    <br></br>
    <div className="row flex-center">
      <div className="col-sm-10 offset-sm-2">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
              <div className="circle-icon"> <i className="fa fa-question"></i> </div>
              <span>Xena Kurulum?</span> </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body"> Bölge bayimizin dışında sizlerin bireysel olarak yapmak istediğiniz kurulumlarda canlı destek veya uzak bağlantı ile bizlere ulaşabilirsiniz. </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
				<div className="circle-icon"> <i className="fa fa-question"></i> </div>
              <span>Xena Kullanım?</span> </button>

            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body"> Kullanımlarda USB belleğinizin yönetim tarafında şifrelenmiş olması gerekmektedir. Şifrelenmiş USB'leri harici veriler için de kulanabilirsiniz. </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> 
				<div className="circle-icon"> <i className="fa fa-question"></i> </div>
              <span>Xena Yönetim?</span> </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body"> Kullanıcı Adı ve Şifrelerinizi kaybetmeniz durumunda <span> info@beyhanbilgi.com </span> adresine mail atabilirsiniz.  </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>

</> 

)


}

export default Support