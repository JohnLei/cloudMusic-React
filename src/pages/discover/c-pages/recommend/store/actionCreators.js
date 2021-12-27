import * as actionTypes from "./constants";

import {
  getTopBanners
} from '@/services/recommend';

// 轮播图
const changeTopBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})

// 发送请求获取轮播图数据
export const getTopBannerAction = () => {
  return (dispatch) => {
    getTopBanners().then(res => {
      dispatch(changeTopBannerAction(res))
    })
  }
}
