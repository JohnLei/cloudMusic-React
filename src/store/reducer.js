import { combineReducers } from "redux-immutable";

import { reducer as loginReducer } from '@/components/theme-login/store'

const cReducer = combineReducers({
  loginState: loginReducer,
})

export default cReducer