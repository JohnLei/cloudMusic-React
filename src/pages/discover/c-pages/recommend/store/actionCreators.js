import * as actionTypes from "./constants";

import {
  getTopBanners,
  getHotRecommends,
  getNewAlbums
} from '@/services/recommend';

// 轮播图
const changeTopBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})
// 热门推荐
const changeHotRecommendAction = (res) => ({
  type:actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommends: res.result
})
//新碟上架
const changeNewAlbumAction = (res) => ({
  type: actionTypes.CHANGE_NEW_ALBUM,
  newAlbums: res.weekData
})

// 发送请求获取轮播图数据
export const getTopBannerAction = () => {
  return (dispatch) => {
    getTopBanners().then(res => {
      dispatch(changeTopBannerAction(res))
    })
  }
}
// 发送请求热门推荐
export const getHotRecommendAction = (limit) => {
  return (dispatch) => {
    getHotRecommends(limit).then(res => {
      dispatch(changeHotRecommendAction(res))
    })
  }
}
// 发送新碟上架请求
export const getNewAlbumAction = (limit) => {
  return (dispatch) => {
    getNewAlbums(limit).then(res => {
      dispatch(changeNewAlbumAction(res))
    })
  }
}
