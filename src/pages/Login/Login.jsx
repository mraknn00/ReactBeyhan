import "./login.scss"

const Login = () => {

    return (
		<section class="ftco-section">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-6 text-center mb-5">
				</div>
			</div>
			<div class="row justify-content-center">
				<div class="col-md-12 col-lg-10">
					<div class="wrap d-md-flex">
						<div class="text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last">
							<div class="text w-100">
								<h2>Beyhan Yazılıma Hoş Geldiniz</h2>
								<p>Hesanınız yok mu ?</p>
								<a href="~/Home/Franchise" class="btn btn-white btn-outline-white">Bayi Başvuru Formu</a>
							</div>
			      </div>
						<div class="login-wrap p-4 p-lg-5">
			      	<div class="d-flex">
			      		<div class="w-100">
			      			<h3 class="mb-4">Giriş Yap</h3>

							<form action="#" class="signin-form">
			      		<div class="form-group mb-3">
			      			<label class="label" for="name">E-Mail</label>
			      			<input type="email" class="form-control" placeholder="e-mail" required oninvalid="this.setCustomValidity('Lütfen info@beyhanbilgi.com şeklinde giriniz.')" oninput="this.setCustomValidity('')"></input>
			      		</div>
		            <div class="form-group mb-3">
		            	<label class="label" for="password">Şifre</label>
		              <input type="password" class="form-control" placeholder="şifre" required></input>
		            </div>
		            <div class="form-group">
		            	<button type="submit" class="form-control btn btn-primary submit px-3">Giriş Yap</button>
		            </div>
		            <div class="form-group d-md-flex">
		            	<div class="w-50 text-left">
									</div>
									<div class="w-50 text-md-right">
										<a href="#">Şifremi Unuttum</a>
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