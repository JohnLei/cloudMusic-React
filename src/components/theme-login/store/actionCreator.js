import * as actionTypes from './actionTypes'
// import { gotoPhoneLogin } from '@/services/login'
// import { getUserDetailInfo, getUserRecordInfo } from '@/services/user';
// import { loginInfo } from '@/config/token';
// import md5 from 'js-md5';
// import { message } from 'antd';
// import { getLoginInfo, setLoginInfo } from '@/utils/secret-key';

// 更改登录框显示
export const changeIsVisible = (visibleState) => ({
  type: actionTypes.CHANGE_IS_VISIBLE_STATE,
  isVisible: visibleState
})

// 更改登录用户信息
export const changeUserProfile = (profileInfo) => ({
  type: actionTypes.CHANGE_PROFILE_INFO,
  profile: profileInfo
})

//更改登录状态
export const changeUserLoginState = (loginState) => ({
  type: actionTypes.CHANGE_USER_LOGIN_STATE,
  isLogin: loginState
})