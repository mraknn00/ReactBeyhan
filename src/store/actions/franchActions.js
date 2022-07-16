import { DEALER, DEALER_ERROR } from '../types.js'
import api from '../../api/api'

export const dealers = (data) => async (dispatch) => {
    try {
      const res = await api.post(`Dealership`, { ...data })
      console.log('res.data')
      console.log(res.data)
      const { result } = res.data
  
      dispatch({
        type: DEALER,
        payload: res.data,
      })
    } catch (e) {
      dispatch({
        type: DEALER_ERROR,
        payload: e.response.data,
      })
    }
  }