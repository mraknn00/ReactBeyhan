import { Link } from "react-router-dom"
import "./login.scss"

const Login = () => {

    return (
		<section className="ftco-section">
		<div className="container">
			<div className="rowa justify-content-center">
				<div className="col-md-6 text-center mb-5">
				</div>
			</div>
			<div className="rowa justify-content-center">
				<div className="col-md-12 col-lg-10">
					<div className="wrap d-md-flex">
						<div className="text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last">
							<div className="text w-100">
								<h2>Beyhan Yazılıma Hoş Geldiniz</h2>
								<p>Hesanınız yok mu ?</p>
								<br></br>
								<Link to="BayiBasvuru"	 className="bayibas" style={{ color: "white" }}>Bayi Başvuru Formu</Link>
							</div>
			      </div>
						<div className="login-wrap p-4 p-lg-5">
			      	<div className="d-flex">
			      		<div className="w-100">
							  <br></br>
			      			<h3 className="mb-4">Giriş Yap</h3>

							<form action="#" className="signin-form">
			      		<div className="form-group mb-3">
			      			<label className="label" for="name">E-Mail</label>
			      			<input type="email" className="form-control" placeholder="e-mail" required oninvalid="this.setCustomValidity('Lütfen info@beyhanbilgi.com şeklinde giriniz.')" oninput="this.setCustomValidity('')"></input>
			      		</div>
		            <div className="form-group mb-3">
		            	<label className="label" for="password">Şifre</label>
		              <input type="password" className="form-control" placeholder="şifre" required></input>
		            </div>
		            <div className="form-group">
		            	<button type="submit" className="form-control btn btn-primary submit px-3">Giriş Yap</button>
		            </div>
		            <div className="form-group d-md-flex">
		            	<div className="w-50 text-left">
									</div>
		            </div>
		          </form>
		        </div>
		      </div>
		 </div>
	</div>
</div>
			</div>
		</div>
	</section>
    )
}
export default Login