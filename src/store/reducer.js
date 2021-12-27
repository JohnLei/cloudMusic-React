import { combineReducers } from "redux-immutable";

import { reducer as recommendReducer } from "../pages/discover/c-pages/recommend/store";
import { reducer as loginReducer } from '@/components/theme-login/store'

const cReducer = combineReducers({
  recommend: recommendReducer,
  loginState: loginReducer
})

export default cReducer