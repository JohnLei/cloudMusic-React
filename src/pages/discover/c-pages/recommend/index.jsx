import React, { memo } from "react";

import HYTopBanner from './c-cpns/top-banner';
import HYHotRecommend from "./c-cpns/hot-recommend";  //热门推荐
import HYNewAlbum from "./c-cpns/new-album";  //新碟上架
import HYUserLogin from "./c-cpns/user-login";
import './style.less'

const HYRecommend = memo(() => {
  return (
    <div>
      <HYTopBanner/>
      <div className="wrap-v2 wrap-back fkATsI">
        <div className="iASsSh-left">
          <HYHotRecommend/>
          <HYNewAlbum/>
        </div>
        <div className="ikvbQx-right">
          <HYUserLogin/>
        </div>
      </div>
    </div>
  )
})

export default HYRecommend