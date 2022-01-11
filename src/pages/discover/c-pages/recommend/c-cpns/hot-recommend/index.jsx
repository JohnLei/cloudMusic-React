import React, { memo, useEffect } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { getHotRecommendAction } from "../../store/actionCreators";
import { HOT_RECOMMEND_LIMIT } from "@/common/constants";
import HYThemeHeaderRCM from "@/components/theme-header-rcm";
import HYSongsCover from "@/components/songs-cover";
import './style.less'

const HYHotRecommend = memo(() => {
  // redux-hooks
  const { hotRecommends } = useSelector((state) => ({
    hotRecommends: state.getIn(['recommend', 'hotRecommends'])
  }), shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT))
  }, [dispatch])

  return (
    <div className="keQisq">
      <HYThemeHeaderRCM
        title='热门推荐'
        keywords={['华语', '流行', '民谣', '摇滚', '电子']}
      />
      <div className="recommend-list">
        {
          hotRecommends.map((item, index) => {
            return <HYSongsCover key={ item.id } info={ item } />
          })
        }
      </div>
    </div>
  )
})
export default HYHotRecommend
