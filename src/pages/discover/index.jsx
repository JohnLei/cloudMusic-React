import React, { memo } from "react";
import { renderRoutes } from "react-router-config";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import { discoverMenu } from "@/common/local-data"; //菜单
import { loginInfo } from "@/config/token.js";  //token
import { setLoginInfo, getLoginInfo } from "@/utils/secret-key";
import { getLoginProfileInfo } from "@/components/theme-login/store/actionCreator";
import './style.less'


const HYDiscover = (props) => {
  const { route } = props

  // redux-hook
  const dispatch = useDispatch();
  // 初始化登录收集登录信息
  const initLogin = () => {
    if (localStorage.getItem('loginInfo') !== null) {
      const { username, password } = getLoginInfo('loginInfo')
      username && password ? dispatch(getLoginProfileInfo(username, password)) : console.log('当前登录的默认信息')
    } else {
      setLoginInfo("loginInfo", loginInfo);
    }
  }
  initLogin();
  return (
    <div className="sc-bdvvtL gRNHcA">
      <div className="top">
        <div className="dRRioY wrap-v1">
          {discoverMenu.map((i, x) => {
            return (
              <div className="item" key={ i.title }>
                <NavLink to={ i.link }>{ i.title }</NavLink>
              </div>
            )
          })}
        </div>
      </div>
      {renderRoutes(route.routes)}
    </div>
  )
}

export default memo(HYDiscover)