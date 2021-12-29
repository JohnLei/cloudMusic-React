import React, { memo, useEffect, useRef, useCallback, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getTopBannerAction } from '../../store/actionCreators'
import { Carousel } from "antd";

const HYTopBanner = memo(() => {
  // state
  const [currentIndex, setCurrentIndex] = useState(0)
  // 关联redux
  const { topBanners } = useSelector((state) => ({
    topBanners: state.getIn(['recommend', 'topBanners'])
  }), shallowEqual)
  // redux-hooks
  const dispatch = useDispatch()
  // console.log(topBanners);
  // 发送网络请求
  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch])
  // 轮播图ref
  const bannerRef = useRef()
  // 轮播图背景
  const bannerChange = (from, to) => {
    setTimeout(() => {
      setCurrentIndex(to);
    }, 0)
  }

  return (
    <div>
      <div className="banner wrap-v2 wrap-back">
        <div className="hyvzuY">
        <Carousel
          effect="fade"
          autoplay
          ref={ bannerRef }
          beforeChange={ bannerChange }
        >
          {
            topBanners.map((i, x) => {
              return (
                <div className="banner-item" key={ i.imageUrl }>
                  <img src={ i.imageUrl } alt={ i.typeTile } className="image"/>
                </div>
              )
            })
          }
        </Carousel>
        </div>
      </div>
    </div>
  )
})

export default HYTopBanner
