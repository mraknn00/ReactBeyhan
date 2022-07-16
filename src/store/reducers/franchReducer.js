import { DEALER, DEALER_ERROR } from '../types'

const initialState = {
  data: {
    succeeded: null,
    errors: null,
    result: {
      items: [],
      pageNumber: 1,
      totalPages: 1,
      totalCount: 1,
      hasPreviousPage: false,
      hasNextPage: false
    },
  },
  isLoading: false,
}

export default function (state = initialState, action) {
  //console.log(action);
  switch (action.type) {
    
    case DEALER: {
     // console.log('action.payload');
    //console.log(action.payload);
      return {
        ...state,
        data: action.payload,
        isLoading: true,
      }
    }
    case DEALER_ERROR:{
      return{
      ...state,
      data:action.payload,
      loading: false,
    }
  }
    default: return state
  }
}