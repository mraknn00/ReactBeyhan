import { FRANCHISE,FRANCHISE_ERROR } from '../types'
import api from '../../api/api.js'



export const franchise = (firstname,lastnumber,phonenumber,email,birthdate,city,taxoffice,taxnumber,companytitle,hasinternetsales) => async (dispatch) => {
    try {
        let config = {
        headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
        console.log(config)
      const res = await api.post(`Dealership`,{firstName:firstname,lastNumber:lastnumber,phoneNumber:phonenumber,email:email,birthDate:birthdate,
        city:city,taxOffice:taxoffice,taxNumber:taxnumber,companyTitle:companytitle,hasInternetSales:hasinternetsales},config)
        const { result } = res.data
        console.log(result)
      dispatch({
        type: FRANCHISE,
        payload: res.data,
      })
    } catch (e) {
      dispatch({
        type: FRANCHISE_ERROR,
        payload: e.response.data,
      })
    }
  }
  