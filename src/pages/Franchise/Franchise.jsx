import React from "react";
import { Link } from "react-router-dom";
import "./franchise.scss"
import { Input } from 'reactstrap'
import { dealers } from '../../store/actions/franchActions'
import { useForm, Controller } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
 export default function  Franchise  () {

    const dispatch = useDispatch()
    const dealersData = useSelector((state) => state.dealers)
    const { control, handleSubmit,  formState: { errors },  } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            birthDate: '2022-07-16T11:04:02.022Z',
            city: '',
            taxOffice: '',
            taxNumber: '',
            companyTitle: '',
            hasInternetSales: 'true',
        },
      })
      const onSubmit = (dealersData) => {
        dispatch(dealers(dealersData))
      }
      
    return(

        <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
        <div className="wrapper wrapper--w680">
            <div className="card card-4">
                <div className="card-body">
                    <h2 className="franchiselogo"><Link to="AnaSayfa"></Link></h2>
                    <form method="POST" onSubmit={handleSubmit(onSubmit)}>
                        <div className="row row-space">
                            <div className="col-2">
                                <div className="input-group">
                                <label className="label" style={{inlineSize:"inherit"}}>Adınız :</label>
                                    <Controller
                                    name="firstName"
                                     control={control}
                                     rules={{
                                       required: true,
                                     }}
                                      render={({ field }) => (
                                     <Input
                                       style={{borderRadius:"10px",height:"50px"}}
                                       invalid={errors.firstName}
                                      type="firstName"
                                      name="firstName"
                                     autoComplete="off"
                                  {...field}
                                   />
                                    )}
                                    />
                                    {errors.firstName?.type === 'required' && 'Boş Geçilemez'}
                                </div>
                            </div>
                            <br></br>
                            <div className="col-2">
                                <div className="input-group">
                                <label className="label" style={{inlineSize:"inherit"}}>Soyadınız :</label>
                                    <Controller
                                    name="lastName"
                                     control={control}
                                     rules={{
                                       required: true,
                                     }}
                                      render={({ field }) => (
                                     <Input
                                     style={{borderRadius:"10px",height:"50px"}}
                                       invalid={errors.lastName}
                                      type="lastName"
                                      name="lastName"
                                     autoComplete="off"
                                  {...field}
                                   />
                                    )}
                                    />
                                    {errors.lastName?.type === 'required' && 'Boş Geçilemez'}
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <div className="row row-space">
                            <div className="col-2">
                                <div className="input-group">
                                <label className="label" style={{inlineSize:"inherit"}}>Telefon Numaranız :</label>
                                    <Controller
                                    name="phoneNumber"
                                     control={control}
                                     rules={{
                                       required: true,
                                     }}
                                      render={({ field }) => (
                                     <Input
                                     style={{borderRadius:"10px",height:"50px"}}
                                       invalid={errors.phoneNumber}
                                      type="phoneNumber"
                                      name="phoneNumber"
                                     autoComplete="off"
                                  {...field}
                                   />
                                    )}
                                    />
                                    {errors.phoneNumber?.type === 'required' && 'Boş Geçilemez'}

                                </div>
                            </div>
                            <br></br>
                            <div className="col-2">
                                <div className="input-group">
                                <label className="label" style={{inlineSize:"inherit"}}>E-Posta Adresiniz :</label>
                                    <Controller
                                    name="email"
                                     control={control}
                                     rules={{
                                       required: true,
                                     }}
                                      render={({ field }) => (
                                     <Input
                                     style={{borderRadius:"10px",height:"50px"}}
                                       invalid={errors.email}
                                      type="email"
                                      name="email"
                                     autoComplete="off"
                                  {...field}
                                   />
                                    )}
                                    />
                                    {errors.email?.type === 'required' && 'Boş Geçilemez'}

                                    
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <div className="row row-space">
                            <div className="col-2">
                                <div className="input-group">
                                <label className="label" style={{inlineSize:"inherit"}}>Doğum Tarihiniz :</label>
                                    <Controller
                                    name="birthDate"
                                     control={control}
                                     rules={{
                                       required: true,
                                     }}
                                      render={({ field }) => (
                                     <Input
                                     style={{borderRadius:"10px",height:"50px"}}
                                       invalid={errors.birthDate}
                                      type="birthDate"
                                      name="birthDate"
                                     autoComplete="off"
                                  {...field}
                                   />
                                    )}
                                    />
                                    {errors.birthDate?.type === 'required' && 'Boş Geçilemez'}


                                </div>
                            </div>
                            <br></br>
                            <div className="col-2">
                                <div className="input-group">
                                <label className="label" style={{inlineSize:"inherit"}}>Bayilik Talep Edilen Şehir:</label>
                                     <Controller
                                    name="city"
                                     control={control}
                                     rules={{
                                       required: true,
                                     }}
                                      render={({ field }) => (
                                     <Input
                                     style={{borderRadius:"10px",height:"50px"}}
                                       invalid={errors.city}
                                      type="city"
                                      name="city"
                                     autoComplete="off"
                                  {...field}
                                   />
                                    )}
                                    />
                                    {errors.city?.type === 'required' && 'Boş Geçilemez'}
                                     <div className="rs-select2 js-select-simple select--no-search">
                                <div className="select-dropdown"></div>
                            </div>
                                    
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <div className="row row-space">
                            <div className="col-2">
                                <div className="input-group">
                                    <label className="label" style={{inlineSize:"inherit"}}>Vergi Dairesi :</label>
                                    <Controller
                                    name="taxOffice"
                                     control={control}
                                     rules={{
                                       required: true,
                                     }}
                                      render={({ field }) => (
                                     <Input
                                     style={{borderRadius:"10px",height:"50px"}}
                                       invalid={errors.taxOffice}
                                      type="taxOffice"
                                      name="taxOffice"
                                     autoComplete="off"
                                  {...field}
                                   />
                                    )}
                                    />
                                    {errors.taxOffice?.type === 'required' && 'Boş Geçilemez'}
                                        </div>
                            </div>
                            <br></br>
                            <div className="col-2">
                                <div className="input-group">
                                 <label className="label" style={{inlineSize:"inherit"}}>Vergi Numarası :</label>
                                    <Controller
                                    name="taxNumber"
                                     control={control}
                                     rules={{
                                       required: true,
                                     }}
                                      render={({ field }) => (
                                     <Input
                                     style={{borderRadius:"10px",height:"50px"}}
                                       invalid={errors.taxNumber}
                                      type="taxNumber"
                                      name="taxNumber"
                                     autoComplete="off"
                                  {...field}
                                   />
                                    )}
                                    />
                                    {errors.taxNumber?.type === 'required' && 'Boş Geçilemez'}
                                    </div>
                            </div>
                            <br></br>
                            <div className="row row-space" style={{alignItems:"center"}}>
                                <div className="col-2">
                                <div className="input-group">
                                <label className="label" style={{inlineSize:"inherit"}}>Şirket Ünvanı :</label>
                                    <Controller
                                    name="companyTitle"
                                     control={control}
                                     rules={{
                                       required: true,
                                     }}
                                      render={({ field }) => (
                                     <Input
                                     style={{borderRadius:"10px",height:"50px"}}
                                       invalid={errors.companyTitle}
                                      type="companyTitle"
                                      name="companyTitle"
                                     autoComplete="off"
                                  {...field}
                                   />
                                    )}
                                    />
                                    {errors.companyTitle?.type === 'required' && 'Boş Geçilemez'}
                                        </div>
                            </div>
                            <br></br>
                               <div className="col-2">
                                  <div className="input-group">
                                    <label className="label" >İnternet Satışı Yapıyor Musunuz?</label>
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
                        <br></br>
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
