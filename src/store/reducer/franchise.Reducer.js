import { FRANCHISE } from '../store/types'

const franchise = {
    data: {
      errors: null,
      result: null,
      succeeded: false,
    },
    isLoading: false,
  }
  
  export default function (state = franchise, action) {
    switch (action.type) {
      case FRANCHISE: {
        return {
          ...state,
          data: action.payload,
          isLoading: true,
        }
      }
      default:
        return state
    }
  }