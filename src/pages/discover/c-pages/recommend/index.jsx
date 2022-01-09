import React, { memo } from "react";

import HYTopBanner from './c-cpns/top-banner';
import HYHotRecommend from "./c-cpns/hot-recommend";
import HYUserLogin from "./c-cpns/user-login";
import './style.less'

const HYRecommend = memo(() => {
  return (
    <div>
      <HYTopBanner/>
      <div className="wrap-v2 wrap-back fkATsI">
        <div className="iASsSh-left">
          <HYHotRecommend/>
        </div>
        <div className="ikvbQx-right">
          <HYUserLogin/>
        </div>
      </div>
    </div>
  )
})

export default HYRecommend