import React, { memo, useEffect } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { getHotRecommendAction } from "../../store/actionCreators";
import { HOT_RECOMMEND_LIMIT } from "@/common/constants";
import HYThemeHeaderRCM from "@/components/theme-header-rcm";
import './style.less'

const HYHotRecommend = memo(() => {
  return (
    <div className="keQisq">
      <HYThemeHeaderRCM
        title='热门推荐'
        keywords={['华语', '流行', '民谣', '摇滚', '电子']}
      />
    </div>
  )
})
export default HYHotRecommend
