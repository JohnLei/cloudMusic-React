import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeIsVisible } from '@/components/theme-login/store'
import { getSizeImage } from "@/utils/format-utils.js";
import './style.less'


export default memo(function HYUserLogin() {
  //redux-hooks
  const dispatch = useDispatch();
  const { isLogin, profile } = useSelector((state) => ({
    isLogin: state.getIn(['loginState', 'isLogin']),
    profile: state.getIn(['loginState', 'profile'])
  }));

  const handleLogin = () => {
    if (!isLogin) {
      dispatch(changeIsVisible(true))
    }
  }
  const picUrl = profile && profile.avatarUrl;

  return (
    <div className="bSEjVX">
      {
        isLogin ? (
          <div className="sc-dJjYzT">
          <div className="content sprite_02">
          <div className="header">
                <img src={getSizeImage(picUrl, 80)} alt="" className="image" />
                <div className="info_right">
                  <div className="name">{profile.nickname}</div>
                  <div className="level">LV:{profile.authStatus}</div>
                  <div className="register">签到</div>
                </div>
              </div>
              <div className="bottom">
                <div className="info">
                  <div className="text">{profile.authStatus}</div>
                  <div className="text">动态</div>
                </div>
                <div className="info">
                  <div className="text">{profile.follows}</div>
                  <div className="text">关注</div>
                </div>
                <div className="info">
                  <div className="text">{profile.followeds}</div>
                  <div className="text">粉丝</div>
                </div>
              </div>
          </div>
        </div>
        ) : (
          <div className="grWyJx">
            <div className="content sprite_02">
            <div className="context">
              登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
            </div>
            <div className="loginBtn">
              <button className="sprite_02" onClick={(e) => handleLogin()}>
                用户登录
              </button>
            </div>
          </div>
          </div>
        )
      }
    </div>
  )
})